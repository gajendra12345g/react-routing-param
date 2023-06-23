import React from 'react'
import { useSearchParams } from 'react-router-dom'
const User = () => {
    const [searchParams] = useSearchParams();
    const name=searchParams.get('name')
  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}

export default User