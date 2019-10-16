import React from 'react';
import { shallow } from 'enzyme';

import Input from '../Input';

it('renders snapshot correctly', () => {
  const input = shallow(<Input id="foo" label="bar" />);
  expect(input.html()).toMatchSnapshot();
});
