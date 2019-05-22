import React from 'react';
import logo from './logo-sipios-black-v-fill.svg';
import './App.css';

import anime from 'animejs'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Pokemon } from './Pokemon';

import { DetailsPage } from './DetailsPage';

const PokemonDetails = ({ match }) => (
  <Pokemon id={match.params.id} />
);

const pokemonIds = [0,1,2,3,4,5,6,7,8,9];
function PokemonList() {
  return (
    <div className="App">
          <header className="App-header">
          </header>
            {pokemonIds.map(id => 
              <Link to={`/details/${id}`}>
              <Pokemon key={`pokemon-${id}`} id={id}/>
              </Link>
            )}
          
    </div>
  );
}
class App extends React.Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    anime({
      targets: 'path.cls-2',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      loop: true
    })
  }

  render() {
    return (
        <Router>
          
          {/* <Route path="/" exact component={PokemonList} />
          <Route path="/list/" component={PokemonList} />
          <Route path={`/details/:id(\\d+)`} component={PokemonDetails} /> */}
        </Router>
    )
  };
}

export default App;
