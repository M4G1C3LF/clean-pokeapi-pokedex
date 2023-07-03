import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { 
    getPokemonList,
    getPokemonById,
} from "../../../store/actions";
import { PokemonMinified } from "../../../api/aggregates/pokemon/shared/types/PokemonMinified";
import { PokemonController } from "../../../api/pokeapi/interfaceAdapters/controllers/PokemonController";
import SidebarItem from "./SidebarItem/SidebarItem";
import { GetPokemonListInputDTO } from "../../../api/aggregates/pokemon/shared/dto/GetPokemonListInputDTO";
import { GetPokemonByIdInputDTO } from "../../../api/aggregates/pokemon/shared/dto/GetPokemonByIdInputDTO";


type SidebarProps = {
    pokemonController: PokemonController;
    pokemonList: PokemonMinified[];
    isLoadingPokemonList: boolean;
    getPokemonList: Function | undefined;
    getPokemonById: Function | undefined;
};

const Sidebar = (props: SidebarProps) => {
    useEffect(() => {
        if (!props.getPokemonList) return;
        if (props.pokemonList.length > 0) return;
        if (props.isLoadingPokemonList) return;
        
        const input : GetPokemonListInputDTO = { 
            data: { 
                generation: 1
            } 
        }
        
        props.getPokemonList(input);
    });

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

const mapStateToProps = (state: any) => {
    return {
        pokemonList: state.Pokemon.pokemonList,
        isLoadingPokemonList: state.Pokemon.isLoadingPokemonList,
        
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getPokemonList: (args: GetPokemonListInputDTO) => dispatch(getPokemonList(args)),
        getPokemonById: (args: GetPokemonByIdInputDTO) => dispatch(getPokemonById(args)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);