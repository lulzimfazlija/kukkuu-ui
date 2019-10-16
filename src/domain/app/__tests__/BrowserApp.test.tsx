import React from 'react';
import { shallow } from 'enzyme';

import BrowserApp from '../BrowserApp';

it('renders snapshot correctly', () => {
  const tree = shallow(<BrowserApp />);
  expect(tree.html()).toMatchSnapshot();
});
