import { put, takeEvery, getContext } from "redux-saga/effects";

// Crypto Redux States
import {
  GET_POKEMON_BY_ID,
  GET_POKEMON_LIST,
} from "./actionTypes";
import {
  getPokemonByIdSuccess,
  getPokemonByIdFail,
  getPokemonListSuccess,
  getPokemonListFail,
} from "./actions";

import { GetPokemonListOutputDTO } from "../../api/aggregates/pokemon/shared/dto/GetPokemonListOutputDTO";
import { GetPokemonByIdOutputDTO } from "../../api/aggregates/pokemon/shared/dto/GetPokemonByIdOutputDTO";
import { PokemonController } from "../../api/pokeapi/interfaceAdapters/controllers/PokemonController";
import { GetPokemonListInputDTO } from "../../api/aggregates/pokemon/shared/dto/GetPokemonListInputDTO";
import { GetPokemonByIdInputDTO } from "../../api/aggregates/pokemon/shared/dto/GetPokemonByIdInputDTO";


function* getPokemonList( { payload: args } : { payload: GetPokemonListInputDTO}) {
  try {
    const pokemonController : PokemonController = yield getContext("pokemonController");
    const response : GetPokemonListOutputDTO = yield pokemonController._pokemonRepository.getPokemonList(args)
    yield put(getPokemonListSuccess(response));
  } catch (error) {
    yield put(getPokemonListFail(error));

  }
}

function* getPokemonById( { payload: args } : { payload: GetPokemonByIdInputDTO}) {
  try {
    const pokemonController : PokemonController = yield getContext("pokemonController");
    const response : GetPokemonByIdOutputDTO = yield pokemonController._pokemonRepository.getPokemonById(args)
    yield put(getPokemonByIdSuccess(response));
  } catch (error) {
    yield put(getPokemonByIdFail(error));

  }
}

function* pokemonSaga() {
  yield takeEvery(GET_POKEMON_LIST as any, getPokemonList);
  yield takeEvery(GET_POKEMON_BY_ID as any, getPokemonById);
}

export default pokemonSaga;

