import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import { Redirect, Switch, Route } from 'react-router-dom';
import * as Sentry from '@sentry/browser';

import { profileQuery as ProfileQueryType } from '../api/generatedTypes/profileQuery';
import { saveProfile, clearProfile } from './state/ProfileActions';
import profileQuery from './queries/ProfileQuery';
import LoadingSpinner from '../../common/components/spinner/LoadingSpinner';
import { getCurrentLanguage } from '../../common/translation/TranslationUtils';
import ProfileChildrenList from './children/ProfileChildrenList';
import PageWrapper from '../app/layout/PageWrapper';
import styles from './profile.module.scss';
import Icon from '../../common/components/icon/Icon';
import phoneIcon from '../../assets/icons/svg/mobile.svg';
import emailIcon from '../../assets/icons/svg/envelope.svg';
import editIcon from '../../assets/icons/svg/gear.svg';
import ProfileChildDetail from './children/child/ProfileChildDetail';

// Export for testing purposes
export const ProfileRoutes: FunctionComponent = () => {
  const { i18n } = useTranslation();
  const currentLocale = getCurrentLanguage(i18n);
  return (
    <Switch>
      <Route
        exact
        component={ProfileChildDetail}
        path={`/${currentLocale}/profile/child/:childId`}
      />
      <Route component={Profile} exact path={`/${currentLocale}/profile`} />
    </Switch>
  );
};

const Profile: FunctionComponent = () => {
  const { loading, error, data } = useQuery<ProfileQueryType>(profileQuery);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();

  if (loading) return <LoadingSpinner isLoading={true} />;
  if (error) {
    dispatch(clearProfile());
    Sentry.captureException(error);
    return (
      <PageWrapper>
        <div className={styles.profile}>{t('api.errorMessage')}</div>
      </PageWrapper>
    );
  }

  if (data?.myProfile) {
    dispatch(saveProfile(data.myProfile));
  } else {
    // User has logged in, but not created a profile, send them to front page for registration.
    return <Redirect to="/" />;
  }

  return (
    <PageWrapper className={styles.wrapper} title={'profile.heading'}>
      <div className={styles.profileWrapper} role="main">
        <div className={styles.profile}>
          <div className={styles.profileContent}>
            <div className={styles.heading}>
              <h1>
                {data.myProfile.firstName} {data.myProfile.lastName}
              </h1>
              <button
                aria-label={t('profile.edit.label')}
                className={styles.editProfile}
                onClick={() => setIsOpen(true)}
              >
                <span>{t('profile.edit.label')}</span>
                <Icon
                  src={editIcon}
                  alt={t('profile.edit.label')}
                  className={styles.editProfileIcon}
                />
              </button>
              {isOpen && <div></div>}
            </div>
            <div className={styles.guardianInfo}>
              <div className={styles.guardianInfoRow}>
                <Icon src={emailIcon} />
                <span>{data.myProfile.email}</span>
              </div>
              <div className={styles.guardianInfoRow}>
                <Icon
                  src={phoneIcon}
                  alt={t('profile.child.detail.phoneNumber')}
                />
                <span>{data.myProfile.phoneNumber}</span>
              </div>
            </div>

            <ProfileChildrenList />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Profile;
