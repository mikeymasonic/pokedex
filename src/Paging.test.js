import React from 'react';
import Paging from './Header';
import renderer from "react-test-renderer";
test('renders Paging.js correctly', () => {
  const tree = renderer
  .create(<Paging />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});