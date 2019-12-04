import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import styles from './home.module.scss';
import HomePreliminaryForm from './form/HomePreliminaryForm';
import Container from '../app/layout/Container';

const Home: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <Helmet>
        <title>{t('appName')}</title>
      </Helmet>
      <Container>
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
      </Container>
    </HelmetProvider>
  );
};

export default Home;
