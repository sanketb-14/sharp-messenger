import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { logoutAction, signOutAction } from '@/app/lib/action';

function SignOutButton() {
  return (
    <form action={ signOutAction}>
      <button className='btn  w-full tracking-widest bg-red-500 text-white border-none font-bold btn-sm '>
      <ArrowRightOnRectangleIcon className='h-5 w-5 text-primary-600' />
      <span>Sign out</span>
    </button>
    </form>
  );
}

export default SignOutButton;