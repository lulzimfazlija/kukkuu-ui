import React from 'react';
import { RouteProps } from 'react-router';

import authenticate from '../../oidc/authenticate';
import Layout from '../app/layout/Layout';
import { formatMessage } from '../../common/translation/utils';
import styles from './home.module.scss';
import HomePreliminaryForm from './form/HomePreliminaryForm';

type Props = RouteProps & {};

function Home(props: Props) {
  return (
    <Layout>
      <div className={styles.home}>
        <div className={styles.hero}>
          <div className={styles.heroContainer}>
            <h1>{formatMessage('homePage.hero.heading')}</h1>
            <p className={styles.description}>
              {formatMessage('homePage.hero.descriptionText')}
            </p>
            <HomePreliminaryForm />
          </div>
        </div>
      </div>
      <button onClick={authenticate}>Authenticate using tunnistamo</button>
    </Layout>
  );
}

export default Home;
