import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

it('renders when the home is updated', () => {
  const home = renderer.create(<Home />).toJSON();
  expect(home).toMatchSnapshot();
});
