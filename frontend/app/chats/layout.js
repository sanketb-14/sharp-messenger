import ChatSidebar from "../components/ChatSidebar";
const layout = async({children}) =>{
    return (
        <div className='grid grid-cols-[20rem_1fr] h-full   gap-8'>
        <ChatSidebar/>
        <div className='py-1'>{children}</div>
      
    </div>
    )
}
export default layout;