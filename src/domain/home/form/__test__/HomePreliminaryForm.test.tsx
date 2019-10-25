import React from 'react';
import { shallow } from 'enzyme';

import { UnconnectedHomePreliminaryForm } from '../HomePreliminaryForm';

it('renders snapshot correctly', () => {
  const element = shallow(
    <UnconnectedHomePreliminaryForm setFormValues={jest.fn()} />
  );
  expect(element.html()).toMatchSnapshot();
});
