import React, { FunctionComponent, ReactNode } from 'react';
import joinClassNames from 'classnames';

import styles from './button.module.scss';

const Button: FunctionComponent<{
  className?: string;
  children: ReactNode;
}> = ({ children, className, ...rest }) => {
  return (
    <div className={joinClassNames(styles.buttonWrapper, className)}>
      <button type="button" {...rest}>
        {children}
      </button>
    </div>
  );
};

export default Button;
