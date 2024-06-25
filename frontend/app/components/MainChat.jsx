import React from 'react'
import ChatProfile from './ChatProfile'
import Conversation from './Conversation'

const MainChat = ({initialChats , userID}) => {
  console.log();
  return (
    <div>
      <ChatProfile/>
      <Conversation  initialChats={initialChats} userID={userID} />
      
    </div>
  )
}

export default MainChat
