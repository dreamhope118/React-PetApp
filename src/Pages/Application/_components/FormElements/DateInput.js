import React from 'react';
import StringMask from 'string-mask';
import { TextInput } from '../../../../Components/FormElements';

const MASK = '00/00/0000';
const formatDate = (s) => {
  if (s === undefined) return '';

  const sub = s.replace(/\//g, '');
  const r = StringMask.apply(sub, MASK);

  return r;
}

const DateInput = props => (
  <TextInput
    {...props}
    label="Date of Birth"
    placeholder="DD/MM/YYYY"
    validators={{
      longEnough: v => v && v.length === 10,
    }}
    parser={formatDate}
    required
  />
);

export default DateInput;