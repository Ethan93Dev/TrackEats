"use client";

import axios from "axios";
import React, { useState } from "react";
import Image from "next/image";
import img from "@/images/test.jpg";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Helper to fill credentials for recruiters
  const handleDemoLogin = () => {
    setEmail("react1@gmail.com");
    setPassword("password");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/login", { email, password });
      router.push("/dashboard");
    } catch (e) {
      console.error("Error login", e);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)]">
      <div className="flex flex-col justify-center w-full lg:w-2/5 px-8 md:px-16">
        <div className="max-w-md w-full mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-4xl font-black text-zinc-900 mb-2 tracking-tighter">
              Welcome back.
            </h2>
            <p className="text-zinc-500 font-medium">
              Log in to manage your daily eats.
            </p>
          </div>

          {/* Recruiter / Demo Note */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-700">
                Recruiter Demo
              </p>
            </div>
            <p className="text-sm text-indigo-900/70 mb-4">
              Use the credentials below to explore the app without creating an
              account.
            </p>
            <div className="flex items-center justify-between bg-white rounded-lg p-3 border border-indigo-200">
              <code className="text-xs font-mono text-indigo-600">
                react1@gmail.com / password
              </code>
              <button
                onClick={handleDemoLogin}
                className="text-[10px] font-bold bg-indigo-600 text-white px-2 py-1 rounded hover:bg-indigo-700 transition"
              >
                AUTO-FILL
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-2 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-zinc-100 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors bg-zinc-50/50"
                required
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
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-2 border-zinc-100 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors bg-zinc-50/50"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-zinc-900 text-white font-bold py-4 rounded-xl hover:bg-zinc-800 transition-all shadow-lg"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      {/* Image section */}
      <div className="hidden lg:flex items-center justify-center w-3/5 p-8">
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
          <Image src={img} alt="Login" fill className="object-cover" priority />
        </div>
      </div>
    </div>
  );
}
