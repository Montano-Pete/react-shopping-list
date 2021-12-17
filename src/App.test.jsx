import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders desired text on screen', () => {
  render(<App />);
  const textOnScreen = screen.getByText(/Shopping List!/i);
  expect(textOnScreen).toBeInTheDocument();
});
