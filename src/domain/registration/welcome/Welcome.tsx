import React, { FunctionComponent } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import tadaImage from '../../../assets/icons/svg/tada.svg';
import Button from '../../../common/components/button/Button';
import Icon from '../../../common/components/icon/Icon';
import styles from './welcome.module.scss';
import homeFormStyles from '../../home/form/homePreliminaryForm.module.scss';
import Container from '../../app/layout/Container';

const Welcome: FunctionComponent = () => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {t('registration.welcome.hero.header')} - {t('appName')}
        </title>
      </Helmet>
      <Container>
        <div className={styles.welcome}>
          <h1>{t('registration.welcome.hero.header')}</h1>
          <Icon src={tadaImage} className={styles.tada} alt="Tada!" />
          <Button
            onClick={() => history.push('/profile')}
            className={homeFormStyles.submitButton}
          >
            {t('common.profile.goToProfile.buttonText')}
          </Button>
        </div>
      </Container>
    </HelmetProvider>
  );
};

export default Welcome;
