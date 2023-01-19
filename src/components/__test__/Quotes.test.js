import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../Quotes';

it('renders when there is quote', () => {
  const quotes = renderer.create(<Quotes />).toJSON();
  expect(quotes).toMatchSnapshot();
});
