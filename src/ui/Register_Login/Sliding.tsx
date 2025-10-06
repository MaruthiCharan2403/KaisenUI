
import React from "react";
import { useState } from "react";

const Sliding = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center bg-gradient-to-br from-pink-50 to-orange-100 p-4 dark:from-pink-950 dark:to-orange-900">
      <div className="w-full max-w-md">
        <div className="relative">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 opacity-70 blur-lg transition duration-1000 group-hover:opacity-100 dark:opacity-50"></div>

      <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-900">
        <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500"></div>

        <div className="p-8">
          <div className="mb-8 flex justify-center">
            <div className="rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 p-[1px]">
              <div className="rounded-xl bg-white px-3 py-1 dark:bg-gray-900">
                <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
                  Kaisen UI
                </h1>
              </div>
            </div>
          </div>

          <div className="mb-6 flex">
            <div
              className={`relative flex-1 cursor-pointer py-3 text-center transition duration-300 ${isLogin ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-500"}`}
              onClick={() => setIsLogin(true)}
            >
              <span className="relative z-10">Sign In</span>
              {isLogin && (
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500"></div>
              )}
            </div>
            <div
              className={`relative flex-1 cursor-pointer py-3 text-center transition duration-300 ${!isLogin ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-500"}`}
              onClick={() => setIsLogin(false)}
            >
              <span className="relative z-10">Register</span>
              {!isLogin && (
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500"></div>
              )}
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className={`transition-all duration-500 ease-in-out ${isLogin ? "translate-x-0" : "-translate-x-full absolute"}`}
              style={{ width: "100%" }}
            >
              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 dark:border-gray-700 dark:bg-gray-800 dark:focus:border-pink-500"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 dark:border-gray-700 dark:bg-gray-800 dark:focus:border-pink-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500 dark:border-gray-700 dark:bg-gray-800"
                    />
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                  </label>
                  <a href="#" className="text-sm font-medium text-pink-600 hover:text-pink-500 dark:text-pink-400">
                    Forgot?
                  </a>
                </div>
                <button className="w-full rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 p-4 text-white shadow-lg shadow-pink-500/20 transition hover:shadow-pink-500/40 dark:shadow-pink-800/20 dark:hover:shadow-pink-800/40">
                  Sign in
                </button>
              </div>
            </div>

            <div
              className={`transition-all duration-500 ease-in-out ${!isLogin ? "translate-x-0" : "translate-x-full absolute"}`}
              style={{ width: "100%" }}
            >
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 dark:border-gray-700 dark:bg-gray-800 dark:focus:border-pink-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 dark:border-gray-700 dark:bg-gray-800 dark:focus:border-pink-500"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 dark:border-gray-700 dark:bg-gray-800 dark:focus:border-pink-500"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500 dark:border-gray-700 dark:bg-gray-800"
                  />
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    I agree to the Terms and Privacy Policy
                  </span>
                </div>
                <button className="w-full rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 p-4 text-white shadow-lg shadow-pink-500/20 transition hover:shadow-pink-500/40 dark:shadow-pink-800/20 dark:hover:shadow-pink-800/40">
                  Create Account
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isLogin ? "New to Kaisen UI?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 font-medium text-pink-600 transition hover:text-pink-500 dark:text-pink-400"
              >
                {isLogin ? "Create an account" : "Sign in"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Sliding;
