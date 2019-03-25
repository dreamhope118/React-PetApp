import validator from 'validator';

export const isEmail = v => validator.isEmail('' + v);
export const passwordsMatch = ({ password, confirmPassword }) =>
  password === confirmPassword;
export const requiredSelect = v => v && v.value !== undefined;
export const requiredTextfield = v => v && v.length > 0;