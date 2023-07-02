import { Pokemon } from "../../api/aggregates/pokemon/shared/types/Pokemon";
import {
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_ID_SUCCESS,
  GET_POKEMON_BY_ID_FAIL,
  GET_POKEMON_LIST,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAIL
} from "./actionTypes";

export const getPokemonById = () => ({
  type: GET_POKEMON_BY_ID,
});

export const getPokemonByIdSuccess = (pokemon : Pokemon) => ({
  type: GET_POKEMON_BY_ID_SUCCESS,
  payload: { pokemon },
});

export const getPokemonByIdFail = (error : any) => ({
  type: GET_POKEMON_BY_ID_FAIL,
  payload: error,
});

export const getPokemonList = () => ({
  type: GET_POKEMON_LIST,
});

export const getPokemonListSuccess = (pokemonList : Pokemon[]) => ({
  type: GET_POKEMON_LIST_SUCCESS,
  payload: { pokemonList },
});

export const getPokemonListFail = (error : any) => ({
  type: GET_POKEMON_LIST_FAIL,
  payload: error,
});