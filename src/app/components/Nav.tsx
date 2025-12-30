"use client"; // Required for the toggle/auth state logic

import React, { useState } from "react";
import Link from "next/link";

export default function Nav() {
  // Replace this with your actual auth hook later
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-black shadow py-4 mb-8">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl ">T</span>
          </div>
          <span className="text-xl font-bold  text-white">TrackEats</span>
        </Link>

        {/* Right Side: Auth Actions */}
        <div className="flex items-center gap-6">
          {isLoggedIn ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm font-medium italic text-white hover:text-blue-400"
              >
                Dashboard
              </Link>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-sm font-medium  px-4 py-2 rounded-full border border-gray-400 text-white hover:bg-gray-800 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsLoggedIn(true)}
                className="text-sm font-medium  text-white hover:text-blue-400"
              >
                Demo Login
              </button>
              <Link
                href="/signup"
                className="text-sm font-medium  bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-gray-800 transition shadow-sm"
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
