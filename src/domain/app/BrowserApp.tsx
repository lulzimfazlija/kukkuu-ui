import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';
import { Provider } from 'react-redux';

import App from './App';
import { SUPPORT_LANGUAGES } from '../../common/translation/constants';
import store from './state/AppStore';

const localeParam = `:locale(${SUPPORT_LANGUAGES.EN}|${SUPPORT_LANGUAGES.FI}|${SUPPORT_LANGUAGES.SV})`;

// Export for testing purpose
export const appRoutes = (
  <Switch>
    <Redirect exact path="/" to="/fi/home" />
    <Route path={`/${localeParam}/*`} component={App} />
    <Route
      render={props => <Redirect to={`/fi${props.location.pathname}`} />}
    />
  </Switch>
);
const BrowserApp: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>{appRoutes}</BrowserRouter>
    </Provider>
  );
};

export default BrowserApp;
