import React from 'react'
import {useState} from 'react';
import './App.css';

function App() {
  const [condition,setCondition]=useState(true);
  const [condition2,setCondition2]=useState(true);
  function handleConditon(){
    setCondition(!condition);
  }
  function handleConditon2(){
    setCondition2(!condition2);
  }
  return (
    <>

    <div id ="main" style={{backgroundColor:condition?"pink":"darkred"}}>
      <h1 style={{color:condition?"darkred":"pink"}}>This is Themechanger</h1>
      <button style={{backgroundColor:condition?"darkred":"pink", color:condition?"pink":"darkred"}}
      onClick={()=>{handleConditon()}}>{condition?"Dark":"Light"}</button>

    <div id="div2" style={{backgroundColor:condition2?"pink":"darkred"}}>
      <h1 style={{color:condition2?"darkred":"pink"}}>HELLO</h1>
      <button style={{backgroundColor:condition2?"darkred":"pink",color:condition2?"pink":"darkred"} }
      onClick={()=>{handleConditon2()}}>{condition2?"Dark":"Light"}</button>
    </div>
    </div>
    

    </>
  )
}

export default App