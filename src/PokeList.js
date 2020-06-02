import React, { Component } from 'react';

export default class PokeList extends Component {
    render() {
        return <li>
            <div className="info-container">
                <h2>{this.props.poke.pokemon}</h2>
                <p className="poke-hp"><b>HP:</b> {this.props.poke.hp} / <b>XP:</b> {this.props.poke.base_experience}</p>
            </div>

            <div className="image-container">
                <img
                    alt={this.props.poke.url_image}
                    src={this.props.poke.url_image} />
            </div>
            <p className="attributes-class">
                <span id="type" style={{ backgroundColor: this.props.poke.color_1}}><b>Type: {this.props.poke.type_1}</b> </span><br></br>
                <b>Attack:</b> {this.props.poke.attack} / 
                <b> Defense:</b> {this.props.poke.defense}<br></br>
                <b> Special Attack:</b> {this.props.poke.special_attack} /
                <b> Special Defense:</b> {this.props.poke.special_defense}<br></br>
                <b> Speed:</b> {this.props.poke.speed}<br></br>
                <b> Height:</b> {this.props.poke.height}" / 
                <b> Weight:</b> {this.props.poke.weight}kgs
            </p>
        </li>
    }
}

//this is my card - how you want it to look

