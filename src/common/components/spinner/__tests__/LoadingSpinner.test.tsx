import React from 'react';
import { shallow } from 'enzyme';

import LoadingSpinner from '../LoadingSpinner';

it('renders snapshot correctly', () => {
  const spinner = shallow(<LoadingSpinner isLoading={false} />);
  expect(spinner.html()).toMatchSnapshot();
});
