import { Suspense } from "react";
import Loader from "@/app/components/Loader";
import MainChat from "@/app/components/MainChat";
import { auth } from "@/app/lib/auth";

// export const revalidate = 3600

export async function generateMetadata({ params }) {
  return {
    title: `Chat-room`,
  };
}

// export async function generateStaticParams(){

//   return params.singleChat
// }

const Page = async ({ params }) => {
  const session = await auth();

  const { singleChat: userId } = params;

  return (
    <div className="max-w-4xl rounded-xl  h-fit shadow-2xl p-4">
      <Suspense fallback={<Loader />}>
        <MainChat userId={userId} session={session} />
      </Suspense>
    </div>
  );
};

export default Page;
