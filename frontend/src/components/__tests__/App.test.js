import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';

/**
 */
test('App Renders', async () => {
  render(<App />);
});

test('Category Renders', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('All Categories'));
  await waitFor(() => screen.getByText('Cars'));
  await waitFor(() => screen.getByText('Electronics'));
  await waitFor(() => screen.getByText('Rentals'));
  await waitFor(() => screen.getByText('Kitchen'));
  await waitFor(() => screen.getByText('Sports'));
  await waitFor(() => screen.getByText('Camping'));
  await waitFor(() => screen.getByText('Fishing'));
  await waitFor(() => screen.getByText('Collecting'));
  await waitFor(() => screen.getByText('Pet Suplies'));
  await waitFor(() => screen.getByText('Handmade'));
  await waitFor(() => screen.getByText('Digital Media'));
  await waitFor(() => screen.getByText('Clothes'));
  await waitFor(() => screen.getByText('Books'));
  fireEvent.click(screen.getByText('Back'));
});

test('Create User', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('Sign In'));
  fireEvent.click(screen.getByText('Create Account'));
  await waitFor(() => screen.getByText('Create Account Here'));
  fireEvent.click(screen.getByText('Back'));
  fireEvent.click(screen.getByText('Back'));
});
