import { GetPokemonByIdInputDTO } from "../../api/aggregates/pokemon/shared/dto/GetPokemonByIdInputDTO";
import { GetPokemonByIdOutputDTO } from "../../api/aggregates/pokemon/shared/dto/GetPokemonByIdOutputDTO";
import { GetPokemonListInputDTO } from "../../api/aggregates/pokemon/shared/dto/GetPokemonListInputDTO";
import { GetPokemonListOutputDTO } from "../../api/aggregates/pokemon/shared/dto/GetPokemonListOutputDTO";

import {
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_ID_SUCCESS,
  GET_POKEMON_BY_ID_FAIL,
  GET_POKEMON_LIST,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAIL,
} from "./actionTypes";


export const getPokemonById = (args: GetPokemonByIdInputDTO) => ({
  type: GET_POKEMON_BY_ID,
  payload: args,
});

export const getPokemonByIdSuccess = (result : GetPokemonByIdOutputDTO) => ({
  type: GET_POKEMON_BY_ID_SUCCESS,
  payload: { pokemon: result },
});

export const getPokemonByIdFail = (error : any) => ({
  type: GET_POKEMON_BY_ID_FAIL,
  payload: error,
});

export const getPokemonList = (args: GetPokemonListInputDTO) => ({
  type: GET_POKEMON_LIST,
  payload: args,
});

export const getPokemonListSuccess = (result: GetPokemonListOutputDTO) => ({
  type: GET_POKEMON_LIST_SUCCESS,
  payload: { pokemonList: result },
});

export const getPokemonListFail = (error : any) => ({
  type: GET_POKEMON_LIST_FAIL,
  payload: error,
});