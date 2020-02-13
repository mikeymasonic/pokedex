import React from 'react';
import Footer from './Footer';
import renderer from "react-test-renderer";
test('renders Footer.js correctly', () => {
  const tree = renderer
  .create(<Footer />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});