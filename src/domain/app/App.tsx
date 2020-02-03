import { Route, Switch, RouteComponentProps, Redirect } from 'react-router';
import React from 'react';
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import Home from '../home/Home';
import NotFound from './notFound/NotFound';
import NotEligible from '../registration/notEligible/NotEligible';
import PrivateRoute from '../auth/route/PrivateRoute';
import RegistrationForm from '../registration/form/RegistrationForm';
import LoadingSpinner from '../../common/components/spinner/LoadingSpinner';
import { StoreState } from './types/AppTypes';
import { isLoadingUserSelector } from '../auth/state/AuthenticationSelectors';
import { authenticateWithBackend } from '../auth/authenticate';
import { fetchTokenError } from '../auth/state/BackendAuthenticationActions';
import Welcome from '../registration/welcome/Welcome';
import Profile from '../profile/Profile';
import AccessibilityStatement from '../accessibilityStatement/AccessibilityStatement';
import { userHasProfileSelector } from '../registration/state/RegistrationSelectors';
import TermsOfService from '../termsOfService/TermsOfService';

type AppProps = RouteComponentProps<{ locale: string }> & {
  isLoadingUser: boolean;
  userHasProfile: boolean;
  fetchApiToken: (accessToken: string) => void;
  fetchApiTokenError: (errors: object) => void;
};

class App extends React.Component<AppProps> {
  public render() {
    const {
      isLoadingUser,
      userHasProfile,
      match: {
        params: { locale },
      },
    } = this.props;

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
  }
}

const mapStateToProps = (state: StoreState) => ({
  isLoadingUser: isLoadingUserSelector(state),
  userHasProfile: userHasProfileSelector(state),
});

const actions = {
  fetchApiToken: authenticateWithBackend,
  fetchApiTokenError: fetchTokenError,
};

export const UnconnectedApp = App;
export default connect(mapStateToProps, actions)(App);
