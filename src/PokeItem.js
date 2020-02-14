import React, { Component } from "react";
import PokeList from "./PokeList.js";

export default class Body extends Component {

  render() {
    const pokeAPIData = this.props.data
    const pokeNodes = pokeAPIData
      .map((poke) => <PokeList key={poke._id} poke={poke} />);
    
    return (
      <div> 
       <main>
          <section className="list-section">
            <ul className="pokes">{pokeNodes}</ul>
          </section>
        </main>
            </div>
    );
  }
}

//this is my deck - how you want it to run