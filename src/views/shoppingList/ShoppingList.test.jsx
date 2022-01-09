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

it('should add a new item to the list', () => {
  const input = screen.getByPlaceholderText('Enter Items here');
  const button = screen.getByRole('button', { name: 'Add to List' });

  userEvent.type(input, 'Pink Lady Apple');
  userEvent.click(button);

  const item = screen.getByText('Pink Lady Apple');

  expect(item).toBeInTheDocument();
});
