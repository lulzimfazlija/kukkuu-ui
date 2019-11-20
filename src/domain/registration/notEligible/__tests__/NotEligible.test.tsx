import React from 'react';
import { shallow } from 'enzyme';

import NotEligible from '../NotEligible';

it('renders snapshot correctly', () => {
  const element = shallow(<NotEligible />);
  expect(element.html()).toMatchSnapshot();
});
