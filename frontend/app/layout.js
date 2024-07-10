import "./globals.css";
import Navigation from "@/app/components/Navigation";
import { Josefin_Sans } from "next/font/google";

import { ChatProvider } from "./context/ChatContext";
import SocketContextProvider from "./context/SocketContext";

// import dynamic from 'next/dynamic';

// const SocketContextProvider = dynamic(
//   () => import('@/app/context/SocketContext'),
//   { ssr: false }
// );

// const ChatProvider = dynamic(
//   () => import('@/app/context/ChatContext'),
//   { ssr: false }
// );



const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / sharp-messenger",
    default: "Welcome / sharp-messenger",
  },
  description:
    "Modern Way to chat with your Friends,family members and anyone in worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="wireframe">
      <body
        className={`${josefin.className} min-h-screen flex flex-col relative `}
      >
        <SocketContextProvider>
          <ChatProvider>
            <Navigation />
            <div className="flex-1 px-4 py-8 grid">
              <main className="max-w-7xl mx-auto w-full">{children}</main>
            </div>
          </ChatProvider>
        </SocketContextProvider>
      </body>
    </html>
  );
}
