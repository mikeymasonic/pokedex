import React, { Component } from "react";
import PokeList from "./PokeList.js";
// import pokeData from "./data.js";
import request from 'superagent';

export default class Body extends Component {

    state = {
        data: [],
        selected: null,
        };

        async componentDidMount() {
            const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`);
            this.setState({ data: data.body.results })         
        }

  render() {
    console.log(this.state.selected);
    const pokeAPIData = this.state.data
    const pokeNodes = pokeAPIData
      .filter(poke => {
        if (!this.state.selected) return true;

        return poke.pokemon === this.state.selected || String(poke.hp) === this.state.selected || String(poke.speed) === this.state.selected;
      })
      .map((poke) => <PokeList key={poke._id} poke={poke} />);
    
    // let unique = [...new Set(pokeData.keyword)];
    // console.log(unique);
    const handleChange = e => {
      this.setState({ selected: e.target.value });
    };
    return <div> 
       <main>
        <section className="options">
            <select className="poke-name-filter" onChange={handleChange}>
              <option value="" defaultValue>
                Pokemon
              </option>
              
              {pokeAPIData.map(poke => <option key={poke._id}>{poke.pokemon}</option>)};
            </select>

            <select className="poke-hp-filter" onChange={handleChange}>
              <option value="" defaultValue>
                HP
              </option>
              {pokeAPIData.map(poke => <option key={poke._id}>{poke.hp}</option>)};
            </select>

            <select className="poke-speed-filter" onChange={handleChange}>
              <option value="" defaultValue>
                Speed
              </option>
              {pokeAPIData.map(poke => <option key={poke._id}>{poke.speed}</option>)};
            </select>  
          </section>

          <section className="list-section">
            <ul className="pokes">{pokeNodes}</ul>
          </section>
        </main>
        
            </div>;
  }
}

//this is my deck - how you want it to run