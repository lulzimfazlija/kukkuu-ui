import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import { Redirect, Switch, Route } from 'react-router-dom';

import { profileQuery as ProfileQueryType } from '../api/generatedTypes/profileQuery';
import { saveProfile } from './state/ProfileActions';
import profileQuery from './queries/ProfileQuery';
import LoadingSpinner from '../../common/components/spinner/LoadingSpinner';
import { normalizeProfileData } from './ProfileUtils';
import ProfileChildDetail from './children/child/ProfileChildDetail';
import { getCurrentLanguage } from '../../common/translation/TranslationUtils';
import ProfileChildrenList from './children/ProfileChildrenList';

const Profile: FunctionComponent = () => {
  const { loading, error, data } = useQuery<ProfileQueryType>(profileQuery);
  const { i18n } = useTranslation();
  const locale = getCurrentLanguage(i18n);

  const dispatch = useDispatch();
  let profile;

  if (loading) return <LoadingSpinner isLoading={true} />;
  if (error || !data || !data.myProfile) {
    return <Redirect to="/home" />;
  } else {
    profile = normalizeProfileData(data);
    if (profile) dispatch(saveProfile(profile));
  }

  return (
    <Switch>
      <Route
        component={ProfileChildDetail}
        exact
        path={`/${locale}/profile/child/:childId`}
      />
      <Route
        component={ProfileChildrenList}
        exact
        path={`/${locale}/profile/children`}
      />

      <Redirect to={`/profile/children`} />
    </Switch>
  );
};

export default Profile;
