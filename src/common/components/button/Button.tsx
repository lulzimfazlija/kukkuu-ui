import React, { FunctionComponent, ReactNode } from 'react';
import joinClassNames from 'classnames';

import styles from './button.module.scss';

type ReactButton = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends ReactButton {
  className?: string;
  children: ReactNode;
}
const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={joinClassNames(styles.buttonWrapper, className)}>
      <button type="button" {...rest}>
        {children}
      </button>
    </div>
  );
};

export default Button;
