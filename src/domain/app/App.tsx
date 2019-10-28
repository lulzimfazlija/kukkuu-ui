import { Route, Switch, RouteComponentProps, Redirect } from 'react-router';
import React, { FunctionComponent } from 'react';

import Home from '../home/Home';
import NotFound from '../notFound/NotFound';
import { changeLanguage } from '../../common/translation/utils';
import { SUPPORT_LANGUAGES } from '../../common/translation/constants';
import PrivateRoute from '../auth/route/PrivateRoute';
import RegistrationForm from '../registration/form/RegistrationForm';

const App: FunctionComponent<
  RouteComponentProps<{ locale: SUPPORT_LANGUAGES }>
> = ({
  match: {
    params: { locale },
  },
}) => {
  changeLanguage(locale);

  return (
    <Switch>
      <Redirect exact path={`/${locale}/`} to={`/${locale}/home`} />
      <Route exact path={`/${locale}/home`} component={Home} />
      <PrivateRoute component={RegistrationForm} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
