import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../Layout';

it('renders snapshot correctly', () => {
  const layout = shallow(
    <Layout>
      <></>
    </Layout>
  );
  expect(layout.html()).toMatchSnapshot();
});
