import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import toJson from 'enzyme-to-json';

import Profile from '../Profile';

it('renders snapshot correctly', () => {
  const element = shallow(
    <MockedProvider>
      <Profile />
    </MockedProvider>
  );
  expect(toJson(element)).toMatchSnapshot();
});
