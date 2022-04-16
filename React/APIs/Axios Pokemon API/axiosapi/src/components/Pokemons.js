import React, { useState } from "react";
import axios from 'axios';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons =() => {
      //Using fetch
      axios
         .get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
         .then((response)=> setPokemons(response.data.results)) 
  }


  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-6 offset-3 text-start">
          <button className="btn btn-secondary mb-5" onClick={fetchPokemons}>
            Fetch Pokemons
          </button>
          <ul>
            {pokemons ? pokemons.map((pokemon, i) => <li key={i}>{pokemon.name}</li>) : ""}
          </ul>
        </div>
      </div>
    </div>
  );
            }



export default Pokemons;

