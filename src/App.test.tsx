import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ApplicationInstaller from './api/pokeapi/installer/ApplicationInstaller';

test('renders learn react link', () => {
  const pokeapi = new ApplicationInstaller();
  const pokemonController = pokeapi.getController();

  render(<App pokemonController={pokemonController}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
