import React from "react";
import './SidebarItem.css';
import { PokemonMinified } from "../../../../api/aggregates/pokemon/shared/types/PokemonMinified";

type SidebarItemProps = {
    pokemon: PokemonMinified | undefined;
    getPokemonById: Function |  undefined;
};
const SidebarItem = (props: SidebarItemProps) => {
    if (!props.pokemon){
        return <div className="sidebar-item">
            Item not defined.
        </div>;
    }
    return <div className="sidebar-item" onClick={() => props.getPokemonById && props.getPokemonById({ id: props.pokemon?.id })}>
        <span>{props.pokemon.id}</span> <span>{props.pokemon.name}</span>
    </div>;
};

export default SidebarItem;