import React from 'react';

import styles from './header.module.scss';
import { formatMessage } from '../../../common/translation/utils';

type Props = {};

function Header(props: Props) {
  return (
    <header className={styles.header}>
      <span className={styles.logo}></span>
      <h1 className={styles.appName}>{formatMessage('appName')}</h1>
    </header>
  );
}

export default Header;
