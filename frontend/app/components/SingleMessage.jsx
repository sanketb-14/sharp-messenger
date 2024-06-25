import { useSearchParams } from "next/navigation";
import { auth } from "../lib/auth";

const SingleMessage = async({chat , userID}) => {
    const {id,senderId,body,createdAt,updatedAt} = chat
    const searchParams = useSearchParams();
    const profile = searchParams.get("profile");
   
    const name = searchParams.get("name");

    const session = await auth()
    console.log(session.user);

    const updatedTime = new Date(updatedAt).toLocaleTimeString()
   
  return (
    <>
    <div className={`chat ${senderId === userID ? "chat-start":"chat-end"}`}>
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img
          alt={name}
          src={profile} />
      </div>
    </div>
    <div className="chat-header">
      {name}
      <time className="text-xs opacity-50 mx-auto">{updatedTime}</time>
    </div>
    <div className="chat-bubble">{body}</div>
    <div className="chat-footer opacity-50">Delivered</div>
  </div>
  <div className="chat chat-end">
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img
          alt="Tailwind CSS chat bubble component"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
    <div className="chat-header">
      Anakin
      <time className="text-xs opacity-50">12:46</time>
    </div>
    <div className="chat-bubble">I hate you!</div>
    <div className="chat-footer opacity-50">Seen at 12:46</div>
  </div>
  </>
  
  )
}

export default SingleMessage
