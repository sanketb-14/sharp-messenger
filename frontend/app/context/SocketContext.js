"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { initSocket, getSocket } from "@/helper/socketClient";

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

const socketURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const SocketContextProvider = ({ children }) => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [socketSession, setSocketSession] = useState();

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
      const socket = initSocket(socketURL);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => {
        socket.emit("disconnect");
        socket.close();
      };
    }
  }, [socketSession]);

  return (
    <SocketContext.Provider
      value={{ socket: getSocket(), onlineUsers, userId: socketSession?.user?.id }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;