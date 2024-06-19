

import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const UserSignUp = ({ children }) => {
 
  function handleSign(){
    setSign(!sign)
  }
  return (
    <div className="w-full ">
    <Login />
      
    </div>
  );
};

export default UserSignUp;
