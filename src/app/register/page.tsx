"use client";

import axios from "axios";
import React, { useState } from "react";
import Image from "next/image";
import img from "@/images/registerImg.jpg";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
    <div className="flex min-h-[calc(100vh-80px)]">
      {/* Form Section */}
      <div className="flex flex-col justify-center w-full lg:w-2/5 px-8 md:px-16">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-10">
            <h2 className="text-4xl font-black text-zinc-900 mb-2 tracking-tighter">
              Join TrackEats.
            </h2>
            <p className="text-zinc-500 font-medium">
              Start your journey nutrition tracking.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-2 uppercase tracking-wider">
                Username
              </label>
              <input
                type="text"
                placeholder="johndoe"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border-2 border-zinc-100 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors bg-zinc-50/50"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-2 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-zinc-100 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors bg-zinc-50/50"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-2 uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-2 border-zinc-100 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors bg-zinc-50/50"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-zinc-900 text-white font-bold py-4 rounded-xl hover:bg-zinc-800 transition-all shadow-lg active:scale-[0.98]"
              >
                Create Account
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-zinc-400 font-medium">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-indigo-600 font-bold hover:underline"
            >
              Log in here
            </Link>
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:flex items-center justify-center w-3/5 p-8">
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={img}
            alt="Register Illustration"
            fill
            className="object-cover transition-transform duration-1000 hover:scale-105"
            priority
          />
          {/* Subtle overlay to match the brand vibe */}
          <div className="absolute inset-0 bg-zinc-900/10 mix-blend-multiply" />
        </div>
      </div>
    </div>
  );
}
