import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('renders Home page correctly', () => {
  test('renders correctly', () => {
    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
  });

  test('displays input on screen with corresponding placeholder', () => {
    render(<Home />);
    const searchInput = screen.getByPlaceholderText("Search for Github username here");
    expect(searchInput).toBeInTheDocument();
  })

});
