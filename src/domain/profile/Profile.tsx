import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import { profileQuery as ProfileQueryType } from '../api/generatedTypes/profileQuery';
import NoUpcomingEvents from './components/noUpcomingEvents/NoUpcomingEvents';
import { saveProfile } from './state/ProfileActions';
import profileQuery from './queries/ProfileQuery';
import LoadingSpinner from '../../common/components/spinner/LoadingSpinner';
import { normalizeProfileData } from './ProfileUtils';
import styles from './profile.module.scss';

const Profile: FunctionComponent = () => {
  const { loading, error, data } = useQuery<ProfileQueryType>(profileQuery);
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  let profile;

  if (loading)
    return (
      <div>
        <LoadingSpinner isLoading={true} />
      </div>
    );
  if (error || !get(data, 'guardians.edges[0]') || !data) {
    history.push('/home');
  } else {
    profile = normalizeProfileData(data);
    if (profile) dispatch(saveProfile(profile));
  }
  return (
    <div>
      <h1>{t('profile.heading')}</h1>
      <div className={styles.childInfo}>
        {profile && profile.children.map(child => <p>{child.firstName}</p>)}
      </div>

      <NoUpcomingEvents />
    </div>
  );
};

export default Profile;
