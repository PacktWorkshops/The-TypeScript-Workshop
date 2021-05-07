import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders your website link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/your website/i);
  expect(linkElement).toBeInTheDocument();
});
