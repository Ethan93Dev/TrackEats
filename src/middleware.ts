import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // Protect /dashboard and any nested routes
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      // Redirect to login if no token
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Continue if token exists or route is public
  return NextResponse.next();
}

// Specify which paths this middleware applies to
export const config = {
  matcher: ["/dashboard/:path*"],
};
