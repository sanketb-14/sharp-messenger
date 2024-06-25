"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

const ChatProfile = () => {
  const searchParams = useSearchParams();
  const profile = searchParams.get("profile");
 
  const name = searchParams.get("name");

  return (
    <div className="w-full bg-base-200 flex justify-start items-center p-2  shadow-xl rounded-xl text-xl  text-center uppercase border-b-2 border-secondary ">
      <div className="avatar relative mx-8">
        <div className="w-12 mask mask-squircle">
          <Image src={profile} fill alt={name} className="object cover" />
        </div>
      </div>

      {name && <h2>{name}</h2>}
    </div>
  );
};

export default ChatProfile;
