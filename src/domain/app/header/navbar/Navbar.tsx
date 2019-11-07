import * as React from 'react';

import styles from './navbar.module.scss';
import { formatMessage } from '../../../../common/translation/utils';
import LanguageDropdown from './languageDropdown/LanguageDropdown';

const Navbar: React.FunctionComponent = props => {
  return (
    <div className={styles.navbarTop}>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}></div>
        <h3 className={styles.appName}>{formatMessage('appName')}</h3>
      </div>
      <LanguageDropdown />
    </div>
  );
};

export default Navbar;
