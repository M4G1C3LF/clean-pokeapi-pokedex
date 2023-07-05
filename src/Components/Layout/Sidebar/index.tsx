import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { 
    getPokemonList,
    getPokemonById,
} from "../../../store/actions";
import { PokemonMinified } from "../../../api/aggregates/pokemon/shared/types/PokemonMinified";
import SidebarItem from "./SidebarItem/SidebarItem";
import { GetPokemonListInputDTO } from "../../../api/aggregates/pokemon/shared/dto/GetPokemonListInputDTO";
import { GetPokemonByIdInputDTO } from "../../../api/aggregates/pokemon/shared/dto/GetPokemonByIdInputDTO";
import Sidebar from "./Sidebar"

type SidebarWrapperProps = {
    pokemonList: PokemonMinified[];
    isLoadingPokemonList: boolean;
    getPokemonList: Function | undefined;
    getPokemonById: Function | undefined;
};

const SidebarWrapper = (props: SidebarWrapperProps) => {
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
    return <Sidebar 
        pokemonList={props.pokemonList}
        getPokemonById={props.getPokemonById}
    />
    
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

export default connect(mapStateToProps, mapDispatchToProps) (SidebarWrapper);