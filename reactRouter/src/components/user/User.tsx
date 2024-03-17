import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userId} = useParams()
  return (
    <div className='m-6 p-6  text-center'>
        <h1 className='font-bold text-3xl'>User: {userId?.toUpperCase()}</h1>
    </div>
  )
}

export default User