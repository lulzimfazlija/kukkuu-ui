import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import NavigationPromt from '../NavigationPrompt';

it('renders snapshot correctly', () => {
  const prompt = shallow(<NavigationPromt isHalfFilling={true} />);
  expect(toJson(prompt)).toMatchSnapshot();
});
