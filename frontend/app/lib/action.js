"use server"
import axios from 'axios';
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { redirect } from "next/navigation";
import { createUserGoogle } from "./data-service";
export async function signInAction() {
    await signIn("google", { redirectTo: "/account" });
    revalidatePath("/login")
  }

  export async function signOutAction() {
    await signOut({ redirectTo: "/" });
  }
