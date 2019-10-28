import React, { FunctionComponent } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { isAuthenticatedSelector } from '../authSelectors';

interface Props extends RouteProps {
  isAuthenticated: boolean;
}

const PrivateRoute: FunctionComponent<Props> = ({
  isAuthenticated,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const UnconnectedPrivateRoute = PrivateRoute;

export { UnconnectedPrivateRoute };
export default connect(isAuthenticatedSelector)(PrivateRoute);
