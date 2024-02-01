import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Card({ value }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.name}`)
      .then((response) => response.json())
      .then((data) => setPokemons(data));
  }, []);

  console.log(pokemons);

  const source = pokemons.sprites.other.dream_world.front_default;
  return (
    <>
      <h1>{value.name}</h1>
      <img src={source} alt="" />
      <button>know more</button>
    </>
  );
}

export default Card;