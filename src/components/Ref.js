import React from 'react';
import {useRef} from 'react';
export default function Ref() {
     const divv =useRef();
     const para=useRef();
     const handledivv=()=>{

        divv.current.style.border="2px solid red";
        divv.current.style.backgroundColor="yellow";
        para.current.innerHTML="Hello";
     }

  return (
    <>
    <div ref={divv} style={ {height:"300px",width:"300px"} }>   
    <p ref={para}></p>
    </div>
        <button onClick={handledivv}>Change</button>
    </>
  )
}

