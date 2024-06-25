import Link from "next/link";
import React from "react";
import Image from "next/image";

const SingleUser = ({ user }) => {
  const { id, profilePic, fullName } = user;
  const name = fullName.split("").slice(0,8).join("")
  return (
    <li>
      <Link
        href={`/chats/${id}?profile=${profilePic}&name=${name}`}
        className=" min-h-16 btn flex justify-start items-center bg-base-200 rounded-xl "
      >
        <div className="avatar relative">
          <div className="w-12 mask mask-squircle">
            <Image src={profilePic} fill alt={fullName} className="object cover"  />
          </div>
         
        </div>
        <h1 className="mx-auto text-lg tracking-widest  text-start text-primary-content capitalize ">
          {name}
        </h1>

      
      </Link>
    </li>
  );
};

export default SingleUser;
