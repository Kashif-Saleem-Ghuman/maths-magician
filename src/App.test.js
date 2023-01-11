import { render, screen } from '@testing-library/react';
import MathApp from './MathApp';

test('renders learn react link', () => {
  render(<MathApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
