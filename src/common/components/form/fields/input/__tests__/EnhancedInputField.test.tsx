import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import EnhancedInputField from '../EnhancedInputField';

describe('EnhancedInputField ', () => {
  const wrapper = shallow(
    <EnhancedInputField name="foo" id="bar" required={true} />
  );

  test('render normally', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
