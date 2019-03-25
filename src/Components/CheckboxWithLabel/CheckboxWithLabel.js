import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Control, actions } from 'react-redux-form';
import icons from './icons';

const StyledCheckboxWithLabel = styled.label`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: ${({ multiline }) => multiline ? 'flex-start' : 'center'};
`;

const StyledInput = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
  margin: 0;
  position: absolute;
`;
const CheckboxIconWrap = styled.div`
  margin-right: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const onToggle = multiple => (model, value) => (dispatch) => {
  const a = multiple ? actions.toggle : actions.change;

  dispatch(a(model, value));
};

const CheckboxWithLabel = ({
  label,
  showCheckbox,
  iconWrapStyles,
  icoStyles,
  onColor,
  multiline,
  multiple,
  ...inputProps,
}) => {
  const { id, value, checked, defaultChecked } = inputProps;
  const ch = defaultChecked || checked;
  const i = `${id}_${value}`;
  const Input = multiple ? Control.checkbox : Control.radio;

  return (
    <StyledCheckboxWithLabel htmlFor={i} multiline={multiline}>
      <Input
        {...inputProps}
        id={i}
        component={StyledInput}
        changeAction={onToggle(multiple)}
      />
      { showCheckbox && (
        <CheckboxIconWrap style={iconWrapStyles}>
          { ch ? <icons.CheckboxkWithCheckmark icoStyles={icoStyles} fill={onColor} /> : <icons.Checkbox /> }
        </CheckboxIconWrap>
      )}
      { label }
    </StyledCheckboxWithLabel>
  );
};

CheckboxWithLabel.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  id: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  showCheckbox: PropTypes.bool.isRequired,
  iconWrapStyles: PropTypes.object,
  onColor: PropTypes.string,
  multiline: PropTypes.bool,
  multiple: PropTypes.bool,
};

CheckboxWithLabel.defaultProps = {
  iconWrapStyles: null,
  onColor: '#fff',
  multiline: false,
  multiple: true,
  showCheckbox: true,
};

export default CheckboxWithLabel;
