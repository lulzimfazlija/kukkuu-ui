import * as React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './navbar.module.scss';
import LanguageDropdown from './languageDropdown/LanguageDropdown';

const Navbar: React.FunctionComponent = props => {
  const { t } = useTranslation();

  return (
    <div className={styles.navbarTop}>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}></div>
        <h3 className={styles.appName}>{t('appName')}</h3>
      </div>
      <LanguageDropdown />
    </div>
  );
};

export default Navbar;
