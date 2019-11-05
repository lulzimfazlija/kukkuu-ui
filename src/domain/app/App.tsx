import { Route, Switch, RouteComponentProps, Redirect } from 'react-router';
import React from 'react';
import { connect } from 'react-redux';
import { loadUser } from 'redux-oidc';

import Home from '../home/Home';
import NotFound from '../notFound/NotFound';
import {
  changeLanguage,
  getCurrentLanguage,
} from '../../common/translation/utils';
import { SUPPORT_LANGUAGES }./types/AppTypesn/translation/TranslationConstants';
import PrivateRoute from '../auth/route/PrivateRoute';
import RegistrationForm from '../registration/form/RegistrationForm';
import LoadingSpinner from '../../common/components/spinner/LoadingSpinner';
import { StoreState } from './types/stateTypes';
import { isLoadingUserSelector } from '../auth/state/authSelectors';
import { store } from './state/AppStore';
import userManager from '../auth/userManager';
import { startFetchingToken } from '../auth/state/ApiAuthenticationActions';

class App extends React.Component<
  RouteComponentProps<{ locale: SUPPORT_LANGUAGES }> & {
    isLoadingUser: boolean;
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

    loadUser(store, userManager);
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
        <Switch>
          <Redirect exact path={`/${locale}/`} to={`/${locale}/home`} />
          <Route exact path={`/${locale}/home`} component={Home} />
          <PrivateRoute exact path={`/${locale}/registration/form`}>
            <RegistrationForm />
          </PrivateRoute>
          <Route component={NotFound} />
        </Switch>
      </LoadingSpinner>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  isLoadingUser: isLoadingUserSelector(state),
});

const actions = {
  startFetchingApiToken: startFetchingToken,
};

export const UnconnectedApp = App;
export default connect(
  mapStateToProps,
  actions
)(App);
