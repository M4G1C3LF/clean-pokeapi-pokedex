import React from 'react';
import './App.css';
import { Layout } from './Components/Layout/Layout';
import PokemonDetail from './Components/PokemonDetail/PokemonDetail';
import { PokemonController } from './api/pokeapi/interfaceAdapters/controllers/PokemonController';

type AppProps = {
    pokemonController: PokemonController
}

function App(props: AppProps) {

  return (
    <div className="App">
      <Layout pokemonController={props.pokemonController}>
          <PokemonDetail />
      </Layout>

    </div>
  );
}

export default App;
