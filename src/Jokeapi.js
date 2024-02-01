import React  from 'react';
import {useState} from 'react'

function Jokeapi() {
    const [data,setData]=useState({});
    const [punch,setPunch]=useState(false);
    const fetchData=async ()=>{
        const data= await fetch("https://official-joke-api.appspot.com/random_joke");
        const response= await data.json();
         setData(response);
    }
   
   const handlePunch=()=>{
         setPunch(true);
         fetchData();   
   }
  return (<>
    <button onClick={handlePunch}>PunchLine</button>
       {punch&&<div> 
        <h1>setup: {data.setup}</h1>
        <p >PunchLine: {punch?data.punchline:" "}</p>
    </div>}</>
  )
}

export default Jokeapi