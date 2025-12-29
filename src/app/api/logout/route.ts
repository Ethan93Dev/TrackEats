import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({
    message: "Logged out successfully",
  });

  // Clear the cookie by setting maxAge to 0 and empty value
  res.cookies.set("token", "", {
    httpOnly: true,
    path: "/", // Make sure path matches where the cookie was originally set
    maxAge: 0,
    sameSite: "lax", // Optional: helps prevent CSRF attacks
    secure: process.env.NODE_ENV === "production", // Optional: send cookie only over HTTPS in prod
  });

  return res;
}
