import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';
import { ApolloError } from 'apollo-boost';

import { profileQuery as ProfileQueryType } from '../api/generatedTypes/profileQuery';
import { saveProfile } from './state/ProfileActions';
import profileQuery from './queries/ProfileQuery';
import LoadingSpinner from '../../common/components/spinner/LoadingSpinner';
import { normalizeProfileData } from './ProfileUtils';
import styles from './profile.module.scss';
import ProfileChildrenList from './children/ProfileChildrenList';
import PageWrapper from '../app/layout/PageWrapper';
import { resetFormValues } from '../registration/state/RegistrationActions';

const Profile: FunctionComponent = () => {
  const { loading, error, data } = useQuery<ProfileQueryType>(profileQuery);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  let profile;

  if (loading) return <LoadingSpinner isLoading={true} />;
  if (error || !get(data, 'guardians.edges[0]') || !data) {
    // console.error(error);
    if (error instanceof ApolloError) {
      if (error.graphQLErrors.length > 0) console.error(error.graphQLErrors);
      if (error.extraInfo) console.error(error.extraInfo);
    }
    return (
      <div className={styles.profileWrapper}>
        <div className={styles.profile}>Error. Please try again later.</div>
      </div>
    );
  } else {
    profile = normalizeProfileData(data);
    if (profile) {
      dispatch(saveProfile(profile));
      dispatch(resetFormValues());
    }
  }
  return (
    <PageWrapper className={styles.grayBackground} title={'profile.heading'}>
      <div className={styles.profileWrapper}>
        <div className={styles.profile}>
          <h1>{t('profile.heading')}</h1>
          <ProfileChildrenList children={profile ? profile.children : []} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Profile;
