import { Route, Switch, RouteComponentProps, Redirect } from 'react-router';
import React, { FunctionComponent } from 'react';

import Home from '../home/Home';
import NotFound from '../notFound/NotFound';
import { changeLanguage } from '../../common/translation/utils';

const App: FunctionComponent<RouteComponentProps<{ locale: string }>> = ({
  match: {
    params: { locale },
  },
}) => {
  changeLanguage(locale);

  return (
    <Switch>
      <Redirect exact path={`/${locale}/`} to={`/${locale}/home`} />
      <Route exact path={`/${locale}/home`} component={Home} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
