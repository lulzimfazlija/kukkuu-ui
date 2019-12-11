import React, { FunctionComponent } from 'react';

import styles from './home.module.scss';
import HomePreliminaryForm from './form/HomePreliminaryForm';
import PageWrapper from '../app/layout/PageWrapper';
import HomeHero from './hero/HomeHero';

const Home: FunctionComponent = () => {
  return (
    <PageWrapper>
      <div className={styles.home}>
        <HomeHero userHasProfile={false} />

        <HomePreliminaryForm />
      </div>
    </PageWrapper>
  );
};

export default Home;
