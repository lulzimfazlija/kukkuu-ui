import React from 'react';
import { FieldProps } from 'formik';

import Input from '../../../input/Input';
import styles from './inputField.module.scss';

interface InputField extends FieldProps {
  id: string;
  label: string;
  type: string;
}

const InputField: React.ComponentType<InputField> = ({
  field,
  form: { touched, errors },
  ...rest
}) => {
  const validationError = touched[field.name] && errors[field.name];

  return (
    <div className={styles.formInputField}>
      <Input {...field} {...rest} validationError={validationError} />
    </div>
  );
};

export default InputField;
