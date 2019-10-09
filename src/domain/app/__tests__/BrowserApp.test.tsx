import React from 'react';
import renderer from 'react-test-renderer';

import BrowserApp from '../BrowserApp';

it('renders snapshot correctly', () => {
  const tree = renderer.create(<BrowserApp />).toJSON();
  expect(tree).toMatchSnapshot();
});
