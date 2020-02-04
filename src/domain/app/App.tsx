import { Route, Switch, Redirect, useParams } from 'react-router';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import Home from '../home/Home';
import NotFound from './notFound/NotFound';
import NotEligible from '../registration/notEligible/NotEligible';
import PrivateRoute from '../auth/route/PrivateRoute';
import RegistrationForm from '../registration/form/RegistrationForm';
import LoadingSpinner from '../../common/components/spinner/LoadingSpinner';
import {
  isLoadingUserSelector,
  apiTokenSelector,
  userSelector,
} from '../auth/state/AuthenticationSelectors';
import Welcome from '../registration/welcome/Welcome';
import Profile from '../profile/Profile';
import AccessibilityStatement from '../accessibilityStatement/AccessibilityStatement';
import { userHasProfileSelector } from '../registration/state/RegistrationSelectors';
import TermsOfService from '../termsOfService/TermsOfService';
import { authenticateWithBackend } from '../auth/authenticate';

const App: React.FunctionComponent = props => {
  const isLoadingUser = useSelector(isLoadingUserSelector);
  const { locale } = useParams<{ locale: string }>();
  const userHasProfile = useSelector(userHasProfileSelector);
  const apiToken = useSelector(apiTokenSelector);
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  useEffect(() => {
    if (!apiToken && user?.access_token) {
      dispatch(authenticateWithBackend(user.access_token));
    }
  }, [apiToken, dispatch, user]);

  return (
    <LoadingSpinner isLoading={isLoadingUser}>
      <Switch>
        <Redirect exact path={`/${locale}/`} to={`/${locale}/home`} />
        <Route exact path={`/${locale}/home`} component={Home} />
        <Route
          exact
          path={`/${locale}/registration/not-eligible`}
          component={NotEligible}
        />
        <Route
          exact
          path={`/${locale}/accessibility`}
          component={AccessibilityStatement}
        />
        <Route exact path={`/${locale}/terms`} component={TermsOfService} />
        {!userHasProfile && (
          <PrivateRoute exact path={`/${locale}/registration/form`}>
            <RegistrationForm />
          </PrivateRoute>
        )}
        <PrivateRoute exact path={`/${locale}/registration/success`}>
          <Welcome />
        </PrivateRoute>

        <PrivateRoute path={`/${locale}/profile`}>
          <Profile />
        </PrivateRoute>

        {userHasProfile && <Redirect to={`/${locale}/profile`} />}

        <Route component={NotFound} />
      </Switch>
    </LoadingSpinner>
  );
};

export default App;
