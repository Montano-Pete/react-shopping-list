import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

beforeEach(() => {
  render(<App />);
});

it('should render a list of items', async () => {
  const ghostPepperSalt = screen.getByText(/Ghost Pepper Salt/i);
  const orangeJuice = screen.getByText(/Orange Juice/i);
  const sourdoughBread = screen.getByText(/Sourdough Bread/i);

  expect(ghostPepperSalt).toBeInTheDocument();
  expect(orangeJuice).toBeInTheDocument();
  expect(sourdoughBread).toBeInTheDocument();
});
