// hooks/useSocket.js
"use client";

import { useState, useEffect } from "react";
import io from "socket.io-client";

const socketURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export function useSocket(userId) {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    if (!userId) return;

    const newSocket = io(socketURL, {
      query: { userId },
      transports: ["websocket", "polling"],
    });

    newSocket.on("connect", () => {
      console.log("Socket connected successfully");
      setSocket(newSocket);
    });

    newSocket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    newSocket.on("getOnlineUsers", (users) => {
      // console.log("Received online users:", users);
      setOnlineUsers(users);
    });

    return () => {
      newSocket.close();
    };
  }, [userId]);

  return { socket, onlineUsers };
}