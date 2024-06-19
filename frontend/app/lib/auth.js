import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUserGoogle, getUserGoogle } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
   

    async signIn({ user, account, profile }) {
   
       
      try {
        const existingGuest = await getUserGoogle(user.email);
        console.log(existingGuest , "existing guest");

        if (!existingGuest)
          await createUserGoogle({
            email: user.email,
            username: user.name,
            password: user.email,
            password_confirmation: user.email,
          });

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    // async session({ session, user }) {
    //     if(user){ 
    //       const existingUser = await getUserGoogle({ email: session.user.email, password: session.user.email });
    //       session.user.id = existingUser ? existingUser.id : null;
    //       return session;
        
    // }
    //   },
  },
  pages: {
    signIn: "/",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
