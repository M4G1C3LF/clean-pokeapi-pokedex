import React from "react";
import './SidebarItem.css';
import { PokemonMinified } from "../../../../api/aggregates/pokemon/shared/types/PokemonMinified";

type SidebarProps = {
    pokemon: PokemonMinified;
    getPokemonById: Function;
};
const SidebarItem = (props: SidebarProps) => {
    return <div className="sidebar-item" onClick={() => props.getPokemonById({ id: props.pokemon.id })}>
        <span>{props.pokemon.id}</span> <span>{props.pokemon.name}</span>
    </div>;
};

export default SidebarItem;