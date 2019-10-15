import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

it('renders snapshot correctly', () => {
  const header = shallow(<Header />);
  expect(header.html()).toMatchSnapshot();
});
