import React, { FunctionComponent, ReactElement } from 'react';
import classnames from 'classnames/bind';
import { FormikErrors } from 'formik';

import styles from './input.module.scss';

type InputElementAttributes = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface InputProps extends InputElementAttributes {
  type: string;
  className?: string;
  label: string | ReactElement;
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validationError?: string | FormikErrors<any>;
}
const Input: FunctionComponent<InputProps> = ({
  type = 'text',
  className,
  label,
  id,
  validationError,
  ...rest
}) => {
  const cx = classnames.bind(styles);

  return (
    <div
      className={cx({
        className: true,
        inputError: !!validationError,
        inputWrapper: true,
        [`${type}Input`]: true,
      })}
    >
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...rest} />
      <small>{validationError}</small>
    </div>
  );
};

export default Input;
