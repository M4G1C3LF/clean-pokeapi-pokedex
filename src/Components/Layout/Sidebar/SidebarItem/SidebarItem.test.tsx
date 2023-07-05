import React from 'react';
import { render, screen,  } from '@testing-library/react';
import SidebarItem from './SidebarItem';

import { PokemonMinified } from "../../../api/aggregates/pokemon/shared/types/PokemonMinified"

const COMPONENT_TO_TEST = "SidebarItem";
const TEST_1_DESCRIPTION = `${COMPONENT_TO_TEST} - render item`;
const TEST_2_DESCRIPTION = `${COMPONENT_TO_TEST} - render undefined item`;

test(TEST_1_DESCRIPTION, () => {
  //given
  const pokemonMinified = {
    id: 1,
    name: "Bulbasaur"
  };
  
  //when
  render(<SidebarItem pokemon={pokemonMinified} getPokemonById={ () => console.log("getPokemonById") }/>);
  
  //then
  expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
});

test(TEST_2_DESCRIPTION, () => {
  //given
  const pokemonMinified = undefined;
  
  //when
  render(<SidebarItem pokemon={pokemonMinified} getPokemonById={ () => console.log("getPokemonById") }/>);
  
  //then
  const expectedValue = screen.queryByText("Item not defined.");
  expect(expectedValue).toBeInTheDocument();
});