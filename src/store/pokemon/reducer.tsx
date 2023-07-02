import {
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_ID_SUCCESS,
  GET_POKEMON_BY_ID_FAIL,
  GET_POKEMON_LIST,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAIL
} from "./actionTypes";

const INIT_STATE = {
  pokemonDetail: null,
  isLoadingPokemonDetail: false,
  pokemonDetailError: null,
  pokemonList: [],
  isLoadingPokemonList: false,
  pokemonListError: null,
};

const pokemon = (state = INIT_STATE, action : any) => {
  switch (action.type) {
    case GET_POKEMON_BY_ID:
      return {
        ...state,
        isLoadingPokemonDetail: true,
        pokemonDetailError: null,
      };
    case GET_POKEMON_BY_ID_SUCCESS:
      return {
        ...state,
        pokemonDetail: action.payload.pokemon,
        isLoadingPokemonDetail: false,
      };

    case GET_POKEMON_BY_ID_FAIL:
      return {
        ...state,
        pokemonDetail: INIT_STATE.pokemonDetail,
        pokemonDetailError: action.payload,
        isLoadingPokemonDetail: false,
      };

    case GET_POKEMON_LIST:
      return {
        ...state,
        isLoadingPokemonList: true,
        pokemonListError: null,
      };
    case GET_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        pokemonList: action.payload.pokemonList,
        isLoadingPokemonList: false,
      };

    case GET_POKEMON_LIST_FAIL:
      return {
        ...state,
        pokemonList: INIT_STATE.pokemonList,
        pokemonListError: action.payload,
        isLoadingPokemonList: false,
      };

		default:
				return state;
		}
};

export default pokemon;