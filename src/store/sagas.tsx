import { all, fork } from "redux-saga/effects";

//public
import PokemonSaga from "./pokemon/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(PokemonSaga),
  ]);
}
