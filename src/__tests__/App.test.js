import { render, screen } from '@testing-library/react';
import App from '../App';

test('Should have a Main Header', () => {
  render(<App />);
  const mainHeader = screen.getByRole('banner');

  expect(mainHeader).toBeInTheDocument();
});

test('Should have a Hero', () => {
  render(<App />);
  const hero = screen.getByRole('main', { name: 'hero' });

  expect(hero).toBeInTheDocument();
});

test('Should have two Patterns', () => {
  render(<App />);
  const patterns = screen.getAllByTestId('pattern');

  expect(patterns.length).toBe(2);
});

test('Should not have two visible patterns at the same time', () => {
  render(<App />);
  const patterns = screen.getAllByTestId('pattern');
  let patternWithDisplayBlock;
  let patternWithDisplayNone;

  for (const pattern of patterns) {
    const styles = window.getComputedStyle(pattern);
    const display = styles.getPropertyValue('display');
    if (display === 'block') {
      patternWithDisplayBlock = pattern;
    } else {
      patternWithDisplayNone = pattern;
    }
  }

  expect(patternWithDisplayBlock).toBeDefined();
  expect(patternWithDisplayNone).toBeUndefined();
});
