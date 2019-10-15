import React from 'react';
import { shallow } from 'enzyme';

import Container from '../Container';

it('renders snapshot correctly', () => {
  const container = shallow(<Container />);
  expect(container.html()).toMatchSnapshot();
});
