import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import PokeItem from "./PokeItem.js";
import Footer from "./Footer.js";
import request from "superagent";
import Paging from "./Paging.js"

export default class App extends Component {

  state = { data: [],
            selected: null,
            totalPokemon: 0,
            perPage: 20,
            totalPage: 41
          }
  
  async searchLoad() {
    const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
    const searchQuery = window.location.hash.slice(1);
    const searchToLoad = `${URL}?${searchQuery}`;
    const newPokemon = await request.get(searchToLoad);
    this.setState({ data: newPokemon.body.results});
    this.setState({ totalPokemon: newPokemon.body.count});
    const newTotalPage = Math.ceil(this.state.totalPokemon/this.state.perPage);
    this.setState({ totalPage: newTotalPage });
  }

  async componentDidMount() {
    const pokeOnline = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    this.setState({ data: pokeOnline.body.results });
    this.setState({ totalPokemon: pokeOnline.body.count});
    window.addEventListener('hashchange', () => {
      this.searchLoad()
    })
  }

render() {
  return (
    <div className="App">
        <Header />
        <PokeItem data={this.state.data} />
        <Paging totalPokemon={this.state.totalPokemon} totalPage={this.state.totalPage} />
        <Footer />
    </div>
  );
}
}
