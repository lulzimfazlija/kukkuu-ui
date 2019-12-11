import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import * as Sentry from '@sentry/browser';

import tadaImage from '../../../assets/icons/svg/tada.svg';
import Button from '../../../common/components/button/Button';
import Icon from '../../../common/components/icon/Icon';
import styles from './welcome.module.scss';
import homeFormStyles from '../../home/form/homePreliminaryForm.module.scss';
import PageWrapper from '../../app/layout/PageWrapper';
import { profileQuery as ProfileQueryType } from '../../api/generatedTypes/profileQuery';
import profileQuery from '../../profile/queries/ProfileQuery';
import { normalizeProfileData } from '../../profile/ProfileUtils';
import { saveProfile } from '../../profile/state/ProfileActions';
import LoadingSpinner from '../../../common/components/spinner/LoadingSpinner';

const Welcome: FunctionComponent = () => {
  const { loading, error, data } = useQuery<ProfileQueryType>(profileQuery);
  const { t } = useTranslation();
  const history = useHistory();

  const dispatch = useDispatch();
  let profile;

  if (loading) return <LoadingSpinner isLoading={true} />;
  if (error || !data || !data.myProfile) {
    Sentry.captureException(error);
    return <div>{t('api.errorMessage')}</div>;
  } else {
    profile = normalizeProfileData(data);
    if (profile) {
      dispatch(saveProfile(profile));
    }
  }

  return (
    <PageWrapper title={'registration.welcome.hero.header'}>
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
    </PageWrapper>
  );
};

export default Welcome;
