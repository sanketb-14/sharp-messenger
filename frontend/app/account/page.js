import { auth } from "../lib/auth"

export const metadata = {
    title:{
      template:"%s / sharp-messenger",
      default:"My-account / sharp-messenger"
  
    },
   
  
  }

const page = async () => {
    const session = await auth()
    console.log(session);
  return (
    <div>
        <h1>{`hello ${session?.user.name}`}</h1>
      
    </div>
  )
}

export default page
