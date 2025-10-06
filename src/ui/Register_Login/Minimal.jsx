
import React from "react";
import { useState } from "react";

const Minimal = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 p-4 dark:from-purple-950 dark:to-indigo-900">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 dark:from-purple-500/10 dark:to-indigo-500/10"></div>

        <div className="relative p-8">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-indigo-400">
              Kaisen UI
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {isLogin ? "Sign in to your account" : "Create your account"}
            </p>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out ${isLogin ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 absolute"}`}
          >
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg border border-purple-200 bg-white/50 p-3 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 dark:border-purple-800 dark:bg-gray-800/50 dark:focus:border-purple-500"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-lg border border-purple-200 bg-white/50 p-3 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 dark:border-purple-800 dark:bg-gray-800/50 dark:focus:border-purple-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800"
                  />
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                </label>
                <a href="#" className="text-sm font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400">
                  Forgot password?
                </a>
              </div>
              <button className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 p-3 text-white shadow-lg shadow-purple-500/20 transition hover:shadow-purple-500/40 dark:from-purple-700 dark:to-indigo-700 dark:shadow-purple-800/20 dark:hover:shadow-purple-800/40">
                Sign in
              </button>
            </div>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out ${!isLogin ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 absolute"}`}
          >
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-purple-200 bg-white/50 p-3 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 dark:border-purple-800 dark:bg-gray-800/50 dark:focus:border-purple-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg border border-purple-200 bg-white/50 p-3 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 dark:border-purple-800 dark:bg-gray-800/50 dark:focus:border-purple-500"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-lg border border-purple-200 bg-white/50 p-3 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 dark:border-purple-800 dark:bg-gray-800/50 dark:focus:border-purple-500"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full rounded-lg border border-purple-200 bg-white/50 p-3 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 dark:border-purple-800 dark:bg-gray-800/50 dark:focus:border-purple-500"
                />
              </div>
              <button className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 p-3 text-white shadow-lg shadow-purple-500/20 transition hover:shadow-purple-500/40 dark:from-purple-700 dark:to-indigo-700 dark:shadow-purple-800/20 dark:hover:shadow-purple-800/40">
                Create Account
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm font-medium text-purple-600 transition hover:text-purple-500 dark:text-purple-400"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minimal;
