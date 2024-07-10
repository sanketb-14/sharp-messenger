import { auth } from "@/app/lib/auth"; 
export const middleware = auth 

export const config = {
  matcher:["/account","/chats"]
};

import { NextResponse } from 'next/server'
import squareWasm from './square.wasm?module'
 
export default async function middleware() {
  const m = await WebAssembly.instantiate(squareWasm)
  const answer = m.exports.square(9)
 
  const response = NextResponse.next()
  response.headers.set('x-square', answer.toString())
  return response
}