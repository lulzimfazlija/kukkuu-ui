import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import toJson from 'enzyme-to-json';

import CheckHasProfile from '../CheckHasProfile';

it('renders snapshot correctly', () => {
  const element = shallow(
    <MockedProvider>
      <CheckHasProfile />
    </MockedProvider>
  );
  expect(toJson(element)).toMatchSnapshot();
});
