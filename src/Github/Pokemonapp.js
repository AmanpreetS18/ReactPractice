import React, { useEffect, useState } from 'react';
import Pokemoncard from './Pokemoncard';
//import Pokemondetails from './Pokemondetails';
import './Pokemon.css';
function Pokemonapp() {
  const [pokemon, setPokemon] = useState([]);

  const fetchdata = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
    const response = await data.json();
    setPokemon(response.results.map((result) => ({
      name: result.name,
      url: result.url,
    })));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <h1>Pokemon Names and URLs</h1>
      <ul className='container'>
        {pokemon.map((item, index) => (
          <Pokemoncard key={index} name={item.name} url={item.url} />
        ))}
      </ul>
      

      <div>Github</div>
    
      

    </>

  );
}

export default Pokemonapp;
