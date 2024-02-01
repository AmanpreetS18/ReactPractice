import React, { useState } from 'react';
import './Pokemon.css';
import Pokemondetails from './Pokemondetails';

function Pokemoncard({ name, url }) {
  const [condition, setCondition] = useState(true);

  const handleClick = () => {
    setCondition(!condition);
  };

  return (
    <>
      {condition ? (
        <div className="card">
          <h1>{name}</h1>
          <button onClick={handleClick}>Know More</button>
        </div>
      ) : (
        
          <Pokemondetails url={url} condition setCondition />
       
      
      )}
    </>
  );
}

export default Pokemoncard;
