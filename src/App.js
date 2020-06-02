import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import PokeItem from "./PokeItem.js";
import Footer from "./Footer.js";


export default class App extends Component {

render() {
  return (
    <div className="App">
        <Header />
        <PokeItem />
        <Footer />
    </div>
  );
}
}
