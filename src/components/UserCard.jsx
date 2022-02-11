import React from 'react'

const UserCard = ({user}) => {

  return (
    <div className='foundUser'>
        <img src={user.avatar}/>
        <h1>{user.name}</h1>
        <p>{user.bio}</p>
    </div>
  )
}

export default UserCard