import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CheckboxWithLabel } from '../../../../Components/CheckboxWithLabel';
import { Label } from '../Layout';

const Checkbox = ({
  label,
  labelFZ,
  labelStyle,
  value,
  ...rest,
}) => (
  <CheckboxWithLabel
    {...rest}
    label={<Label fz={labelFZ} style={labelStyle}>{label}</Label>}
    onColor="#2384CC"
    value={value !== undefined ? value : true}
    showCheckbox
    icoStyles={{
      position: 'absolute',
      width: '96%',
      height: '96%',
      left: 3,
      top: -1,
    }}
  />
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  labelFZ: PropTypes.number,
  labelStyle: PropTypes.object,
}

Checkbox.defaultProps = {
  iconWrapStyles: {
    width: 18,
    height: 18,
  },
}

const mapState = (state, p) => {
  const inState = state.appForms.application[p.form][p.model.substr(1)];
  const checked = p.value !== undefined ? inState === p.value : inState;

  return {
    checked,
  }
}

export default connect(mapState)(Checkbox);
