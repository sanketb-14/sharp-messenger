import React from 'react'
import Link from 'next/link'
import SubmitButton from '@/app/components/SubmitButton'
import SignInGoogleBtn from '@/app/components/SignInGoogleBtn'
import { createUser } from '@/app/lib/action'

export const metadata = {
  title:{
    template:"%s / sharp-messenger",
    default:"Register / sharp-messenger"

  },
 

}

const SignUp = () => {
  return (
    <div className="  bg-base-200 mt-32">
      <div className=" card card-compact flex flex-col justify-end items-end">
        
        <div className="card-body  shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="text-center ">
          <h1 className="text-xl sm:text-2xl text-primary font-bold">
            Register here!
          </h1>
          <p className="py-6">
            Explore New chatting experience{" "}
            <span className="font-semibold text-accent text-lg">
              Welcome 
            </span>
          </p>

          
        </div>
          <form className="card-body"  >
            {/* {error && <Error error={error} />} */}
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-secondary">Username</span>
              </label>
              <input
                type="text"
                name="username"
                // value={authState.username}
                placeholder="Username"
                // onChange={(e) => handleChange(e)}
                className="input input-bordered"
                required
              />
          
              <label className="label">
                <span className="label-text text-secondary">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                // value={authState.email}
                name="email"
                // onChange={(e) => handleChange(e)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-secondary">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                // value={authState.password}
                // onChange={(e) => handleChange(e)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-secondary">
                  confirm password
                </span>
              </label>
              <input
                type="text"
                placeholder="confirm password"
                // value={authState.password_confirmation}
                name="password_confirmation"
                // onChange={(e) => handleChange(e)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
             <SubmitButton pendingLabel="Loading..." >Register</SubmitButton>
            </div>
          
          </form>
          <span className="border-t-2 "></span>
            <SignInGoogleBtn/>

            <div className="text-sm text-center">
              Already Member ?{" "}
              <Link href="/login" className="link link-accent ">
                {" "}
                Please Login{" "}
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
