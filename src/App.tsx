import React from 'react';
import './App.css';
import { Layout } from './Components/Layout/Layout';
import PokemonDetail from './Components/PokemonDetail/PokemonDetail';

function App() {

  return (
    <div className="App">
      <Layout>
          <PokemonDetail />
      </Layout>

    </div>
  );
}

export default App;
