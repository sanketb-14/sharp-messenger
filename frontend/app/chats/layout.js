import ChatSidebar from "../components/ChatSidebar";
import { auth } from "../lib/auth";
console.log("auth" , auth);

const layout = async ({ children }) => {
  const session = await auth()
  

  
  return (
   
     
      <div className="grid grid-cols-[20rem_1fr] h-full   gap-8">
        <ChatSidebar session={session}/>

        <div className="py-1">{children}</div>
      </div>
     
      
  
  );
};
export default layout;
