import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../Footer';

it('renders snapshot correctly', () => {
  const footer = shallow(<Footer />);
  expect(footer.html()).toMatchSnapshot();
});
