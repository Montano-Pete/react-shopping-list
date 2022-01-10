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

it('should edit an item in the list', () => {
  const editButton = screen.getByRole('button', {
    name: 'edit Ghost Pepper Salt button',
  });

  userEvent.click(editButton);

  const editInput = screen.getByRole('textbox', {
    name: 'Ghost Pepper Salt input',
  });

  userEvent.type(editInput, ' x2');

  const saveButton = screen.getByRole('button', {
    name: 'save Ghost Pepper Salt x2 button',
  });

  userEvent.click(saveButton);

  const updatedInput = screen.getByText('Ghost Pepper Salt x2');

  expect(updatedInput).toBeInTheDocument();
});

it('should delete an item from the list', async () => {
  const orangeJuice = screen.getByText(/Orange Juice/i);

  const button = screen.getByRole('button', {
    name: 'delete Orange Juice button',
  });

  userEvent.click(button);

  expect(orangeJuice).not.toBeInTheDocument();
});
