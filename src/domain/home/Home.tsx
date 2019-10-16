import React from 'react';
import { RouteProps } from 'react-router';

import Layout from '../app/layout/Layout';
import { formatMessage } from '../../common/translation/utils';
import Input from '../../common/components/input/Input';
import Button from '../../common/components/button/Button';
import styles from './home.module.scss';

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
            <div className="socialSecurityNumberField">
              <Input
                label={formatMessage(
                  'homePage.hero.socialSecurityNumberField.input.label'
                )}
                id="socialSecurityNumberInput"
              />
              <Button className={styles.submitButton}>
                {formatMessage(
                  'homePage.hero.socialSecurityNumberField.buttonText'
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
