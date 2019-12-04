import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';
import { Redirect } from 'react-router';

import { profileQuery as ProfileQueryType } from '../api/generatedTypes/profileQuery';
import { saveProfile } from './state/ProfileActions';
import profileQuery from './queries/ProfileQuery';
import LoadingSpinner from '../../common/components/spinner/LoadingSpinner';
import { normalizeProfileData } from './ProfileUtils';
import styles from './profile.module.scss';
import Container from '../app/layout/Container';
import ProfileChildrenList from './children/ProfileChildrenList';

const Profile: FunctionComponent = () => {
  const { loading, error, data } = useQuery<ProfileQueryType>(profileQuery);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  let profile;

  if (loading) return <LoadingSpinner isLoading={true} />;
  if (error || !get(data, 'guardians.edges[0]') || !data) {
    return <Redirect to="/home" />;
  } else {
    profile = normalizeProfileData(data);
    if (profile) dispatch(saveProfile(profile));
  }
  return (
    <Container className={styles.grayBackground}>
      <div className={styles.profileWrapper}>
        <div className={styles.profile}>
          <h1>{t('profile.heading')}</h1>
          <ProfileChildrenList children={profile ? profile.children : []} />
        </div>
      </div>
    </Container>
  );
};

export default Profile;
