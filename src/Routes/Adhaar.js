import React from 'react'
import { useParams } from 'react-router-dom'
export default function Adhaar() {
    const dynamic2 =useParams();
  return (
    <div>
        <h1>Adhaar</h1>
        <h1>This is adhaar {dynamic2.num}</h1>
        <h1>This is user {dynamic2.user}</h1>
    </div>
  )
}
