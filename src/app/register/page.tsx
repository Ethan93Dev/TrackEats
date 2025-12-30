"use client";

import axios from "axios";
import React, { useState } from "react";
import Image from "next/image";
import img from "@/images/registerImg.jpg";
import { useRouter } from "next/navigation";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("/api/register", { username, email, password });

      setUsername("");
      setEmail("");
      setPassword("");
      router.push("/login");
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Form section */}
      <div className="flex flex-col justify-center w-2/5 px-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-bold mb-6">Create Account</h2>

          <div>
            <label className="block mb-1 font-semibold">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            Register
          </button>
        </form>
      </div>

      {/* Image card section */}
      <div className="flex items-center justify-center w-3/5 p-12">
        <div className="relative w-full max-w-3xl h-120 rounded-xl overflow-hidden shadow-xl">
          <Image
            src={img}
            alt="Register"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
