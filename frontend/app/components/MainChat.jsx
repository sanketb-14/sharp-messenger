

"use client";

import React, { useEffect } from "react";
import ChatProfile from "./ChatProfile";
import Conversation from "./Conversation";
import { getChats } from "../lib/data-service";
import { useChats } from "../context/ChatContext";
import MessageInput from "./MessageInput";

const MainChat = ({userId, session }) => {
  useEffect(() => {
    const setSession = () => {
      try {
        localStorage.setItem("session", JSON.stringify(session));
      } catch (error) {
        console.error("Error setting stored session:", error);
      }
    };

    if (typeof window !== "undefined") {
      setSession();
    }
  }, []);



  // const { singleChat:userId } = params;
  const { chats, setChats, loading, setSession } = useChats();

  useEffect(() => {
    async function fetchChats() {
      const fetchedChats = await getChats(userId, session);
      await setSession(session);
      setChats(fetchedChats);
    }
    fetchChats();
  }, []);

  return (
    <div className="flex flex-col justify-between relative w-full h-[64rem]">
      <ChatProfile />
      <Conversation myProfile={session} userID={userId} />
      <MessageInput/>
    
    </div>
  );
};

export default MainChat;
