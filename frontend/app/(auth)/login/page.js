import React from 'react'
import SubmitButton from '@/app/components/SubmitButton'
import SignInGoogleBtn from '@/app/components/SignInGoogleBtn'

import Link from 'next/link'
export const metadata = {
  title:{
    template:"%s / sharp-messenger",
    default:"Login / sharp-messenger"

  },
 

}

const Login = () => {
  return (
    <div className="bg-base-200 my-32 ">
    
    
      <div className="card  shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="text-center card-body lg:text-left">
        <h1 className="text-2xl sm:text-4xl text-primary font-bold">
          Login now!
        </h1>
        <p className="py-1">
          
          <span className="font-semibold text-accent text-lg">
            Welcome to sharp-messenger
          </span>
        </p>
       
      </div>

        <form className="card-body"  >
          
        
          
          <div className="form-control">
            <label className="label text-secondary">
              <span className="label-text text-secondary">Email</span>
            </label>
            <input
              type="email"
              name="email"
              
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-secondary">
              <span className="label-text text-secondary">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label  ">
             
            </label>
          </div>
          <SubmitButton  pendingLabel="Registering....">Register</SubmitButton>
          
          
          

         
        </form>
        <span className="border-t-2 "></span>
        <SignInGoogleBtn/>
       
        <Link href="/register" className="text-sm text-center my-2">
            Want to register ?{" "}
            <button className="link link-accent " >
              {" "}
              Click Here
            </button>
          </Link>
      </div>
    </div>
  
  )
}

export default Login
