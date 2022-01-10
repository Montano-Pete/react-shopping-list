import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders desired text on screen', () => {
  render(<App />);
  const textOnScreen = screen.getByText(
    /Welcome to my Jank Shopping List made by yours truly/i
  );
  expect(textOnScreen).toBeInTheDocument();
});
