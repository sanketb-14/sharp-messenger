"use client";
import { useState } from "react";

import { useChats } from "../context/ChatContext";

const MessageInput = () => {
  const { addChat } = useChats();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.trim()) {
      await addChat(message.trim());
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 flex ">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="input input-bordered w-full"
      />
      <button type="submit" className="btn btn-primary ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
        </svg>
      </button>
    </form>
  );
};

export default MessageInput;
