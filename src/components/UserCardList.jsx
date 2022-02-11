import React from 'react'
import UserCard from './UserCard'

const UserCardList = ({ users }) => {

    let id = 0;

    return (
        <div className='container'>
            {users.length < 1 && <img src="./gitlogo.png"/>}
            {users.map( user => {
                return(
                    <div className='card' key={id++} >
                        <UserCard  user={user}/>
                    </div>
                )
            })}
        </div>
    )
}

export default UserCardList