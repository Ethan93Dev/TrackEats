// app/api/logout/route.ts (Next.js 13+ app router)

import { NextResponse } from "next/server";

export async function DELETE() {
  const res = NextResponse.json({ message: "Logged out successfully" });

  res.cookies.set("token", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return res;
}
