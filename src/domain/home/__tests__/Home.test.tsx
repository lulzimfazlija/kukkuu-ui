import React from 'react';

import Home from '../Home';
import { mountWithProvider } from '../../../common/test/testUtils';

it('renders snapshot correctly', () => {
  const home = mountWithProvider(<Home />);
  expect(home.html()).toMatchSnapshot();
});
