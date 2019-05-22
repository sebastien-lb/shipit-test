import React from 'react';

import {getFirstAbility, convertPoundsToKilograms} from './Pokemon.service';

export class Pokemon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    async getPokemon(id) {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
          const pokemon = await response.json();
          this.setState({pokemon});
        } catch(error) {
          console.log('error', error);
        }
    }

    componentDidMount() {
        this.getPokemon(this.props.id);
    }

    render() {
        return (
            <div>
                {this.state.pokemon ? 
                    [<div key="1">
                        <img src={this.state.pokemon.sprites.front_default} alt={"Pokemon"}/>
                    </div>,
                    <div key="2">
                        <span>{this.state.pokemon.name}</span>
                        <br/>
                        <span>Id: {this.state.pokemon.id}</span>
                        <br/>
                        <span>Height: {this.state.pokemon.height}m</span>
                        <br/>
                        <span>Weight: {Math.round(convertPoundsToKilograms(this.state.pokemon.weight))}Kg</span>
                        <br/>
                        <span>1st ability: {getFirstAbility(this.state.pokemon)}</span>
                    </div>]
                : null }
            </div>
        );
    }
}
