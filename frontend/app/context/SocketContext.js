"use client";

import { createContext, useState, useEffect, useContext } from "react";
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

const socketURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
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
    if (socketSession && typeof window !== "undefined") {
      const newSocket = io(socketURL, {
        transports: ["websocket"],
      });

      setSocket(newSocket);

      newSocket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => {
        newSocket.close();
      };
    }
  }, [socketSession]);

  return (
    <SocketContext.Provider
      value={{ socket, onlineUsers, userId: socketSession?.user?.id }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
