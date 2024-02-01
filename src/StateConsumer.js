import React from 'react';
import { StateContext } from './StateProvider'
export default function StateConsumer() {
   
  return (
    <div>
        <StateContext.Consumer>
            {({state,setState})=>(
                <div style={{backgroundColor:state}}>
                    <h1>State Consumer</h1>
                    <h2>{state}</h2>
                    <button onClick={setState("black")}>Change State</button>
                </div>
            )}
        </StateContext.Consumer>
    </div>
  )
}
