import axios from "axios"

export async function getUserGoogle(user){
  console.log(user);
  console.log(`${process.env.BACKEND_URL}/api/v1/auth/user-present`);
  const res  = await axios.get(`${process.env.BACKEND_URL}/api/v1/auth/user-present`,user)
  console.log(res);
}

export async function createUserGoogle(newUser){
  console.log(newUser);
  const res  = await axios.post(`${process.env.BACKEND_URL}/api/v1/auth/signup`,{newUser})
  console.log(res);
}