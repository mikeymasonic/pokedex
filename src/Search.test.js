import React from 'react';
import Search from './Search.js';
import renderer from "react-test-renderer";

test('renders Search.js correctly', () => {
  const tree = renderer
  .create(<Search />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});