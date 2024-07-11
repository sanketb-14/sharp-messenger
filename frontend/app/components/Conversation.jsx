"use client";

import { useState, useEffect, useCallback } from "react";
import { useOptimistic } from "react";
import SingleMessage from "./SingleMessage";

import MessageInput from "./MessageInput";
import { useParams } from "next/navigation";
import { useChats } from "../context/ChatContext";
;




const Conversation = ({ myProfile }) => {
 
  const { chats,addChat,setChats } = useChats();


 

  // const { socket, onlineUsers } = useSocketContext();

  // const [optimisticChats, addOptimisticChat] = useOptimistic(
  //   chat,
  //   (state, newChat) => [...state, newChat]
  // );



  if (chats.length < 1)
    return (
      <h1 className="font-semibold h-96 text-center text-2xl text-accent mt-40">
        Not any Conversation .....!
      </h1>
    );

  return (
    <div className="w-full   mt-8 m-2 rounded-lg  flex flex-col justify-start h-full overflow-auto">
      {chats.map((chat) => (
        <SingleMessage
          chat={chat}
          key={chat.id}
          myProfile={myProfile}
        ></SingleMessage>
      ))}
    
    </div>
  );
};

export default Conversation;
