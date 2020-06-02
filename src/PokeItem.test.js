import React from 'react';
import PokeItem from './PokeItem.js';
import renderer from "react-test-renderer";

test('renders PokeItem.js correctly', () => {
  const tree = renderer
  .create(<PokeItem data={[]}/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});