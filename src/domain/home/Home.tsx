import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './home.module.scss';
import HomePreliminaryForm from './form/HomePreliminaryForm';
import PageWrapper from '../app/layout/PageWrapper';

const Home: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper title={t('appName')}>
      <div className={styles.home}>
        <div className={styles.hero}>
          <div className={styles.heroContainer}>
            <h1>{t('homePage.hero.heading')}</h1>
            <p className={styles.description}>
              {t('homePage.hero.descriptionText')}
            </p>
            <HomePreliminaryForm />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
