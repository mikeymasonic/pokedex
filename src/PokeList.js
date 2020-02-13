import React, { Component } from 'react';

export default class PokeList extends Component {
    render() {
        return <li>
            <div className="info-container">
                <h2>{this.props.poke.pokemon}</h2>
                <p className="poke-hp">HP: {this.props.poke.hp}</p>
            </div>

            <div className="image-container">
                <img
                    alt={this.props.poke.url_image}
                    src={this.props.poke.url_image} />
            </div>
            <p className="speed-class">Speed: {this.props.poke.speed}</p>
        </li>
    }
}

//this is my card - how you want it to look

