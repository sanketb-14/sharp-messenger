"use client"
import Link from "next/link";
import React from "react";
import Image from "next/image";
// import { useSocketContext } from "../context/SocketContext";
import { useSocket } from "../hooks/useSocket";
import { useChats } from "../context/ChatContext";

const SingleUser = ({ user }) => {
  const{session} = useChats()
  const {onlineUsers} = useSocket(session?.user?.id)

 

;
  const { id, profilePic, fullName } = user;
  const name = fullName.split("").slice(0,8).join("")
  const isOnline = onlineUsers.includes(id)

  
  return (
    <li>
      <Link
        href={`/chats/${id}?profile=${profilePic}&name=${name}`}
        className=" btn flex justify-start items-center bg-base-200 rounded-xl "
      >
        <div className={`avatar relative ${onlineUsers.includes(id) ? "online": "offline"}`}>
          <div className="w-8 mask mask-squircle">
            <Image src={profilePic} fill alt={fullName} className="object cover"  />
          </div>
         
        </div>
        <h1 className="mx-auto text-lg tracking-wider  text-start  capitalize ">
          {name}

        </h1>
        <p className={`text-end border-r-2 p-1 ${onlineUsers.includes(id) ? "text-green-600 border-green-700": "text-accent border-accent"}`}>{isOnline ? "Online": "Offline"  } </p>

      
      </Link>
    </li>
  );
};

export default SingleUser;
