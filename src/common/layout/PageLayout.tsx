import React, { ReactNode } from 'react';

import Header from '../../domain/app/header/Header';
import styles from './pageLayout.module.scss';

type Props = {
  children: ReactNode;
};

function PageLayout(props: Props) {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageHeader}>
        <Header />
      </div>

      <div className={styles.pageBody}>
        <div className={styles.container}>{props.children}</div>
      </div>

      <div className={styles.pageFooter}></div>
    </div>
  );
}

export default PageLayout;
