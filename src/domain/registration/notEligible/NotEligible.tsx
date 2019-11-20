import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './notEligible.module.scss';

const NotEligible: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1>{t('homePage.hero.heading')}</h1>
          <p className={styles.description}>
            {t('homePage.hero.descriptionText')}
          </p>
          <p className={styles.notEligible}>
            {t('registration.notEligible.text')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotEligible;
