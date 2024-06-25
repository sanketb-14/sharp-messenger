"use client";
import { getChats } from "../lib/data-service";

import { useState, useEffect, useCallback } from "react";
import { useOptimistic } from "react";
import SingleMessage from "./singleMessage";

const Conversation = ({ initialChats, userID }) => {
  const [chats, setChats] = useState(initialChats || []);
  const [optimisticChats, addOptimisticChat] = useOptimistic(
    chats,
    (state, newChat) => [...state, newChat]
  );

  // useEffect(() => {

  //     const fetchChats = async() => {
  //     try {
  //         const fetchChats = await getChats(singleChat)
  //         setChats(fetchChats)
  //         console.log(fetchChats , "Chats fetched");
  //     } catch (error) {
  //         console.log("Error fetching chats: ", error);
  //     }
  // }
  // fetchChats()

  // },[])

  console.log("Chats fetched", chats);

  // const handleSendMessage = useCallback(async (message) => {
  //     // Optimistically add the new message
  //     const optimisticMessage = { id: Date.now(), body: message, pending: true }
  //     addOptimisticChat(optimisticMessage)

  //     try {
  //         // Actually send the message
  //         const sentMessage = await sendMessage(message)

  //         // Update the chats with the confirmed message
  //         setChats(currentChats =>
  //             currentChats.map(chat =>
  //                 chat.id === optimisticMessage.id ? sentMessage : chat
  //             )
  //         )
  //     } catch (error) {
  //         console.error("Error sending message:", error)
  //         // Remove the optimistic message if there was an error
  //         setChats(currentChats =>
  //             currentChats.filter(chat => chat.id !== optimisticMessage.id)
  //         )
  //     }
  // }, [addOptimisticChat])

  return (
    <div className="w-full h-screen mt-8 m-2 rounded-lg ">
      {chats.map(chat =>  <SingleMessage chat={chat} userID={userID} key={chat.id} />
      )}
    </div>
  );
};

export default Conversation;
