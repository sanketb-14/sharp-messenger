"use client";

import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import axiosInstance from "@/helper/axiosInstance";

// import { useSocketContext } from "./SocketContext";
import { useSocket } from "../hooks/useSocket";

const ChatContext = createContext();

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

function ChatProvider({ children }) {
  const [chats, setChats] = useState([]);
  const [session, setSession] = useState();
  const [loading, setLoading] = useState(true);
 

  const params = useParams();
  const { singleChat: userId } = params;
  //   const { socket } = useSocketContext();

  useEffect(() => {
    const getChats = async (userId) => {

      try {
        const response = await axiosInstance.get(
          `${baseUrl}/api/v1/chats/send/${userId}`,
         
        );

        setChats(response.data);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };
    
      getChats(userId);
    
  }, []);

  useEffect(() => {
    const getStoredSession = () => {
      try {
        const storedSession = localStorage.getItem("session");
        if (storedSession) {
          setSession(JSON.parse(storedSession));
        }
      } catch (error) {
        console.error("Error parsing stored session:", error);
      } finally {
        setLoading(false);
      }
    };

    if (typeof window !== "undefined") {
      getStoredSession();
    }
  }, []);

  const { socket } = useSocket(session?.user?.id);

 



  useEffect(() => {
    if (socket) {
      const handleNewMessage = (message) => {
        setChats((prevChats) => {
          // Check if the message already exists to prevent duplicates
          if (!prevChats.some((chat) => chat.id === message.id)) {
            return [...prevChats, message];
          }
          return prevChats;
        });
      };

      socket.on("newMessage", handleNewMessage);

      return () => {
        socket.off("newMessage", handleNewMessage);
      };
    }
  }, [socket]);

  const addChat = async (newChat) => {
    try {
      const { singleChat: userId } = params;
      const res = await axiosInstance.post(
        `${baseUrl}/api/v1/chats/send/${userId}`,
        { message: newChat }
      );
      setTimeout(() => {
        if (socket) {
          socket.emit("newMessage", {
            ...res.data,
            conversationId: res.data.conversationId,
          });
        }
      }, 100);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        chats,
        session,
        loading,
        setChats,
        addChat,
        setSession,
    
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

const useChats = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChats must be used within a ChatProvider");
  }
  return context;
};

export { ChatProvider, useChats };
