import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

test('Should render the Hero title', () => {
  render(<Hero />);
  const titleElement = screen.getByText(/Publish your podcasts/i);

  expect(titleElement).toBeInTheDocument();
});

test('Should render the Hero subtitle', () => {
  render(<Hero />);
  const subtitleElement = screen.getByText(
    /Upload your audio to Pod with a single click/i
  );

  expect(subtitleElement).toBeInTheDocument();
});

test('Should render Partners component', () => {
  render(<Hero />);
  const partners = screen.getByRole('list');

  expect(partners).toBeInTheDocument();
});

test('Should render HeroForm component', () => {
  render(<Hero />);
  const heroForm = screen.getByRole('region', {
    name: /Request access to Pod/i,
  });

  expect(heroForm).toBeInTheDocument();
});
