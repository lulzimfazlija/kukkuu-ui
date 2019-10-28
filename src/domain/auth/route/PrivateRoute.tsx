import React, { FunctionComponent } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { isAuthenticatedSelector } from '../authSelectors';
import { StoreState } from '../../app/types/stateTypes';

interface AuthProps {
  isAuthenticated: boolean;
}
export type PrivateRouteProps = RouteProps & AuthProps;

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({
  isAuthenticated,
  component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          component
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

const mapStateToProps = (state: StoreState) => ({
  isAuthenticated: isAuthenticatedSelector(state),
});

export { UnconnectedPrivateRoute };
export default connect(mapStateToProps)(PrivateRoute);
