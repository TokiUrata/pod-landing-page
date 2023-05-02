import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('Should have a Main Header', () => {
  render(<App />);
  const mainHeader = screen.getByRole('banner');
  expect(mainHeader).toBeInTheDocument();
});

test('Should have a Hero', () => {
  render(<App />);
  const hero = screen.getByRole('main', { name: '' });
  expect(hero).toBeInTheDocument();
});
