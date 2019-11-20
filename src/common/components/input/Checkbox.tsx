import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { FieldInputProps } from 'formik';

import styles from './input.module.scss';

type CheckboxProps = {
  className?: string;
  label: string;
  required?: boolean;
  name: string;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Checkbox: FunctionComponent<CheckboxProps & FieldInputProps<any>> = ({
  className,
  label,
  required,
  name,
  ...rest
}) => {
  return (
    <div
      className={classnames(
        styles.inputWrapper,
        styles.checkboxInput,
        className
      )}
    >
      <div className={styles.inputTypeWrapper}>
        <input type="checkbox" id={name} {...rest} />
        {label && (
          <label htmlFor={name}>{required ? `${label}*` : label}</label>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
