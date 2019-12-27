import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import styles from './container.module.scss';

const stringStartsWith = (targetString: string, searchString: string) => {
  return targetString.substring(0, searchString.length) === searchString;
};

const Container: FunctionComponent<{
  children?: any;
  className?: string;
}> = ({ children, className }) => {
  const isHome = (
      children.props.className &&
      stringStartsWith(children.props.className, 'home_home_'));
  return (
    <div>
      {isHome ? (
        <div className={classnames(styles.container, className, styles.gridLayoutOverride)}>{children}</div>
      ) : (
        <div className={classnames(styles.container, className)}>{children}</div>
      )}
    </div>
  );
};

export default Container;
