
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/main-logo.png'
import { auth } from '../lib/auth'
import SignOutButton from './SignOutButton'

// import ThemeChanger from '@/components/ThemeChanger'




const Navigation = async() => {
    const session = await auth()
    console.log(session);
    
    
   
    
  return (
    <div className='navbar max-w-8xl flex bg-transparent z-10 mx-auto'>
        <Link href='/' className="flex-1 ">
            <Image src={Logo} width={60} height={60} alt="the-orchid" className='rounded-full mx-2 shadow-xl  border-white'/>
            <p className='hidden sm:inline text-3xl  font-semibold  tracking-wider text-primary-focus'>Sharp-Messenger</p>
        </Link>
        <div className="flex-0">
            <ul className='menu menu-sm sm:menu-lg menu-horizontal px-1 text-accent '>
                
                <li  className='text-sm sm:text-lg'>
                    <Link href='/chats'>Chat-room</Link>
                </li>
                <li  className=' text-sm sm:text-lg text-accent'>
                    {session?.user?.image ? (<Link href="/account" className='hover:text-accent transition-colors'><img className='rounded-full w-8' src={session.user.image} alt={session.user.name}  referrerPolicy='no-referrer'/>{session.user.name}</Link>): <Link href='/account'>Account</Link>}
                   
                </li> 
                <li  className=''>
                    {session?.user ? <SignOutButton/>: ""}
                   
                </li>
                {/* {/* <li>{<ThemeChanger/>}</li> */}
            </ul>
        </div>
      
    </div>
  )
}

export default Navigation
