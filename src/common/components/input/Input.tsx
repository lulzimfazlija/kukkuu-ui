import React, { FunctionComponent, ReactElement } from 'react';
import joinClassNames from 'classnames';

import styles from './input.module.scss';

const Input: FunctionComponent<{
  type?: string;
  className?: string;
  label: string | ReactElement;
  id: string;
}> = ({ type = 'text', className, label, id, ...rest }) => {
  return (
    <div
      className={joinClassNames(
        styles.inputWrapper,
        className,
        styles[`${type}Input`]
      )}
    >
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...rest} />
    </div>
  );
};

export default Input;
