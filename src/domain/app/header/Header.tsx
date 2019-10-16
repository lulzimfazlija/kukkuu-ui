import React from 'react';

import styles from './header.module.scss';
import { formatMessage } from '../../../common/translation/utils';
import Container from '../layout/Container';

type Props = {};

function Header(props: Props) {
  return (
    <header className={styles.headerWrapper}>
      <Container>
        <div className={styles.navbarTop}>
          <div className={styles.logo}></div>
          <h3 className={styles.appName}>{formatMessage('appName')}</h3>
        </div>
      </Container>
    </header>
  );
}

export default Header;
