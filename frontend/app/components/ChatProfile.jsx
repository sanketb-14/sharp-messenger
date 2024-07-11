"use client";

import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
// import { useSocketContext } from "../context/SocketContext";
import { useSocket } from "../hooks/useSocket";
import { useChats } from "../context/ChatContext";

const ChatProfile = () => {
  const searchParams = useSearchParams();
  const profile = searchParams.get("profile");
  const {session} = useChats()
  

  const {onlineUsers} = useSocket(session?.user?.id)
  const params = useParams()

  const {singleChat:userId} = params


  const isOnline = onlineUsers.includes(userId)
 
  const name = searchParams.get("name");

  return (
    <div className="w-full bg-base-200 flex justify-start items-center p-2  shadow-xl rounded-xl text-xl  text-center capitalize border-b-2 border-secondary ">
      <div className={`avatar relative mx-8 ${isOnline ? "online": "offline"}`}>
        <div className="w-12 mask mask-squircle">
          <Image src={profile} fill alt={name} className="object cover" />
        </div>
      </div>

      {name && <h2>{name}
        <p className="text-xs text-accent">{isOnline ? "Online" : "Offline"}</p>
        </h2>}
    </div>
  );
};

export default ChatProfile;
