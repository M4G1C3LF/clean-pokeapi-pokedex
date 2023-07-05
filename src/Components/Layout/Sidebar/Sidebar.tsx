import React from "react";


import { PokemonMinified } from "../../../api/aggregates/pokemon/shared/types/PokemonMinified";
import SidebarItem from "./SidebarItem/SidebarItem";
import { GetPokemonListInputDTO } from "../../../api/aggregates/pokemon/shared/dto/GetPokemonListInputDTO";
import { GetPokemonByIdInputDTO } from "../../../api/aggregates/pokemon/shared/dto/GetPokemonByIdInputDTO";

type SidebarProps = {
    pokemonList: PokemonMinified[] | undefined;
    getPokemonById: Function | undefined;
};

export default (props: SidebarProps) => {
    if (!props.pokemonList || props.pokemonList.length === 0)
        return <div className="layout-sidebar">There's no items on list</div>;

    return <div className="layout-sidebar">
        {props.pokemonList.map((pokemon: PokemonMinified) => {
            return <SidebarItem 
                key={pokemon.id}
                pokemon={pokemon}
                getPokemonById={ () => props.getPokemonById && props.getPokemonById({data: {
                    id: pokemon.id 
                }})}
            />
        })}
    </div>;
}