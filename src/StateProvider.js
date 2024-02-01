import React from 'react'
import StateConsumer from './StateConsumer'
const StateContext = React.createContext();

export default function StateProvider() {
  const [state, setState] =React.useState("white");
  return (
    <div>
        <StateContext.Provider value={{state,setState}}>
            <StateConsumer />
        </StateContext.Provider>
        
    </div>
  )
}
export {StateContext}
