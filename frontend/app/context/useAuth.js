// hooks/useAuth.js
// import { useState, useEffect } from 'react';


// export const useAuth = () => {
//   const [authUser, setAuthUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const initAuth = async () => {
//       try {
//         const session = await auth();
//         setAuthUser(session.user);
//       } catch (error) {
//         console.error("Authentication failed:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     initAuth();
//   }, []);

//   return { authUser, loading };
// };