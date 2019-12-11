import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

import styles from './hero.module.scss';
import Button from '../../../common/components/button/Button';
import { loginTunnistamo } from '../../auth/authenticate';

type HomeHero = {
  userHasProfile: boolean;
};

const HomeHero: React.FunctionComponent<HomeHero> = ({ userHasProfile }) => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroContainer}>
        <div className={styles.hero}>
          <h1>{t('appName')}</h1>
          <p> {t('homePage.hero.descriptionText')}</p>
          <div className={styles.buttonGroup}>
            {!userHasProfile && (
              <Button className={styles.registerButton}>
                {t('homePage.hero.buttonText')}
              </Button>
            )}
            <Button
              className={styles.authenticateButton}
              onClick={() =>
                userHasProfile ? history.push('/profile') : loginTunnistamo()
              }
            >
              {t(
                userHasProfile
                  ? 'comon.profile.goToProfile.buttonText'
                  : 'authentication.login.text'
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
