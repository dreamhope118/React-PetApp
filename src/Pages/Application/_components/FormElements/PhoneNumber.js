import React from 'react';
import { TextInput } from '../../../../Components/FormElements';

const PhoneNumber = props => {
  return (
    <TextInput
      {...props}
      label="Phone Number"
      placeholder="(      ) _____–_______"
      maxLength="11"
      type="number"
      required
    />
  );
};

export default PhoneNumber;