import React from 'react';
import { Field, FieldAttributes } from 'formik';

import { validateRequire } from '../../validationUtils';

interface Props {
  required: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EnhancedInputField: React.FC<Props & FieldAttributes<any>> = ({
  required,
  value,
  validate,
  ...rest
}) => {
  return (
    <Field
      validate={required && !value ? validateRequire : validate}
      required={required}
      {...rest}
    />
  );
};

export default EnhancedInputField;
