"use client";
import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

const AuthContext = createContext();

const initialState = {
  isAuth: false,
  username: "",
  fullName: "",
  profilePic: "",
};

function AuthProvider({ children }) {

  const [user, setUser] = useState(initialState  );
  const [error , setError] = useState("")
  useEffect(()=> {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  },[]);

  function logOut() {
    setUser(initialState);
  }
  async function createUser(formData) {
  
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  

   
    try {
      const res = await axios.post(`${baseUrl}/api/v1/auth/signup`, formData);
      const { username, fullName, profilePic } = res.data.data.user;
      
      setUser({
        isAuth: true,
        username,
        fullName,
        profilePic,
      });

      localStorage.setItem("user", JSON.stringify(res.data.data.user));
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, logOut, createUser }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useReservation must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
