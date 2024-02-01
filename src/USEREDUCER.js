import React from 'react';

import { useReducer } from 'react';

export default function USEREDUCER() {
    const reducerfunction=(state,action)=>{
    if(action.type==="red"){
        return {color:"red"};
    }
    else if(action.type==="Black"){
        return {color:"black"};
    }
    else if(action.type === "Green"){
        return {color:"green"};
    }
    else if(action.type === "Pink"){
        return {color:"pink"};
    }
    else if(action.type === "Orange"){
        return {color:"orange"};
    }
    return state;
         
  }
  const [color, dispatch]=useReducer(reducerfunction,{color:"white"});
  
    return (
    <>
    <div className='main' style={{backgroundColor:color.color,height:"100px",width:"100px",border:"2px solid black"}}>
        Main Class
    </div><br/><br/>
    <div>
        <button onClick={()=>dispatch({type:"red"})}>Red</button>
        <button onClick={()=>dispatch({type:"Black"})}>Black</button>
        <button onClick={()=>dispatch({type:"Green"})}>Green</button>
        <button onClick={()=>dispatch({type:"Pink"})}>Pink</button>
        <button onClick={()=>dispatch({type:"Orange"})}>Orange</button>
    </div>
</>
  )
}
