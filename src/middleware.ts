import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const COOKIE_NAME = 'token';
  let bucket = req.cookies.get(COOKIE_NAME)

  if (req.nextUrl.pathname.startsWith('/risks')) {
    if (!bucket) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }
  if (req.nextUrl.pathname.startsWith('/login')) {
    if (bucket) {
      return NextResponse.redirect(new URL('/risks', req.url))
    }
  }
}