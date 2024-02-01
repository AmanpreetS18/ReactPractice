import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
  const dynamic1 = useParams();
  return (
    <div>
      <h1>I am {dynamic1.user}</h1>
    </div>
  )
}