import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';

it('renders snapshot correctly', () => {
  const home = shallow(<Home />);
  expect(home.html()).toMatchSnapshot();
});
