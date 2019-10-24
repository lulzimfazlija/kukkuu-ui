import React from 'react';
import { shallow } from 'enzyme';

import HomePreliminaryForm from '../HomePreliminaryForm';

it('renders snapshot correctly', () => {
  const element = shallow(<HomePreliminaryForm />);
  expect(element.html()).toMatchSnapshot();
});
