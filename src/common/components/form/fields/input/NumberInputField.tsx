import React, { KeyboardEvent } from 'react';
import { FieldProps, getIn } from 'formik';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import Input from '../../../input/Input';
import styles from './inputField.module.scss';

interface NumberInputField extends FieldProps {
  id: string;
  label: string;
  maxLength: number;
}

const NumberInputField: React.ComponentType<NumberInputField> = ({
  field,
  form: { errors, touched, handleChange },
  maxLength,
  ...rest
}) => {
  const error = getIn(errors, field.name);
  const touch = getIn(touched, field.name);
  const inputError = touch && error ? error : null;

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (field.value.toString().length >= maxLength) {
      e.preventDefault();
    }
  };
  const { t } = useTranslation();
  return (
    <div
      className={classnames(styles.inputField, {
        [styles.inputError]: !!inputError,
      })}
    >
      <Input type="number" {...field} onKeyPress={onKeyPress} {...rest} />
      <div className={styles.inputErrorMessage}>{t(inputError)}</div>
    </div>
  );
};

export default NumberInputField;
