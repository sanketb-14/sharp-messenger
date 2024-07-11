import axios from "axios";
import { auth } from "./auth";
import { useChats } from "../context/ChatContext";


const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getGuest(user) {
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
  const response = await axios.post(`${baseUrl}/api/v1/auth/signup`, formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
}

export const getUsers = async function (session) {
  try {
    const response = await axios.get(`${baseUrl}/api/v1/chats/allUsers`, {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw error;
  }
};



export const getChats = async function (userId, session) {
  if (!session || !session.accessToken) {
    throw new Error("No authentication token available");
  }
  try {
    const response = await axios.get(`${baseUrl}/api/v1/chats/send/${userId}`, {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
      withCredentials: true,
    });

    // console.log('conversation Response received:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error.message);

    throw error;
  }
};

export const myProfile = async () => {
  
  if (!session || !session.accessToken) {
    throw new Error("No authentication token available");
  }
  try {
    const response = await axios.get(`${baseUrl}/api/v1/auth/me`, {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error.message);
  }
};

export const sendMessageAction = async (message) => {
  console.log("Sending message:", message);

  try {
    const chatUrl = `api/v1/chats/send/${chatId}`;
    const response = await axiosInstance.post(chatUrl, { message });

    console.log("Message Response received:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error sending message:", error.message);

    throw error;
  }
};
