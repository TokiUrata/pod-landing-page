import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainHeader from '../components/MainHeader';

test('Should have a logo', () => {
  render(<MainHeader />);
  const logoElement = screen.getByAltText('Pod logo');
  expect(logoElement).toBeInTheDocument();
});

test('Should have a link to the home page', () => {
  render(<MainHeader />);
  const logoLinkElement = screen.getByRole('link', { name: 'Pod home page' });
  const homePageLink = '/';
  expect(logoLinkElement.getAttribute('href')).toBe(homePageLink);

  userEvent.click(logoLinkElement);
  expect(window.location.pathname).toBe(homePageLink);
});
