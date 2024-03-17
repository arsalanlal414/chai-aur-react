import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) =>{
    e.preventDefault()
    setUser({username, password})
  }

  return (
    <div>
      <h1>Login</h1>
      <input 
        onChange={(e)=> setUsername(e.target.value)}
        value={username}
        type="text"
        placeholder='username'
      />
      <input 
        onChange={(e)=> setPassword(e.target.value)}
        value={password}
        type="text"
        placeholder='password'
      />
      <button
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  )
}

export default Login