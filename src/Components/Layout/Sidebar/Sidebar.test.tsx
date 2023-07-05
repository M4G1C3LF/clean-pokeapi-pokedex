import React from 'react';
import { render, screen,  } from '@testing-library/react';
import Sidebar from './Sidebar';
import { PokemonMinified } from "../../../api/aggregates/pokemon/shared/types/PokemonMinified"

const COMPONENT_TO_TEST = "Sidebar";
const TEST_1_DESCRIPTION = `${COMPONENT_TO_TEST} - render list of items`;
const TEST_2_DESCRIPTION = `${COMPONENT_TO_TEST} - render list of items with empty list`;
const TEST_3_DESCRIPTION = `${COMPONENT_TO_TEST} - render list of items with undefined list`;

test(TEST_1_DESCRIPTION, () => {
    //given
    const pokemonList = [
        {
            id: 1,
            name: "Bulbasaur"
        },
        {
            id: 4,
            name: "Charmander"
        },
        {
            id: 7,
            name: "Squritle"
        }
    ]

    //when
    render(<Sidebar pokemonList={pokemonList} getPokemonById={ () => console.log("getPokemonById") }/>);

    //then
    const expectedValues = [
        screen.getByText("Bulbasaur"),
        screen.getByText("Charmander"),
        screen.getByText("Squritle")
    ]

    for (let expectedValue of expectedValues) {
        expect(expectedValue).toBeInTheDocument();
    }
});

test(TEST_2_DESCRIPTION, () => {
    //given
    const pokemonList : PokemonMinified[] = []
    //when
    render(<Sidebar pokemonList={pokemonList} getPokemonById={ () => console.log("getPokemonById") }/>);
    
    //then
    const expectedValue = screen.getByText("There's no items on list");
    expect(expectedValue).toBeInTheDocument();
});

test(TEST_3_DESCRIPTION, () => {
    //given
    const pokemonList = undefined
    //when
    render(<Sidebar pokemonList={pokemonList} getPokemonById={ () => console.log("getPokemonById") }/>);
    
    //then
    const expectedValue = screen.getByText("There's no items on list");
    expect(expectedValue).toBeInTheDocument();
});
