import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import styles from './container.module.scss';
const Container: FunctionComponent<{
  children?: any
  className?: string
}> = ({
  children,
  className,
}) => {
  const isHome = (children && children.props.className === 'home_home__kC8RU') ? true : false;
  return (
      <div>
        { isHome ? (
            <div className={classnames(styles.container, className, styles.ishome)}>{children}</div>
        ) : (
            <div className={classnames(styles.container, className)}>{children}</div>
        )}
      </div>
  )
};

export default Container;
