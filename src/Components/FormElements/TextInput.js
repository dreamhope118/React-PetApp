import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Control } from 'react-redux-form';

const BLUE = '#2384CC';

const INPUT_TYPES = {
  props: {
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    withInfo: PropTypes.bool,
    type: PropTypes.oneOf([
      'text', 'password', 'number'
    ]),
    required: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
  },
  defaults: {
    placeholder: '',
    withInfo: false,
    type: 'text',
    required: false,
    disabled: false
  },
};

const StyledInput = styled.div`
  width: 100%;
`;
const StyledTextarea = styled(StyledInput)`
  min-height: 84px;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: ${({ disabled }) => disabled ? '#a2a2a2' : BLUE};
  display: inline-block;
  position: relative;
  background-color: #fff;
  left: 10px;
  padding: 0 3px;
  max-width: 95%;
`;
const StyledInputField = styled.input`
  display: block;
  border: 2px solid ${BLUE};
  border-radius: 5px;
  width: 100%;
  line-height: 42px;
  color: #6a6a6a;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.36px;
  padding: 0 14px;
  margin-top: -9px;
  height: 45px;

  &:focus {
    border-color: ${BLUE};
    outline: none;
  }

  ::placeholder {
    color: #A2A2A2;
  }

  :disabled {
    border-color: #a2a2a2
  }
`;
const TextareaField = styled(StyledInputField)`
  height: auto;
  min-height: 84px;
  resize: vertical;
  line-height: 120%;
  padding: 10px 15px;
`;
const InfoIcon = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 2px 0 4px;
  top: 1px;
  width: 13px;
  height: 13px;
  background-color: ${BLUE};
  border-radius: 50%;

  ::after {
    content: 'i';
    position: absolute;
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 100%;
    font-size: 12px;
  }
`;

const Label = ({ id, label, required, withInfo, ...rest }) => (
  <StyledLabel {...rest} htmlFor={id}>
    { required ? `${label} *` : label }
    { withInfo && <InfoIcon /> }
  </StyledLabel>
);

const makeInputProps = p => ({
  ...p,
  name: p.id,
  debounce: 100,
});
const makeLabelProps = p => ({
  disabled: p.disabled,
  withInfo: p.withInfo,
  id: p.id,
  label: p.label,
  required: p.required,
});

export const Textarea = props => (
  <StyledTextarea>
    <Label {...makeLabelProps(props)} />
    <Control.textarea
      {...makeInputProps(props)}
      component={TextareaField}
      as="textarea"
    />
  </StyledTextarea>
);

Textarea.propTypes = INPUT_TYPES.props;
Textarea.defaultProps = INPUT_TYPES.defaults;

export const TextInput = props => (
  <StyledInput>
    <Label {...makeLabelProps(props)} />
    <Control.text
      {...makeInputProps(props)}
      component={StyledInputField}
    />
  </StyledInput>
);

TextInput.propTypes = INPUT_TYPES.props;
TextInput.defaultProps = INPUT_TYPES.defaults;