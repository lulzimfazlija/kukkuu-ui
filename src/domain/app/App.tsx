import { Route, Switch, RouteComponentProps, Redirect } from 'react-router';
import React, { FunctionComponent } from 'react';

import Home from '../home/Home';
import NotFound from '../notFound/NotFound';
import { changeLanguage } from '../../common/translation/utils';
import { SUPPORT_LANGUAGES } from '../../common/translation/constants';

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

      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
