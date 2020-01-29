import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Checkbox from '../Checkbox';

test('renders snapshot correctly', () => {
  const wrapper = shallow(
    <Checkbox
      name="thisCheckbox"
      label="bar"
      value={'wow'}
      onChange={jest.fn()}
      onBlur={jest.fn()}
    />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('render label with asterisk if required props is true', () => {
  const wrapper = shallow(
    <Checkbox
      name="thisCheckbox"
      label="bar"
      value={'wow'}
      onChange={jest.fn()}
      onBlur={jest.fn()}
      required={true}
    />
  );
  expect(wrapper.find('label').text()).toContain('*');
});
