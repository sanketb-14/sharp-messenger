import React from 'react'
import { getUsers } from '../lib/data-service'
import SingleUser from './SingleUser'

const ChatSidebar = async() => {
    const chatUsers = await getUsers()
    
  return (
    <div className='h-screen max-w-3xl rounded-2xl  shadow-2xl p-2 card card-compact'>
        <ul className='card-body '>
        {chatUsers.map(user => (<SingleUser user={user} key={user.id}/>))}
        </ul>

      
    </div>
  )
}

export default ChatSidebar
