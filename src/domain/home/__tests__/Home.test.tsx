import React from 'react';
import toJson from 'enzyme-to-json';

import Home from '../Home';
import { shallowWithProvider } from '../../../common/test/testUtils';

it('renders snapshot correctly', () => {
  const home = shallowWithProvider(<Home />);
  expect(toJson(home)).toMatchSnapshot();
});
