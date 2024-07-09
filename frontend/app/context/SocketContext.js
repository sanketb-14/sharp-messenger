"use client";

import { createContext, useState, useEffect, useContext, useRef } from "react";
import io from "socket.io-client";

const SocketContext = createContext(undefined);

export const useSocketContext = () => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error(
      "useSocketContext must be used within a SocketContextProvider"
    );
  }
  return context;
};

const socketURL =
  process.env.NODE_ENV === "development" ? "http://localhost:4000" : "/";

const SocketContextProvider = ({ children, session }) => {
  const socketRef = useRef(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [socketSession, setSocketSession] = useState();

  const userId = socketSession?.user?.id;

  useEffect(() => {
    const getStoredSession = () => {
      try {
        const storedSession = localStorage.getItem("session");
        if (storedSession) {
          setSocketSession(JSON.parse(storedSession));
        }
      } catch (error) {
        console.error("Error parsing stored session:", error);
      } 
    };

    if (typeof window !== "undefined") {
      getStoredSession();
    }
  }, []);

  useEffect(() => {
    if (socketSession) {
      const socket = io(socketURL, {
        transports: ["websocket"],
        query: {
          userId,
        },
      });
      socketRef.current = socket;

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

    //   socket.on("newMessage", (message) => {
    //     console.log("New message received via socket:", message);
    //     // You can implement a callback or use a context function to handle the received message
    //   });

      return () => { 
        socketRef.emit("disconnect");
        socket.close();
        socketRef.current = null;
      };
    } else if (!socketSession && socketRef.current) {
      socketRef.current.close();
      socketRef.current = null;
    }
  }, [socketSession]);

  return (
    <SocketContext.Provider
      value={{ socket: socketRef.current, onlineUsers, userId: socketSession?.user.id }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
