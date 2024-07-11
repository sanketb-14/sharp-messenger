
"use client";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";

const SingleMessage = ({ chat, myProfile }) => {
  const params = useParams();

  const { singleChat: userID } = params;
  if (!chat) {
    return null; // or return a placeholder component
  }

  const { senderId, body, createdAt, updatedAt } = chat;
  const searchParams = useSearchParams(userID);
  const profile = searchParams.get("profile");
  const name = searchParams.get("name");

  const userProfilePic =
    senderId === userID
      ? profile
      : myProfile?.user?.profilePic || myProfile?.user?.image;


  const updatedTime = new Date(updatedAt).toLocaleTimeString();

 

  return (
    <div className={`chat ${senderId === userID ? "chat-start" : "chat-end"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full relative">
          <Image
            src={userProfilePic || "/default-avatar.png"} // Provide a default avatar
            alt={senderId === userID ? myProfile?.user?.username : "user"}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="chat-header">
        {senderId === userID ? name : "You"}
        <time className="text-xs opacity-50 mx-2">{updatedTime}</time>
      </div>
      <div
        className={`chat-bubble ${senderId !== userID ? "bg-base-300" : ""}`}
      >
        {body}
      </div>
      <div className="chat-footer opacity-50">
        {senderId !== userID ? "seen" : "delivered"}
      </div>
    </div>
  );
};

export default SingleMessage;
