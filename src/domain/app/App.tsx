import { Route, Switch, RouteComponentProps, Redirect } from 'react-router';
import React from 'react';
import { connect } from 'react-redux';
import { loadUser } from 'redux-oidc';
import { I18nextProvider } from 'react-i18next';

import Home from '../home/Home';
import NotFound from '../notFound/NotFound';
import {
  changeLanguage,
  getCurrentLanguage,
} from '../../common/translation/utils';
import PrivateRoute from '../auth/route/PrivateRoute';
import RegistrationForm from '../registration/form/RegistrationForm';
import LoadingSpinner from '../../common/components/spinner/LoadingSpinner';
import { StoreState } from './types/AppTypes';
import { isLoadingUserSelector } from '../auth/state/AuthenticationSelectors';
import { store } from './state/AppStore';
import userManager from '../auth/userManager';
import { authenticateWithBackend } from '../auth/authenticate';
import i18n from '../../common/translation/i18n/i18nInit';
import { fetchTokenError } from '../auth/state/BackendAuthenticationActions';

class App extends React.Component<
  RouteComponentProps<{ locale: string }> & {
    isLoadingUser: boolean;
    fetchApiToken: (accessToken: string) => void;
    fetchApiTokenError: (errors: object) => void;
  }
> {
  componentDidMount() {
    const {
      match: {
        params: { locale },
      },
    } = this.props;

    const currentLocale = getCurrentLanguage();

    if (currentLocale !== locale) {
      changeLanguage(locale);
    }

    loadUser(store, userManager)
      .then(user => {
        if (user) {
          this.props.fetchApiToken(user.access_token || '');
        }
        this.props.fetchApiTokenError({ message: 'No user found' });
      })
      .catch(error => this.props.fetchApiTokenError(error));
  }
  public render() {
    const {
      isLoadingUser,
      match: {
        params: { locale },
      },
    } = this.props;

    return (
      <LoadingSpinner isLoading={isLoadingUser}>
        <I18nextProvider i18n={i18n}>
          <Switch>
            <Redirect exact path={`/${locale}/`} to={`/${locale}/home`} />
            <Route exact path={`/${locale}/home`} component={Home} />
            <PrivateRoute exact path={`/${locale}/registration/form`}>
              <RegistrationForm />
            </PrivateRoute>
            <Route component={NotFound} />
          </Switch>
        </I18nextProvider>
      </LoadingSpinner>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  isLoadingUser: isLoadingUserSelector(state),
});

const actions = {
  fetchApiToken: authenticateWithBackend,
  fetchApiTokenError: fetchTokenError,
};

export const UnconnectedApp = App;
export default connect(
  mapStateToProps,
  actions
)(App);
