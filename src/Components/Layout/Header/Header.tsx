import React from "react";
const pokedexLogoPath = '/assets/Pokedex_logo.png';
export default () => {
    return <header className="layout-header">
        <img className="header-logo" src={pokedexLogoPath} alt="Pokédex" />
    </header>;
}   