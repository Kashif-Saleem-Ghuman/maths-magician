import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('Testing Calculator', () => {
  test('should render correctly', () => {
    render(<Calculator />);
  });
  test('should have a length of 1', () => {
    const { container } = render(<Calculator />);
    expect(container.querySelectorAll('.calc-head-wrapper')).toHaveLength(1);
  });
});

it('matches snapshot', () => {
  const home = renderer.create(<Calculator />).toJSON();
  expect(home).toMatchSnapshot();
});
