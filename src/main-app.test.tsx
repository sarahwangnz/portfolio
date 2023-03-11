import React from 'react';
import { render, screen } from '@testing-library/react';
import RootApp from './main-app';

test('renders learn react link', () => {
  render(<RootApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
