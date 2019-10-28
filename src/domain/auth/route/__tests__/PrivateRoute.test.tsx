import React, { FunctionComponent } from 'react';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router';

import {
  UnconnectedPrivateRoute as PrivateRoute,
  PrivateRouteProps,
} from '../PrivateRoute';

const wrapperCreator = (props: PrivateRouteProps) =>
  shallow(<PrivateRoute {...props} />);

const ExampleComponent: FunctionComponent = () => <>foo</>;

it('renders Route with protected component if authenticated', () => {
  const route = wrapperCreator({
    component: ExampleComponent,
    isAuthenticated: true,
  });
  expect(route.props().render({ location: 'foo' })).toEqual(ExampleComponent);
});

it('Redirect user to home if not authed', () => {
  const route = wrapperCreator({
    component: ExampleComponent,
    isAuthenticated: false,
  });

  const expectation = (
    <Redirect
      to={{
        pathname: '/home',
        state: { from: 'foo' },
      }}
    />
  );

  expect(route.props().render({ location: 'foo' })).toEqual(expectation);
});
