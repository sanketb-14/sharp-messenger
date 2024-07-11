import { auth } from "../lib/auth";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: {
    template: "%s / sharp-messenger",
    default: "My-account / sharp-messenger",
  },
};

const page = async () => {
  const session = await auth();

  return (
    <div>
      <div className="w-2xl card-body rounded shadow-xl bg-base-200 flex justify-between text-center items-center flex-row mt-20">
        <Image src={session?.user?.image} alt={session?.user?.name} width={100} height={100} className="rounded-xl shadow-xl" />
        <h1 className="text-4xl font-semibold text-accent">
          Welcome{" "}
          <span className="text-2xl text-red-300">{session?.user?.name}</span>
        </h1>
        <Link href="/chats" className="btn btn-md btn-accent">Go to your chat section</Link>
      </div>
      
    </div>
  );
};

export default page;
