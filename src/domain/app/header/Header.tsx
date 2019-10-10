import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';

type Props = {};

function Header(props: Props) {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <span className={styles.logo}></span>
      <h1 className={styles.appName}>{t('appName')}</h1>
    </header>
  );
}

export default Header;
