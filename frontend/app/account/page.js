import { auth } from "../lib/auth";

export const metadata = {
  title: {
    template: "%s / sharp-messenger",
    default: "My-account / sharp-messenger",
  },
};

const page = async () => {
  const session = await auth();
 

  return <div>
    <h1 className="text-2xl text-secondary">Welcome{session?.user?.name}</h1>
  </div>;
};

export default page;
