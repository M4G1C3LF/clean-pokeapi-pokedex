import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";
import ApplicationInstaller from "../api/pokeapi/installer/ApplicationInstaller";

const sagaMiddleware = createSagaMiddleware();

const pokeapi = new ApplicationInstaller();
const pokemonController = pokeapi.getController();
sagaMiddleware.setContext({ pokemonController })
sagaMiddleware.bind(pokemonController)


const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);



export default store;
