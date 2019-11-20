import React from 'react';
import { FieldProps, getIn } from 'formik';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import Input from '../../../input/Input';
import styles from './inputField.module.scss';
import Checkbox from '../../../input/Checkbox';

interface InputField extends FieldProps {
  id: string;
  label: string;
  type: string;
}

const InputField: React.ComponentType<InputField> = ({
  field,
  form: { errors, touched },
  type,
  ...rest
}) => {
  const error = getIn(errors, field.name);
  const touch = getIn(touched, field.name);
  const inputError = touch && error ? error : null;

  const { t } = useTranslation();
  return (
    <div
      className={classnames(styles.inputField, {
        [styles.inputError]: !!inputError,
      })}
    >
      {type === 'checkbox' ? (
        <Checkbox {...field} {...rest} />
      ) : (
        <Input {...field} {...rest} type={type} />
      )}
      <div className={styles.inputErrorMessage}>{t(inputError)}</div>
    </div>
  );
};

export default InputField;
