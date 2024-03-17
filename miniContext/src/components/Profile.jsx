import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)
  
  if(!user) {
    return(
      <div>Please Lgin</div>
    )
  }

  return <h2>welcome {user?.username}</h2>
}

export default Profile
