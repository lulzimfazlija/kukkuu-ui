import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Input from '../Input';

test('renders snapshot correctly', () => {
  const input = shallow(<Input id="foo" label="bar" />);
  expect(toJson(input)).toMatchSnapshot();
});

test('render label with asterisk if required props is true', () => {
  const wrapper = shallow(<Input id="foo" label="bar" required={true} />);
  expect(wrapper.find('label').text()).toContain('*');
});
