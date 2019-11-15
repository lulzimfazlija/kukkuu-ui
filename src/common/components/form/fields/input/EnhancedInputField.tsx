import React from 'react';
import { Field, FieldAttributes } from 'formik';

import { validateRequire } from '../../validationUtils';

interface Props {
  required: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EnhancedInputField: React.FC<Props & FieldAttributes<any>> = ({
  required,
  validate,
  ...rest
}) => {
  let customValidate = validate;

  if (required) {
    customValidate = validateRequire || validate;
  }
  return <Field validate={customValidate} required={required} {...rest} />;
};

export default EnhancedInputField;
