import React, { FunctionComponent } from 'react';

import styles from './loadingSpinner.module.scss';

const LoadingSpinner: FunctionComponent<{ isLoading: boolean }> = ({
  isLoading,
  children,
}) => {
  return (
    <div className={styles.spinnerWrapper}>
      {isLoading ? <div className={styles.spinner} /> : children}
    </div>
  );
};

export default LoadingSpinner;
