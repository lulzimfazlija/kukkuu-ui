import React, { FunctionComponent } from 'react';

import styles from './home.module.scss';
import HomePreliminaryForm from './form/HomePreliminaryForm';
import PageWrapper from '../app/layout/PageWrapper';
import HomeHero from './hero/HomeHero';
import HomeInstructions from './instructions/HomeInstructions';

const Home: FunctionComponent = () => {
  return (
    <PageWrapper>
      <div className={styles.home}>
        <HomeHero userHasProfile={false} />
        <HomeInstructions />
        <HomePreliminaryForm />
      </div>
    </PageWrapper>
  );
};

export default Home;
