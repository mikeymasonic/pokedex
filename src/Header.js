import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <img className="logo" src="https://i.ebayimg.com/images/g/8bMAAOSwxp9W-TVs/s-l400.jpg" alt="Pokemon" />
          <h1>Pokedex</h1>
        
       

          <form>
              <label for="search">Search: </label>
              <input type="text" id="search" name="search" />
              <input type="submit" id="submit" value="Submit" />
          </form>
          </header>

      </div>   

    );
  }
}
