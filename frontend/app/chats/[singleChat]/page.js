
import { Suspense } from "react";
import Loader from "@/app/components/Loader";
import MainChat from "@/app/components/MainChat";
import { getChats } from "@/app/lib/data-service";

import { auth } from "@/app/lib/auth";
import {authOptions} from '@/app/api/auth/[...nextauth]/route'


// export const revalidate = 3600

export async function generateMetadata({params}) {
 
  return {
    title: `Chat with ${params.singleChat}`,
  };
}


const Page =async ({params}) => {
 const {singleChat} = params
;

  let chats = []
  let error = null

  try {
    const session = await auth();
    if (!session || !session.accessToken) {
      throw new Error('No authentication token available');
    }

    // Assuming you want to fetch all chats, adjust the params as needed
    chats = await getChats(singleChat , session.accessToken);
    // or whatever parameter is appropriate
  } catch (err) {
    console.error('Error fetching chats:', err);
    error = err.message;
  }
  
  return (
    <div className="max-w-4xl rounded-xl h-screen shadow-2xl p-4">
     

      <Suspense fallback={<Loader />} >
      {error ? (
          <div className="text-red-500">Error loading chats: {error}</div>
        ) : (
          <MainChat initialChats={chats} userID={singleChat} />
        )}
      </Suspense>
    </div>
  );
};

export default Page;
