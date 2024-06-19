
import { signInAction } from "@/app/lib/action"

function SignInGoogleBtn(){
    return (
       <form action={signInAction}>
         <button className=' text-lg w-full btn bg-transparent  font-medium'>
        <img
          src='https://authjs.dev/img/providers/google.svg'
          alt='Google logo'
          height='24'
          width='24'
        />
        <span>Continue with Google</span>
      </button>
       </form>
    )
}
export default SignInGoogleBtn