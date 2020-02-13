import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
            {/* <img src={this.props.logoText} /> */}
        <header>
          <img className="logo" src="http://www.placekitten.com/100/100" alt="Pokemon" />
          <h1>Pokedex</h1>
        </header>
        
      </div>
    );
  }
}
