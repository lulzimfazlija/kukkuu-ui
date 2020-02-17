import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Profile from '../Profile';
import ProfileChildDetail from '../children/child/ProfileChildDetail';
import { getCurrentLanguage } from '../../../common/translation/TranslationUtils';

const ProfileRoute: FunctionComponent = () => {
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
export default ProfileRoute;
