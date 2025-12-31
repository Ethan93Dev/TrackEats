"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // On mount, check auth status
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/api/auth");
        setIsLoggedIn(res.data.authenticated);
      } catch {
        setIsLoggedIn(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.delete("/api/logout");
      setIsLoggedIn(false);
      router.push("/");
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <nav className="bg-black shadow py-4 mb-8">
      <div className="max-w-375 mx-auto px-6 sm:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <span className="text-xl font-bold text-white">TrackEats</span>
        </Link>

        <div className="flex items-center gap-6">
          {isLoggedIn ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-white hover:text-blue-400"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm font-medium px-4 py-2 rounded-full border border-gray-400 text-white hover:bg-blue-800 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-white hover:text-blue-400"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-sm font-medium bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition shadow-sm"
              >
                Join Free
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
