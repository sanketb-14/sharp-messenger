import Image from 'next/image';
import chatLogo from "@/public/chatBg.svg"



const page = async() => {

  return (
    <div className='max-w-3xl flex justify-center items-center top-40 relative flex-col '>
       <p className='text-center tracking-wider text-secondary font-semibold text-4xl'>Choose your Friend to start your chat...</p>
     <Image src={chatLogo}  className='object-cover' alt="chat-logo"/>
      
    </div>
  )
}

export default page
