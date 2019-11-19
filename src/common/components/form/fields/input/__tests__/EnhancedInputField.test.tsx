import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import EnhancedInputField from '../EnhancedInputField';
import { validateRequire } from '../../../validationUtils';

describe('EnhancedInputField ', () => {
  const wrapper = shallow(
    <EnhancedInputField name="foo" id="bar" required={true} />
  );

  test('render normally', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('validate validateRequire if value is empty and required is true', () => {
    expect(wrapper.prop('validate')).toEqual(validateRequire);
  });
});
