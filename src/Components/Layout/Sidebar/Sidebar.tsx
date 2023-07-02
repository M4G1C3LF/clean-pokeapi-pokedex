import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { 
    getPokemonList, getPokemonListFail, getPokemonListSuccess,
    getPokemonById, getPokemonByIdFail, getPokemonByIdSuccess,

} from "../../../store/actions";
import { GetPokemonByIdInputDTO } from "../../../api/aggregates/pokemon/shared/dto/GetPokemonByIdInputDTO";
import { GetPokemonByIdOutputDTO } from "../../../api/aggregates/pokemon/shared/dto/GetPokemonByIdOutputDTO";
import { GetPokemonListOutputDTO } from "../../../api/aggregates/pokemon/shared/dto/GetPokemonListOutputDTO";
import { PokemonMinified } from "../../../api/aggregates/pokemon/shared/types/PokemonMinified";
import SidebarItem from "./SidebarItem/SidebarItem";
import { PokemonController } from "../../../api/pokeapi/interfaceAdapters/controllers/PokemonController";


type SidebarProps = {
    pokemonController: PokemonController;
    pokemonList: PokemonMinified[];
    getPokemonList: Function | undefined;
    getPokemonListSuccess: Function | undefined;
    getPokemonListFail: Function | undefined;
    getPokemonById: Function | undefined;
    getPokemonByIdSuccess: Function | undefined;
    getPokemonByIdFail: Function | undefined;
    
};
const Sidebar = (props: SidebarProps) => {

    const getPokemonList = async (args: { generation: number }) => {
        if (!props.getPokemonList)
            throw new Error("getPokemonList is undefined");

        props.getPokemonList();
        props.pokemonController._pokemonRepository.getPokemonList({ data: args })
        .then((response: GetPokemonListOutputDTO) => {
            if (!props.getPokemonListSuccess)
                throw new Error("getPokemonListSuccess is undefined");

            props.getPokemonListSuccess(response)
        }).catch((error: any) => {
            if (!props.getPokemonListFail)
                throw new Error("getPokemonListFail is undefined");

            props.getPokemonListFail(error);
        });
    }

    const getPokemonById = async (args: { id: number }) => {

        console.log("getPokemonById - Sidebar.tsx")
        console.log("args")
        console.log(args)
        if (!props.getPokemonById)
            throw new Error("getPokemonById is undefined");

        props.getPokemonById();

        const input : GetPokemonByIdInputDTO = {
            data: {
                id: args.id
            }
        }
        props.pokemonController._pokemonRepository.getPokemonById(input)
        .then((response: GetPokemonByIdOutputDTO) => {
            if (!props.getPokemonByIdSuccess)
                throw new Error("getPokemonByIdSuccess is undefined");

            props.getPokemonByIdSuccess(response)
        }).catch((error: any) => {
            if (!props.getPokemonByIdFail)
                throw new Error("getPokemonByIdFail is undefined");

            props.getPokemonByIdFail(error);
        });
    }

    useEffect(() => {
        const getPokemonById =
        getPokemonList({ generation: 2 });
    }, []);

    return <div className="layout-sidebar">
        {props.pokemonList.map((pokemon: PokemonMinified) => {
            return <SidebarItem 
                key={pokemon.id}
                pokemon={pokemon}
                getPokemonById={getPokemonById}
            />
        })}
    </div>;
}

const mapStateToProps = (state: any) => {
    return {
        pokemonList: state.Pokemon.pokemonList,
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getPokemonList: () => {
            dispatch(getPokemonList())
        },
        getPokemonListSuccess: (payload: any) => {
            dispatch(getPokemonListSuccess(payload))
        },
        getPokemonListFail: (payload: any) => {
            dispatch(getPokemonListFail(payload))
        },
        getPokemonById: () => {
            dispatch(getPokemonById())
        },
        getPokemonByIdSuccess: (payload: any) => {
            dispatch(getPokemonByIdSuccess(payload))
        },
        getPokemonByIdFail: (payload: any) => {
            dispatch(getPokemonByIdFail(payload))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);