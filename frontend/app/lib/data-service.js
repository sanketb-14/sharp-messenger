import axios from "axios";
import { auth } from "./auth";

export async function getGuest(user) {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  console.log(baseUrl);

  const res = await axios.post(`${baseUrl}/api/v1/auth/login`, user, {
    headers: {
      "Content-Type": "application/json",
    },
  });


  if (res.data.status === "fail" || res.data.status === "error") {
    console.error("API returned fail or error status:", res.data);
    throw new Error(res.data.message || "Authentication failed");
  }

  return res.data;
}

export async function createGuest(formData) {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
 

    const response = await axios.post(
      `${baseUrl}/api/v1/auth/signup`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    


    return response.data;
  

}

export const getUsers = async function() {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const session = await auth();
  

    if (!session || !session.accessToken) {
      throw new Error('No authentication token available');
    }

    
    
    const response = await axios.get(`${baseUrl}/api/v1/chats/allUsers`, {
      headers: {
        'Authorization': `Bearer ${session.accessToken}`
      },
      withCredentials: true
    });
    
    
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    console.error('Error config:', error.config);
    throw error;
  }
}

export const getChats = async function(userId , accessToken) {
  console.log("paramssssssssss-data", userId);
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    if (!accessToken) {
      throw new Error('No authentication token available');
    }

    
    
    const response = await axios.get(`${baseUrl}/api/v1/chats/send/${userId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
      withCredentials: true
    });
    
    console.log('conversation Response received:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    console.error('Error config:', error.config);
    throw error;
  }
}
  
  



