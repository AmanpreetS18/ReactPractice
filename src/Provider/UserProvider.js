import React from 'react'

const UserContext = React.createContext()
export default function () {
    const [user, setUser] = React.useState("aman");
  return (
    <UserContext.Provider>
        
    </UserContext.Provider>
  )
}
