import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import PokeItem from "./PokeItem.js";
import Footer from "./Footer.js";
import SearchOptions from "./SearchOptions.js";
import Paging from "./Paging.js";
import PokeList from "./PokeList.js";
import { getPokemon } from "./services/pokemon-api.js";

export default class App extends Component {
  state = { pokemon: [] };

  async loadMovies() {
    const response = await getPokemon();
    const pokeSearch = response.Search;
    const totalResults = response.totalResults;
    console.log("||", pokeSearch);
    this.setState({
      pokemon: pokeSearch,
      totalResults: totalResults,
     });
  }

  async componentDidMount() {
    await this.loadPokemon();

    window.addEventListener("hashchange", async () => {
      console.log("change");
      await this.loadPokemon();
    });
  }

render() {
  const { pokeSearch, totalResults } = this.state;

  console.log(pokeSearch);
  return (
    <div className="App">
        <Header />
        <SearchOptions />
        <PokeList pokemon={pokeSearch} />
        <Paging totalResults={totalResults} />
        <PokeItem />
        <Footer />
    </div>
  );
}
}
