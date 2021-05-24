import React from 'react';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import SearchBar from '../SearchBar';

jest.mock('next/router');

describe('<SearchBar />', () => {
  useRouter.mockImplementation(() => ({
    route: "/",
    pathname: "/",
    query: "",
  }));

  test('should render the input text', async () => {
    render(<SearchBar />);
    const input = await screen.getByPlaceholderText('Nunca pare de buscar');
    expect(input).toBeInTheDocument();
  });

  test('should render the logo image and search icon', async () => {
    render(<SearchBar />);
    const logo = await screen.getByAltText('Lodo mercado livre');
    expect(logo).toBeInTheDocument();
  
    const searchIcon = await screen.getByAltText('Icone de busca');
    expect(searchIcon).toBeInTheDocument();
  });

  test('should render the input text', async () => {
    useRouter.mockImplementation(() => ({
      route: "/",
      pathname: "/",
      query: "",
    }));
  
    const { container } = render(<SearchBar />);
    container.querySelector('#serach_input').value = 'iphone';
    const input = await screen.getByDisplayValue('iphone');
    expect(input).toBeInTheDocument();
  });

});