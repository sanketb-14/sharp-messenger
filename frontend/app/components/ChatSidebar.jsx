import { getUsers } from "@/app/lib/data-service";
import SingleUser from "./SingleUser";

const ChatSidebar = async ({session}) => {
  console.log("session", session);
  
  const users = await getUsers(session);

  return (
    <div className="h-screen max-w-3xl rounded-2xl shadow-2xl p-2 card card-compact">
      <ul className="card-body ">
        {users.map((user) => (
          <SingleUser user={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
