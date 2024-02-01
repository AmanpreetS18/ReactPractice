import React from 'react'
import { useEffect,useState } from 'react';
export default function Pokemondetails({url}) {
    const [image,setimage]=useState(""
    )
 //console.log(url);
 const fetchdata =async()=>{

    const data= await fetch(url);
    const response = await data.json();
    console.log(response);
    setimage(response.sprites.other.dream_world.front_default);

 }
 useEffect(()=>{
    fetchdata();
},[]) ;
  return (
         <>
         <div className='card2'>
           <img src={image} alt="pokemon"/>
</div>
         </>
  )
}
