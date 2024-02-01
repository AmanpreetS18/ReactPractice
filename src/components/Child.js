import React from 'react'

function child( {children} ) {
  return (
    <div>
        <h1>Child prop</h1>
        {children}
    </div>
  )
}

export default child