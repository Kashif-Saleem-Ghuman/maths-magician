import { render } from '@testing-library/react';
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
