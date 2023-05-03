import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeroForm from '../components/HeroForm';

test('Renders a form with email input and submit button', () => {
  render(<HeroForm />);
  const emailInput = screen.getByPlaceholderText(/Email Address/i);
  const submitButton = screen.getByRole('button', { name: /Request Access/i });

  expect(emailInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('Displays an error message for empty email input', () => {
  render(<HeroForm />);
  const submitButton = screen.getByRole('button', { name: /Request Access/i });

  fireEvent.click(submitButton);
  const errorMessage = screen.getByText(/Please add your email/i);

  expect(errorMessage).toBeInTheDocument();
});

test('Displays an error message for invalid email input', () => {
  render(<HeroForm />);
  const emailInput = screen.getByPlaceholderText(/Email Address/i);
  const submitButton = screen.getByRole('button', { name: /Request Access/i });

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    userEvent.type(emailInput, 'invalid-email');
  });

  fireEvent.click(submitButton);
  const errorMessage = screen.getByText(/Please check your email/i);

  expect(errorMessage).toBeInTheDocument();
});
