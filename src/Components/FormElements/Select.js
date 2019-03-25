import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Control } from 'react-redux-form';

const StyledSelectWrap = styled.div`
  width: 100%;
`;
const StyledSelect = styled(Select)`
  width: 100%;
`;
const Header = styled.p`
  margin: 0 0 5px;
  color: #A2A2A2;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: -0.24px;
`;

const customStyles = {
  menu: (p) => ({
    ...p,
    marginTop: 0,
    borderRadius: '0 0 5px 5px',
    borderColor: '#e3e3e3',
    overflow: 'hidden',
  }),
  menuList: (p) => ({
    ...p,
    padding: 0,
  }),
  option: (p, s) => ({
    ...p,
    font: '600 14px "Open Sans", Arial, sans-serif',
    padding: '10px 25px',
    color: s.isFocused ? '#fff' : '#a2a2a2',
    backgroundColor: s.isFocused ? '#2384CC' : 'transparent',
  }),
  placeholder: (p, s) => ({
    ...p,
    color: s.isDisabled ? '#a2a2a2' : '#2384CC',
    font: '600 14px "Open Sans", Arial, sans-serif',
    fontSize: 14,
    letterSpacing: -0.28,
    margin: 0,
  }),
  singleValue: (p, s) => ({
    ...p,
    color: s.isDisabled ? '#a2a2a2' : '#2384CC',
    font: '600 14px "Open Sans", Arial, sans-serif',
    fontSize: 14,
    letterSpacing: -0.28,
    margin: 0,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (p, s) => ({
    ...p,
    color: s.isDisabled ? '#a2a2a2' : '#2384CC',
    paddingLeft:0,
  }),
  valueContainer: p => ({
    ...p,
    padding: '0 15px',
  }),
  control: (p, s) => ({
    ...p,
    minHeight: 45,
    borderWidth: 2,
    backgroundColor: '#fff',
    borderColor: s.isDisabled ? '#a2a2a2' : '#2384CC',
  }),
}

const appendAsterisk = (s, r) => s && r ? `${s} *` : s;


const SelectInput = ({ header, required, placeholder, ...rest }) => (
  <StyledSelectWrap>
    { header && <Header>{ appendAsterisk(header, required) }</Header>}
    <Control
      {...rest}
      placeholder={appendAsterisk(placeholder, required)}
      component={StyledSelect}
      styles={customStyles}
      mapProps={{
        isDisabled: p => p.disabled
      }}
      validateOn="change"
      isSearchable={false}
    />
  </StyledSelectWrap>
);


SelectInput.propTypes = {
  required: PropTypes.bool,
  header: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  placeholder: PropTypes.string,
};

export default SelectInput;