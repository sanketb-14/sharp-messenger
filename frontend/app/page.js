import Image from "next/image";

import bg_img from '../public/main-bg.png'
import Link from "next/link";
import { auth } from "./lib/auth";



export default async function Home() {
  const session = await auth()
 
  return (
  <main className="opacity-90  ">
    <Image  src={bg_img} fill  className="object-cover object-top" alt="the-orchid hotel image" placeholder="blur" />
    <div className="w-full flex justify-center flex-col items-center">
    <h1 className="relative z-10 text-3xl sm:text-7xl font-bold text-center text-grey-200 tracking-wide">Welcome to Sharp-Messenger </h1>
    {session?.user ? <Link href="/chats" className=" btn btn-primary z-10 w-auto  flex items-center justify-center">
    Go to your chat-room
    </Link> : <Link href="/login" className="btn btn-primary z-10 w-auto "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
</svg>Please login , to access your chats </Link> }


    </div>
  </main>
  );
}



