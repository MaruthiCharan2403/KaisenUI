import { useState } from "react"
function LoginRegister3() {
  const [isLogin, setIsLogin] = useState(true)

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
  )
}
function LoginRegister1() {
  const [isLogin, setIsLogin] = useState(true)

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
  )
}




const sampleComponents = {
  Button: [
    {
      id: "glow-button",
      name: "Glow Button",
      description: "A button with a glowing effect",
      code: `<div className="relative group">
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 animate-[pulse_2s_infinite]"></div>
    <button className="relative px-6 py-3 bg-white dark:bg-gray-900 rounded-lg font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 group-hover:border-transparent transition-all duration-300 group-hover:text-white group-hover:bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 shadow-lg group-hover:shadow-indigo-500/20">
      Kaisen Mode
    </button>
  </div>`,
      preview: () => (
        <div className="relative group">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 animate-[pulse_2s_infinite]"></div>
          <button className="relative px-6 py-3 bg-white dark:bg-gray-900 rounded-lg font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 group-hover:border-transparent transition-all duration-300 group-hover:text-white group-hover:bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 shadow-lg group-hover:shadow-indigo-500/20">
            Kaisen Mode
          </button>
        </div>
      ),
    },
    {
      id: "neon-button",
      name: "Neon Button",
      description: "A button with a neon effect",
      code: `<button className="relative px-6 py-3 font-medium text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-900 rounded-lg overflow-hidden transition-all duration-500 hover:text-white">
    <span className="relative z-10">Activate UI</span>
    <div className="absolute inset-0 border-2 border-indigo-400 dark:border-indigo-500 rounded-lg opacity-70 hover:opacity-100 hover:animate-[spin_3s_linear_infinite]"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
  </button>`,
      preview: () => (
        <button className="relative px-6 py-3 font-medium text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-900 rounded-lg overflow-hidden transition-all duration-500 hover:text-white">
          <span className="relative z-10">Activate UI</span>
          <div className="absolute inset-0 border-2 border-indigo-400 dark:border-indigo-500 rounded-lg opacity-70 hover:opacity-100 hover:animate-[spin_3s_linear_infinite]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
        </button>
      ),
    },
    {
      id: "liquid-button",
      name: "Liquid Button",
      description: "A button with a liquid effect",
      code: `<div className="relative group">
    <button className="px-8 py-4 font-bold text-white bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-700 hover:bg-transparent">
      <span className="relative z-10">Unlock Kaisen</span>
      <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"></div>
    </button>
    <div className="absolute -bottom-1 -left-1 -right-1 -top-1 rounded-xl border-2 border-indigo-500 dark:border-indigo-400 opacity-0 group-hover:opacity-100 group-hover:animate-[ping_1.5s_ease-in-out_infinite] pointer-events-none"></div>
  </div>`,
      preview: () => (
        <div className="relative group">
          <button className="px-8 py-4 font-bold text-white bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-700 hover:bg-transparent">
            <span className="relative z-10">Unlock Kaisen</span>
            <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"></div>
          </button>
          <div className="absolute -bottom-1 -left-1 -right-1 -top-1 rounded-xl border-2 border-indigo-500 dark:border-indigo-400 opacity-0 group-hover:opacity-100 group-hover:animate-[ping_1.5s_ease-in-out_infinite] pointer-events-none"></div>
        </div>
      ),
    },
    {
      id:"Simple",
      name: "Simple Button",
      description: "A simple button",
      code:`<button
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-zinc-100 transition-colors"
            >
              Get Started
            </button>`,
      preview: () => (
        <button
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-zinc-100 transition-colors"
            >
              Get Started
            </button>
      )

    }
  ],

  Article: [
    {
      id: "basic-article",
      name: "Colorful Article",
      description: "A simple article layout with title and content",
      code: `<div className="max-w-md mx-auto bg-black border-4 border-purple-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-pink-500 font-bold">CYBERPUNK EDITION</div>
            <h2 className="block mt-1 text-2xl leading-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              HOW TO HACK YOUR BRAIN FOR FUN AND PROFIT
            </h2>
            <p className="mt-3 text-gray-300 text-justify">
              Scientists discovered that eating 37 bananas while standing on one foot unlocks 90% of your brain's potential.
            </p>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">AI</div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-purple-300">Anonymous Intelligence</p>
                <p className="text-sm text-blue-300">April 31, 2099</p>
              </div>
            </div>
          </div>
        </div>`,
      preview: () => (
        <div className="max-w-md mx-auto bg-black border-4 border-purple-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-pink-500 font-bold">CYBERPUNK EDITION</div>
            <h2 className="block mt-1 text-2xl leading-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              HOW TO HACK YOUR BRAIN FOR FUN AND PROFIT
            </h2>
            <p className="mt-3 text-gray-300 text-justify">
              Scientists discovered that eating 37 bananas while standing on one foot unlocks 90% of your brain's potential.
            </p>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">AI</div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-purple-300">Anonymous Intelligence</p>
                <p className="text-sm text-blue-300">April 31, 2099</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "featured-article",
      name: "Featured Article",
      description: "A featured article with image and content",
      code: `<div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="p-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
    <div className="p-6">
      <div className="flex justify-between items-start">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">Kaisen UI</span>
        <span className="text-xs text-gray-400">Component Showcase</span>
      </div>
      
      <h2 className="mt-4 text-2xl font-bold text-gray-800 leading-tight">The Art of Minimal Design</h2>
      <p className="mt-2 text-gray-600">Discover how Kaisen UI helps you build cleaner interfaces faster with our thoughtfully designed components.</p>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500">"Kaisen UI components remove the clutter so you can focus on what matters - creating exceptional user experiences."</p>
        <div className="mt-4 flex items-center">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Kaisen Team</p>
            <p className="text-xs text-gray-500">UI Architects</p>
          </div>
          <button className="px-4 py-2 text-xs font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Explore More
          </button>
        </div>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="p-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
          <div className="p-6">


            <h2 className="mt-4 text-2xl font-bold text-gray-800 leading-tight">The Art of Minimal Design</h2>
            <p className="mt-2 text-gray-600">Discover how Kaisen UI helps you build cleaner interfaces faster with our thoughtfully designed components.</p>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">"Kaisen UI components remove the clutter so you can focus on what matters - creating exceptional user experiences."</p>
              <div className="mt-4 flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Kaisen Team</p>
                  <p className="text-xs text-gray-500">UI Architects</p>
                </div>
                <button className="px-4 py-2 text-xs font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "blog-article",
      name: "Blog Article",
      description: "A blog article layout with title and content",
      code: `<div className="group relative max-w-2xl mx-auto bg-white dark:bg-gray-900 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700"></div>
    <div className="pl-8 pr-6 py-6">
      <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/50 rounded-full uppercase">
        Kaisen Component
      </span>
      <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-indigo-600 to-purple-600">
        Building Modern UIs with Kaisen
      </h2>
      <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
        <span>Published on May 15, 2025</span>
        <span>•</span>
        <span>5 min read</span>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
        Discover how Kaisen UI revolutionizes your workflow with atomic design principles and zero-runtime CSS. Our library provides the perfect balance between customization and convenience for React developers.
      </p>
      <div className="mt-6">
        <a href="#" className="inline-flex items-center font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
          <span>Read more</span>
          <span className="ml-1.5 block w-0 group-hover:w-4 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300"></span>
        </a>
      </div>
    </div>
    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,gray_1px,transparent_1px),linear-gradient(to_bottom,gray_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,gray_1px,transparent_1px),linear-gradient(to_bottom,gray_1px,transparent_1px)]"></div>
    </div>
  </div>`,
      preview: () => (
        <div className="group relative max-w-2xl mx-auto bg-white dark:bg-gray-900 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700"></div>
          <div className="pl-8 pr-6 py-6">

            <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-indigo-600 to-purple-600">
              Building Modern UIs with Kaisen
            </h2>
            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Published on May 15, 2025</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Discover how Kaisen UI revolutionizes your workflow with atomic design principles and zero-runtime CSS. Our library provides the perfect balance between customization and convenience for React developers.
            </p>
            <div className="mt-6">
              <a href="#" className="inline-flex items-center font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
                <span>Read more</span>
                <span className="ml-1.5 block w-0 group-hover:w-4 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300"></span>
              </a>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,gray_1px,transparent_1px),linear-gradient(to_bottom,gray_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,gray_1px,transparent_1px),linear-gradient(to_bottom,gray_1px,transparent_1px)]"></div>
          </div>
        </div>

      )
    }
  ],
  Avatar: [
    {
      id: "basic-avatar",
      name: "Basic Avatar",
      description: "A simple avatar with a border",
      code: `<div className="relative inline-block">
    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-300 to-purple-400 dark:from-indigo-500 dark:to-purple-600 overflow-hidden border-2 border-white dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-white">KU</span>
      </div>
    </div>
    <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-white dark:border-gray-800 bg-emerald-400 dark:bg-emerald-500"></div>
    <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-white dark:border-gray-800 animate-ping bg-emerald-400 dark:bg-emerald-500 opacity-75"></div>
  </div>`,
      preview: () => (
        <div className="relative inline-block">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-300 to-purple-400 dark:from-indigo-500 dark:to-purple-600 overflow-hidden border-2 border-white dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-white">KU</span>
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-white dark:border-gray-800 bg-emerald-400 dark:bg-emerald-500"></div>
          <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-white dark:border-gray-800 animate-ping bg-emerald-400 dark:bg-emerald-500 opacity-75"></div>
        </div>
      ),
    },
    {
      id: "group-avatar",
      name: "Group Avatar",
      description: "A rounded avatar with shadow",
      code: `<div className="flex -space-x-3">
    <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:z-10 hover:scale-110 transition-transform duration-200">KU</div>
    <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-indigo-600 dark:text-indigo-300 hover:z-10 hover:scale-110 transition-transform duration-200">KS</div>
    <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-purple-600 dark:text-purple-300 hover:z-10 hover:scale-110 transition-transform duration-200">EN</div>
    <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-200 hover:z-10 hover:scale-110 transition-transform duration-200">+3</div>
  </div>`,
      preview: () => (
        <div className="flex -space-x-3">
          <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:z-10 hover:scale-110 transition-transform duration-200">KU</div>
          <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-indigo-600 dark:text-indigo-300 hover:z-10 hover:scale-110 transition-transform duration-200">KS</div>
          <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-purple-600 dark:text-purple-300 hover:z-10 hover:scale-110 transition-transform duration-200">EN</div>
          <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-200 hover:z-10 hover:scale-110 transition-transform duration-200">+3</div>
        </div>
      ),
    },
  ],
  Banner: [

    {
      id: "hero-banner",
      name: "Hero Banner",
      description: "A hero banner with image and call to action",
      code: `<div className="relative p-6 bg-white dark:bg-gray-900 rounded-lg group">
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 p-0.5 -z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-lg animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-20 transition-opacity"></div>
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Why Kaisen UI?</h3>
    <p className="mt-2 text-gray-600 dark:text-gray-300">Experience the perfect blend of customization and performance with our atomic design system.</p>
    <div className="mt-4 inline-block px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Explore Components</div>
  </div>`,
      preview: () => (
        <div className="relative p-6 bg-white dark:bg-gray-900 rounded-lg group">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 p-0.5 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-lg animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Why Kaisen UI?</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Experience the perfect blend of customization and performance with our atomic design system.</p>
          <div className="mt-4 inline-block px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Explore Components</div>
        </div>
      ),
    },
    {
      id: "Marketing Banner",
      name: "Marketing Banner",
      description: "A marketing banner with image and text",
      code: `<div className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 px-6 py-8 shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-600/30">
    <div className="absolute -top-16 -right-4 h-32 w-32 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-xl"></div>
    <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-xl"></div>
    <div className="relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Supercharge Your Development
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Kaisen UI v2.0 is here - 40% faster, 30% lighter, and packed with new components. Join 10,000+ developers who ship better UIs faster.
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="inline-flex items-center gap-x-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <span>Get Started</span>
            <span className="h-3 w-3 rounded-full bg-white/20 animate-pulse"></span>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">100+</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Components</p>
        </div>
        <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">10K+</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Developers</p>
        </div>
        <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">40%</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Faster</p>
        </div>
        <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">0ms</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Runtime</p>
        </div>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 px-6 py-8 shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-600/30">        <div className="absolute -top-16 -right-4 h-32 w-32 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-xl"></div>
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-xl"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Supercharge Your Development
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Kaisen UI v2.0 is here - 40% faster, 30% lighter, and packed with new components. Join 10,000+ developers who ship better UIs faster.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="inline-flex items-center gap-x-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <span>Get Started</span>
                  <span className="h-3 w-3 rounded-full bg-white/20 animate-pulse"></span>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">100+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Components</p>
              </div>
              <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">10K+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Developers</p>
              </div>
              <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">40%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Faster</p>
              </div>
              <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">0ms</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Runtime</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "pricing-banner",
      name: "Pricing Banner",
      description: "A pricing banner with image and call to action",
      code: `<div className="relative bg-gradient-to-r from-purple-500 to-purple-400 dark:from-purple-700 dark:to-purple-500 w-full p-6 flex flex-col sm:flex-row items-center justify-between rounded-lg overflow-hidden shadow-lg border border-purple-300/30 dark:border-purple-600/30">      
        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -top-8 -left-8 w-40 h-40 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>
        <div className="text-left z-10 transform -rotate-1">
          <h2 className="text-4xl font-black text-white drop-shadow-sm">Up to 50% Off</h2>
        </div>
        <div className="text-white text-lg font-medium my-3 sm:my-0 mx-4 z-10 flex items-center">
          <div className="inline-block mr-2 w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
          Plus free shipping! Use code: 
          <span className="ml-2 font-mono font-bold bg-white/20 backdrop-blur-sm px-3 py-1 rounded border-b-2 border-white/30">KAISEN50</span>
        </div>
        <div className="z-10">
          <button className="relative group bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-300 px-8 py-2.5 rounded-lg font-semibold overflow-hidden">
            <span className="relative z-10">Shop Now</span>
            <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-500 dark:to-pink-500 transition-all duration-300 group-hover:w-full"></div>
            <div className="absolute inset-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0 bg-white/20 dark:bg-white/10 blur-xl"></div>
          </button>
        </div>
      </div>`,
      preview: () => (
        <div className="relative bg-gradient-to-r from-purple-500 to-purple-400 dark:from-purple-700 dark:to-purple-500 w-full p-6 flex flex-col sm:flex-row items-center justify-between rounded-lg overflow-hidden shadow-lg border border-purple-300/30 dark:border-purple-600/30">
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="text-left z-10 transform -rotate-1">
            <h2 className="text-4xl font-black text-white drop-shadow-sm">Up to 50% Off</h2>
          </div>

          <div className="text-white text-lg font-medium my-3 sm:my-0 mx-4 z-10 flex items-center">
            <div className="inline-block mr-2 w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
            Plus free shipping! Use code:
            <span className="ml-2 font-mono font-bold bg-white/20 backdrop-blur-sm px-3 py-1 rounded border-b-2 border-white/30">KAISEN50</span>
          </div>

          <div className="z-10">
            <button className="relative group bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-300 px-8 py-2.5 rounded-lg font-semibold overflow-hidden">
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-500 dark:to-pink-500 transition-all duration-300 group-hover:w-full"></div>
              <div className="absolute inset-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0 bg-white/20 dark:bg-white/10 blur-xl"></div>
            </button>
          </div>


        </div>
      )

    }
  ],
  Blog: [
    {
      id: "basic-blog",
      name: "Basic Blog",
      description: "A simple Blog with a border",
      code: `<div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
    <div className="h-48 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50"></div>
    <div className="p-6">
      <div className="flex gap-2 mb-4">
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">Kaisen UI</span>
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">Tutorial</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Mastering Component Composition</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">Learn how to combine Kaisen UI components like atomic particles to create stunning interfaces with minimal effort.</p>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
        <span>May 15, 2025</span>
        <span className="mx-2">•</span>
        <span>5 min read</span>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
          <div className="h-48 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50"></div>
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">Kaisen UI</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">Tutorial</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Mastering Component Composition</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">Learn how to combine Kaisen UI components like atomic particles to create stunning interfaces with minimal effort.</p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
              <span>May 15, 2025</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "featured-blog",
      name: "Featured Blog",
      description: "A rounded avatar with shadow",
      code: `<div className="relative isolate">
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl transform group-hover:scale-[1.01] transition-transform duration-300"></div>
    <div className="p-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">Why Kaisen UI is the Future of React Development</h2>
      <div className="flex items-start gap-8">
        <div className="flex-1">
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-400 mb-6">Discover how Kaisen UI's zero-runtime approach eliminates bundle bloat while delivering stunning visual results through our atomic design system.</p>
          <div className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Continue Reading
            <span className="ml-2 w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          </div>
        </div>
        <div className="hidden md:block w-32 h-32 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50"></div>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="relative isolate">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl transform group-hover:scale-[1.01] transition-transform duration-300"></div>
          <div className="p-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">Why Kaisen UI is the Future of React Development</h2>
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <p className="text-lg leading-8 text-gray-600 dark:text-gray-400 mb-6">Discover how Kaisen UI's zero-runtime approach eliminates bundle bloat while delivering stunning visual results through our atomic design system.</p>
                <div className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  Continue Reading
                  <span className="ml-2 w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                </div>
              </div>
              <div className="hidden md:block w-32 h-32 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "blog-post",
      name: "Blog Post",
      description: "A blog post with image and text",
      code: `<div className="py-6 border-b border-gray-200 dark:border-gray-800 group">
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-24 h-24 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden"></div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Advanced Theming in Kaisen UI</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400 line-clamp-2">Deep dive into our theming system that adapts to both light and dark modes while maintaining perfect contrast ratios.</p>
        <div className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-500">
          <span>June 2, 2025</span>
          <span className="mx-2">•</span>
          <span>Kaisen UI Team</span>
          <span className="mx-2">•</span>
          <span>7 min read</span>
        </div>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="py-6 border-b border-gray-200 dark:border-gray-800 group">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-24 h-24 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden"></div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Advanced Theming in Kaisen UI</h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400 line-clamp-2">Deep dive into our theming system that adapts to both light and dark modes while maintaining perfect contrast ratios.</p>
              <div className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-500">
                <span>June 2, 2025</span>
                <span className="mx-2">•</span>
                <span>Kaisen UI Team</span>
                <span className="mx-2">•</span>
                <span>7 min read</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ],
  Breadcrumb: [
    {
      id: "basic-breadcrumb",
      name: "Basic Breadcrumb",
      description: "A simple Breadcrumb with a border",
      code: `<div className="flex items-center space-x-2 text-sm">  
    <a href="#" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">Kaisen UI</a>  
    <span className="text-gray-400 dark:text-gray-500">/</span>  
    <a href="#" className="font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Docs</a>  
    <span className="text-gray-400 dark:text-gray-500">/</span>  
    <a href="#" className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">Components</a>  
    <span className="text-gray-400 dark:text-gray-500">/</span>  
    <span className="font-semibold text-gray-900 dark:text-white">Breadcrumb</span>  
  </div>  `,
      preview: () => (
        <div className="flex items-center space-x-2 text-sm">
          <a href="#" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">Kaisen UI</a>
          <span className="text-gray-400 dark:text-gray-500">/</span>
          <a href="#" className="font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Docs</a>
          <span className="text-gray-400 dark:text-gray-500">/</span>
          <a href="#" className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">Components</a>
          <span className="text-gray-400 dark:text-gray-500">/</span>
          <span className="font-semibold text-gray-900 dark:text-white">Breadcrumb</span>
        </div>
      ),
    },
    {
      id: "Underline-Breadcrumb",
      name: "Underline Breadcrumb",
      description: "A Breadcrumb with underline effect",
      code: `<div className="flex items-center gap-2">  
    <a href="#" className="relative px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">  
      <span>Kaisen UI</span>  
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 hover:w-full"></span>  
    </a>  
    <span className="text-gray-400 dark:text-gray-500">›</span>  
    <a href="#" className="relative px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">  
      <span>Blog</span>  
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 hover:w-full"></span>  
    </a>  
    <span className="text-gray-400 dark:text-gray-500">›</span>  
    <span className="px-2 py-1 font-semibold text-gray-900 dark:text-white">Breadcrumbs</span>  
  </div>  `,
      preview: () => (
        <div className="flex items-center gap-2">
          <a href="#" className="relative px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            <span>Kaisen UI</span>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 hover:w-full"></span>
          </a>
          <span className="text-gray-400 dark:text-gray-500">›</span>
          <a href="#" className="relative px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            <span>Blog</span>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 hover:w-full"></span>
          </a>
          <span className="text-gray-400 dark:text-gray-500">›</span>
          <span className="px-2 py-1 font-semibold text-gray-900 dark:text-white">Breadcrumbs</span>
        </div>
      ),
    },
  ],
  CTA: [
    {
      id: "quick-cta",
      name: "Gradient CTA",
      description: "A simple CTA with a button",
      code: `<div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-xl"></div>
    <div className="relative z-10">
      <h3 className="mb-2 text-2xl font-bold text-white">Elevate Your UI Experience</h3>
      <p className="mb-4 text-white/80">Join thousands of developers using Kaisen UI to build stunning interfaces.</p>
      <button className="rounded-lg bg-white px-6 py-2 font-medium text-indigo-600 shadow-lg transition-all hover:bg-opacity-90 dark:shadow-indigo-900/20">Get Started</button>
    </div>
  </div>`,
      preview: () => (
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-xl"></div>
          <div className="relative z-10">
            <h3 className="mb-2 text-2xl font-bold text-white">Elevate Your UI Experience</h3>
            <p className="mb-4 text-white/80">Join thousands of developers using Kaisen UI to build stunning interfaces.</p>
            <button className="rounded-lg bg-white px-6 py-2 font-medium text-indigo-600 shadow-lg transition-all hover:bg-opacity-90 dark:shadow-indigo-900/20">Get Started</button>
          </div>
        </div>
      ),
    },
    {
      id: "border-cta",
      name: "Border CTA",
      description: "A CTA with border",
      code: `<div className="relative bg-gray-50 dark:bg-gray-900/50 rounded-xl p-8 border border-gray-200 dark:border-gray-800 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-5 hover:opacity-10 transition-opacity duration-500"></div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Join the UI Revolution</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-6">10,000+ developers trust Kaisen for production-grade interfaces</p>
    <button className="px-6 py-2.5 font-medium bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 hover:border-indigo-500 dark:hover:border-indigo-400 relative overflow-hidden">
      <span className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 -skew-x-12"></span>
      <span className="relative">Get Started</span>
    </button>
  </div>`,
      preview: () => (
        <div className="relative p-0.5 rounded-xl bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 dark:from-indigo-500 dark:via-purple-600 dark:to-pink-600 animate-[gradient_8s_ease_infinite] bg-[length:400%_400%]">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Code at Light Speed</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Kaisen UI components compile 40% faster than alternatives</p>
            <button className="w-full px-6 py-3.5 font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 dark:hover:shadow-indigo-600/20 transition-all duration-300 transform hover:-translate-y-1">
              Download Now
            </button>
          </div>
        </div>
      ),
    },
    {
      id: "input-cta",
      name: "Input CTA",
      description: "A CTA with input field and button",
      code: `<div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-700 hover:opacity-10 dark:via-slate-700"></div>
    <div className="mb-4 flex justify-between">
      <div className="w-2/3">
        <h3 className="mb-2 text-lg font-bold text-slate-800 dark:text-white">Join Kaisen UI Community</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">Access premium components and early updates.</p>
      </div>
      <div className="flex items-start justify-end">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">Limited Time</span>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-500" 
      />
      <button className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">Subscribe</button>
    </div>
  </div>`,
      preview: () => (
        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-700 hover:opacity-10 dark:via-slate-700"></div>
          <div className="mb-4 flex justify-between">
            <div className="w-2/3">
              <h3 className="mb-2 text-lg font-bold text-slate-800 dark:text-white">Join Kaisen UI Community</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Access premium components and early updates.</p>
            </div>
            <div className="flex items-start justify-end">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">Limited Time</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-500"
            />
            <button className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">Subscribe</button>
          </div>
        </div>
      ),
    },
    {
      id:"GetStarted",
      name: "Get Started",
      description: "A simple Get Started button",
      code:`<div className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to build <span className="text-pink-500">beautiful</span> interfaces?</h2>
      <p className="text-xl text-gray-300 mb-10">Join thousands of developers creating amazing experiences with KAISENUI</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors" onClick={()=>{navigate('/components')}}>Get Started</button>
        
      </div>
    </div>
  </div>`,
  preview: () => (
    <div className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to build <span className="text-pink-500">beautiful</span> interfaces?</h2>
      <p className="text-xl text-gray-300 mb-10">Join thousands of developers creating amazing experiences with KAISENUI</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors" onClick={()=>{navigate('/components')}}>Get Started</button>
        
      </div>
    </div>
  </div>
  )
    },
    {
      id: "glass-cta",
      name: "Glassmorphic CTA",
      description: "A glassmorphic CTA with a button",
      code: `<section className="py-20 w-full px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto max-w-5xl">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-rose-500 to-purple-600 p-8 md:p-12">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-10"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to build beautiful interfaces?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Start building with YourUI today and create stunning user interfaces in minutes, not hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-zinc-100 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>`,
      preview: () => (
        <section className="py-20 w-full px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-rose-500 to-purple-600 p-8 md:p-12">
              <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-10"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to build beautiful interfaces?
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-white/80">
                  Start building with YourUI today and create stunning user interfaces in minutes, not hours.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-zinc-100 transition-colors"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    
  ],
  Steps: [
    {
      id: "glass-timeline-steps",
      name: "Glassmorphic Timeline Steps",
      description: "A timeline with glassmorphic effect",
      code: `<div className="relative h-96 w-full overflow-hidden rounded-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 backdrop-blur-md"></div>
    <div className="relative h-full flex">
      <div className="w-1/4 border-r border-white/20 dark:border-gray-800/50 p-6 flex flex-col">
        <div className="mb-8">
          <div className="w-12 h-12 rounded-lg bg-amber-400/20 dark:bg-amber-600/20 backdrop-blur flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold">1</div>
          <h3 className="mt-4 text-lg font-medium dark:text-white">Discover</h3>
        </div>
        <div className="mb-8">
          <div className="w-12 h-12 rounded-lg bg-gray-200/30 dark:bg-gray-700/30 backdrop-blur flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold">2</div>
          <h3 className="mt-4 text-lg font-medium dark:text-white/70">Customize</h3>
        </div>
        <div className="">
          <div className="w-12 h-12 rounded-lg bg-gray-200/30 dark:bg-gray-700/30 backdrop-blur flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold">3</div>
          <h3 className="mt-4 text-lg font-medium dark:text-white/70">Launch</h3>
        </div>
      </div>
      <div className="w-3/4 p-12 flex items-center justify-center">
        <div className="w-full max-w-md bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-xl p-8 shadow-lg border border-white/30 dark:border-gray-800/50">
          <h2 className="text-2xl font-bold dark:text-white mb-2">Welcome to Kaisen UI</h2>
          <p className="text-gray-600 dark:text-gray-400">Build beautiful interfaces with our carefully crafted components</p>
          <button className="mt-6 px-6 py-2 bg-amber-500 dark:bg-amber-600 text-white rounded-lg hover:bg-amber-600 dark:hover:bg-amber-700 transition-colors">Get Started</button>
        </div>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="relative h-96 w-full overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 backdrop-blur-md"></div>
          <div className="relative h-full flex">
            <div className="w-1/4 border-r border-white/20 dark:border-gray-800/50 p-6 flex flex-col">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-lg bg-amber-400/20 dark:bg-amber-600/20 backdrop-blur flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold">1</div>
                <h3 className="mt-4 text-lg font-medium dark:text-white">Discover</h3>
              </div>
              <div className="mb-8">
                <div className="w-12 h-12 rounded-lg bg-gray-200/30 dark:bg-gray-700/30 backdrop-blur flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold">2</div>
                <h3 className="mt-4 text-lg font-medium dark:text-white/70">Customize</h3>
              </div>
              <div className="">
                <div className="w-12 h-12 rounded-lg bg-gray-200/30 dark:bg-gray-700/30 backdrop-blur flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold">3</div>
                <h3 className="mt-4 text-lg font-medium dark:text-white/70">Launch</h3>
              </div>
            </div>
            <div className="w-3/4 p-12 flex items-center justify-center">
              <div className="w-full max-w-md bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-xl p-8 shadow-lg border border-white/30 dark:border-gray-800/50">
                <h2 className="text-2xl font-bold dark:text-white mb-2">Welcome to Kaisen UI</h2>
                <p className="text-gray-600 dark:text-gray-400">Build beautiful interfaces with our carefully crafted components
                </p>
                <button className="mt-6 px-6 py-2 bg-amber-500 dark:bg-amber-600 text-white rounded-lg hover:bg-amber-600 dark:hover:bg-amber-700 transition-colors">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "neon-progress-steps",
      name: "Neon Progress Steps",
      description: "A neon-themed progress steps",
      code: `<div className="relative h-64 w-full">
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800">
      <div className="h-full bg-gradient-to-r from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700" style={{width: '33%'}}></div>
    </div>
    <div className="absolute -bottom-2 left-[30%] w-6 h-6 rounded-full bg-amber-400 dark:bg-amber-600 border-4 border-white dark:border-gray-900 shadow-lg"></div>
    <div className="flex h-full">
      <div className="w-1/3 p-6 flex flex-col justify-end">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-800">
          <h3 className="font-medium dark:text-white">Step 1</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Install Kaisen UI</p>
        </div>
      </div>
      <div className="w-1/3 p-6 flex flex-col justify-end">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-800 opacity-70">
          <h3 className="font-medium dark:text-white/80">Step 2</h3>
          <p className="text-sm text-gray-600/80 dark:text-gray-400/80 mt-1">Import Components</p>
        </div>
      </div>
      <div className="w-1/3 p-6 flex flex-col justify-end">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-800 opacity-40">
          <h3 className="font-medium dark:text-white/60">Step 3</h3>
          <p className="text-sm text-gray-600/60 dark:text-gray-400/60 mt-1">Build Your App</p>
        </div>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="relative h-64 w-full">
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800">
            <div className="h-full bg-gradient-to-r from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700" style={{ width: '33%' }}></div>
          </div>
          <div className="absolute -bottom-2 left-[30%] w-6 h-6 rounded-full bg-amber-400 dark:bg-amber-600 border-4 border-white dark:border-gray-900 shadow-lg"></div>
          <div className="flex h-full">
            <div className="w-1/3 p-6 flex flex-col justify-end">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-800">
                <h3 className="font-medium dark:text-white">Step 1</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Install Kaisen UI</p>
              </div>
            </div>
            <div className="w-1/3 p-6 flex flex-col justify-end">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-800 opacity-70">
                <h3 className="font-medium dark:text-white/80">Step 2</h3>
                <p className="text-sm text-gray-600/80 dark:text-gray-400/80 mt-1">Import Components</p>
              </div>
            </div>
            <div className="w-1/3 p-6 flex flex-col justify-end">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-800 opacity-40">
                <h3 className="font-medium dark:text-white/60">Step 3</h3>
                <p className="text-sm text-gray-600/60 dark:text-gray-400/60 mt-1">Build Your App</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "minimilist-card-steps",
      name: "Minimalist Card Steps",
      description: "A minimalist card with steps",
      code: `<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
      <div className="w-10 h-10 rounded-full bg-amber-400 dark:bg-amber-600 flex items-center justify-center text-sm font-bold text-white mb-4">1</div>
      <h3 className="text-lg font-medium dark:text-white">Get Started</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">Install Kaisen UI package via npm or yarn</p>
    </div>
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
      <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-400 mb-4">2</div>
      <h3 className="text-lg font-medium dark:text-white">Import</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">Add components to your project</p>
    </div>
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
      <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-400 mb-4">3</div>
      <h3 className="text-lg font-medium dark:text-white">Build</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">Create amazing interfaces faster</p>
    </div>
  </div>`,
      preview: () => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-amber-400 dark:bg-amber-600 flex items-center justify-center text-sm font-bold text-white mb-4">1</div>
            <h3 className="text-lg font-medium dark:text-white">Get Started</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">Install Kaisen UI package via npm or yarn</p>
          </div>
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-400 mb-4">2</div>
            <h3 className="text-lg font-medium dark:text-white">Import</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">Add components to your project</p>
          </div>
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-400 mb-4">3</div>
            <h3 className="text-lg font-medium dark:text-white">Build</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">Create amazing interfaces faster</p>
          </div>
        </div>
      ),
    }
  ],
  Table: [
    {
      id: "glass-morphic-data-table",
      name: "Glassmorphic Data Table",
      description: "A data table with glassmorphic effect",
      code: `<div className="backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-800/50 rounded-2xl overflow-hidden shadow-lg">
    <table className="w-full border-separate border-spacing-0">
      <thead>
        <tr className="text-left backdrop-blur-sm bg-white/30 dark:bg-gray-800/30">
          <th className="p-4 font-medium dark:text-white/90 border-b border-white/20 dark:border-gray-700/50">Framework</th>
          <th className="p-4 font-medium dark:text-white/90 border-b border-white/20 dark:border-gray-700/50">Stars</th>
          <th className="p-4 font-medium dark:text-white/90 border-b border-white/20 dark:border-gray-700/50">Kaisen Score</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors">
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30 font-medium dark:text-white">Kaisen UI</td>
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30 text-amber-500 dark:text-amber-400">8,742</td>
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-amber-500 dark:bg-amber-600 h-2 rounded-full" style={{width: '92%'}}></div>
            </div>
          </td>
        </tr>
        <tr className="hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors">
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30 font-medium dark:text-white">React</td>
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30">201,543</td>
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-blue-500 dark:bg-blue-600 h-2 rounded-full" style={{width: '88%'}}></div>
            </div>
          </td>
        </tr>
        <tr className="hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors">
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30 font-medium dark:text-white">Vue</td>
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30">178,234</td>
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-emerald-500 dark:bg-emerald-600 h-2 rounded-full" style={{width: '85%'}}></div>
            </div>
          </td>
        </tr>
        <tr className="hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors">
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30 font-medium dark:text-white">Svelte</td>
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30">45,678</td>
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-rose-500 dark:bg-rose-600 h-2 rounded-full" style={{width: '79%'}}></div>
            </div>
          </td>
        </tr>
        <tr className="hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors">
          <td className="p-4 font-medium dark:text-white">Solid</td>
          <td className="p-4">32,456</td>
          <td className="p-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-purple-500 dark:bg-purple-600 h-2 rounded-full" style={{width: '76%'}}></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`,
      preview: () => (
        <div className="backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-800/50 rounded-2xl overflow-hidden shadow-lg">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr className="text-left backdrop-blur-sm bg-white/30 dark:bg-gray-800/30">
                <th className="p-4 font-medium dark:text-white/90 border-b border-white/20 dark:border-gray-700/50">Framework</th>
                <th className="p-4 font-medium dark:text-white/90 border-b border-white/20 dark:border-gray-700/50">Stars</th>
                <th className="p-4 font-medium dark:text-white/90 border-b border-white/20 dark:border-gray-700/50">Kaisen Score</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors">
                <td className="p-4 border-b border-white/10 dark:border-gray-700/30 font-medium dark:text-white">Kaisen UI</td>
                <td className="p-4 border-b border-white/10 dark:border-gray-700/30 text-amber-500 dark:text-amber-400">8,742</td>
                <td className="p-4 border-b border-white/10 dark:border-gray-700/30">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-amber-500 dark:bg-amber-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors">

                <td className="p-4 border-b border-white/10 dark:border-gray-700/30 font-medium dark:text-white">React</td>
                <td className="p-4 border-b border-white/10 dark:border-gray-700/30">201,543</td>
                <td className="p-4 border-b border-white/10 dark:border-gray-700/30">

                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 dark:bg-blue-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors">

                <td className="p-4 border-b border-white/10 dark:border-gray-700/30 font-medium dark:text-white">Vue</td>
                <td className="p-4 border-b border-white/10 dark:border-gray-700/30">178,234</td>
                <td className="p-4 border-b border-white/10 dark:border-gray-700/30">

                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-emerald-500 dark:bg-emerald-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors">

                <td className="p-4 border-b border-white/10 dark:border-gray-700/30 font-medium dark:text-white">Svelte</td>
                <td className="p-4 border-b border-white/10 dark:border-gray-700/30">45,678</td>
                <td className="p-4 border-b border-white/10 dark:border-gray-700/30">

                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-rose-500 dark:bg-rose-600 h-2 rounded-full" style={{ width: '79%' }}></div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors">

                <td className="p-4 font-medium dark:text-white">Solid</td>
                <td className="p-4">32,456</td>
                <td className="p-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 dark:bg-purple-600 h-2 rounded-full" style={{ width: '76%' }}></div>
                  </div>
                </td>
              </tr>

            </tbody>

          </table>
        </div>),
    },

    {
      id: "minimalistic-dashboard-table",
      name: "Minimalistic Dashboard Table",
      description: "A minimalistic dashboard table",
      code: `<div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-200 dark:border-gray-800">
          <th className="px-5 py-4 text-left text-sm font-medium dark:text-white/90">Project</th>
          <th className="px-5 py-4 text-left text-sm font-medium dark:text-white/90">Team</th>
          <th className="px-5 py-4 text-left text-sm font-medium dark:text-white/90">Progress</th>
          <th className="px-5 py-4 text-left text-sm font-medium dark:text-white/90">Version</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
          <td className="px-5 py-4 font-medium dark:text-white">Kaisen UI Core</td>
          <td className="px-5 py-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-600 dark:to-amber-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800"></div>
            </div>
          </td>
          <td className="px-5 py-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div className="bg-green-500 dark:bg-green-600 h-1.5 rounded-full" style={{width: '92%'}}></div>
            </div>
          </td>
          <td className="px-5 py-4 text-sm text-gray-500 dark:text-gray-400">1.4.2</td>
        </tr>
        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
          <td className="px-5 py-4 font-medium dark:text-white">Kaisen Docs</td>
          <td className="px-5 py-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 dark:from-emerald-600 dark:to-emerald-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 dark:from-indigo-600 dark:to-indigo-800"></div>
            </div>
          </td>
          <td className="px-5 py-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div className="bg-blue-500 dark:bg-blue-600 h-1.5 rounded-full" style={{width: '78%'}}></div>
            </div>
          </td>
          <td className="px-5 py-4 text-sm text-gray-500 dark:text-gray-400">0.9.3</td>
        </tr>
        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
          <td className="px-5 py-4 font-medium dark:text-white">Kaisen Pro</td>
          <td className="px-5 py-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 dark:from-rose-600 dark:to-rose-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 dark:from-pink-600 dark:to-pink-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-600 dark:to-amber-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800"></div>
            </div>
          </td>
          <td className="px-5 py-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div className="bg-purple-500 dark:bg-purple-600 h-1.5 rounded-full" style={{width: '45%'}}></div>
            </div>
          </td>
          <td className="px-5 py-4 text-sm text-gray-500 dark:text-gray-400">0.2.1</td>
        </tr>
        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
          <td className="px-5 py-4 font-medium dark:text-white">Kaisen Mobile</td>
          <td className="px-5 py-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 dark:from-violet-600 dark:to-violet-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 dark:from-cyan-600 dark:to-cyan-800"></div>
            </div>
          </td>
          <td className="px-5 py-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div className="bg-amber-500 dark:bg-amber-600 h-1.5 rounded-full" style={{width: '32%'}}></div>
            </div>
          </td>
          <td className="px-5 py-4 text-sm text-gray-500 dark:text-gray-400">0.1.5</td>
        </tr>
        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
          <td className="px-5 py-4 font-medium dark:text-white">Kaisen AI</td>
          <td className="px-5 py-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 dark:from-fuchsia-600 dark:to-fuchsia-800"></div>
            </div>
          </td>
          <td className="px-5 py-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div className="bg-indigo-500 dark:bg-indigo-600 h-1.5 rounded-full" style={{width: '15%'}}></div>
            </div>
          </td>
          <td className="px-5 py-4 text-sm text-gray-500 dark:text-gray-400">0.0.8</td>
        </tr>
      </tbody>
    </table>
  </div>`,
      preview: () => (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="px-5 py-4 text-left text-sm font-medium dark:text-white/90">Project</th>
                <th className="px-5 py-4 text-left text-sm font-medium dark:text-white/90">Team</th>
                <th className="px-5 py-4 text-left text-sm font-medium dark:text-white/90">Progress</th>
                <th className="px-5 py-4 text-left text-sm font-medium dark:text-white/90">Version</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-5 py-4 font-medium dark:text-white">Kaisen UI Core</td>
                <td className="px-5 py-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-600 dark:to-amber-800"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800"></div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-[6px]">
                    <div className="bg-green-500 dark:bg-green-600 h-[6px] rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </td>
                <td className="px
  -5 py-4 text-sm text-gray-500 dark:text-gray-400">1.4.2</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-5 py-4 font-medium dark:text-white">Kaisen Docs</td>
                <td className="px-5 py-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 dark:from-emerald-600 dark:to-emerald-800"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 dark:from-indigo-600 dark:to-indigo-800"></div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-[6px]">
                    <div className="bg-blue-500 dark:bg-blue-600 h-[6px] rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-gray-500 dark:text-gray-400">0.9.3</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-5 py-4 font-medium dark:text-white">Kaisen Pro</td>
                <td className="px-5 py-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 dark:from-fuchsia-600 dark:to-fuchsia-800"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 dark:from-pink-600 dark:to-pink-800"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 dark:from-orange-600 dark:to-orange-800"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800"></div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-[6px]">
                    <div className="bg-purple-500 dark:bg-purple-600 h-[6px] rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-gray-500 dark:text-gray-400">0.2.1</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-5 py-4 font-medium dark:text-white">Kaisen Mobile</td>
                <td className="px-5 py-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 dark:from-violet-600 dark:to-violet-800"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 dark:from-cyan-600 dark:to-cyan-800"></div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-[6px]">
                    <div className="bg-amber-500 dark:bg-amber-600 h-[6px] rounded-full" style={{ width: '32%' }}></div>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-gray-500 dark:text-gray-400">0.1.5</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-5 py-4 font-medium dark:text-white">Kaisen AI</td>
                <td className="px-5 py-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 dark:from-fuchsia-600 dark:to-fuchsia-800"></div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-[6px]">
                    <div className="bg-indigo-500 dark:bg-indigo-600 h-[6px] rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-gray-500 dark:text-gray-400">0.0.8</td>
              </tr>
            </tbody>
          </table>
        </div>),
    }
  ],
  Tabs: [
    {
      id: "minimal-underline-tabs",
      name: "Minimal Underline Tabs",
      description: "A simple tab component with underline effect",
      code: `<div className="border-b border-gray-200 dark:border-gray-700">
    <div className="flex space-x-8">
      <button className="pb-3 px-1 border-b-2 border-amber-500 dark:border-amber-600 text-sm font-medium dark:text-white">
        Kaisen UI
      </button>
      <button className="pb-3 px-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
        Components
      </button>
      <button className="pb-3 px-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
        Docs
      </button>
    </div>
  </div>`,
      preview: () => (
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex space-x-8">
            <button className="pb-3 px-1 border-b-2 border-amber-500 dark:border-amber-600 text-sm font-medium dark:text-white">
              Kaisen UI
            </button>
            <button className="pb-3 px-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Components
            </button>
            <button className="pb-3 px-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Docs
            </button>
          </div>
        </div>
      ),
    },
    {
      id: "contained-pill-tabs",
      name: "Contained Pill Tabs",
      description: "A tab component with pill shape",
      code: `<div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1 inline-flex">
    <button className="px-4 py-2 text-sm font-medium rounded-full bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white">
      Overview
    </button>
    <button className="px-4 py-2 text-sm font-medium rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
      Kaisen UI
    </button>
    <button className="px-4 py-2 text-sm font-medium rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
      Features
    </button>
  </div>`,
      preview: () => (
        <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1 inline-flex">
          <button className="px-4 py-2 text-sm font-medium rounded-full bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white">
            Overview
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            Kaisen UI
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            Features
          </button>
        </div>
      ),
    },
    {
      id: "vertical-border-tabs",
      name: "Vertical Border Tabs",
      description: "A vertical tab component with border",
      code: `<div className="flex">
    <div className="flex flex-col border-r border-gray-200 dark:border-gray-700 pr-4">
      <button className="py-2 px-4 text-left border-l-2 border-amber-500 dark:border-amber-600 text-sm font-medium dark:text-white">
        Introduction
      </button>
      <button className="py-2 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
        Kaisen UI
      </button>
      <button className="py-2 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
        Installation
      </button>
    </div>
    <div className="flex-1 pl-4">
      <p className="text-sm text-gray-600 dark:text-gray-300">Select a tab to view content</p>
    </div>
  </div>`,
      preview: () => (
        <div className="flex">
          <div className="flex flex-col border-r border-gray-200 dark:border-gray-700 pr-4">
            <button className="py-2 px-4 text-left border-l-2 border-amber-500 dark:border-amber-600 text-sm font-medium dark:text-white">
              Introduction
            </button>
            <button className="py-2 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Kaisen UI
            </button>
            <button className="py-2 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Installation
            </button>
          </div>
          <div className="flex-1 pl-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">Select a tab to view content</p>
          </div>
        </div>
      ),

    }
  ],
  Team: [
    {
      id: "team-member",
      name: "Team Member",
      description: "A simple Team member card",
      code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center w-64">
    <div className="h-24 w-24 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-800 rounded-full mx-auto mb-4"></div>
    <h3 className="text-lg font-medium dark:text-white">Taylor Morgan</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Lead Designer</p>
    <p className="text-xs text-gray-600 dark:text-gray-300">Crafted Kaisen UI's visual identity</p>
  </div>`,
      preview: () => (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center w-64">
          <div className="h-24 w-24 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-800 rounded-full mx-auto mb-4"></div>
          <h3 className="text-lg font-medium dark:text-white">Taylor Morgan</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Lead Designer</p>
          <p className="text-xs text-gray-600 dark:text-gray-300">Crafted Kaisen UI's visual identity</p>
        </div>
      ),
    },
    {
      id: "team-grid",
      name: "Team Grid",
      description: "A grid of team members",
      code: `<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="h-40 bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-600 dark:to-amber-800 relative">
        <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-amber-100 to-amber-300 dark:from-amber-800 dark:to-amber-900 shadow-md transform group-hover:rotate-2 transition-transform"></div>
      </div>
      <div className="p-6 pt-10">
        <h3 className="text-xl font-bold dark:text-white">Riley Jones</h3>
        <p className="text-amber-500 dark:text-amber-400 font-medium mb-3">Founder & CEO</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Visionary behind Kaisen UI. Leads product strategy and core architecture.</p>
        <div className="flex gap-2 mt-4">
          <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-xs text-amber-600 dark:text-amber-300">TW</div>
          <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-xs text-amber-600 dark:text-amber-300">GH</div>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 relative">
        <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-800 dark:to-blue-900 shadow-md transform group-hover:-rotate-2 transition-transform"></div>
      </div>
      <div className="p-6 pt-10">
        <h3 className="text-xl font-bold dark:text-white">Jordan Lee</h3>
        <p className="text-blue-500 dark:text-blue-400 font-medium mb-3">Tech Lead</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Ensures technical excellence across all Kaisen UI components.</p>
        <div className="flex gap-2 mt-4">
          <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-xs text-blue-600 dark:text-blue-300">GH</div>
          <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-xs text-blue-600 dark:text-blue-300">LI</div>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="h-40 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800 relative">
        <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-purple-100 to-purple-300 dark:from-purple-800 dark:to-purple-900 shadow-md transform group-hover:rotate-1 transition-transform"></div>
      </div>
      <div className="p-6 pt-10">
        <h3 className="text-xl font-bold dark:text-white">Morgan Taylor</h3>
        <p className="text-purple-500 dark:text-purple-400 font-medium mb-3">Design Lead</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Crafts Kaisen UI's visual language and interaction patterns.</p>
        <div className="flex gap-2 mt-4">
          <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-xs text-purple-600 dark:text-purple-300">TW</div>
          <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-xs text-purple-600 dark:text-purple-300">DR</div>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="h-40 bg-gradient-to-br from-emerald-400 to-emerald-600 dark:from-emerald-600 dark:to-emerald-800 relative">
        <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-emerald-100 to-emerald-300 dark:from-emerald-800 dark:to-emerald-900 shadow-md transform group-hover:-rotate-1 transition-transform"></div>
      </div>
      <div className="p-6 pt-10">
        <h3 className="text-xl font-bold dark:text-white">Casey Smith</h3>
        <p className="text-emerald-500 dark:text-emerald-400 font-medium mb-3">Backend Lead</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Builds the robust systems powering Kaisen UI's infrastructure.</p>
        <div className="flex gap-2 mt-4">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-xs text-emerald-600 dark:text-emerald-300">GH</div>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="h-40 bg-gradient-to-br from-rose-400 to-rose-600 dark:from-rose-600 dark:to-rose-800 relative">
        <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-rose-100 to-rose-300 dark:from-rose-800 dark:to-rose-900 shadow-md transform group-hover:rotate-2 transition-transform"></div>
      </div>
      <div className="p-6 pt-10">
        <h3 className="text-xl font-bold dark:text-white">Taylor Morgan</h3>
        <p className="text-rose-500 dark:text-rose-400 font-medium mb-3">Frontend Developer</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Implements pixel-perfect UIs with Kaisen UI components.</p>
        <div className="flex gap-2 mt-4">
          <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-xs text-rose-600 dark:text-rose-300">GH</div>
          <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-xs text-rose-600 dark:text-rose-300">TW</div>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="h-40 bg-gradient-to-br from-indigo-400 to-indigo-600 dark:from-indigo-600 dark:to-indigo-800 relative">
        <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-indigo-100 to-indigo-300 dark:from-indigo-800 dark:to-indigo-900 shadow-md transform group-hover:-rotate-2 transition-transform"></div>
      </div>
      <div className="p-6 pt-10">
        <h3 className="text-xl font-bold dark:text-white">Alex Rivera</h3>
        <p className="text-indigo-500 dark:text-indigo-400 font-medium mb-3">Community Manager</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Connects with Kaisen UI users and gathers feedback.</p>
        <div className="flex gap-2 mt-4">
          <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs text-indigo-600 dark:text-indigo-300">TW</div>
          <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs text-indigo-600 dark:text-indigo-300">DI</div>
        </div>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Founder */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="h-40 bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-600 dark:to-amber-800 relative">
              <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-amber-100 to-amber-300 dark:from-amber-800 dark:to-amber-900 shadow-md transform group-hover:rotate-2 transition-transform"></div>
            </div>
            <div className="p-6 pt-10">
              <h3 className="text-xl font-bold dark:text-white">Riley Jones</h3>
              <p className="text-amber-500 dark:text-amber-400 font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Visionary behind Kaisen UI. Leads product strategy and core architecture.</p>
              <div className="flex gap-2 mt-4">
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-xs text-amber-600 dark:text-amber-300">TW</div>
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-xs text-amber_600 dark:text_amber_300">GH</div>
              </div>
            </div>
          </div>

          {/* Tech Lead */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 relative">
              <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-800 dark:to-blue-900 shadow-md transform group-hover:-rotate-2 transition-transform"></div>
            </div>
            <div className="p-6 pt-10">
              <h3 className="text-xl font-bold dark:text-white">Jordan Lee</h3>
              <p className="text-blue-500 dark:text-blue-400 font-medium mb-3">Tech Lead</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Ensures technical excellence across all Kaisen UI components.</p>
              <div className="flex gap-2 mt-4">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-xs text-blue-600 dark:text-blue-300">GH</div>
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-xs text-blue_600 dark:text_blue_300">LI</div>
              </div>
            </div>
          </div>

          {/* Design Lead */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="h-40 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800 relative">
              <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-purple-100 to-purple-300 dark:from-purple-800 dark:to-purple-900 shadow-md transform group-hover:rotate-1 transition-transform"></div>
            </div>
            <div className="p-6 pt-10">
              <h3 className="text-xl font-bold dark:text-white">Morgan Taylor</h3>
              <p className="text-purple-500 dark:text-purple-400 font-medium mb-3">Design Lead</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Crafts Kaisen UI's visual language and interaction patterns.</p>
              <div className="flex gap-2 mt-4">
                <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-xs text-purple-600 dark:text-purple-300">TW</div>
                <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-xs text-purple_600 dark:text_purple_300">DR</div>
              </div>
            </div>
          </div>

          {/* Backend Lead */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="h-40 bg-gradient-to-br from-emerald-400 to-emerald-600 dark:from-emerald-600 dark:to-emerald-800 relative">
              <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-emerald-100 to-emerald-300 dark:from-emerald-800 dark:to-emerald-900 shadow-md transform group-hover:-rotate-1 transition-transform"></div>
            </div>
            <div className="p-6 pt-10">
              <h3 className="text-xl font-bold dark:text-white">Casey Smith</h3>
              <p className="text-emerald-500 dark:text-emerald-400 font-medium mb-3">Backend Lead</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Builds the robust systems powering Kaisen UI's infrastructure.</p>
              <div className="flex gap-2 mt-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-xs text-emerald-600 dark:text-emerald-300">GH</div>
              </div>
            </div>
          </div>

          {/* Frontend Dev */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="h-40 bg-gradient-to-br from-rose-400 to-rose-600 dark:from-rose-600 dark:to-rose-800 relative">
              <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-rose-100 to-rose-300 dark:from-rose-800 dark:to-rose-900 shadow-md transform group-hover:rotate-2 transition-transform"></div>
            </div>
            <div className="p-6 pt-10">
              <h3 className="text-xl font-bold dark:text-white">Taylor Morgan</h3>
              <p className="text-rose-500 dark:text-rose-400 font-medium mb-3">Frontend Developer</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Implements pixel-perfect UIs with Kaisen UI components.</p>
              <div className="flex gap-2 mt-4">
                <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-xs text-rose-600 dark:text-rose-300">GH</div>
                <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-xs text-rose_600 dark:text_rose_300">TW</div>
              </div>
            </div>
          </div>

          {/* Community Manager */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="h-40 bg-gradient-to-br from-indigo-400 to-indigo-600 dark:from-indigo-600 dark:to-indigo-800 relative">
              <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-indigo-100 to-indigo-300 dark:from-indigo-800 dark:to-indigo-900 shadow-md transform group-hover:-rotate-2 transition-transform"></div>
            </div>
            <div className="p-6 pt-10">
              <h3 className="text-xl font-bold dark:text-white">Alex Rivera</h3>
              <p className="text-indigo-500 dark:text-indigo-400 font-medium mb-3">Community Manager</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Connects with Kaisen UI users and gathers feedback.</p>
              <div className="flex gap-2 mt-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs text-indigo_600 dark:text_indigo_300">TW</div>
                <div className="w_8 h_8 rounded-lg bg-indigo_100 dark:bg-indigo_900/50 flex items-center justify-center text-xs text-indigo_600 dark:text_indigo_300">DI</div>
              </div>
            </div>
          </div>
        </div>
      ),

    },
    {
      id: "team-profile-highlight",
      name: "Team Profile Highlight",
      description: "A team profile highlight with gradient",
      code: `<div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
    <div className="h-32 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900"></div>
    <div className="px-6 pb-6 -mt-12">
      <div className="h-24 w-24 bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700 rounded-full border-4 border-white dark:border-gray-800 mx-auto"></div>
      <div className="text-center mt-4">
        <h3 className="text-xl font-medium dark:text-white">Riley Jones</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Creator of Kaisen UI</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">Building tools that make development faster and more enjoyable</p>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900"></div>
          <div className="px-6 pb-6 -mt-12">
            <div className="h-24 w-24 bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700 rounded-full border-4 border-white dark:border-gray-800 mx-auto"></div>
            <div className="text-center mt-4">
              <h3 className="text-xl font-medium dark:text-white">Riley Jones</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Creator of Kaisen UI</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Building tools that make development faster and more enjoyable</p>
            </div>
          </div>
        </div>
      ),
    },{
      id:"Color grid",
      name:"Color grid",
      description:"A color grid with team members",
      code:`<div className="py-20 w-full px-4 md:px-8 bg-white/5">
  <div className="max-w-7xl mx-auto flex flex-col items-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
      The <span className="text-pink-500">Creators</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-3xl">
      {[
        { name: "Charan", role: "Developer", color: "bg-pink-500" },
        { name: "Varun", role: "Developer", color: "bg-blue-500" }
      ].map((person, i) => (
        <div key={i} className="relative group mx-auto w-full max-w-xs">
          <div className={\`\${person.color} h-60 rounded-2xl transform transition-all group-hover:scale-95\`}></div>
          <div className="absolute inset-0 flex items-end p-6">
            <div className="bg-black/80 backdrop-blur-sm w-full p-4 rounded-xl transform transition-all translate-y-4 group-hover:translate-y-0">
              <h3 className="text-xl font-bold">{person.name}</h3>
              <p className="text-gray-400">{person.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>`,
preview: () => (
  <div className="py-20 w-full px-4 md:px-8 bg-white/5">
  <div className="max-w-7xl mx-auto flex flex-col items-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
      The <span className="text-pink-500">Creators</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-3xl">
      {[
        { name: "Charan", role: "Developer", color: "bg-pink-500" },
        { name: "Varun", role: "Developer", color: "bg-blue-500" }
      ].map((person, i) => (
        <div key={i} className="relative group mx-auto w-full max-w-xs">
          <div className={`${person.color} h-60 rounded-2xl transform transition-all group-hover:scale-95`}></div>
          <div className="absolute inset-0 flex items-end p-6">
            <div className="bg-black/80 backdrop-blur-sm w-full p-4 rounded-xl transform transition-all translate-y-4 group-hover:translate-y-0">
              <h3 className="text-xl font-bold">{person.name}</h3>
              <p className="text-gray-400">{person.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
)
    }
  ],
  Testimonial: [
    {
      id: "basic-testimonial",
      name: "Basic Testimonial",
      description: "A simple Testimonial with a border",

      code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 max-w-md">
    <div className="h-3 w-16 bg-gradient-to-r from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700 mb-4"></div>
    <p className="text-gray-700 dark:text-gray-300 italic mb-6">"Kaisen UI transformed our workflow. The components are so intuitive that our team adopted them instantly."</p>
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
      <div>
        <p className="font-medium dark:text-white">Alex Rivera</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">CTO, TechCorp</p>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 max-w-md">
          <div className="h-3 w-16 bg-gradient-to-r from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700 mb-4"></div>
          <p className="text-gray-700 dark:text-gray-300 italic mb-6">"Kaisen UI transformed our workflow. The components are so intuitive that our team adopted them instantly."</p>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            <div>
              <p className="font-medium dark:text-white">Alex Rivera</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">CTO, TechCorp</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "split-testimonial",
      name: "Split Testimonial",
      description: "A split testimonial with text",
      code: `<div className="flex flex-col md:flex-row gap-6 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
    <div className="md:w-1/3 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900 p-8 flex items-center justify-center">
      <p className="text-5xl font-light text-gray-400 dark:text-gray-500">"</p>
    </div>
    <div className="md:w-2/3 p-8">
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Using Kaisen UI cut our development time in half. The clean design system requires zero customization.</p>
      <div>
        <p className="font-medium dark:text-white">Samira Khan</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Lead Designer, Creative Labs</p>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="flex flex-col md:flex-row gap-6 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
          <div className="md:w-1/3 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900 p-8 flex items-center justify-center">
            <p className="text-5xl font-light text-gray-400 dark:text-gray-500">"</p>
          </div>
          <div className="md:w-2/3 p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Using Kaisen UI cut our development time in half. The clean design system requires zero customization.</p>
            <div>
              <p className="font-medium dark:text-white">Samira Khan</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Lead Designer, Creative Labs</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "timeline-testimonial",
      name: "Timeline Testimonial",
      description: "A timeline testimonial with gradient",
      code: `<div className="relative pl-8">
    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-gray-300 dark:from-amber-600 dark:to-gray-700"></div>
    <div className="pb-8">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
        <p className="text-gray-700 dark:text-gray-300 mb-4">"Kaisen UI's documentation is the best I've seen. We onboarded 15 developers in a week thanks to their clear examples."</p>
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          <div>
            <p className="text-sm font-medium dark:text-white">Jamie Chen</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Engineering Manager</p>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 pl-6">Kaisen UI Case Study</p>
    </div>
  </div>`,
      preview: () => (
        <div className="relative pl-8">
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-gray-300 dark:from-amber-600 dark:to-gray-700"></div>
          <div className="pb-8">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 dark:text-gray-300 mb-4">"Kaisen UI's documentation is the best I've seen. We onboarded 15 developers in a week thanks to their clear examples."</p>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium dark:text-white">Jamie Chen</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Engineering Manager</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 pl-6">Kaisen UI Case Study</p>
          </div>
        </div>
      ),
    }
  ],
  Timeline: [
    {
      id: "media-timeline",
      name: "Media Timeline",
      description: "Vertical timeline with image cards and staggered layout",
      code: `<div className="space-y-12">
        <div className="flex flex-col md:flex-row gap-6 group">
          <div className="md:w-1/3 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 md:hidden"></div>
            <div className="w-8 h-8 rounded-full bg-amber-400 dark:bg-amber-600 flex items-center justify-center text-white font-bold absolute left-0 top-4 z-10">1</div>
            <div className="h-48 md:h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-xl overflow-hidden shadow-md">
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800">
              <p className="text-sm text-amber-500 dark:text-amber-400 mb-1">2025</p>
              <h3 className="text-xl font-bold dark:text-white">Kaisen UI Born</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">The initial concept for a revolutionary UI kit was created during a hackathon</p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200">Milestone</span>
              </div>
            </div>
          </div>
        <div className="flex flex-col md:flex-row gap-6 group">
          <div className="md:w-1/3 relative md:order-last">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 md:hidden"></div>
            <div className="w-8 h-8 rounded-full bg-blue-400 dark:bg-blue-600 flex items-center justify-center text-white font-bold absolute left-0 top-4 z-10">2</div>
            <div className="h-48 md:h-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900 rounded-xl overflow-hidden shadow-md">
            </div>
          </div>
          <div className="md:w-2/3 md:order-first">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800">
              <p className="text-sm text-blue-500 dark:text-blue-400 mb-1">2024</p>
              <h3 className="text-xl font-bold dark:text-white">Version 2.0</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Complete redesign with adaptive dark mode and performance improvements</p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">Released</span>
              </div>
            </div>
          </div>
        </div>
      </div>`,
      preview: () => (
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-6 group">
            <div className="md:w-1/3 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 md:hidden"></div>
              <div className="w-8 h-8 rounded-full bg-amber-400 dark:bg-amber-600 flex items-center justify-center text-white font-bold absolute left-0 top-4 z-10">1</div>
              <div className="h-48 md:h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-xl overflow-hidden shadow-md">
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800">
                <p className="text-sm text-amber-500 dark:text-amber-400 mb-1">2025</p>
                <h3 className="text-xl font-bold dark:text-white">Kaisen UI Born</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">The initial concept for a revolutionary UI kit was created during a hackathon</p>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200">Milestone</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 group">
            <div className="md:w-1/3 relative md:order-last">
              <div className="absolute -left-4 top-0 bottom-0 w=1 bg-gray=200 dark:bg-gray=800 md:hidden"></div>
              <div className="w-8 h-8 rounded-full bg-blue-400 dark:bg-blue-600 flex items-center justify-center text-white font-bold absolute left-0 top-4 z-10">2</div>
              <div className="h-48 md:h-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900 rounded-xl overflow-hidden shadow-md">
              </div>
            </div>
            <div className="md:w-2/3 md:order-first">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800">
                <p className="text-sm text-blue-500 dark:text-blue-400 mb-1">2024</p>
                <h3 className="text-xl font-bold dark:text-white">Version 2.0</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Complete redesign with adaptive dark mode and performance improvements</p>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">Released</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      )
    },
    {
      id: "split-milestones",
      name: "Split Milestones",
      description: "Alternating timeline with connected cards and progress indicators",
      code: `<div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 transform -translate-x-1/2"></div>
        <div className="flex justify-between items-stretch mb-16">
          <div className="w-5/12 pr-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 relative">
              <div className="absolute -right-6 top-1/2 w-6 h-6 bg-amber-400 dark:bg-amber-600 rounded-full transform -translate-y-1/2 border-4 border-white dark:border-gray-900"></div>
              <p className="text-xs font-mono text-amber-500 dark:text-amber-400 mb-1">PHASE 1</p>
              <h3 className="text-xl font-bold dark:text-white">Foundation</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Core component library and design system established</p>
            </div>
          </div>
          <div className="w-5/12"></div> {/* Spacer */}
        </div>
        <div className="flex justify-between items-stretch mb-16">
          <div className="w-5/12"></div> {/* Spacer */}
          <div className="w-5/12 pl-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 relative">
              <div className="absolute -left-6 top-1/2 w-6 h-6 bg-blue-400 dark:bg-blue-600 rounded-full transform -translate-y-1/2 border-4 border-white dark:border-gray-900"></div>
              <p className="text-xs font-mono text-blue-500 dark:text-blue-400 mb-1">PHASE 2</p>
              <h3 className="text-xl font-bold dark:text-white">Expansion</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Added 50+ new components and utilities</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-stretch">
          <div className="w-5/12 pr-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 relative">
              <div className="absolute -right-6 top-1/2 w-6 h-6 bg-purple-400 dark:bg-purple-600 rounded-full transform -translate-y-1/2 border-4 border-white dark:border-gray-900"></div>
              <p className="text-xs font-mono text-purple-500 dark:text-purple-400 mb-1">PHASE 3</p>
              <h3 className="text-xl font-bold dark:text-white">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">AI-powered component generation</p>
            </div>
          </div>
          <div className="w-5/12"></div> {/* Spacer */}
        </div>
      </div>`,
      preview: () => (
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 transform -translate-x-1/2"></div>
          <div className="flex justify-between items-stretch mb-16">
            <div className="w-5/12 pr-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 relative">
                <div className="absolute -right-6 top-1/2 w-6 h-6 bg-amber-400 dark:bg-amber-600 rounded-full transform -translate-y-1/2 border-4 border-white dark:border-gray-900"></div>
                <p className="text-xs font-mono text-amber-500 dark:text-amber-400 mb-1">PHASE 1</p>
                <h3 className="text-xl font-bold dark:text-white">Foundation</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Core component library and design system established</p>
              </div>
            </div>
            <div className="w-5/12"></div>
          </div>
          <div className="flex justify-between items-stretch mb-16">
            <div className="w-5/12"></div>
            <div className="w-5/12 pl-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 relative">
                <div className="absolute -left-6 top-1/2 w-6 h-6 bg-blue-400 dark:bg-blue-600 rounded-full transform -translate-y-1/2 border-4 border-white dark:border-gray-900"></div>
                <p className="text-xs font-mono text-blue-500 dark:text-blue_400 mb_1">PHASE 2</p>
                <h3 className="text-xl font-bold dark:text-white">Expansion</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Added 50+ new components and utilities</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-stretch">
            <div className="w-5/12 pr-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 relative">
                <div className="absolute -right-6 top-1/2 w-6 h-6 bg-purple-400 dark:bg-purple-600 rounded-full transform -translate-y-1/2 border-4 border-white dark:border-gray-900"></div>
                <p className="text-xs font-mono text-purple-500 dark:text-purple-400 mb-1">PHASE 3</p>
                <h3 className="text-xl font-bold dark:text-white">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">AI-powered component generation</p>
              </div>
            </div>
            <div className="w-5/12"></div>
          </div>
        </div>
      )
    },
    {
      id: "fluid-motion-timeline",
      name: "Fluid Motion Timeline",
      description: "Timeline with organic shapes and animated SVG path connections",
      code: `<div className="relative">
        <svg className="absolute left-6 top-0 h-full w-4" viewBox="0 0 10 100" preserveAspectRatio="none">
          <path 
            d="M5 0 Q10 25 5 50 T10 100" 
            stroke="url(#gradient)" 
            strokeWidth="2" 
            fill="none" 
            strokeDasharray="5 3"
            className="animate-[dash_10s_linear_infinite]"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
        <div className="space-y-16 pl-20">
          <div className="relative">
            <div className="absolute -left-16 top-0 w-12 h-12 rounded-3xl bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-600 dark:to-amber-800 flex items-center justify-center shadow-lg transform rotate-12">
              <div className="w-8 h-8 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold">1</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-800/50">
              <h3 className="text-xl font-bold dark:text-white mb-2">Genesis</h3>
              <p className="text-gray-600 dark:text-gray-400">Kaisen UI conceptualized as a design system for the metaverse era</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-16 top-0 w-12 h-12 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 flex items-center justify-center shadow-lg transform -rotate-12">
              <div className="w-8 h-8 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold">2</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-800/50">
              <h3 className="text-xl font-bold dark:text-white mb-2">Evolution</h3>
              <p className="text-gray-600 dark:text-gray-400">Adaptive components that learn from user interactions</p>
            </div>
          </div>
        </div>
      </div>`,
      preview: () => (
        <div className="relative">
          <svg className="absolute left-6 top-0 h-full w-4" viewBox="0 0 10 100" preserveAspectRatio="none">
            <path
              d="M5 0 Q10 25 5 50 T10 100"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5 3"
              className="animate-[dash_10s_linear_infinite]"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </svg>
          <div className="space-y-16 pl-20">
            <div className="relative">
              <div className="absolute -left-16 top-0 w-12 h-12 rounded-3xl bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-600 dark:to-amber-800 flex items-center justify-center shadow-lg transform rotate-12">
                <div className="w-8 h-8 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold">1</div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-800/50">
                <h3 className="text-xl font-bold dark:text-white mb-2">Genesis</h3>
                <p className="text-gray-600 dark:text-gray-400">Kaisen UI conceptualized as a design system for the metaverse era</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-16 top-0 w-12 h-12 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 flex items-center justify-center shadow-lg transform -rotate-12">
                <div className="w-8 h-8 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold">2</div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-800/50">
                <h3 className="text-xl font-bold dark:text-white mb-2">Evolution</h3>
                <p className="text-gray-600 dark:text-gray-400">Adaptive components that learn from user interactions</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ],
  Weather: [
    {
      id: "weather-card",
      name: "Weather Card",
      description: "A clean weather display card with temperature, condition, and Kaisen UI branding.",
      code: `<div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 w-64 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Kaisen UI Weather</p>
        <h3 className="text-2xl font-semibold dark:text-white">24°C</h3>
        <p className="text-gray-700 dark:text-gray-300">Sunny</p>
      </div>
      <div className="h-12 w-12 bg-gradient-to-br from-amber-200 to-amber-400 dark:from-amber-400 dark:to-amber-600 rounded-full"></div>
    </div>
    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
      <p className="text-xs text-gray-500 dark:text-gray-400">Powered by Kaisen UI</p>
    </div>
  </div>`,
      preview: () => (
        <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 w-64 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Kaisen UI Weather</p>
              <h3 className="text-2xl font-semibold dark:text-white">24°C</h3>
              <p className="text-gray-700 dark:text-gray-300">Sunny</p>
            </div>
            <div className="h-12 w-12 bg-gradient-to-br from-amber-200 to-amber-400 dark:from-amber-400 dark:to-amber-600 rounded-full"></div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Powered by Kaisen UI</p>
          </div>
        </div>
      ),
    },
    {
      id: "weather-forecast",
      name: "Weather Forecast",
      description: "A compact 3-day forecast with minimalist weather indicators and dark mode support.",
      code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 w-full max-w-md overflow-hidden">
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">3-Day Forecast • Kaisen UI</p>
    <div className="flex gap-4">
      <div className="flex-1 text-center">
        <p className="font-medium dark:text-white">Mon</p>
        <div className="h-10 w-10 mx-auto my-2 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-400 dark:to-blue-600 rounded-full"></div>
        <p className="text-sm dark:text-gray-300">22° / 14°</p>
      </div>
      <div className="flex-1 text-center">
        <p className="font-medium dark:text-white">Tue</p>
        <div className="h-10 w-10 mx-auto my-2 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-400 dark:to-gray-600 rounded-full"></div>
        <p className="text-sm dark:text-gray-300">19° / 12°</p>
      </div>
      <div className="flex-1 text-center">
        <p className="font-medium dark:text-white">Wed</p>
        <div className="h-10 w-10 mx-auto my-2 bg-gradient-to-br from-amber-100 to-amber-300 dark:from-amber-400 dark:to-amber-600 rounded-full"></div>
        <p className="text-sm dark:text-gray-300">26° / 18°</p>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 w-full max-w-md overflow-hidden">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">3-Day Forecast • Kaisen UI</p>
          <div className="flex gap-4">
            <div className="flex-1 text-center">
              <p className="font-medium dark:text-white">Mon</p>
              <div className="h-10 w-10 mx-auto my-2 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-400 dark:to-blue-600 rounded-full"></div>
              <p className="text-sm dark:text-gray-300">22° / 14°</p>
            </div>
            <div className="flex-1 text-center">
              <p className="font-medium dark:text-white">Tue</p>
              <div className="h-10 w-10 mx-auto my-2 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-400 dark:to-gray-600 rounded-full"></div>
              <p className="text-sm dark:text-gray-300">19° / 12°</p>
            </div>
            <div className="flex-1 text-center">
              <p className="font-medium dark:text-white">Wed</p>
              <div className="h-10 w-10 mx-auto my-2 bg-gradient-to-br from-amber-100 to-amber-300 dark:from-amber-400 dark:to-amber-600 rounded-full"></div>
              <p className="text-sm dark:text-gray-300">26° / 18°</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "weather-widget",
      name: "Weather Widget",
      description: "A tiny yet functional weather widget with current temperature and precipitation data.",
      code: `<div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl w-60">
    <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Kaisen UI</p>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-5xl font-light dark:text-white">18°</p>
        <p className="text-gray-600 dark:text-gray-300">Cloudy</p>
      </div>
      <div className="h-16 w-16 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-500 dark:to-gray-700 rounded-full"></div>
    </div>
    <div className="mt-3 h-px bg-gray-200 dark:bg-gray-700"></div>
    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Precipitation: 10%</p>
  </div>`,
      preview: () => (
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl w-60">
          <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Kaisen UI</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-5xl font-light dark:text-white">18°</p>
              <p className="text-gray-600 dark:text-gray-300">Cloudy</p>
            </div>
            <div className="h-16 w-16 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-500 dark:to-gray-700 rounded-full"></div>
          </div>
          <div className="mt-3 h-px bg-gray-200 dark:bg-gray-700"></div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Precipitation: 10%</p>
        </div>
      ),
    }
  ],
  Card: [
    {
      id: "holo-card",
      name: "Holographic Card",
      description: "A simple holographic card with a gradient background",
      code: `<div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-500">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
    <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30"></div>
    <div className="p-6 relative">
      <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full uppercase">KAISEN UI</span>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Atomic Design System</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Build interfaces faster with our zero-runtime component library optimized for React and Vite</p>
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent dark:via-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  </div> `,
      preview: () => (
        <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-500">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30"></div>
          <div className="p-6 relative">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full uppercase">KAISEN UI</span>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Atomic Design System</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Build interfaces faster with our zero-runtime component library optimized for React and Vite</p>
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent dark:via-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      ),
    },
    {
      id: "glow-card",
      name: "Glow Card",
      description: "A simple card with a glowing effect",
      code: `<div className="relative isolate overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors duration-300">
    <div className="absolute -inset-2 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-500/20 dark:from-indigo-600/20 dark:to-purple-600/20 rounded-xl animate-[pulse_3s_infinite]"></div>
    </div>
    <div className="h-10 w-10 rounded-lg mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700"></div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Performance Engine</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-6">Kaisen UI components render 40% faster than traditional React libraries</p>
    <div className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
      Explore
      <span className="ml-2 h-2 w-2 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse"></span>
    </div>
  </div> `,
      preview: () => (
        <div className="relative isolate overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors duration-300">
          <div className="absolute -inset-2 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-500/20 dark:from-indigo-600/20 dark:to-purple-600/20 rounded-xl animate-[pulse_3s_infinite]"></div>
          </div>
          <div className="h-10 w-10 rounded-lg mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700"></div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Performance Engine</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Kaisen UI components render 40% faster than traditional React libraries</p>
          <div className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            Explore
            <span className="ml-2 h-2 w-2 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse"></span>
          </div>
        </div>
      ),
    },
    {
      id: "release-card",
      name: "Release Card",
      description: "A card showcasing the latest release with a gradient background",
      code: `<div className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600"></div>
    <div className="pl-8 pr-6 py-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-3 w-3 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-[pulse_2s_infinite]"></div>
        <span className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">NEW RELEASE</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Kaisen v3.0</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">The most advanced version of our UI system yet - now with dark mode auto-detection</p>
      <div className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group-hover:border-indigo-300 dark:group-hover:border-indigo-600">
        Learn More
        <span className="ml-2 block h-3 w-3 rounded-sm bg-indigo-500 dark:bg-indigo-400 group-hover:animate-[spin_1s_linear_infinite] transition-transform"></span>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600"></div>
          <div className="pl-8 pr-6 py-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-[pulse_2s_infinite]"></div>
              <span className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">NEW RELEASE</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Kaisen v3.0</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">The most advanced version of our UI system yet - now with dark mode auto-detection</p>
            <div className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group-hover:border-indigo-300 dark:group-hover:border-indigo-600">
              Learn More
              <span className="ml-2 block h-3 w-3 rounded-sm bg-indigo-500 dark:bg-indigo-400 group-hover:animate-[spin_1s_linear_infinite] transition-transform"></span>
            </div>
          </div>
        </div>
      ),
    },{
      id: "feature-card",
      name: "Feature Card",
      description: "A card showcasing the latest release with a gradient background",
      code: `<div className="py-20 w-full px-4 md:px-8 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: "100+ Components", desc: "Everything you need to build modern interfaces", color: "from-purple-600 to-blue-600" },
        { title: "Zero Dependencies", desc: "Lightweight and blazing fast performance", color: "from-pink-600 to-purple-600" },
        { title: "Fully Customizable", desc: "Tailor components to match your brand", color: "from-blue-600 to-cyan-600" },
        { title: "Dark Mode Ready", desc: "Beautiful in light and dark themes", color: "from-pink-600 to-red-600" }
      ].map((feature, i) => (
        <div key={i} className="relative overflow-hidden rounded-2xl h-64 group">
          <div className={\`absolute inset-0 bg-gradient-to-br \${feature.color} opacity-90 transition-transform duration-500 group-hover:scale-110\`}></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.desc}</p>
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  </div>`,
      preview: () => (
        <div className="py-20 w-full px-4 md:px-8 max-w-7xl mx-auto">
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: "100+ Components", desc: "Everything you need to build modern interfaces", color: "from-purple-600 to-blue-600" },
        { title: "Zero Dependencies", desc: "Lightweight and blazing fast performance", color: "from-pink-600 to-purple-600" },
        { title: "Fully Customizable", desc: "Tailor components to match your brand", color: "from-blue-600 to-cyan-600" },
        { title: "Dark Mode Ready", desc: "Beautiful in light and dark themes", color: "from-pink-600 to-red-600" }
      ].map((feature, i) => (
        <div key={i} className="relative overflow-hidden rounded-2xl h-64 group">
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-90 transition-transform duration-500 group-hover:scale-110`}></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.desc}</p>
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
      ),
    },{
      id: "Simple Feature Card",
      name: "Simple Feature Card",
      description: "A simple feature card with a gradient background",
      code:`<section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="container mx-auto max-w-7xl">
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-rose-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-zinc-400">
                Optimized for performance with zero unnecessary code. Your apps stay fast, always.
              </p>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Customizable</h3>
              <p className="text-zinc-400">
                Every component is designed to be easily customized to match your brand's unique style.
              </p>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-violet-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility First</h3>
              <p className="text-zinc-400">
                Built with accessibility in mind. All components follow WAI-ARIA standards.
              </p>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-fuchsia-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-zinc-400">Components that look great on any device, from mobile to desktop.</p>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-pink-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Developer Experience</h3>
              <p className="text-zinc-400">Intuitive API with comprehensive documentation and TypeScript support.</p>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-rose-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Copy & Paste</h3>
              <p className="text-zinc-400">No complicated setup. Just copy, paste, and customize to your needs.</p>
            </div>
          </div>
        </div>
      </section>`,
      preview: () => (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="container mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-rose-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-zinc-400">
                Optimized for performance with zero unnecessary code. Your apps stay fast, always.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Customizable</h3>
              <p className="text-zinc-400">
                Every component is designed to be easily customized to match your brand's unique style.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-violet-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility First</h3>
              <p className="text-zinc-400">
                Built with accessibility in mind. All components follow WAI-ARIA standards.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-fuchsia-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-zinc-400">Components that look great on any device, from mobile to desktop.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-pink-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Developer Experience</h3>
              <p className="text-zinc-400">Intuitive API with comprehensive documentation and TypeScript support.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-rose-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Copy & Paste</h3>
              <p className="text-zinc-400">No complicated setup. Just copy, paste, and customize to your needs.</p>
            </div>
          </div>
        </div>
      </section>
      )
    }
  ],
  Contact: [
    {
      id: "contact-card",
      name: "Contact Card",
      description: "A simple contact card with a gradient background",
      code: `<div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl p-8 border border-gray-100">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]"></div>
    <h2 className="text-3xl font-bold text-gray-900 mb-1">Let's Build <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Something Amazing</span></h2>
    <p className="text-gray-600 mb-8">Kaisen UI powers 10,000+ projects. Yours could be next.</p>
    
    <div className="space-y-6">
      <div className="relative">
        <input type="text" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all placeholder-gray-900" placeholder="Your Name" />
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
      
      <div className="relative">
        <input type="email" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all placeholder-gray-900" placeholder="Email" />
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
      
      <div className="relative">
        <textarea className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all min-h-[120px] placeholder-gray-900" placeholder="Tell us about your project"></textarea>
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400 w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
      
      <button className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-300 transition-all hover:-translate-y-0.5">
        Send Message
        <span className="ml-2 inline-block h-2 w-2 rounded-full bg-white/80 animate-pulse"></span>
      </button>
    </div>
    
    <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-indigo-100 animate-[ping_2s_infinite]"></div>
  </div>`,
      preview: () => (
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl p-8 border border-gray-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]"></div>
          <h2 className="text-3xl font-bold text-gray-900 mb-1">Let's Build <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Something Amazing</span></h2>
          <p className="text-gray-600 mb-8">Kaisen UI powers 10,000+ projects. Yours could be next.</p>

          <div className="space-y-6">
            <div className="relative">
              <input type="text" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all placeholder-gray-900" placeholder="Your Name" />
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>

            <div className="relative">
              <input type="email" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all placeholder-gray-900" placeholder="Email" />
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>

            <div className="relative">
              <textarea className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all min-h-[120px] placeholder-gray-900" placeholder="Tell us about your project"></textarea>
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>

            <button className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-300 transition-all hover:-translate-y-0.5">
              Send Message
              <span className="ml-2 inline-block h-2 w-2 rounded-full bg-white/80 animate-pulse"></span>
            </button>
          </div>

          <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-indigo-100 animate-[ping_2s_infinite]"></div>
        </div>
      ),
    },
    {
      id: "Dark-Contact-Form",
      name: "Dark Contact Form",
      description: "A modern contact form with a gradient background",
      code: `<div className="relative bg-gray-900 rounded-2xl overflow-hidden p-8 border border-gray-800 shadow-[0_0_20px_0_rgba(99,102,241,0.1)]">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    <h2 className="text-3xl font-bold text-white mb-2">Contact <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Kaisen</span> Team</h2>
    <p className="text-gray-400 mb-8">We're revolutionizing UI development. Join the movement.</p>
    
    <div className="relative z-10 space-y-6">
      <div className="relative group">
        <input type="text" className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-900 transition-all text-white placeholder-gray-500" placeholder="Your Name" />
        <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-indigo-500 to-cyan-500 w-0 group-focus-within:w-full transition-all duration-500"></div>
      </div>
      
      <div className="relative group">
        <input type="email" className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-900 transition-all text-white placeholder-gray-500" placeholder="Email" />
        <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-cyan-500 to-purple-500 w-0 group-focus-within:w-full transition-all duration-500"></div>
      </div>
      
      <div className="relative group">
        <textarea className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-900 transition-all text-white placeholder-gray-500 min-h-[120px]" placeholder="Your message"></textarea>
        <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-purple-500 to-pink-500 w-0 group-focus-within:w-full transition-all duration-500"></div>
      </div>
      
      <button className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 transition-all hover:-translate-y-0.5 flex items-center justify-center">
        <span>Submit Request</span>
        <span className="ml-2 h-2 w-2 rounded-full bg-white/80 animate-pulse"></span>
      </button>
    </div>
    
    <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-indigo-600/20 blur-xl"></div>
    <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-purple-600/20 blur-xl"></div>
  </div> `,
      preview: () => (
        <div className="relative bg-gray-900 rounded-2xl overflow-hidden p-8 border border-gray-800 shadow-[0_0_20px_0_rgba(99,102,241,0.1)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <h2 className="text-3xl font-bold text-white mb-2">Contact <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Kaisen</span> Team</h2>
          <p className="text-gray-400 mb-8">We're revolutionizing UI development. Join the movement.</p>

          <div className="relative z-10 space-y-6">
            <div className="relative group">
              <input type="text" className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-900 transition-all text-white placeholder-gray-500" placeholder="Your Name" />
              <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-indigo-500 to-cyan-500 w-0 group-focus-within:w-full transition-all duration-500"></div>
            </div>

            <div className="relative group">
              <input type="email" className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-900 transition-all text-white placeholder-gray-500" placeholder="Email" />
              <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-cyan-500 to-purple-500 w-0 group-focus-within:w-full transition-all duration-500"></div>
            </div>

            <div className="relative group">
              <textarea className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-900 transition-all text-white placeholder-gray-500 min-h-[120px]" placeholder="Your message"></textarea>
              <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-purple-500 to-pink-500 w-0 group-focus-within:w-full transition-all duration-500"></div>
            </div>

            <button className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 transition-all hover:-translate-y-0.5 flex items-center justify-center">
              <span>Submit Request</span>
              <span className="ml-2 h-2 w-2 rounded-full bg-white/80 animate-pulse"></span>
            </button>
          </div>

          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-indigo-600/20 blur-xl"></div>
          <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-purple-600/20 blur-xl"></div>
        </div>
      ),
    }
  ],
  Faq: [
    {
      id: "accordion",
      name: "Accordion",
      description: "A simple accordion component with a gradient background",
      code: `<div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-8 shadow-lg border border-indigo-100 dark:border-indigo-900/50">
    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/40 dark:bg-indigo-800/30 rounded-full filter blur-xl"></div>
    <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">Kaisen UI FAQ</h2>
    
    <div className="space-y-4">
      <div className="group overflow-hidden rounded-xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900/30">
        <div className="px-5 py-4 flex justify-between items-center cursor-pointer">
          <h3 className="font-medium text-indigo-700 dark:text-indigo-300">How does Kaisen UI compare to other libraries?</h3>
          <div className="w-5 h-5 relative">
            <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-indigo-500 dark:bg-indigo-400 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-0.5 h-3 bg-indigo-500 dark:bg-indigo-400 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity"></div>
          </div>
        </div>
        <div className="px-5 pb-4 text-indigo-900/80 dark:text-indigo-100/80">
          Kaisen UI uses atomic design principles with zero-runtime CSS, making it 40% faster than traditional component libraries while maintaining full customization.
        </div>
      </div>
      
      <div className="group overflow-hidden rounded-xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900/30">
        <div className="px-5 py-4 flex justify-between items-center cursor-pointer">
          <h3 className="font-medium text-indigo-700 dark:text-indigo-300">Is dark mode supported out of the box?</h3>
          <div className="w-5 h-5 relative">
            <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-indigo-500 dark:bg-indigo-400 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-0.5 h-3 bg-indigo-500 dark:bg-indigo-400 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity"></div>
          </div>
        </div>
        <div className="px-5 pb-4 text-indigo-900/80 dark:text-indigo-100/80">
          Absolutely! Kaisen UI automatically detects system preferences and provides manual override options with perfect contrast ratios.
        </div>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-8 shadow-lg border border-indigo-100 dark:border-indigo-900/50">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/40 dark:bg-indigo-800/30 rounded-full filter blur-xl"></div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">Kaisen UI FAQ</h2>

          <div className="space-y-4">
            <div className="group overflow-hidden rounded-xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900/30">
              <div className="px-5 py-4 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-indigo-700 dark:text-indigo-300">How does Kaisen UI compare to other libraries?</h3>
                <div className="w-5 h-5 relative">
                  <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-indigo-500 dark:bg-indigo-400 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-1/2 w-0.5 h-3 bg-indigo-500 dark:bg-indigo-400 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity"></div>
                </div>
              </div>
              <div className="px-5 pb-4 text-indigo-900/80 dark:text-indigo-100/80">
                Kaisen UI uses atomic design principles with zero-runtime CSS, making it 40% faster than traditional component libraries while maintaining full customization.
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900/30">
              <div className="px-5 py-4 flex justify-between items-center cursor-pointer">
                <h3 className="font-medium text-indigo-700 dark:text-indigo-300">Is dark mode supported out of the box?</h3>
                <div className="w-5 h-5 relative">
                  <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-indigo-500 dark:bg-indigo-400 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-1/2 w-0.5 h-3 bg-indigo-500 dark:bg-indigo-400 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity"></div>
                </div>
              </div>
              <div className="px-5 pb-4 text-indigo-900/80 dark:text-indigo-100/80">
                Absolutely! Kaisen UI automatically detects system preferences and provides manual override options with perfect contrast ratios.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "Toggle-FAQ",
      name: "Toggle FAQ",
      description: "A simple toggle FAQ component with a gradient background",
      code: `<div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 p-8 shadow-inner border border-cyan-100 dark:border-cyan-900/50">
    <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">Developer Questions</h2>
    
    <div className="space-y-3">
      <div className="group rounded-lg overflow-hidden">
        <div className="px-5 py-3.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-cyan-200 dark:border-cyan-800/50 rounded-lg cursor-pointer hover:shadow-md transition-shadow">
          <h3 className="font-medium text-cyan-800 dark:text-cyan-200 flex items-center">
            <span className="w-3 h-3 rounded-full bg-cyan-500 dark:bg-cyan-400 mr-3 group-hover:animate-pulse"></span>
            What makes Kaisen UI different?
          </h3>
          <div className="mt-2 text-cyan-700/80 dark:text-cyan-300/80 pl-6">
            Our atomic CSS approach eliminates runtime overhead while providing design flexibility that adapts to your brand.
          </div>
        </div>
      </div>
      
      <div className="group rounded-lg overflow-hidden">
        <div className="px-5 py-3.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-cyan-200 dark:border-cyan-800/50 rounded-lg cursor-pointer hover:shadow-md transition-shadow">
          <h3 className="font-medium text-cyan-800 dark:text-cyan-200 flex items-center">
            <span className="w-3 h-3 rounded-full bg-cyan-500 dark:bg-cyan-400 mr-3 group-hover:animate-pulse"></span>
            How customizable are the components?
          </h3>
          <div className="mt-2 text-cyan-700/80 dark:text-cyan-300/80 pl-6">
            Every component is built with customization hooks and CSS variables for complete control without sacrificing performance.
          </div>
        </div>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 p-8 shadow-inner border border-cyan-100 dark:border-cyan-900/50">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">Developer Questions</h2>

          <div className="space-y-3">
            <div className="group rounded-lg overflow-hidden">
              <div className="px-5 py-3.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-cyan-200 dark:border-cyan-800/50 rounded-lg cursor-pointer hover:shadow-md transition-shadow">
                <h3 className="font-medium text-cyan-800 dark:text-cyan-200 flex items-center">
                  <span className="w-3 h-3 rounded-full bg-cyan-500 dark:bg-cyan-400 mr-3 group-hover:animate-pulse"></span>
                  What makes Kaisen UI different?
                </h3>
                <div className="mt-2 text-cyan-700/80 dark:text-cyan-300/80 pl-6">
                  Our atomic CSS approach eliminates runtime overhead while providing design flexibility that adapts to your brand.
                </div>
              </div>
            </div>

            <div className="group rounded-lg overflow-hidden">
              <div className="px-5 py-3.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-cyan-200 dark:border-cyan-800/50 rounded-lg cursor-pointer hover:shadow-md transition-shadow">
                <h3 className="font-medium text-cyan-800 dark:text-cyan-200 flex items-center">
                  <span className="w-3 h-3 rounded-full bg-cyan-500 dark:bg-cyan-400 mr-3 group-hover:animate-pulse"></span>
                  How customizable are the components?
                </h3>
                <div className="mt-2 text-cyan-700/80 dark:text-cyan-300/80 pl-6">
                  Every component is built with customization hooks and CSS variables for complete control without sacrificing performance.
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    }
  ],
  Gallery: [
    {
      id: "panoromic-gallery",
      name: "Panoromic Gallery",
      description: "A gallery with a holographic effect",
      code: `<div className="relative w-full h-[80vh] overflow-hidden rounded-3xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 border-2 border-purple-200 dark:border-purple-900/30 shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-700 dark:to-indigo-800 flex items-center justify-center">
      <span className="text-5xl font-bold text-white/80">KAISEN UI SHOWCASE</span>
    </div>
    <div className="absolute bottom-8 left-8 right-8 grid grid-cols-4 gap-4 h-[30%]">
      <div className="bg-gradient-to-br from-amber-400 to-pink-500 dark:from-amber-600 dark:to-pink-700 rounded-xl hover:scale-110 transition-transform"></div>
      <div className="bg-gradient-to-br from-emerald-400 to-cyan-500 dark:from-emerald-600 dark:to-cyan-700 rounded-xl hover:scale-110 transition-transform"></div>
      <div className="bg-gradient-to-br from-rose-400 to-fuchsia-500 dark:from-rose-600 dark:to-fuchsia-700 rounded-xl hover:scale-110 transition-transform"></div>
      <div className="bg-gradient-to-br from-blue-400 to-violet-500 dark:from-blue-600 dark:to-violet-700 rounded-xl hover:scale-110 transition-transform"></div>
    </div>
    
  </div>`,
      preview: () => (
        <div className="relative w-full h-[80vh] overflow-hidden rounded-3xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 border-2 border-purple-200 dark:border-purple-900/30 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-700 dark:to-indigo-800 flex items-center justify-center">
            <span className="text-5xl font-bold text-white/80">KAISEN UI SHOWCASE</span>
          </div>
          <div className="absolute bottom-8 left-8 right-8 grid grid-cols-4 gap-4 h-[30%]">
            <div className="bg-gradient-to-br from-amber-400 to-pink-500 dark:from-amber-600 dark:to-pink-700 rounded-xl hover:scale-110 transition-transform"></div>
            <div className="bg-gradient-to-br from-emerald-400 to-cyan-500 dark:from-emerald-600 dark:to-cyan-700 rounded-xl hover:scale-110 transition-transform"></div>
            <div className="bg-gradient-to-br from-rose-400 to-fuchsia-500 dark:from-rose-600 dark:to-fuchsia-700 rounded-xl hover:scale-110 transition-transform"></div>
            <div className="bg-gradient-to-br from-blue-400 to-violet-500 dark:from-blue-600 dark:to-violet-700 rounded-xl hover:scale-110 transition-transform"></div>
          </div>

        </div>
      ),
    },
    {
      id: "grid-gallery",
      name: "Grid Gallery",
      description: "A button with a neon effect",
      code: `<div className="w-full h-[70vh] grid grid-cols-3 grid-rows-2 gap-4 rounded-3xl overflow-hidden">
    <div className="row-span-2 col-span-2 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 flex items-center justify-center hover:scale-[1.02] transition-transform duration-500">
      <span className="text-6xl font-bold text-white/90">KAISEN</span>
    </div>
    <div className="bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700 hover:scale-105 transition-transform duration-300"></div>
    <div className="bg-gradient-to-br from-pink-400 to-rose-500 dark:from-pink-600 dark:to-rose-700 hover:scale-105 transition-transform duration-300"></div>
    <div className="bg-gradient-to-br from-amber-400 to-orange-500 dark:from-amber-600 dark:to-orange-700 hover:scale-105 transition-transform duration-300"></div>
    <div className="bg-gradient-to-br from-green-400 to-emerald-500 dark:from-green-600 dark:to-emerald-700 hover:scale-105 transition-transform duration-300"></div>
    <div className="absolute bottom-8 right-8 flex gap-3">
      <div className="w-4 h-4 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-indigo-400 dark:border-indigo-600 cursor-pointer hover:scale-125 transition-transform"></div>
      <div className="w-4 h-4 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-indigo-400 dark:border-indigo-600 cursor-pointer hover:scale-125 transition-transform"></div>
      <div className="w-4 h-4 rounded-full bg-indigo-500 dark:bg-indigo-400 border-2 border-white dark:border-gray-900 cursor-pointer hover:scale-125 transition-transform"></div>
      <div className="w-4 h-4 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-indigo-400 dark:border-indigo-600 cursor-pointer hover:scale-125 transition-transform"></div>
    </div>
  </div>`,
      preview: () => (
        <div className="w-full h-[70vh] grid grid-cols-3 grid-rows-2 gap-4 rounded-3xl overflow-hidden">
          <div className="row-span-2 col-span-2 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 flex items-center justify-center hover:scale-[1.02] transition-transform duration-500">
            <span className="text-6xl font-bold text-white/90">KAISEN</span>
          </div>
          <div className="bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700 hover:scale-105 transition-transform duration-300"></div>
          <div className="bg-gradient-to-br from-pink-400 to-rose-500 dark:from-pink-600 dark:to-rose-700 hover:scale-105 transition-transform duration-300"></div>
          <div className="bg-gradient-to-br from-amber-400 to-orange-500 dark:from-amber-600 dark:to-orange-700 hover:scale-105 transition-transform duration-300"></div>
          <div className="bg-gradient-to-br from-green-400 to-emerald-500 dark:from-green-600 dark:to-emerald-700 hover:scale-105 transition-transform duration-300"></div>
          <div className="absolute bottom-8 right-8 flex gap-3">
            <div className="w-4 h-4 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-indigo-400 dark:border-indigo-600 cursor-pointer hover:scale-125 transition-transform"></div>
            <div className="w-4 h-4 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-indigo-400 dark:border-indigo-600 cursor-pointer hover:scale-125 transition-transform"></div>
            <div className="w-4 h-4 rounded-full bg-indigo-500 dark:bg-indigo-400 border-2 border-white dark:border-gray-900 cursor-pointer hover:scale-125 transition-transform"></div>
            <div className="w-4 h-4 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-indigo-400 dark:border-indigo-600 cursor-pointer hover:scale-125 transition-transform"></div>
          </div>
        </div>
      ),
    },
  ],
  Hero: [
    {
      id: "Gradient-Hero",
      name: "Gradient Hero",
      description: "A hero section with a gradient background",
      code: `<div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0%,transparent_70%)]"></div>
    
    <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center">
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
        Build Faster with Kaisen UI
      </h1>
      <p className="text-xl text-indigo-900/80 dark:text-indigo-100/80 max-w-2xl mb-10">
        The atomic design system that compiles to pure CSS. Zero runtime. Maximum performance.
      </p>
      
      <div className="flex gap-4">
        <div className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-300/50 transition-shadow">
          Get Started
        </div>
        <div className="px-8 py-3.5 bg-white/90 dark:bg-gray-900/90 text-indigo-600 dark:text-indigo-400 font-bold rounded-xl border-2 border-indigo-200 dark:border-indigo-800 hover:bg-white dark:hover:bg-gray-800 transition-colors">
          Live Demo
        </div>
      </div>
        </div>
  </div>`,
      preview: () => (
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0%,transparent_70%)]"></div>

          <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Build Faster with Kaisen UI
            </h1>
            <p className="text-xl text-indigo-900/80 dark:text-indigo-100/80 max-w-2xl mb-10">
              The atomic design system that compiles to pure CSS. Zero runtime. Maximum performance.
            </p>

            <div className="flex gap-4">
              <div className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-300/50 transition-shadow">
                Get Started
              </div>
              <div className="px-8 py-3.5 bg-white/90 dark:bg-gray-900/90 text-indigo-600 dark:text-indigo-400 font-bold rounded-xl border-2 border-indigo-200 dark:border-indigo-800 hover:bg-white dark:hover:bg-gray-800 transition-colors">
                Live Demo
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "color-matrix",
      name: "Color Matrix",
      description: "A hero section with a color matrix effect",
      code: `<div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20">
    <div className="container mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            Why Kaisen UI?
          </h2>
          <p className="text-lg text-cyan-900/80 dark:text-cyan-100/80 mb-8">
            Experience the future of React components with our zero-runtime atomic CSS system.
          </p>
          
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-cyan-200 dark:border-cyan-800/50">
              <h3 className="text-xl font-semibold text-cyan-700 dark:text-cyan-400 mb-2">40% Faster Rendering</h3>
              <p className="text-cyan-900/70 dark:text-cyan-100/70">Compiles to pure CSS during build</p>
            </div>
            
            <div className="p-5 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/50">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">Automatic Dark Mode</h3>
              <p className="text-blue-900/70 dark:text-blue-100/70">System preference detection</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700"></div>
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 dark:from-pink-600 dark:to-rose-700"></div>
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 dark:from-amber-600 dark:to-orange-700"></div>
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 dark:from-purple-600 dark:to-indigo-700"></div>
        </div>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20">
          <div className="container mx-auto px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Why Kaisen UI?
                </h2>
                <p className="text-lg text-cyan-900/80 dark:text-cyan-100/80 mb-8">
                  Experience the future of React components with our zero-runtime atomic CSS system.
                </p>

                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-cyan-200 dark:border-cyan-800/50">
                    <h3 className="text-xl font-semibold text-cyan-700 dark:text-cyan-400 mb-2">40% Faster Rendering</h3>
                    <p className="text-cyan-900/70 dark:text-cyan-100/70">Compiles to pure CSS during build</p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/50">
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">Automatic Dark Mode</h3>
                    <p className="text-blue-900/70 dark:text-blue-100/70">System preference detection</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700"></div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 dark:from-pink-600 dark:to-rose-700"></div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 dark:from-amber-600 dark:to-orange-700"></div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 dark:from-purple-600 dark:to-indigo-700"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "split-screen",
      name: "Split Screen",
      description: "A split-screen hero section with a gradient background",
      code: `<div className="flex flex-col md:flex-row min-h-screen w-full">
        <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center p-8 md:p-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              KAISEN UI<br/>
              <span className="bg-gradient-to-r from-amber-300 to-rose-400 bg-clip-text text-transparent">UI COMPONENTS</span>
            </h1>
            <div className="h-1 w-24 bg-amber-400 mb-8"></div>
            <p className="text-indigo-100 text-lg mb-10 max-w-md">
              Kaisen UI delivers atomic design principles with zero runtime overhead for maximum performance.
            </p>
            <div className="px-8 py-3.5 bg-white text-indigo-700 font-bold rounded-full inline-block hover:bg-amber-100 transition-colors cursor-pointer">
              EXPLORE 3.0
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md h-96 rounded-3xl bg-white/20 backdrop-blur-md border-2 border-white/30"></div>
        </div>
      </div>`,
      preview: () => (
        <div className="flex flex-col md:flex-row min-h-screen w-full">
          <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center p-8 md:p-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                KAISEN UI<br />
                <span className="bg-gradient-to-r from-amber-300 to-rose-400 bg-clip-text text-transparent">UI COMPONENTS</span>
              </h1>
              <div className="h-1 w-24 bg-amber-400 mb-8"></div>
              <p className="text-indigo-100 text-lg mb-10 max-w-md">
                Kaisen UI delivers atomic design principles with zero runtime overhead for maximum performance.
              </p>
              <div className="px-8 py-3.5 bg-white text-indigo-700 font-bold rounded-full inline-block hover:bg-amber-100 transition-colors cursor-pointer">
                EXPLORE 3.0
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center p-8 md:p-12">
            <div className="w-full max-w-md h-96 rounded-3xl bg-white/20 backdrop-blur-md border-2 border-white/30"></div>
          </div>
        </div>
      ),
    },
    {
      id: "diagonal-color-burst",
      name: "Diagonal Color Burst",
      description: "A hero section with a diagonal color burst effect",
      code: `
        <div className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-950">
    <div className="absolute inset-0 w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5,#9333ea,#f97316,#ec4899,#4f46e5)] opacity-10 dark:opacity-[0.15] -rotate-45 origin-bottom-left"></div>
    <div className="relative z-10 w-full h-full min-h-screen flex flex-col justify-center px-6">
      <div className="w-full max-w-[1800px] mx-auto flex justify-between items-center">
        <div className="w-full max-w-3xl">
          <h1 className="text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-rose-500 dark:from-indigo-400 dark:to-rose-400 bg-clip-text text-transparent">KAISEN UI</span><br/>
            <span className="text-gray-900 dark:text-white">FOR MODERN APPS</span>
          </h1>
          <div className="h-1.5 w-32 bg-gradient-to-r from-indigo-500 to-pink-500 mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-lg">
            The first atomic design system that compiles to pure CSS with React component convenience.
          </p>
          <div className="flex gap-4">
            <div className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full shadow-lg">
              GET STARTED
            </div>
            <div className="px-8 py-3.5 bg-white/90 dark:bg-gray-900/90 text-indigo-600 dark:text-indigo-400 font-bold rounded-full border-2 border-indigo-200 dark:border-indigo-800">
              LIVE DEMO
            </div>
          </div>
        </div>
        <div className="w-[50vw] h-[70vh] rounded-[40px] bg-gradient-to-br from-indigo-500/20 to-rose-500/20 border-2 border-white/20 dark:border-gray-800/50 backdrop-blur-md shadow-2xl ml-12"></div>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-950">
          <div className="absolute inset-0 w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5,#9333ea,#f97316,#ec4899,#4f46e5)] opacity-10 dark:opacity-[0.15] -rotate-45 origin-bottom-left"></div>
          <div className="relative z-10 w-full h-full min-h-screen flex flex-col justify-center px-6">
            <div className="w-full max-w-[1800px] mx-auto flex justify-between items-center">
              <div className="w-full max-w-3xl">
                <h1 className="text-6xl font-black mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-indigo-600 to-rose-500 dark:from-indigo-400 dark:to-rose-400 bg-clip-text text-transparent">KAISEN UI</span><br />
                  <span className="text-gray-900 dark:text-white">FOR MODERN APPS</span>
                </h1>
                <div className="h-1.5 w-32 bg-gradient-to-r from-indigo-500 to-pink-500 mb-8 rounded-full"></div>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-lg">
                  The first atomic design system that compiles to pure CSS with React component convenience.
                </p>
                <div className="flex gap-4">
                  <div className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full shadow-lg">
                    GET STARTED
                  </div>
                  <div className="px-8 py-3.5 bg-white/90 dark:bg-gray-900/90 text-indigo-600 dark:text-indigo-400 font-bold rounded-full border-2 border-indigo-200 dark:border-indigo-800">
                    LIVE DEMO
                  </div>
                </div>
              </div>
              <div className="w-[50vw] h-[70vh] rounded-[40px] bg-gradient-to-br from-indigo-500/20 to-rose-500/20 border-2 border-white/20 dark:border-gray-800/50 backdrop-blur-md shadow-2xl ml-12"></div>
            </div>
          </div>
        </div>
      ),
    }
  ],
  Loaders: [
    {
      id: "concentric-circles",
      name: "Concentric Circles",
      description: "A loader with concentric circles",
      code: `<div className="relative w-40 h-40 flex items-center justify-center">
    <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-indigo-500 border-r-purple-500 border-b-pink-500 border-l-cyan-500 animate-[spin_1.5s_linear_infinite]"></div>
    <div className="absolute w-24 h-24 rounded-full border-[6px] border-transparent border-t-purple-500 border-r-pink-500 border-b-cyan-500 border-l-indigo-500 animate-[spin_1.8s_linear_infinite_reverse]"></div>
    <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-[pulse_2s_ease-in-out_infinite]"></div>
  </div>`,
      preview: () => (
        <div className="relative w-40 h-40 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-indigo-500 border-r-purple-500 border-b-pink-500 border-l-cyan-500 animate-[spin_1.5s_linear_infinite]"></div>
          <div className="absolute w-24 h-24 rounded-full border-[6px] border-transparent border-t-purple-500 border-r-pink-500 border-b-cyan-500 border-l-indigo-500 animate-[spin_1.8s_linear_infinite_reverse]"></div>
          <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-[pulse_2s_ease-in-out_infinite]"></div>
        </div>
      ),
    },
    {
      id: "pulse-rings",
      name: "Pulse Rings",
      description: "A loader with pulse rings",
      code: `<div className="relative w-20 h-20">
    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-500 animate-[spin_1.5s_linear_infinite]"></div>
    <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-purple-500 animate-[spin_1.8s_linear_infinite_reverse]"></div>
    <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-pink-500 animate-[spin_2.1s_linear_infinite]"></div>
  </div>`,
      preview: () => (
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-500 animate-[spin_1.5s_linear_infinite]"></div>
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-purple-500 animate-[spin_1.8s_linear_infinite_reverse]"></div>
          <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-pink-500 animate-[spin_2.1s_linear_infinite]"></div>
        </div>
      ),
    },
    {
      id: "liquid-bounce",
      name: "Liquid Bounce",
      description: "A loader with a liquid bounce effect",
      code: `<div className="flex space-x-1 h-8 items-end">
    <div className="w-3 h-3 rounded-full bg-indigo-500 animate-[bounce_1s_infinite_0.1s]"></div>
    <div className="w-3 h-6 rounded-full bg-purple-500 animate-[bounce_1s_infinite_0.2s]"></div>
    <div className="w-3 h-4 rounded-full bg-pink-500 animate-[bounce_1s_infinite_0.3s]"></div>
    <div className="w-3 h-5 rounded-full bg-cyan-500 animate-[bounce_1s_infinite_0.4s]"></div>
    <div className="w-3 h-3 rounded-full bg-amber-500 animate-[bounce_1s_infinite_0.5s]"></div>
  </div>`,
      preview: () => (
        <div className="flex space-x-1 h-8 items-end">
          <div className="w-3 h-3 rounded-full bg-indigo-500 animate-[bounce_1s_infinite_0.1s]"></div>
          <div className="w-3 h-6 rounded-full bg-purple-500 animate-[bounce_1s_infinite_0.2s]"></div>
          <div className="w-3 h-4 rounded-full bg-pink-500 animate-[bounce_1s_infinite_0.3s]"></div>
          <div className="w-3 h-5 rounded-full bg-cyan-500 animate-[bounce_1s_infinite_0.4s]"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500 animate-[bounce_1s_infinite_0.5s]"></div>
        </div>
      ),
    },
    {
      id:"Text-Loader",
      name: "Text Loader",
      description: "A loader with a text effect",
      code:`<div className="relative w-20 h-20 mx-auto">
  <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-r-transparent border-b-transparent border-l-blue-500 animate-spin"></div>
    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-pink-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
  <div className="absolute top-1/4 left-1/4 w-10 h-10 rounded-full border-2 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent animate-spin animate-reverse"></div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    KAISEN
  </div>
</div>`,
preview: () => (
  <div className="relative w-20 h-20 mx-auto">
  <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-r-transparent border-b-transparent border-l-blue-500 animate-spin"></div>
    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-pink-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
  <div className="absolute top-1/4 left-1/4 w-10 h-10 rounded-full border-2 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent animate-spin animate-reverse"></div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    KAISEN
  </div>
</div>
)
    }

  ],
  Pagination: [
    {
      id: "color-wave",
      name: "Color Wave",
      description: "A loader with a color wave effect",
      code: `div className="flex items-center justify-center space-x-1 gap-2">
    <div className="px-4 py-2 rounded-lg bg-indigo-500/10 dark:bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 font-medium border border-indigo-400/30 dark:border-indigo-600/30 hover:bg-indigo-500/20 dark:hover:bg-indigo-600/20 transition-all">
      Prev
    </div>
    <div className="flex items-center space-x-1 gap-2">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-600/20 dark:to-purple-600/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-medium hover:bg-gradient-to-br from-indigo-500/30 to-purple-500/30 dark:hover:from-indigo-600/30 dark:hover:to-purple-600/30 transition-all">
        1
      </div>
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500/20 to-rose-500/20 dark:from-pink-600/20 dark:to-rose-600/20 flex items-center justify-center text-pink-600 dark:text-pink-400 font-medium hover:bg-gradient-to-br from-pink-500/30 to-rose-500/30 dark:hover:from-pink-600/30 dark:hover:to-rose-600/30 transition-all">
        2
      </div>
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-600/20 dark:to-blue-600/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-medium hover:bg-gradient-to-br from-cyan-500/30 to-blue-500/30 dark:hover:from-cyan-600/30 dark:hover:to-blue-600/30 transition-all">
        3
      </div>
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20 dark:shadow-indigo-600/30">
        4
      </div>
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 dark:from-amber-600/20 dark:to-orange-600/20 flex items-center justify-center text-amber-600 dark:text-amber-400 font-medium hover:bg-gradient-to-br from-amber-500/30 to-orange-500/30 dark:hover:from-amber-600/30 dark:hover:to-orange-600/30 transition-all">
        5
      </div>
    </div>
    <div className="px-4 py-2 rounded-lg bg-indigo-500/10 dark:bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 font-medium border border-indigo-400/30 dark:border-indigo-600/30 hover:bg-indigo-500/20 dark:hover:bg-indigo-600/20 transition-all">
      Next
    </div>
  </div>`,
      preview: () => (
        <div className="flex items-center justify-center space-x-1 gap-2">
          <div className="px-4 py-2 rounded-lg bg-indigo-500/10 dark:bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 font-medium border border-indigo-400/30 dark:border-indigo-600/30 hover:bg-indigo-500/20 dark:hover:bg-indigo-600/20 transition-all">
            Prev
          </div>
          <div className="flex items-center space-x-1 gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-600/20 dark:to-purple-600/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-medium hover:bg-gradient-to-br from-indigo-500/30 to-purple-500/30 dark:hover:from-indigo-600/30 dark:hover:to-purple-600/30 transition-all">
              1
            </div>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500/20 to-rose-500/20 dark:from-pink-600/20 dark:to-rose-600/20 flex items-center justify-center text-pink-600 dark:text-pink-400 font-medium hover:bg-gradient-to-br from-pink-500/30 to-rose-500/30 dark:hover:from-pink-600/30 dark:hover:to-rose-600/30 transition-all">
              2
            </div>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-600/20 dark:to-blue-600/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-medium hover:bg-gradient-to-br from-cyan-500/30 to-blue-500/30 dark:hover:from-cyan-600/30 dark:hover:to-blue-600/30 transition-all">
              3
            </div>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20 dark:shadow-indigo-600/30">
              4
            </div>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 dark:from-amber-600/20 dark:to-orange-600/20 flex items-center justify-center text-amber-600 dark:text-amber-400 font-medium hover:bg-gradient-to-br from-amber-500/30 to-orange-500/30 dark:hover:from-amber-600/30 dark:hover:to-orange-600/30 transition-all">
              5
            </div>
          </div>
          <div className="px-4 py-2 rounded-lg bg-indigo-500/10 dark:bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 font-medium border border-indigo-400/30 dark:border-indigo-600/30 hover:bg-indigo-500/20 dark:hover:bg-indigo-600/20 transition-all">
            Next
          </div>
        </div>
      ),
    },


  ],
  Pricing: [
    {
      id: "Basic-Pricing",
      name: "Basic Pricing",
      description: "A simple pricing card",
      code: `<div className="flex flex-col md:flex-row gap-6 p-8 max-w-5xl mx-auto">
    <div className="flex-1 rounded-2xl bg-gradient-to-br from-pink-100/40 to-rose-100/40 dark:from-pink-900/20 dark:to-rose-900/20 p-1 hover:shadow-lg hover:shadow-pink-200/30 dark:hover:shadow-pink-800/10 transition-all">
      <div className="h-full rounded-xl bg-white dark:bg-gray-900 p-6">
        <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-4">Starter</h3>
        <div className="mb-6">
          <span className="text-4xl font-black text-gray-900 dark:text-white">$0</span>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-pink-300/70 to-rose-300/70 dark:from-pink-700/50 dark:to-rose-700/50 mb-6"></div>
        <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-400">
          <li>Core components</li>
          <li>Community support</li>
          <li>MIT license</li>
        </ul>
        <button className="w-full py-2.5 px-5 bg-pink-600/10 dark:bg-pink-600/20 text-pink-600 dark:text-pink-400 font-medium rounded-lg hover:bg-pink-600/20 dark:hover:bg-pink-600/30 transition-colors">
          Get Started
        </button>
      </div>
    </div>
    <div className="flex-1 rounded-2xl bg-gradient-to-br from-indigo-100/40 to-violet-100/40 dark:from-indigo-900/20 dark:to-violet-900/20 p-1 scale-105 z-10 shadow-xl hover:shadow-indigo-200/30 dark:hover:shadow-indigo-800/10">
      <div className="h-full rounded-xl bg-white dark:bg-gray-900 p-6 relative">
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-indigo-500 dark:bg-indigo-600 text-white text-xs font-bold">BEST VALUE</div>
        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Pro</h3>
        <div className="mb-6">
          <span className="text-4xl font-black text-gray-900 dark:text-white">$29</span>
          <span className="text-indigo-500/80 dark:text-indigo-400/80">/month</span>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-indigo-300/70 to-violet-300/70 dark:from-indigo-700/50 dark:to-violet-700/50 mb-6"></div>
        <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-400">
          <li>Premium components</li>
          <li>Priority support</li>
          <li>Commercial license</li>
          <li>Private repos</li>
        </ul>
        <button className="w-full py-2.5 px-5 bg-gradient-to-r from-indigo-500 to-violet-500 dark:from-indigo-600 dark:to-violet-600 text-white font-medium rounded-lg hover:shadow-lg transition-all">
          Upgrade Now
        </button>
      </div>
    </div>
    <div className="flex-1 rounded-2xl bg-gradient-to-br from-teal-100/40 to-cyan-100/40 dark:from-teal-900/20 dark:to-cyan-900/20 p-1 hover:shadow-lg hover:shadow-teal-200/30 dark:hover:shadow-teal-800/10 transition-all">
      <div className="h-full rounded-xl bg-white dark:bg-gray-900 p-6">
        <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-4">Enterprise</h3>
        <div className="mb-6">
          <span className="text-4xl font-black text-gray-900 dark:text-white">$99</span>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-teal-300/70 to-cyan-300/70 dark:from-teal-700/50 dark:to-cyan-700/50 mb-6"></div>
        <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-400">
          <li>Unlimited components</li>
          <li>24/7 support</li>
          <li>White-label</li>
          <li>Dedicated SLAs</li>
        </ul>
        <button className="w-full py-2.5 px-5 bg-teal-600/10 dark:bg-teal-600/20 text-teal-600 dark:text-teal-400 font-medium rounded-lg hover:bg-teal-600/20 dark:hover:bg-teal-600/30 transition-colors">
          Contact Sales
        </button>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="flex flex-col md:flex-row gap-6 p-8 max-w-5xl mx-auto">
          <div className="flex-1 rounded-2xl bg-gradient-to-br from-pink-100/40 to-rose-100/40 dark:from-pink-900/20 dark:to-rose-900/20 p-1 hover:shadow-lg hover:shadow-pink-200/30 dark:hover:shadow-pink-800/10 transition-all">
            <div className="h-full rounded-xl bg-white dark:bg-gray-900 p-6">
              <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-black text-gray-900 dark:text-white">$0</span>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-pink-300/70 to-rose-300/70 dark:from-pink-700/50 dark:to-rose-700/50 mb-6"></div>
              <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-400">
                <li>Core components</li>
                <li>Community support</li>
                <li>MIT license</li>
              </ul>
              <button className="w-full py-2.5 px-5 bg-pink-600/10 dark:bg-pink-600/20 text-pink-600 dark:text-pink-400 font-medium rounded-lg hover:bg-pink-600/20 dark:hover:bg-pink-600/30 transition-colors">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex-1 rounded-2xl bg-gradient-to-br from-indigo-100/40 to-violet-100/40 dark:from-indigo-900/20 dark:to-violet-900/20 p-1 scale-105 z-10 shadow-xl hover:shadow-indigo-200/30 dark:hover:shadow-indigo-800/10">
            <div className="h-full rounded-xl bg-white dark:bg-gray-900 p-6 relative">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-indigo-500 dark:bg-indigo-600 text-white text-xs font-bold">BEST VALUE</div>
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-black text-gray-900 dark:text-white">$29</span>
                <span className="text-indigo-500/80 dark:text-indigo-400/80">/month</span>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-indigo-300/70 to-violet-300/70 dark:from-indigo-700/50 dark:to-violet-700/50 mb-6"></div>
              <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-400">
                <li>Premium components</li>
                <li>Priority support</li>
                <li>Commercial license</li>
                <li>Private repos</li>
              </ul>
              <button className="w-full py-2.5 px-5 bg-gradient-to-r from-indigo-500 to-violet-500 dark:from-indigo-600 dark:to-violet-600 text-white font-medium rounded-lg hover:shadow-lg transition-all">
                Upgrade Now
              </button>
            </div>
          </div>
          <div className="flex-1 rounded-2xl bg-gradient-to-br from-teal-100/40 to-cyan-100/40 dark:from-teal-900/20 dark:to-cyan-900/20 p-1 hover:shadow-lg hover:shadow-teal-200/30 dark:hover:shadow-teal-800/10 transition-all">
            <div className="h-full rounded-xl bg-white dark:bg-gray-900 p-6">
              <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-black text-gray-900 dark:text-white">$99</span>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-teal-300/70 to-cyan-300/70 dark:from-teal-700/50 dark:to-cyan-700/50 mb-6"></div>
              <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-400">
                <li>Unlimited components</li>
                <li>24/7 support</li>
                <li>White-label</li>
                <li>Dedicated SLAs</li>
              </ul>
              <button className="w-full py-2.5 px-5 bg-teal-600/10 dark:bg-teal-600/20 text-teal-600 dark:text-teal-400 font-medium rounded-lg hover:bg-teal-600/20 dark:hover:bg-teal-600/30 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "Color-wave",
      name: "Color Wave",
      description: "A pricing card with a color wave effect",
      code: `<div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-6xl mx-auto">
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100/50 to-violet-100/50 dark:from-purple-900/20 dark:to-violet-900/20 border-2 border-purple-200 dark:border-purple-800 hover:shadow-lg hover:shadow-purple-200/50 dark:hover:shadow-purple-800/20 transition-all">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Starter</h3>
        <div className="my-6">
          <span className="text-5xl font-black text-gray-900 dark:text-white">$0</span>
          <span className="text-purple-500/80 dark:text-purple-400/80">/forever</span>
        </div>
        <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
          <li>• 100+ components</li>
          <li>• Community support</li>
          <li>• MIT License</li>
        </ul>
        <button className="w-full py-3 px-6 bg-purple-600/10 dark:bg-purple-600/20 text-purple-600 dark:text-purple-400 font-bold rounded-lg hover:bg-purple-600/20 dark:hover:bg-purple-600/30 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100/50 to-cyan-100/50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-700 scale-105 z-10 shadow-xl hover:shadow-blue-200/50 dark:hover:shadow-blue-800/20">
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-500 dark:bg-blue-600 text-white text-xs font-bold">POPULAR</div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Pro</h3>
        <div className="my-6">
          <span className="text-5xl font-black text-gray-900 dark:text-white">$29</span>
          <span className="text-blue-500/80 dark:text-blue-400/80">/month</span>
        </div>
        <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
          <li>• 500+ components</li>
          <li>• Priority support</li>
          <li>• Commercial License</li>
          <li>• Private repos</li>
        </ul>
        <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg transition-all">
          Upgrade Now
        </button>
      </div>
    </div>
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100/50 to-teal-100/50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800 hover:shadow-lg hover:shadow-emerald-200/50 dark:hover:shadow-emerald-800/20 transition-all">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Enterprise</h3>
        <div className="my-6">
          <span className="text-5xl font-black text-gray-900 dark:text-white">$99</span>
          <span className="text-emerald-500/80 dark:text-emerald-400/80">/month</span>
        </div>
        <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
          <li>• Unlimited components</li>
          <li>• 24/7 Support</li>
          <li>• White-label</li>
          <li>• Dedicated SLAs</li>
        </ul>
        <button className="w-full py-3 px-6 bg-emerald-600/10 dark:bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 font-bold rounded-lg hover:bg-emerald-600/20 dark:hover:bg-emerald-600/30 transition-colors">
          Contact Sales
        </button>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100/50 to-violet-100/50 dark:from-purple-900/20 dark:to-violet-900/20 border-2 border-purple-200 dark:border-purple-800 hover:shadow-lg hover:shadow-purple-200/50 dark:hover:shadow-purple-800/20 transition-all">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Starter</h3>
              <div className="my-6">
                <span className="text-5xl font-black text-gray-900 dark:text-white">$0</span>
                <span className="text-purple-500/80 dark:text-purple-400/80">/forever</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                <li>• 100+ components</li>
                <li>• Community support</li>
                <li>• MIT License</li>
              </ul>
              <button className="w-full py-3 px-6 bg-purple-600/10 dark:bg-purple-600/20 text-purple-600 dark:text-purple-400 font-bold rounded-lg hover:bg-purple-600/20 dark:hover:bg-purple-600/30 transition-colors">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100/50 to-cyan-100/50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-700 scale-105 z-10 shadow-xl hover:shadow-blue-200/50 dark:hover:shadow-blue-800/20">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-500 dark:bg-blue-600 text-white text-xs font-bold">POPULAR</div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Pro</h3>
              <div className="my-6">
                <span className="text-5xl font-black text-gray-900 dark:text-white">$29</span>
                <span className="text-blue-500/80 dark:text-blue-400/80">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                <li>• 500+ components</li>
                <li>• Priority support</li>
                <li>• Commercial License</li>
                <li>• Private repos</li>
              </ul>
              <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg transition-all">
                Upgrade Now
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100/50 to-teal-100/50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800 hover:shadow-lg hover:shadow-emerald-200/50 dark:hover:shadow-emerald-800/20 transition-all">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Enterprise</h3>
              <div className="my-6">
                <span className="text-5xl font-black text-gray-900 dark:text-white">$99</span>
                <span className="text-emerald-500/80 dark:text-emerald-400/80">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                <li>• Unlimited components</li>
                <li>• 24/7 Support</li>
                <li>• White-label</li>
                <li>• Dedicated SLAs</li>
              </ul>
              <button className="w-full py-3 px-6 bg-emerald-600/10 dark:bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 font-bold rounded-lg hover:bg-emerald-600/20 dark:hover:bg-emerald-600/30 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      ),
    }


  ],
  Profile: [
    {
      id: "Gradient-Profile",
      name: "Gradient Wave",
      description: "A profile card with a gradient wave effect",
      code: `<div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 dark:from-purple-900 dark:to-blue-950 flex flex-col">
    <div className="flex-1 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-500 p-1">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500"></div>
                <h2 className="text-2xl font-bold text-center mt-4 text-gray-800 dark:text-white">Aiko Yamamoto</h2>
                <p className="text-center text-purple-600 dark:text-purple-400 font-medium">Lead Designer at Kaisen UI</p>
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Projects</span>
                    <span className="font-semibold text-gray-800 dark:text-white">142</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Followers</span>
                    <span className="font-semibold text-gray-800 dark:text-white">8.2k</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Following</span>
                    <span className="font-semibold text-gray-800 dark:text-white">1.3k</span>
                  </div>
                </div>
                <div className="mt-8">
                  <button className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium">Follow</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">About Me</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">Pioneering the future of UI design at Kaisen UI. I specialize in creating immersive digital experiences that blend aesthetics with functionality.</p>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8">Recent Projects</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-xl">
                  <div className="h-40 rounded-lg bg-gradient-to-br from-pink-400 to-purple-500"></div>
                  <h4 className="font-semibold mt-3 text-gray-800 dark:text-white">Kaisen Dashboard 3.0</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Redesigned admin experience</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl">
                  <div className="h-40 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500"></div>
                  <h4 className="font-semibold mt-3 text-gray-800 dark:text-white">Kaisen Mobile App</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Cross-platform mobile experience</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8">Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300">UI Design</span>
                <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">Prototyping</span>
                <span className="px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300">Animation</span>
                <span className="px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">Design Systems</span>
                <span className="px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300">Kaisen UI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 dark:from-purple-900 dark:to-blue-950 flex flex-col">
          <div className="flex-1 p-6 md:p-10">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                  <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-500 p-1">
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500"></div>
                      <h2 className="text-2xl font-bold text-center mt-4 text-gray-800 dark:text-white">Aiko Yamamoto</h2>
                      <p className="text-center text-purple-600 dark:text-purple-400 font-medium">Lead Designer at Kaisen UI</p>
                      <div className="mt-6 space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">Projects</span>
                          <span className="font-semibold text-gray-800 dark:text-white">142</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">Followers</span>
                          <span className="font-semibold text-gray-800 dark:text-white">8.2k</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">Following</span>
                          <span className="font-semibold text-gray-800 dark:text-white">1.3k</span>
                        </div>
                      </div>
                      <div className="mt-8">
                        <button className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium">Follow</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">About Me</h3>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">Pioneering the future of UI design at Kaisen UI. I specialize in creating immersive digital experiences that blend aesthetics with functionality.</p>

                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8">Recent Projects</h3>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-xl">
                        <div className="h-40 rounded-lg bg-gradient-to-br from-pink-400 to-purple-500"></div>
                        <h4 className="font-semibold mt-3 text-gray-800 dark:text-white">Kaisen Dashboard 3.0</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Redesigned admin experience</p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl">
                        <div className="h-40 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500"></div>
                        <h4 className="font-semibold mt-3 text-gray-800 dark:text-white">Kaisen Mobile App</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Cross-platform mobile experience</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8">Skills</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300">UI Design</span>
                      <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">Prototyping</span>
                      <span className="px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300">Animation</span>
                      <span className="px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">Design Systems</span>
                      <span className="px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300">Kaisen UI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "Hexagonal",
      name: "Hexagonal Profile",
      description: "A profile card with a hexagonal design",
      code: `<div className="min-h-screen bg-gradient-to-tr from-teal-50 to-cyan-100 dark:from-teal-950 dark:to-cyan-900 p-6 md:p-10">
    <div className="max-w-6xl mx-auto">
      <div className="relative">
        <div className="absolute top-0 right-0 w-1/2 h-64 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-bl-[100px] -z-10 opacity-70 dark:opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-48 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-tr-[80px] -z-10 opacity-70 dark:opacity-30"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl">
              <div className="h-32 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500"></div>
              <div className="relative px-6 pb-6">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 absolute -top-14 left-6 border-4 border-white dark:border-gray-900 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">KU</span>
                </div>
                <div className="pt-16">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Marcus Chen</h2>
                  <p className="text-teal-600 dark:text-teal-400">Product Manager at Kaisen UI</p>
                  
                  <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                    <div className="bg-teal-50 dark:bg-teal-900/30 p-3 rounded-lg">
                      <div className="text-xl font-bold text-gray-800 dark:text-white">28</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                    </div>
                    <div className="bg-cyan-50 dark:bg-cyan-900/30 p-3 rounded-lg">
                      <div className="text-xl font-bold text-gray-800 dark:text-white">14k</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Followers</div>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-900/30 p-3 rounded-lg">
                      <div className="text-xl font-bold text-gray-800 dark:text-white">3.2k</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Following</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex gap-3">
                    <button className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium text-sm">Connect</button>
                    <button className="flex-1 py-2.5 rounded-lg border border-teal-500 dark:border-teal-600 text-teal-600 dark:text-teal-400 font-medium text-sm">Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="grid gap-6">
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white mr-3">A</span>
                  About
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">Leading product innovation at Kaisen UI, where we're redefining the boundaries of user interface design. My focus is on creating intuitive, accessible, and visually stunning experiences that make complex tasks feel simple.</p>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h4>
                    <p className="text-gray-800 dark:text-white">San Francisco, CA</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Website</h4>
                    <p className="text-teal-600 dark:text-teal-400">kaisenui.com</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Joined</h4>
                    <p className="text-gray-800 dark:text-white">March 2021</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Team</h4>
                    <p className="text-gray-800 dark:text-white">Product & Design</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white mr-3">P</span>
                  Projects at Kaisen UI
                </h3>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-4 rounded-xl">
                    <div className="h-3 w-1/2 bg-teal-400 rounded-full mb-4"></div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Kaisen Design System</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Unified component library</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs text-teal-600 dark:text-teal-400">89% complete</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">May 2025</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-4 rounded-xl">
                    <div className="h-3 w-3/4 bg-cyan-400 rounded-full mb-4"></div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Kaisen Analytics</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">User behavior insights</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs text-cyan-600 dark:text-cyan-400">76% complete</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">July 2025</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl">
                    <div className="h-3 w-1/4 bg-blue-400 rounded-full mb-4"></div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Kaisen Mobile</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Cross-platform experience</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs text-blue-600 dark:text-blue-400">24% complete</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Oct 2025</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white mr-3">E</span>
                  Experience
                </h3>
                
                <div className="mt-6 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center">
                      <span className="text-teal-600 dark:text-teal-400 font-bold">KU</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">Product Manager</h4>
                      <p className="text-sm text-teal-600 dark:text-teal-400">Kaisen UI</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">2021 - Present</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">DT</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">UX Designer</h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400">DesignTech</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">2018 - 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="min-h-screen bg-gradient-to-tr from-teal-50 to-cyan-100 dark:from-teal-950 dark:to-cyan-900 p-6 md:p-10">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute top-0 right-0 w-1/2 h-64 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-bl-[100px] -z-10 opacity-70 dark:opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-1/3 h-48 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-tr-[80px] -z-10 opacity-70 dark:opacity-30"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4">
                  <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl">
                    <div className="h-32 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500"></div>
                    <div className="relative px-6 pb-6">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 absolute -top-14 left-6 border-4 border-white dark:border-gray-900 flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">KU</span>
                      </div>
                      <div className="pt-16">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Marcus Chen</h2>
                        <p className="text-teal-600 dark:text-teal-400">Product Manager at Kaisen UI</p>

                        <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                          <div className="bg-teal-50 dark:bg-teal-900/30 p-3 rounded-lg">
                            <div className="text-xl font-bold text-gray-800 dark:text-white">28</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                          </div>
                          <div className="bg-cyan-50 dark:bg-cyan-900/30 p-3 rounded-lg">
                            <div className="text-xl font-bold text-gray-800 dark:text-white">14k</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Followers</div>
                          </div>
                          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-3 rounded-lg">
                            <div className="text-xl font-bold text-gray-800 dark:text-white">3.2k</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Following</div>
                          </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                          <button className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium text-sm">Connect</button>
                          <button className="flex-1 py-2.5 rounded-lg border border-teal-500 dark:border-teal-600 text-teal-600 dark:text-teal-400 font-medium text-sm">Message</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <div className="grid gap-6">
                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white mr-3">A</span>
                        About
                      </h3>
                      <p className="mt-4 text-gray-600 dark:text-gray-300">Leading product innovation at Kaisen UI, where we're redefining the boundaries of user interface design. My focus is on creating intuitive, accessible, and visually stunning experiences that make complex tasks feel simple.</p>

                      <div className="mt-6 grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h4>
                          <p className="text-gray-800 dark:text-white">San Francisco, CA</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Website</h4>
                          <p className="text-teal-600 dark:text-teal-400">kaisenui.com</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Joined</h4>
                          <p className="text-gray-800 dark:text-white">March 2021</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Team</h4>
                          <p className="text-gray-800 dark:text-white">Product & Design</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white mr-3">P</span>
                        Projects at Kaisen UI
                      </h3>

                      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-4 rounded-xl">
                          <div className="h-3 w-1/2 bg-teal-400 rounded-full mb-4"></div>
                          <h4 className="font-semibold text-gray-800 dark:text-white">Kaisen Design System</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Unified component library</p>
                          <div className="mt-4 flex justify-between items-center">
                            <span className="text-xs text-teal-600 dark:text-teal-400">89% complete</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">May 2025</span>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-4 rounded-xl">
                          <div className="h-3 w-3/4 bg-cyan-400 rounded-full mb-4"></div>
                          <h4 className="font-semibold text-gray-800 dark:text-white">Kaisen Analytics</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">User behavior insights</p>
                          <div className="mt-4 flex justify-between items-center">
                            <span className="text-xs text-cyan-600 dark:text-cyan-400">76% complete</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">July 2025</span>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl">
                          <div className="h-3 w-1/4 bg-blue-400 rounded-full mb-4"></div>
                          <h4 className="font-semibold text-gray-800 dark:text-white">Kaisen Mobile</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Cross-platform experience</p>
                          <div className="mt-4 flex justify-between items-center">
                            <span className="text-xs text-blue-600 dark:text-blue-400">24% complete</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">Oct 2025</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white mr-3">E</span>
                        Experience
                      </h3>

                      <div className="mt-6 space-y-6">
                        <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center">
                            <span className="text-teal-600 dark:text-teal-400 font-bold">KU</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white">Product Manager</h4>
                            <p className="text-sm text-teal-600 dark:text-teal-400">Kaisen UI</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">2021 - Present</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">DT</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white">UX Designer</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">DesignTech</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">2018 - 2021</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    }, {
      id: "Neon",
      name: "Neon Profile",
      description: "A profile card with a neon design",
      code: `<div className="min-h-screen bg-gradient-to-b from-violet-950 to-black p-6 md:p-10">
    <div className="max-w-6xl mx-auto">
      <div className="relative">
        <div className="absolute top-20 left-1/4 w-1/2 h-1/2 bg-fuchsia-600 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-1/3 h-1/3 bg-cyan-500 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/3">
              <div className="bg-black/60 backdrop-blur-xl border border-violet-500/20 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(149,76,233,0.25)]">
                <div className="p-8 flex flex-col items-center">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-fuchsia-600 via-violet-600 to-cyan-600 p-1">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <span className="text-4xl font-bold bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 text-transparent bg-clip-text">KU</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold mt-6 text-white">Zara Neon</h2>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 font-medium">Lead Developer at Kaisen UI</p>
                  
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent my-6"></div>
                  
                  <div className="grid grid-cols-3 w-full gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">63</div>
                      <div className="text-xs text-violet-300">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">21.5k</div>
                      <div className="text-xs text-violet-300">Followers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">5.8k</div>
                      <div className="text-xs text-violet-300">Following</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 w-full">
                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white font-medium relative overflow-hidden group">
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span className="relative">Connect</span>
                    </button>
                  </div>
                  
                  <div className="mt-6 w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-violet-300">Profile Completion</span>
                      <span className="text-xs text-violet-300">92%</span>
                    </div>
                    <div className="w-full h-1.5 bg-violet-900/50 rounded-full overflow-hidden">
                      <div className="h-full w-[92%] bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-black/60 backdrop-blur-xl border border-violet-500/20 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(149,76,233,0.25)] p-6">
                <h3 className="text-lg font-bold text-white">Tech Stack</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-fuchsia-900/50 to-fuchsia-800/50 text-fuchsia-300 text-xs">React</span>
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-900/50 to-violet-800/50 text-violet-300 text-xs">TypeScript</span>
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-900/50 to-purple-800/50 text-purple-300 text-xs">Next.js</span>
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-900/50 to-blue-800/50 text-blue-300 text-xs">Tailwind</span>
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-900/50 to-cyan-800/50 text-cyan-300 text-xs">GraphQL</span>
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-teal-900/50 to-teal-800/50 text-teal-300 text-xs">Node.js</span>
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-fuchsia-900/50 to-violet-800/50 text-fuchsia-300 text-xs">Kaisen UI</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3">
              <div className="bg-black/60 backdrop-blur-xl border border-violet-500/20 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(149,76,233,0.25)] p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">About Me</h3>
                  <div className="px-3 py-1 rounded-full bg-violet-900/50 text-violet-300 text-xs">Developer</div>
                </div>
                
                <p className="mt-4 text-violet-200">Building the future of web interfaces at Kaisen UI. Passionate about creating seamless, accessible, and visually stunning user experiences that push the boundaries of what's possible on the web.</p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white">Kaisen UI Projects</h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-black to-violet-950 border border-violet-500/20 rounded-xl p-5 group hover:border-violet-500/50 transition-all">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-fuchsia-600 to-violet-600 flex items-center justify-center text-white font-bold">KU</div>
                        <div className="px-2 py-1 rounded-full bg-violet-900/30 text-violet-300 text-xs">Active</div>
                      </div>
                      <h4 className="font-semibold mt-4 text-white">Kaisen UI Framework</h4>
                      <p className="text-sm text-violet-300 mt-1">Component library with 200+ elements</p>
                      <div className="mt-4 w-full h-1 bg-violet-900/30 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full"></div>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-xs text-violet-400">85% complete</span>
                        <span className="text-xs text-violet-400">v2.4.0</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-black to-violet-950 border border-violet-500/20 rounded-xl p-5 group hover:border-violet-500/50 transition-all">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center text-white font-bold">KA</div>
                        <div className="px-2 py-1 rounded-full bg-blue-900/30 text-blue-300 text-xs">Beta</div>
                      </div>
                      <h4 className="font-semibold mt-4 text-white">Kaisen Analytics</h4>
                      <p className="text-sm text-violet-300 mt-1">Real-time user behavior tracking</p>
                      <div className="mt-4 w-full h-1 bg-violet-900/30 rounded-full overflow-hidden">
                        <div className="h-full w-[62%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-xs text-violet-400">62% complete</span>
                        <span className="text-xs text-violet-400">v0.9.2</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white">Activity</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-600 flex-shrink-0 flex items-center justify-center text-white text-xs">ZN</div>
                      <div>
                        <p className="text-violet-200">Released <span className="text-white font-medium">Kaisen UI v2.4.0</span> with new animation library and improved accessibility</p>
                        <p className="text-xs text-violet-400 mt-1">2 days ago</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-600 flex-shrink-0 flex items-center justify-center text-white text-xs">ZN</div>
                      <div>
                        <p className="text-violet-200">Started development on <span className="text-white font-medium">Kaisen Mobile SDK</span></p>
                        <p className="text-xs text-violet-400 mt-1">1 week ago</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-600 flex-shrink-0 flex items-center justify-center text-white text-xs">ZN</div>
                      <div>
                        <p className="text-violet-200">Published article <span className="text-white font-medium">"The Future of UI Design with Kaisen"</span></p>
                        <p className="text-xs text-violet-400 mt-1">2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-black/60 backdrop-blur-xl border border-violet-500/20 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(149,76,233,0.25)] p-6">
                <h3 className="text-lg font-bold text-white">Contact</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 flex items-center justify-center text-white text-xs">@</div>
                    <span className="text-violet-200">zara@kaisenui.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center text-white text-xs">W</div>
                    <span className="text-violet-200">kaisenui.com/team/zara</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white text-xs">L</div>
                    <span className="text-violet-200">Tokyo, Japan</span>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-3">
                  <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white text-sm">Message</button>
                  <button className="flex-1 py-2 rounded-lg bg-black border border-violet-500 text-violet-300 text-sm">Share Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="min-h-screen bg-gradient-to-b from-violet-950 to-black p-6 md:p-10">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute top-20 left-1/4 w-1/2 h-1/2 bg-fuchsia-600 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
              <div className="absolute bottom-20 right-1/4 w-1/3 h-1/3 bg-cyan-500 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="w-full lg:w-1/3">
                    <div className="bg-black/60 backdrop-blur-xl border border-violet-500/20 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(149,76,233,0.25)]">
                      <div className="p-8 flex flex-col items-center">
                        <div className="w-36 h-36 rounded-full bg-gradient-to-br from-fuchsia-600 via-violet-600 to-cyan-600 p-1">
                          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                            <span className="text-4xl font-bold bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 text-transparent bg-clip-text">KU</span>
                          </div>
                        </div>

                        <h2 className="text-2xl font-bold mt-6 text-white">Zara Neon</h2>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 font-medium">Lead Developer at Kaisen UI</p>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent my-6"></div>

                        <div className="grid grid-cols-3 w-full gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-white">63</div>
                            <div className="text-xs text-violet-300">Projects</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white">21.5k</div>
                            <div className="text-xs text-violet-300">Followers</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white">5.8k</div>
                            <div className="text-xs text-violet-300">Following</div>
                          </div>
                        </div>

                        <div className="mt-8 w-full">
                          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white font-medium relative overflow-hidden group">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="relative">Connect</span>
                          </button>
                        </div>

                        <div className="mt-6 w-full">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-violet-300">Profile Completion</span>
                            <span className="text-xs text-violet-300">92%</span>
                          </div>
                          <div className="w-full h-1.5 bg-violet-900/50 rounded-full overflow-hidden">
                            <div className="h-full w-[92%] bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-black/60 backdrop-blur-xl border border-violet-500/20 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(149,76,233,0.25)] p-6">
                      <h3 className="text-lg font-bold text-white">Tech Stack</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-fuchsia-900/50 to-fuchsia-800/50 text-fuchsia-300 text-xs">React</span>
                        <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-900/50 to-violet-800/50 text-violet-300 text-xs">TypeScript</span>
                        <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-900/50 to-purple-800/50 text-purple-300 text-xs">Next.js</span>
                        <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-900/50 to-blue-800/50 text-blue-300 text-xs">Tailwind</span>
                        <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-900/50 to-cyan-800/50 text-cyan-300 text-xs">GraphQL</span>
                        <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-teal-900/50 to-teal-800/50 text-teal-300 text-xs">Node.js</span>
                        <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-fuchsia-900/50 to-violet-800/50 text-fuchsia-300 text-xs">Kaisen UI</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-2/3">
                    <div className="bg-black/60 backdrop-blur-xl border border-violet-500/20 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(149,76,233,0.25)] p-8">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">About Me</h3>
                        <div className="px-3 py-1 rounded-full bg-violet-900/50 text-violet-300 text-xs">Developer</div>
                      </div>

                      <p className="mt-4 text-violet-200">Building the future of web interfaces at Kaisen UI. Passionate about creating seamless, accessible, and visually stunning user experiences that push the boundaries of what's possible on the web.</p>

                      <div className="mt-8">
                        <h3 className="text-xl font-bold text-white">Kaisen UI Projects</h3>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gradient-to-br from-black to-violet-950 border border-violet-500/20 rounded-xl p-5 group hover:border-violet-500/50 transition-all">
                            <div className="flex justify-between items-start">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-fuchsia-600 to-violet-600 flex items-center justify-center text-white font-bold">KU</div>
                              <div className="px-2 py-1 rounded-full bg-violet-900/30 text-violet-300 text-xs">Active</div>
                            </div>
                            <h4 className="font-semibold mt-4 text-white">Kaisen UI Framework</h4>
                            <p className="text-sm text-violet-300 mt-1">Component library with 200+ elements</p>
                            <div className="mt-4 w-full h-1 bg-violet-900/30 rounded-full overflow-hidden">
                              <div className="h-full w-[85%] bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full"></div>
                            </div>
                            <div className="mt-2 flex justify-between items-center">
                              <span className="text-xs text-violet-400">85% complete</span>
                              <span className="text-xs text-violet-400">v2.4.0</span>
                            </div>
                          </div>

                          <div className="bg-gradient-to-br from-black to-violet-950 border border-violet-500/20 rounded-xl p-5 group hover:border-violet-500/50 transition-all">
                            <div className="flex justify-between items-start">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center text-white font-bold">KA</div>
                              <div className="px-2 py-1 rounded-full bg-blue-900/30 text-blue-300 text-xs">Beta</div>
                            </div>
                            <h4 className="font-semibold mt-4 text-white">Kaisen Analytics</h4>
                            <p className="text-sm text-violet-300 mt-1">Real-time user behavior tracking</p>
                            <div className="mt-4 w-full h-1 bg-violet-900/30 rounded-full overflow-hidden">
                              <div className="h-full w-[62%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                            </div>
                            <div className="mt-2 flex justify-between items-center">
                              <span className="text-xs text-violet-400">62% complete</span>
                              <span className="text-xs text-violet-400">v0.9.2</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-xl font-bold text-white">Activity</h3>
                        <div className="mt-4 space-y-4">
                          <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-600 flex-shrink-0 flex items-center justify-center text-white text-xs">ZN</div>
                            <div>
                              <p className="text-violet-200">Released <span className="text-white font-medium">Kaisen UI v2.4.0</span> with new animation library and improved accessibility</p>
                              <p className="text-xs text-violet-400 mt-1">2 days ago</p>
                            </div>
                          </div>

                          <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-600 flex-shrink-0 flex items-center justify-center text-white text-xs">ZN</div>
                            <div>
                              <p className="text-violet-200">Started development on <span className="text-white font-medium">Kaisen Mobile SDK</span></p>
                              <p className="text-xs text-violet-400 mt-1">1 week ago</p>
                            </div>
                          </div>

                          <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-600 flex-shrink-0 flex items-center justify-center text-white text-xs">ZN</div>
                            <div>
                              <p className="text-violet-200">Published article <span className="text-white font-medium">"The Future of UI Design with Kaisen"</span></p>
                              <p className="text-xs text-violet-400 mt-1">2 weeks ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-black/60 backdrop-blur-xl border border-violet-500/20 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(149,76,233,0.25)] p-6">
                      <h3 className="text-lg font-bold text-white">Contact</h3>
                      <div className="mt-4 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 flex items-center justify-center text-white text-xs">@</div>
                          <span className="text-violet-200">zara@kaisenui.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center text-white text-xs">W</div>
                          <span className="text-violet-200">kaisenui.com/team/zara</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white text-xs">L</div>
                          <span className="text-violet-200">Tokyo, Japan</span>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-3">
                        <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white text-sm">Message</button>
                        <button className="flex-1 py-2 rounded-lg bg-black border border-violet-500 text-violet-300 text-sm">Share Profile</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    }
  ],
  Review: [
    {
      id: "Geometric",
      name: "Geometric ",
      description: "A geometric review card",
      code: `<div className="relative w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500 dark:bg-purple-600 rounded-bl-[80px]"></div>
    <div className="absolute bottom-0 left-0 w-16 h-16 bg-cyan-500 dark:bg-cyan-600 rounded-tr-[60px]"></div>
    
    <div className="relative z-10">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-pink-500 dark:bg-pink-600 flex items-center justify-center text-white font-bold text-xl">K</div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">Kaisen UI Framework</h3>
          <p className="text-sm text-pink-600 dark:text-pink-400">by Mia Johnson</p>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex mb-2">
          <span className="text-yellow-500 dark:text-yellow-400 text-xl">★★★★</span>
          <span className="text-gray-300 dark:text-gray-600 text-xl">★</span>
        </div>
        <p className="text-gray-700 dark:text-gray-300">The Kaisen UI components are revolutionary! They've completely transformed our design workflow and made our applications stand out.</p>
      </div>
      
      <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
        <span className="text-sm text-gray-500 dark:text-gray-400">Verified Purchase</span>
        <span className="text-sm text-purple-600 dark:text-purple-400">2 days ago</span>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="relative w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500 dark:bg-purple-600 rounded-bl-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-cyan-500 dark:bg-cyan-600 rounded-tr-[60px]"></div>

          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-pink-500 dark:bg-pink-600 flex items-center justify-center text-white font-bold text-xl">K</div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Kaisen UI Framework</h3>
                <p className="text-sm text-pink-600 dark:text-pink-400">by Mia Johnson</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex mb-2">
                <span className="text-yellow-500 dark:text-yellow-400 text-xl">★★★★</span>
                <span className="text-gray-300 dark:text-gray-600 text-xl">★</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">The Kaisen UI components are revolutionary! They've completely transformed our design workflow and made our applications stand out.</p>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
              <span className="text-sm text-gray-500 dark:text-gray-400">Verified Purchase</span>
              <span className="text-sm text-purple-600 dark:text-purple-400">2 days ago</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "offset-blocks",
      name: "Offset Blocks",
      description: "A review card with offset blocks",
      code: `<div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-16 bg-teal-500 dark:bg-teal-600"></div>
      <div className="relative pt-6 px-6">
        <div className="w-16 h-16 bg-orange-500 dark:bg-orange-600 rounded-lg mt-4 flex items-center justify-center text-white font-bold text-2xl">KU</div>
      </div>
    </div>
    
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">Exceptional Design System</h3>
          <p className="text-sm text-teal-600 dark:text-teal-400">by Alex Rivera</p>
        </div>
        <div className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 text-xs rounded-full">Top Reviewer</div>
      </div>
      
      <div className="mb-4">
        <div className="flex space-x-1 mb-2">
          <div className="w-6 h-6 bg-yellow-500 dark:bg-yellow-600 rounded-sm"></div>
          <div className="w-6 h-6 bg-yellow-500 dark:bg-yellow-600 rounded-sm"></div>
          <div className="w-6 h-6 bg-yellow-500 dark:bg-yellow-600 rounded-sm"></div>
          <div className="w-6 h-6 bg-yellow-500 dark:bg-yellow-600 rounded-sm"></div>
          <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
        </div>
        <p className="text-gray-700 dark:text-gray-300">Kaisen UI has become our go-to for all projects. The attention to detail and the innovative approach to component design is unmatched in the industry.</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 text-xs rounded-full">Components</span>
        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 text-xs rounded-full">Design System</span>
        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded-full">Accessibility</span>
      </div>
      
      <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-500 dark:bg-green-600 rounded-full mr-2"></div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Verified</span>
        </div>
        <span className="text-sm text-teal-600 dark:text-teal-400">March 15, 2025</span>
      </div>
    </div>
  </div>`,
      preview: () => (
        <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-16 bg-teal-500 dark:bg-teal-600"></div>
            <div className="relative pt-6 px-6">
              <div className="w-16 h-16 bg-orange-500 dark:bg-orange-600 rounded-lg mt-4 flex items-center justify-center text-white font-bold text-2xl">KU</div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Exceptional Design System</h3>
                <p className="text-sm text-teal-600 dark:text-teal-400">by Alex Rivera</p>
              </div>
              <div className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 text-xs rounded-full">Top Reviewer</div>
            </div>

            <div className="mb-4">
              <div className="flex space-x-1 mb-2">
                <div className="w-6 h-6 bg-yellow-500 dark:bg-yellow-600 rounded-sm"></div>
                <div className="w-6 h-6 bg-yellow-500 dark:bg-yellow-600 rounded-sm"></div>
                <div className="w-6 h-6 bg-yellow-500 dark:bg-yellow-600 rounded-sm"></div>
                <div className="w-6 h-6 bg-yellow-500 dark:bg-yellow-600 rounded-sm"></div>
                <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Kaisen UI has become our go-to for all projects. The attention to detail and the innovative approach to component design is unmatched in the industry.</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 text-xs rounded-full">Components</span>
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 text-xs rounded-full">Design System</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded-full">Accessibility</span>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 dark:bg-green-600 rounded-full mr-2"></div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Verified</span>
              </div>
              <span className="text-sm text-teal-600 dark:text-teal-400">March 15, 2025</span>
            </div>
          </div>
        </div>
      ),
    },

  ],
  404: [
    {
      id: "cosmic",
      name: "Cosmic",
      description: "A cosmic-themed 404 page",
      code: `<div className="relative h-screen w-full overflow-hidden bg-black dark:bg-gray-950 flex items-center justify-center">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-800 via-transparent to-transparent opacity-50 dark:opacity-70"></div>
  
  <div className="absolute inset-0">
    <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full top-1/4 left-1/4 animate-pulse"></div>
    <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full top-1/3 right-1/3 animate-ping"></div>
    <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full bottom-1/4 right-1/4 animate-pulse"></div>
    <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full bottom-1/3 left-1/3 animate-ping"></div>
    <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full top-1/2 left-1/2 animate-pulse"></div>
    <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full top-2/3 right-1/4 animate-ping"></div>
    <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full bottom-1/2 right-1/2 animate-pulse"></div>
    <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full bottom-2/3 left-1/4 animate-ping"></div>
    <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full top-3/4 left-3/4 animate-pulse"></div>
    <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full bottom-3/4 right-3/4 animate-ping"></div>
    <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full top-1/5 left-1/5 animate-ping"></div>
    <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full top-1/6 right-1/6 animate-pulse"></div>
    <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full bottom-1/5 left-2/5 animate-ping"></div>
    <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full bottom-1/6 right-2/5 animate-pulse"></div>
    <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full top-2/5 left-3/5 animate-ping"></div>
    <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full top-3/5 right-1/5 animate-pulse"></div>
    <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full bottom-2/5 left-4/5 animate-ping"></div>
    <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full bottom-3/5 right-4/5 animate-pulse"></div>
    <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full top-4/5 left-1/6 animate-ping"></div>
    <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full top-5/6 right-3/4 animate-pulse"></div>
    <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full bottom-4/5 left-3/4 animate-ping"></div>
    <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full bottom-5/6 right-1/6 animate-pulse"></div>
    <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full top-1/4 right-4/5 animate-ping"></div>
    <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full top-3/4 left-1/5 animate-pulse"></div>
    <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full bottom-1/4 right-2/3 animate-ping"></div>
    <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full bottom-3/4 left-2/3 animate-pulse"></div>
  </div>
  
  <div className="relative z-10 text-center">
    <div className="relative">
      <div className="text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 dark:from-orange-400 dark:via-red-400 dark:to-purple-500">
        404
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-300 dark:to-orange-400 animate-ping opacity-75"></div>
      </div>
    </div>
    <div className="text-2xl text-white dark:text-white/90 font-bold max-w-md mx-auto mt-8">
      Cosmic fail! You've discovered a black hole in our website. Your page has been crushed into digital nothingness.
    </div>
  </div>
</div>`,
      preview: () => (
        <div className="relative h-screen w-full overflow-hidden bg-black dark:bg-gray-950 flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-800 via-transparent to-transparent opacity-50 dark:opacity-70"></div>

          <div className="absolute inset-0">
            <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full top-1/4 left-1/4 animate-pulse"></div>
            <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full top-1/3 right-1/3 animate-ping"></div>
            <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full bottom-1/4 right-1/4 animate-pulse"></div>
            <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full bottom-1/3 left-1/3 animate-ping"></div>
            <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full top-1/2 left-1/2 animate-pulse"></div>
            <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full top-2/3 right-1/4 animate-ping"></div>
            <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full bottom-1/2 right-1/2 animate-pulse"></div>
            <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full bottom-2/3 left-1/4 animate-ping"></div>
            <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full top-3/4 left-3/4 animate-pulse"></div>
            <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full bottom-3/4 right-3/4 animate-ping"></div>
            <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full top-1/5 left-1/5 animate-ping"></div>
            <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full top-1/6 right-1/6 animate-pulse"></div>
            <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full bottom-1/5 left-2/5 animate-ping"></div>
            <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full bottom-1/6 right-2/5 animate-pulse"></div>
            <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full top-2/5 left-3/5 animate-ping"></div>
            <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full top-3/5 right-1/5 animate-pulse"></div>
            <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full bottom-2/5 left-4/5 animate-ping"></div>
            <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full bottom-3/5 right-4/5 animate-pulse"></div>
            <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full top-4/5 left-1/6 animate-ping"></div>
            <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full top-5/6 right-3/4 animate-pulse"></div>
            <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full bottom-4/5 left-3/4 animate-ping"></div>
            <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full bottom-5/6 right-1/6 animate-pulse"></div>
            <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full top-1/4 right-4/5 animate-ping"></div>
            <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full top-3/4 left-1/5 animate-pulse"></div>
            <div className="absolute w-1 h-1 bg-white dark:bg-white/90 rounded-full bottom-1/4 right-2/3 animate-ping"></div>
            <div className="absolute w-2 h-2 bg-white dark:bg-white/90 rounded-full bottom-3/4 left-2/3 animate-pulse"></div>
          </div>

          <div className="relative z-10 text-center">
            <div className="relative">
              <div className="text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 dark:from-orange-400 dark:via-red-400 dark:to-purple-500">
                404
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-300 dark:to-orange-400 animate-ping opacity-75"></div>
              </div>
            </div>
            <div className="text-2xl text-white dark:text-white/90 font-bold max-w-md mx-auto mt-8">
              Cosmic fail! You've discovered a black hole in our website. Your page has been crushed into digital nothingness.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "Neon",
      name: "Neon",
      description: "A neon-themed 404 page",
      code: `<div className="relative h-screen w-full overflow-hidden bg-gray-950 dark:bg-black flex items-center justify-center">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="absolute w-[80%] h-[80%] rounded-full border-4 border-fuchsia-500 dark:border-fuchsia-600 opacity-40 animate-pulse origin-center"></div>
    <div className="absolute w-[70%] h-[70%] rounded-full border-4 border-fuchsia-500 dark:border-fuchsia-600 opacity-50 animate-pulse origin-center delay-300"></div>
    <div className="absolute w-[60%] h-[60%] rounded-full border-4 border-fuchsia-500 dark:border-fuchsia-600 opacity-60 animate-pulse origin-center delay-600"></div>
    <div className="absolute w-[50%] h-[50%] rounded-full border-4 border-fuchsia-500 dark:border-fuchsia-600 opacity-70 animate-pulse origin-center delay-900"></div>
    <div className="absolute w-[40%] h-[40%] rounded-full border-4 border-fuchsia-500 dark:border-fuchsia-600 opacity-80 animate-pulse origin-center delay-1200"></div>
    <div className="absolute w-[30%] h-[30%] rounded-full border-4 border-fuchsia-500 dark:border-fuchsia-600 opacity-90 animate-pulse origin-center delay-1500"></div>
  </div>
  <div className="relative z-10 text-center transform rotate-12">
    <div className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500 dark:from-fuchsia-400 dark:to-cyan-400 mb-8 animate-pulse">
      404
    </div>
    <div className="text-2xl text-white dark:text-white/90 font-bold max-w-md mx-auto">
      You've been sucked into the void! Don't worry, it happens to the best of us... just not usually twice in one day.
    </div>
  </div>
</div>`,
      preview: () => (
        <div className="relative h-screen w-full overflow-hidden bg-gray-950 dark:bg-black flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[80%] h-[80%] rounded-full border-4 border-fuchsia-500 dark:border-fuchsia-600 opacity-40 animate-pulse origin-center"></div>
            <div className="absolute w-[70%] h-[70%] rounded-full border-4 border-fuchsia-500 dark:border-fuchsia-600 opacity-50 animate-pulse origin-center delay-300"></div>
            <div className="absolute w-[60%] h-[60%] rounded-full border-4 border-fuchsia-500 dark:border-fuchsia-600 opacity-60 animate-pulse origin-center delay-600"></div>
            <div className="absolute w-[50%] h-[50%] rounded-full border-4 border-fuchsia-500 dark:border-fuchsia-600 opacity-70 animate-pulse origin-center delay-900"></div>
            <div className="absolute w-[40%] h-[40%] rounded-full border-4 border-fuchsia-500 dark:border-fuchsia-600 opacity-80 animate-pulse origin-center delay-1200"></div>
            <div className="absolute w-[30%] h-[30%] rounded-full border-4 border-fuchsia-500 dark:border-fuchsia-600 opacity-90 animate-pulse origin-center delay-1500"></div>
          </div>
          <div className="relative z-10 text-center transform rotate-12">
            <div className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500 dark:from-fuchsia-400 dark:to-cyan-400 mb-8 animate-pulse">
              404
            </div>
            <div className="text-2xl text-white dark:text-white/90 font-bold max-w-md mx-auto">
              You've been sucked into the void! Don't worry, it happens to the best of us... just not usually twice in one day.
            </div>
          </div>
        </div>
      ),
    }, {
      id: "Vignette",
      name: "Vignette",
      description: "A vignette-themed 404 page",
      code: `<div className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-fuchsia-600 via-purple-700 to-indigo-800 dark:from-fuchsia-900 dark:via-purple-950 dark:to-indigo-950 flex items-center justify-center perspective-[2000px]">
  {/* Shattered Reality Background */}
  <div className="absolute inset-0 flex flex-wrap opacity-80">
    <div className="w-full h-1/6 bg-gradient-to-r from-pink-500 to-rose-500 dark:from-pink-700 dark:to-rose-700 transform -skew-y-12 translate-y-4 animate-pulse"></div>
    <div className="w-full h-1/6 bg-gradient-to-r from-rose-500 to-orange-500 dark:from-rose-700 dark:to-orange-700 transform skew-y-12 -translate-y-4 animate-pulse delay-150"></div>
    <div className="w-full h-1/6 bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-700 dark:to-amber-700 transform -skew-y-12 translate-y-4 animate-pulse delay-300"></div>
    <div className="w-full h-1/6 bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-amber-700 dark:to-yellow-700 transform skew-y-12 -translate-y-4 animate-pulse delay-500"></div>
    <div className="w-full h-1/6 bg-gradient-to-r from-yellow-500 to-lime-500 dark:from-yellow-700 dark:to-lime-700 transform -skew-y-12 translate-y-4 animate-pulse delay-700"></div>
    <div className="w-full h-1/6 bg-gradient-to-r from-lime-500 to-green-500 dark:from-lime-700 dark:to-green-700 transform skew-y-12 -translate-y-4 animate-pulse delay-1000"></div>
  </div>
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/20 backdrop-blur-md rounded-lg rotate-12 animate-bounce"></div>
    <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/20 backdrop-blur-md rounded-lg -rotate-12 animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-white/20 backdrop-blur-md rounded-lg rotate-45 animate-bounce delay-300"></div>
    <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-white/20 backdrop-blur-md rounded-lg -rotate-45 animate-pulse delay-500"></div>
    <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/10 backdrop-blur-md rounded-full animate-ping"></div>
    <div className="absolute top-10 left-10 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute top-3/4 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 dark:from-purple-600 dark:to-indigo-700 rounded-full blur-xl animate-pulse delay-700"></div>
    <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 dark:from-rose-600 dark:to-pink-700 rounded-full blur-xl animate-pulse delay-500"></div>
  </div>
  <div className="relative z-10 transform -rotate-6 scale-110">
    <div className="relative">
      {/* Main 404 Text */}
      <div className="text-[15rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 dark:from-white dark:to-white/50 select-none">
        404
      </div>
      <div className="absolute -inset-1 text-[15rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 dark:from-cyan-300 dark:to-blue-500 opacity-70 blur-sm animate-pulse select-none">
        404
      </div>
      
      <div className="absolute -inset-2 text-[15rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-pink-600 dark:from-fuchsia-300 dark:to-pink-500 opacity-70 blur-sm animate-pulse delay-300 select-none">
        404
      </div>
    </div>
    <div className="relative mt-8 text-3xl font-bold text-white dark:text-white/90 text-center transform rotate-2 select-none">
      <div className="absolute inset-0 blur-sm text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-300 dark:to-orange-400 animate-pulse">
        Congratulations! You broke the internet!
      </div>
      <div>
        Congratulations! You broke the internet!
      </div>
    </div>
    <div className="mt-4 text-xl text-white/80 dark:text-white/70 text-center max-w-lg mx-auto font-medium italic transform -rotate-1 select-none">
      We'd give you a prize, but it was on this page... which doesn't exist.
    </div>
  </div>
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-black/40 dark:to-transparent pointer-events-none"></div>
  <div className="absolute inset-0 pointer-events-none">
    <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse" style={{top: '10%'}}></div>
    <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-100" style={{top: '20%'}}></div>
    <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-200" style={{top: '30%'}}></div>
    <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-300" style={{top: '40%'}}></div>
    <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-400" style={{top: '50%'}}></div>
    <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-500" style={{top: '60%'}}></div>
    <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-600" style={{top: '70%'}}></div>
    <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-700" style={{top: '80%'}}></div>
    <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-800" style={{top: '90%'}}></div>
  </div>
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_black_120%)] opacity-40 dark:opacity-60 pointer-events-none"></div>
  <div className="absolute bottom-4 left-0 right-0 text-center text-white/50 dark:text-white/30 text-sm animate-bounce select-none">
    Try clicking anywhere... or don't, this page is broken anyway
  </div>
</div>`,
      preview: () => (
        <div className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-fuchsia-600 via-purple-700 to-indigo-800 dark:from-fuchsia-900 dark:via-purple-950 dark:to-indigo-950 flex items-center justify-center perspective-[2000px]">
          <div className="absolute inset-0 flex flex-wrap opacity-80">
            <div className="w-full h-1/6 bg-gradient-to-r from-pink-500 to-rose-500 dark:from-pink-700 dark:to-rose-700 transform -skew-y-12 translate-y-4 animate-pulse"></div>
            <div className="w-full h-1/6 bg-gradient-to-r from-rose-500 to-orange-500 dark:from-rose-700 dark:to-orange-700 transform skew-y-12 -translate-y-4 animate-pulse delay-150"></div>
            <div className="w-full h-1/6 bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-700 dark:to-amber-700 transform -skew-y-12 translate-y-4 animate-pulse delay-300"></div>
            <div className="w-full h-1/6 bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-amber-700 dark:to-yellow-700 transform skew-y-12 -translate-y-4 animate-pulse delay-500"></div>
            <div className="w-full h-1/6 bg-gradient-to-r from-yellow-500 to-lime-500 dark:from-yellow-700 dark:to-lime-700 transform -skew-y-12 translate-y-4 animate-pulse delay-700"></div>
            <div className="w-full h-1/6 bg-gradient-to-r from-lime-500 to-green-500 dark:from-lime-700 dark:to-green-700 transform skew-y-12 -translate-y-4 animate-pulse delay-1000"></div>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/20 backdrop-blur-md rounded-lg rotate-12 animate-bounce"></div>
            <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/20 backdrop-blur-md rounded-lg -rotate-12 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-white/20 backdrop-blur-md rounded-lg rotate-45 animate-bounce delay-300"></div>
            <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-white/20 backdrop-blur-md rounded-lg -rotate-45 animate-pulse delay-500"></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/10 backdrop-blur-md rounded-full animate-ping"></div>
            <div className="absolute top-10 left-10 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 dark:from-purple-600 dark:to-indigo-700 rounded-full blur-xl animate-pulse delay-700"></div>
            <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 dark:from-rose-600 dark:to-pink-700 rounded-full blur-xl animate-pulse delay-500"></div>
          </div>
          <div className="relative z-10 transform -rotate-6 scale-110">
            <div className="relative">
              <div className="text-[15rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 dark:from-white dark:to-white/50 select-none">
                404
              </div>
              <div className="absolute -inset-1 text-[15rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 dark:from-cyan-300 dark:to-blue-500 opacity-70 blur-sm animate-pulse select-none">
                404
              </div>

              <div className="absolute -inset-2 text-[15rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-pink-600 dark:from-fuchsia-300 dark:to-pink-500 opacity-70 blur-sm animate-pulse delay-300 select-none">
                404
              </div>
            </div>
            <div className="relative mt-8 text-3xl font-bold text-white dark:text-white/90 text-center transform rotate-2 select-none">
              <div className="absolute inset-0 blur-sm text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-300 dark:to-orange-400 animate-pulse">
                Congratulations! You broke the internet!
              </div>
              <div>
                Congratulations! You broke the internet!
              </div>
            </div>
            <div className="mt-4 text-xl text-white/80 dark:text-white/70 text-center max-w-lg mx-auto font-medium italic transform -rotate-1 select-none">
              We'd give you a prize, but it was on this page... which doesn't exist.
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-black/40 dark:to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse" style={{ top: '10%' }}></div>
            <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-100" style={{ top: '20%' }}></div>
            <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-200" style={{ top: '30%' }}></div>
            <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-300" style={{ top: '40%' }}></div>
            <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-400" style={{ top: '50%' }}></div>
            <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-500" style={{ top: '60%' }}></div>
            <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-600" style={{ top: '70%' }}></div>
            <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-700" style={{ top: '80%' }}></div>
            <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-800" style={{ top: '90%' }}></div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_black_120%)] opacity-40 dark:opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-4 left-0 right-0 text-center text-white/50 dark:text-white/30 text-sm animate-bounce select-none">
            Try clicking anywhere... or don't, this page is broken anyway
          </div>
        </div>
      ),
    }
  ],
  Background: [
    {
      id: "Geometric",
      name: "Geometric Pattern",
      description: "A geometric pattern background with interactive tiles",
      code: `<div className="fixed overflow-hidden h-screen w-screen   rounded-2xl bg-white dark:bg-gray-800 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className={\`transform transition-all duration-700 hover:scale-110 \${
                  i % 3 === 0
                    ? "bg-rose-400 dark:bg-rose-600"
                    : i % 3 === 1
                      ? "bg-amber-400 dark:bg-amber-600"
                      : "bg-emerald-400 dark:bg-emerald-600"
                } \${Math.random() > 0.5 ? "opacity-80" : "opacity-40"}\`}
              ></div>
            ))}
          </div>
          <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center">
            <span className="text-gray-800 dark:text-white font-bold text-xl">Geometric Pattern</span>
          </div>
        </div>`,
      preview: () => (
        <div className="fixed overflow-hidden h-screen w-screen  rounded-2xl bg-white dark:bg-gray-800 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className={`transform transition-all duration-700 hover:scale-110 ${i % 3 === 0
                    ? "bg-rose-400 dark:bg-rose-600"
                    : i % 3 === 1
                      ? "bg-amber-400 dark:bg-amber-600"
                      : "bg-emerald-400 dark:bg-emerald-600"
                  } ${Math.random() > 0.5 ? "opacity-80" : "opacity-40"}`}
              ></div>
            ))}
          </div>
          <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center">
            <span className="text-gray-800 dark:text-white font-bold text-xl">Geometric Pattern</span>
          </div>
        </div>
      ),
    }
    , {
      id: "Panel",
      name: "Panel",
      description: "A panel with a gradient background and shadow",
      code: ` <div className="fixed overflow-hidden h-screen w-screen rounded-2xl bg-gray-900 dark:bg-black shadow-xl flex items-center justify-center relative overflow-hidden border border-cyan-500/50 dark:border-cyan-600/50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
        <span className="text-cyan-500 font-bold text-xl relative z-10">FUTURISTIC PANEL</span>
      </div>
    </div>`,
      preview: () => (
        <div className="fixed overflow-hidden h-screen w-screen   rounded-2xl bg-gray-900 dark:bg-black shadow-xl flex items-center relative justify-center border border-cyan-500/50 dark:border-cyan-600/50">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
          <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
          <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
          <span className="text-cyan-500 font-bold text-xl relative z-10">FUTURISTIC PANEL</span>
        </div>

      ),

    },
    {
      id: "Floating",
      name: "Floating Elements",
      description: "A background with randomly floating colored circles",
      code: `<div className="fixed overflow-hidden h-screen w-screen  bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 shadow-xl flex items-center justify-center relative overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={\`absolute rounded-full \${
                i % 4 === 0
                  ? "bg-cyan-400 dark:bg-cyan-600"
                  : i % 4 === 1
                    ? "bg-pink-400 dark:bg-pink-600"
                    : i % 4 === 2
                      ? "bg-yellow-400 dark:bg-yellow-600"
                      : "bg-green-400 dark:bg-green-600"
              }\`}
              style={{
                width: \`\${Math.random() * 20 + 5}px\`,
                height: \`\${Math.random() * 20 + 5}px\`,
                left: \`\${Math.random() * 100}%\`,
                top: \`\${Math.random() * 100}%\`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: \`float \${Math.random() * 10 + 10}s linear infinite\`,
                animationDelay: \`\${Math.random() * 5}s\`,
              }}
            ></div>
          ))}
          <span className="text-gray-800 dark:text-white font-bold text-xl relative z-10">Floating Elements</span>
        </div>`,
      preview: () => (
        <div className="fixed overflow-hidden h-screen w-screen bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 shadow-xl flex items-center justify-center relative overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${i % 4 === 0
                  ? "bg-cyan-400 dark:bg-cyan-600"
                  : i % 4 === 1
                    ? "bg-pink-400 dark:bg-pink-600"
                    : i % 4 === 2
                      ? "bg-yellow-400 dark:bg-yellow-600"
                      : "bg-green-400 dark:bg-green-600"
                }`}
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
          <span className="text-gray-800 dark:text-white font-bold text-xl relative z-10">Floating Elements</span>
        </div>
      ),
    }
  ],
  Register_Login: [
    {
      id: "Login",
      name: "Sliding",
      description: "A sliding login form with a gradient background",
      code: `//have an isLogin usestate
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
              className={\`relative flex-1 cursor-pointer py-3 text-center transition duration-300 \${isLogin ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-500"}\`}
              onClick={() => setIsLogin(true)}
            >
              <span className="relative z-10">Sign In</span>
              {isLogin && (
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500"></div>
              )}
            </div>
            <div
              className={\`relative flex-1 cursor-pointer py-3 text-center transition duration-300 \${!isLogin ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-500"}\`}
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
              className={\`transition-all duration-500 ease-in-out \${isLogin ? "translate-x-0" : "-translate-x-full absolute"}\`}
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
              className={\`transition-all duration-500 ease-in-out \${!isLogin ? "translate-x-0" : "translate-x-full absolute"}\`}
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
</div>`,
      preview: () => (
        <LoginRegister3 />

      )

    },
    {
      id:"Register",
      name:"Minimal",
      description:"A minimalistic login form with a gradient background",
      code:`
      //have an isLogin usestate
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
            className={\`transition-all duration-500 ease-in-out \${isLogin ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 absolute"}\`}
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
            className={\`transition-all duration-500 ease-in-out \${!isLogin ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 absolute"}\`}
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
    </div>`,
      preview: () => (
        <LoginRegister1 />
      )
    }
  ],
  OTP: [
    {
      id: "OTP",
      name: "Holographic",
      description: "A simple OTP verification form with a gradient background",
      code: `<div className="flex flex-col items-center space-y-8">
  <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
    Verify Your Identity
  </div>
  <div className="flex space-x-4">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="relative">
        <input
          type="text"
          maxLength="1"
          className="w-12 h-16 text-3xl text-center rounded-xl bg-white/80 dark:bg-gray-800/80 border-2 border-indigo-300 dark:border-indigo-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20"
        />
        <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent group-hover:border-indigo-400/30 dark:group-hover:border-indigo-600/30"></div>
      </div>
    ))}
  </div>
  <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white font-medium shadow-lg hover:shadow-indigo-500/30 dark:hover:shadow-purple-700/30 transition-all">
    Verify Code
  </button>
</div>`,
preview: () => (
  <div className="flex flex-col items-center space-y-8">
  <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
    Verify Your Identity
  </div>
  <div className="flex space-x-4">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="relative">
        <input
          type="text"
          maxLength="1"
          className="w-12 h-16 text-3xl text-center rounded-xl bg-white/80 dark:bg-gray-800/80 border-2 border-indigo-300 dark:border-indigo-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20"
        />
        <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent group-hover:border-indigo-400/30 dark:group-hover:border-indigo-600/30"></div>
      </div>
    ))}
  </div>
  <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white font-medium shadow-lg hover:shadow-indigo-500/30 dark:hover:shadow-purple-700/30 transition-all">
    Verify Code
  </button>
</div>
)
},
{
  id:"Neon",
  name:"Blinking",
  description: "Neon OTP",
  code:`<div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-xl">
  <div className="flex justify-center space-x-3 mb-8">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="relative">
        <input
          type="text"
          maxLength="1"
          className="w-14 h-14 text-4xl text-center rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-indigo-400/30 dark:border-indigo-600/30 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none"
        />
        <div className="absolute bottom-0 left-1/2 h-1 w-6 bg-indigo-500 dark:bg-indigo-400 transform -translate-x-1/2 animate-pulse"></div>
      </div>
    ))}
  </div>
  <button className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 text-white font-bold hover:shadow-lg transition-all">
    Confirm OTP
  </button>
</div>`,
preview: () => (
  <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-xl">
  <div className="flex justify-center space-x-3 mb-8">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="relative">
        <input
          type="text"
          maxLength="1"
          className="w-14 h-14 text-4xl text-center rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-indigo-400/30 dark:border-indigo-600/30 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none"
        />
        <div className="absolute bottom-0 left-1/2 h-1 w-6 bg-indigo-500 dark:bg-indigo-400 transform -translate-x-1/2 animate-pulse"></div>
      </div>
    ))}
  </div>
  <button className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 text-white font-bold hover:shadow-lg transition-all">
    Confirm OTP
  </button>
</div>
)
},
{
  id:"color",
  name:"Color",
  description:"Colored OTP",
  code:`<div className="max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-br from-indigo-100/50 to-purple-100/50 dark:from-indigo-900/20 dark:to-purple-900/20">
  <div className="grid grid-cols-6 gap-2 mb-6">
    {[...Array(6)].map((_, i) => (
      <input
        key={i}
        type="text"
        maxLength="1"
        className={\`h-12 text-2xl text-center rounded-lg border-2 bg-white/90 dark:bg-gray-800/90 \${i % 2 === 0 ? 'border-indigo-300 dark:border-indigo-700 focus:border-indigo-500 dark:focus:border-indigo-400' : 'border-purple-300 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400'} focus:outline-none focus:ring-2 \${i % 2 === 0 ? 'focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20' : 'focus:ring-purple-500/20 dark:focus:ring-purple-400/20'}\`}
      />
    ))}
  </div>
  <div className="flex justify-center space-x-4">
    <button className="px-6 py-2 rounded-full bg-indigo-600/10 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600/20 dark:hover:bg-indigo-600/30 transition-colors">
      Resend Code
    </button>
    <button className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white hover:shadow-lg transition-all">
      Verify
    </button>
  </div>
</div>`,
preview: () => (
  <div className="max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-br from-indigo-100/50 to-purple-100/50 dark:from-indigo-900/20 dark:to-purple-900/20">
  <div className="grid grid-cols-6 gap-2 mb-6">
    {[...Array(6)].map((_, i) => (
      <input
        key={i}
        type="text"
        maxLength="1"
        className={`h-12 text-2xl text-center rounded-lg border-2 bg-white/90 dark:bg-gray-800/90 ${i % 2 === 0 ? 'border-indigo-300 dark:border-indigo-700 focus:border-indigo-500 dark:focus:border-indigo-400' : 'border-purple-300 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400'} focus:outline-none focus:ring-2 ${i % 2 === 0 ? 'focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20' : 'focus:ring-purple-500/20 dark:focus:ring-purple-400/20'}`}
      />
    ))}
  </div>
  <div className="flex justify-center space-x-4">
    <button className="px-6 py-2 rounded-full bg-indigo-600/10 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600/20 dark:hover:bg-indigo-600/30 transition-colors">
      Resend Code
    </button>
    <button className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white hover:shadow-lg transition-all">
      Verify
    </button>
  </div>
</div>
)
}
  ],
  ChatUI: [
    {
      id:"Glassmorphism",
      name:"Bright",
      description:"A chat UI with glassmorphism effect",
      code:`<div className="w-full max-w-md mx-auto p-6 rounded-3xl bg-gradient-to-br from-purple-50 to-blue-50">
  <div className="space-y-4">
    <div className="flex justify-start">
      <div className="max-w-xs px-5 py-3 rounded-3xl rounded-tl-none bg-white/80 backdrop-blur-md border border-purple-200 shadow-sm">
        <div className="text-sm text-purple-800">Hey! Check out these Kaisen UI components</div>
      </div>
    </div>
    <div className="flex justify-end">
      <div className="max-w-xs px-5 py-3 rounded-3xl rounded-tr-none bg-gradient-to-r from-purple-400 to-blue-400 text-white shadow-md">
        <div className="text-sm">They look amazing! The gradients are 🔥</div>
      </div>
    </div>
    <div className="flex justify-start">
      <div className="max-w-xs px-5 py-3 rounded-3xl rounded-tl-none bg-white/80 backdrop-blur-md border border-blue-200 shadow-sm">
        <div className="text-sm text-blue-800">Right? Wait till you see the dark mode!</div>
      </div>
    </div>
  </div>
  <div className="mt-6 flex gap-2">
    <input 
      type="text" 
      placeholder="Type your message..." 
      className="flex-1 px-4 py-2 rounded-full bg-white/90 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300/50"
    />
    <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 text-white shadow-md hover:shadow-lg transition-all">
      Send
    </button>
  </div>
</div>`,
preview: () => (
  <div className="w-full max-w-md mx-auto p-6 rounded-3xl bg-gradient-to-br from-purple-50 to-blue-50">
  <div className="space-y-4">
    <div className="flex justify-start">
      <div className="max-w-xs px-5 py-3 rounded-3xl rounded-tl-none bg-white/80 backdrop-blur-md border border-purple-200 shadow-sm">
        <div className="text-sm text-purple-800">Hey! Check out these Kaisen UI components</div>
      </div>
    </div>
    <div className="flex justify-end">
      <div className="max-w-xs px-5 py-3 rounded-3xl rounded-tr-none bg-gradient-to-r from-purple-400 to-blue-400 text-white shadow-md">
        <div className="text-sm">They look amazing! The gradients are 🔥</div>
      </div>
    </div>
    <div className="flex justify-start">
      <div className="max-w-xs px-5 py-3 rounded-3xl rounded-tl-none bg-white/80 backdrop-blur-md border border-blue-200 shadow-sm">
        <div className="text-sm text-blue-800">Right? Wait till you see the dark mode!</div>
      </div>
    </div>
  </div>
  <div className="mt-6 flex gap-2">
    <input 
      type="text" 
      placeholder="Type your message..." 
      className="flex-1 px-4 py-2 rounded-full bg-white/90 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300/50"
    />
    <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 text-white shadow-md hover:shadow-lg transition-all">
      Send
    </button>
  </div>
</div>
)
    },
    {
      id:"Chatbubble",
      name:"Chat Bubble",
      description:"A chat UI with chat bubbles",
      code:`<div className="w-full max-w-sm mx-auto p-6 rounded-3xl bg-gradient-to-br from-pink-50 to-amber-50">
  <div className="space-y-4">
    <div className="flex justify-start">
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-amber-400"></div>
      <div className="ml-2 max-w-xs px-4 py-2 rounded-2xl rounded-tl-none bg-white/90 shadow-sm">
        <div className="text-xs text-pink-800">How's the Kaisen UI implementation going?</div>
      </div>
    </div>
    <div className="flex justify-end">
      <div className="max-w-xs px-4 py-2 rounded-2xl rounded-tr-none bg-gradient-to-r from-pink-400 to-amber-400 text-white shadow-md">
        <div className="text-xs">Smooth! The components are crazy good</div>
      </div>
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-pink-400 ml-2"></div>
    </div>
  </div>
  <div className="mt-6 relative">
    <input 
      type="text" 
      placeholder="Type here..." 
      className="w-full px-4 py-3 rounded-full bg-white/90 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300/50 pr-16"
    />
    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-amber-400 text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform">
      →
    </button>
  </div>
</div>`,
preview:()=>(
  <div className="w-full max-w-sm mx-auto p-6 rounded-3xl bg-gradient-to-br from-pink-50 to-amber-50">
  <div className="space-y-4">
    <div className="flex justify-start">
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-amber-400"></div>
      <div className="ml-2 max-w-xs px-4 py-2 rounded-2xl rounded-tl-none bg-white/90 shadow-sm">
        <div className="text-xs text-pink-800">How's the Kaisen UI implementation going?</div>
      </div>
    </div>
    <div className="flex justify-end">
      <div className="max-w-xs px-4 py-2 rounded-2xl rounded-tr-none bg-gradient-to-r from-pink-400 to-amber-400 text-white shadow-md">
        <div className="text-xs">Smooth! The components are crazy good</div>
      </div>
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-pink-400 ml-2"></div>
    </div>
  </div>
  <div className="mt-6 relative">
    <input 
      type="text" 
      placeholder="Type here..." 
      className="w-full px-4 py-3 rounded-full bg-white/90 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300/50 pr-16"
    />
    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-amber-400 text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform">
      →
    </button>
  </div>
</div>
)
    },
    {
      id:"dark",
      name:"Cool",
      description:"A chat UI with dark mode",
      code:`<div className="w-full max-w-lg mx-auto rounded-2xl bg-gradient-to-br from-cyan-50 to-green-50 p-6 shadow-xl">
  <div className="h-96 overflow-y-auto space-y-3 mb-4">
    <div className="flex justify-start">
      <div className="px-5 py-3 rounded-2xl rounded-tl-none bg-white/90 border border-cyan-200 shadow-sm">
        <div className="text-sm text-cyan-800">Kaisen UI v3 just dropped!</div>
      </div>
    </div>
    <div className="flex justify-end">
      <div className="px-5 py-3 rounded-2xl rounded-tr-none bg-gradient-to-r from-cyan-400 to-green-400 text-white shadow-md">
        <div className="text-sm">No way! What's new?</div>
      </div>
    </div>
    <div className="flex justify-start">
      <div className="px-5 py-3 rounded-2xl rounded-tl-none bg-white/90 border border-green-200 shadow-sm">
        <div className="text-sm text-green-800">40 new components and auto dark mode!</div>
      </div>
    </div>
  </div>
  <div className="flex gap-3">
    <div className="flex-1 bg-white/90 rounded-full p-1 pl-4 border border-cyan-200">
      <input 
        type="text" 
        placeholder="Message..." 
        className="w-full bg-transparent focus:outline-none text-sm"
      />
    </div>
    <button className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-green-400 text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform">
      ↑
    </button>
  </div>
</div>`,
preview:()=>(
  <div className="w-full max-w-lg mx-auto rounded-2xl bg-gradient-to-br from-cyan-50 to-green-50 p-6 shadow-xl">
  <div className="h-96 overflow-y-auto space-y-3 mb-4">
    <div className="flex justify-start">
      <div className="px-5 py-3 rounded-2xl rounded-tl-none bg-white/90 border border-cyan-200 shadow-sm">
        <div className="text-sm text-cyan-800">Kaisen UI v3 just dropped!</div>
      </div>
    </div>
    <div className="flex justify-end">
      <div className="px-5 py-3 rounded-2xl rounded-tr-none bg-gradient-to-r from-cyan-400 to-green-400 text-white shadow-md">
        <div className="text-sm">No way! What's new?</div>
      </div>
    </div>
    <div className="flex justify-start">
      <div className="px-5 py-3 rounded-2xl rounded-tl-none bg-white/90 border border-green-200 shadow-sm">
        <div className="text-sm text-green-800">40 new components and auto dark mode!</div>
      </div>
    </div>
  </div>
  <div className="flex gap-3">
    <div className="flex-1 bg-white/90 rounded-full p-1 pl-4 border border-cyan-200">
      <input 
        type="text" 
        placeholder="Message..." 
        className="w-full bg-transparent focus:outline-none text-sm"
      />
    </div>
    <button className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-green-400 text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform">
      ↑
    </button>
  </div>
</div>
)
    }
  ],
  Footer:[
    {
      id:"Wave",
      name:"Dark",
      description:"A footer with a wave design",
      code:`<div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 border-t border-indigo-100 dark:border-gray-700">
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">Kaisen UI</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Build faster with atomic components</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Components</h4>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Buttons</a></li>
          <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Cards</a></li>
          <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Forms</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Resources</h4>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Docs</a></li>
          <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Templates</a></li>
          <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Blog</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Connect</h4>
        <div className="flex space-x-4">
          <a href="#" className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800">T</a>
          <a href="#" className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800">G</a>
          <a href="#" className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center text-pink-600 dark:text-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800">D</a>
        </div>
      </div>
    </div>
    <div className="mt-12 pt-8 border-t border-indigo-100 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-500 text-center">
      © 2025 Kaisen UI. All rights reserved.
    </div>
  </div>
</div>`,
preview:()=>(
  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 border-t border-indigo-100 dark:border-gray-700">
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">Kaisen UI</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Build faster with atomic components</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Components</h4>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Buttons</a></li>
          <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Cards</a></li>
          <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Forms</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Resources</h4>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Docs</a></li>
          <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Templates</a></li>
          <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Blog</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Connect</h4>
        <div className="flex space-x-4">
          <a href="#" className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800">T</a>
          <a href="#" className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800">G</a>
          <a href="#" className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center text-pink-600 dark:text-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800">D</a>
        </div>
      </div>
    </div>
    <div className="mt-12 pt-8 border-t border-indigo-100 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-500 text-center">
      © 2025 Kaisen UI. All rights reserved.
    </div>
  </div>
</div>
)
    },
    {
      id:"Light",
      name:"Light",
      description:"A light footer",
      code:`<div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 border-t border-indigo-100 dark:border-gray-700">
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">Kaisen UI</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Build faster with atomic components</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Components</h4>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Buttons</a></li>
          <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Cards</a></li>
          <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Forms</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Resources</h4>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Docs</a></li>
          <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Templates</a></li>
          <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Blog</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Connect</h4>
        <div className="flex space-x-4">
          <a href="#" className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800">T</a>
          <a href="#" className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800">G</a>
          <a href="#" className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center text-pink-600 dark:text-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800">D</a>
        </div>
      </div>
    </div>
    <div className="mt-12 pt-8 border-t border-indigo-100 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-500 text-center">
      © 2025 Kaisen UI. All rights reserved.
    </div>
  </div>
</div>`,
preview : () => (
  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 border-t border-indigo-100 dark:border-gray-700">
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">Kaisen UI</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Build faster with atomic components</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Components</h4>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Buttons</a></li>
          <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Cards</a></li>
          <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Forms</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Resources</h4>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Docs</a></li>
          <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Templates</a></li>
          <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Blog</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Connect</h4>
        <div className="flex space-x-4">
          <a href="#" className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800">T</a>
          <a href="#" className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800">G</a>
          <a href="#" className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center text-pink-600 dark:text-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800">D</a>
        </div>
      </div>
    </div>
    <div className="mt-12 pt-8 border-t border-indigo-100 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-500 text-center">
      © 2025 Kaisen UI. All rights reserved.
    </div>
  </div>
</div>
)
    },
    {
      id:"Simple",
      name:"Simple",
      description:"A simple footer",
      code:`<div className="py-10 w-full px-4 md:px-8 border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-6 md:mb-0">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
          <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
            <span className="text-white text-xs font-bold">UI</span>
          </div>
        </div>
        <span className="text-xl font-bold">KAISENUI</span>
      </div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-pink-500 transition-colors">GitHub</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Twitter</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Discord</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Documentation</a>
      </div>
    </div>
  </div>`,
preview:()=>(
  <div className="py-10 w-full px-4 md:px-8 border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-6 md:mb-0">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
          <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
            <span className="text-white text-xs font-bold">UI</span>
          </div>
        </div>
        <span className="text-xl font-bold">KAISENUI</span>
      </div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-pink-500 transition-colors">GitHub</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Twitter</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Discord</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Documentation</a>
      </div>
    </div>
  </div>
)
    }
  ],
  News:[
    {
      id:"Magazine",
      name:"Magazine",
      description:"A magazine-style news card",
      code:`<div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-8">
  <div className="max-w-7xl mx-auto">
    <div className="mb-16">
      <div className="h-[500px] rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 to-transparent">
          <span className="inline-block px-4 py-1 mb-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm">FEATURED STORY</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kaisen UI Revolutionizes Web Development</h1>
          <p className="text-white/90 max-w-2xl">Discover how our atomic design system is transforming how developers build modern applications with unprecedented speed.</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className={\`\${i < 2 ? 'md:col-span-2' : ''} bg-white/90 dark:bg-gray-800/90 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all\`}>
          <div className={\`\${i < 2 ? 'h-64' : 'h-48'} bg-gradient-to-br \${i%3===0 ? 'from-amber-400 to-pink-500' : i%3===1 ? 'from-blue-400 to-cyan-500' : 'from-purple-400 to-indigo-500'}\`}></div>
          <div className="p-6">
            <span className="text-xs font-semibold px-2 py-1 rounded bg-indigo-100/50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400">TECHNOLOGY</span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-3 mb-2">{i < 2 ? 'How Our Components Achieve 40% Faster Rendering' : 'New Dark Mode Features'}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{i < 2 ? 'Deep dive into the architecture that makes Kaisen UI the fastest React component library available today.' : 'Explore our automatic theme detection system with manual override capabilities.'}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>`,
preview:()=>(
  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-8">
  <div className="max-w-7xl mx-auto">
    <div className="mb-16">
      <div className="h-[500px] rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 to-transparent">
          <span className="inline-block px-4 py-1 mb-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm">FEATURED STORY</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kaisen UI Revolutionizes Web Development</h1>
          <p className="text-white/90 max-w-2xl">Discover how our atomic design system is transforming how developers build modern applications with unprecedented speed.</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`${i < 2 ? 'md:col-span-2' : ''} bg-white/90 dark:bg-gray-800/90 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all`}>
          <div className={`${i < 2 ? 'h-64' : 'h-48'} bg-gradient-to-br ${i%3===0 ? 'from-amber-400 to-pink-500' : i%3===1 ? 'from-blue-400 to-cyan-500' : 'from-purple-400 to-indigo-500'}`}></div>
          <div className="p-6">
            <span className="text-xs font-semibold px-2 py-1 rounded bg-indigo-100/50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400">TECHNOLOGY</span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-3 mb-2">{i < 2 ? 'How Our Components Achieve 40% Faster Rendering' : 'New Dark Mode Features'}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{i < 2 ? 'Deep dive into the architecture that makes Kaisen UI the fastest React component library available today.' : 'Explore our automatic theme detection system with manual override capabilities.'}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
)
    },
    {
      id:"Newspaper",
      name:"Newspaper",
      description:"A newspaper-style news card",
      code:`<div className="bg-white dark:bg-gray-900 p-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3">
        <div className="h-[600px] rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-700 dark:to-blue-800 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 p-10">
            <h1 className="text-4xl font-bold text-white mb-4">The Future of UI Development</h1>
            <p className="text-white/90 text-lg max-w-2xl">Why thousands of developers are switching to Kaisen UI's atomic design system for their projects.</p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 space-y-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-6 group">
            <div className={\`md:w-1/3 h-40 rounded-xl \${i===0 ? 'bg-gradient-to-br from-pink-500 to-rose-500' : i===1 ? 'bg-gradient-to-br from-purple-500 to-indigo-500' : 'bg-gradient-to-br from-amber-500 to-orange-500'}\`}></div>
            <div className="md:w-2/3">
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">DEVELOPMENT</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{
                i===0 ? 'Component Architecture Explained' : 
                i===1 ? 'Why Design Systems Matter' : 
                'Performance Benchmarks'
              }</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{
                i===0 ? 'Learn how we structure components for maximum reusability and performance.' :
                i===1 ? 'How Kaisen UI helps teams maintain design consistency at scale.' :
                'See how we outperform traditional component libraries in speed tests.'
              }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>`,
preview:()=>(
  <div className="bg-white dark:bg-gray-900 p-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3">
        <div className="h-[600px] rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-700 dark:to-blue-800 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 p-10">
            <h1 className="text-4xl font-bold text-white mb-4">The Future of UI Development</h1>
            <p className="text-white/90 text-lg max-w-2xl">Why thousands of developers are switching to Kaisen UI's atomic design system for their projects.</p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 space-y-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-6 group">
            <div className={`md:w-1/3 h-40 rounded-xl ${i===0 ? 'bg-gradient-to-br from-pink-500 to-rose-500' : i===1 ? 'bg-gradient-to-br from-purple-500 to-indigo-500' : 'bg-gradient-to-br from-amber-500 to-orange-500'}`}></div>
            <div className="md:w-2/3">
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">DEVELOPMENT</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{
                i===0 ? 'Component Architecture Explained' : 
                i===1 ? 'Why Design Systems Matter' : 
                'Performance Benchmarks'
              }</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{
                i===0 ? 'Learn how we structure components for maximum reusability and performance.' :
                i===1 ? 'How Kaisen UI helps teams maintain design consistency at scale.' :
                'See how we outperform traditional component libraries in speed tests.'
              }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
)
    },
    {
      id:"Card-Stack",
      name:"Card Stack",
      description:"A card stack layout",
      code:`<div className="bg-gradient-to-br from-amber-50 to-rose-50 dark:from-gray-900 dark:to-gray-800 p-8">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row gap-8 mb-12">
      <div className="md:w-2/3">
        <div className="h-[500px] rounded-3xl bg-gradient-to-br from-rose-500 to-amber-500 dark:from-rose-700 dark:to-amber-700 relative overflow-hidden p-10 flex flex-col justify-end">
          <h1 className="text-4xl font-bold text-white mb-4">Redefining Developer Experience</h1>
          <p className="text-white/90 text-lg max-w-2xl">How Kaisen UI's intuitive API design reduces learning curve and boosts productivity.</p>
        </div>
      </div>
      <div className="md:w-1/3 space-y-6">
        <h3 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 dark:from-amber-400 dark:to-rose-400 bg-clip-text text-transparent">Trending</h3>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-6 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-lg transition-all">
            <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">CASE STUDY</span>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-1 mb-2">{
              i===0 ? 'From Zero to Production in 3 Days' :
              i===1 ? 'Startup Saves 200+ Dev Hours' :
              'Enterprise Migration Success Story'
            }</h4>
            <div className="h-px w-full bg-gradient-to-r from-amber-200 to-rose-200 dark:from-amber-800 dark:to-rose-800 my-3"></div>
            <p className="text-gray-600 dark:text-gray-400 text-xs">{
              i===0 ? 'How one team built their entire frontend with Kaisen UI in record time' :
              i===1 ? 'Reducing UI development time by 65% with our component library' :
              'How a Fortune 500 company transitioned their design system'
            }</p>
          </div>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white/90 dark:bg-gray-800/90 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
          <div className="h-48 bg-gradient-to-br from-amber-400/70 to-rose-400/70 dark:from-amber-600/70 dark:to-rose-600/70"></div>
          <div className="p-6">
            <span className="text-xs font-semibold px-2 py-1 rounded bg-amber-100/50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400">UPDATE</span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-3 mb-2">Version 3.2 Patch Notes</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">All the new features and improvements in our latest release.</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>`,
preview:()=>(
  <div className="bg-gradient-to-br from-amber-50 to-rose-50 dark:from-gray-900 dark:to-gray-800 p-8">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row gap-8 mb-12">
      <div className="md:w-2/3">
        <div className="h-[500px] rounded-3xl bg-gradient-to-br from-rose-500 to-amber-500 dark:from-rose-700 dark:to-amber-700 relative overflow-hidden p-10 flex flex-col justify-end">
          <h1 className="text-4xl font-bold text-white mb-4">Redefining Developer Experience</h1>
          <p className="text-white/90 text-lg max-w-2xl">How Kaisen UI's intuitive API design reduces learning curve and boosts productivity.</p>
        </div>
      </div>
      <div className="md:w-1/3 space-y-6">
        <h3 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 dark:from-amber-400 dark:to-rose-400 bg-clip-text text-transparent">Trending</h3>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-6 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-lg transition-all">
            <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">CASE STUDY</span>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-1 mb-2">{
              i===0 ? 'From Zero to Production in 3 Days' :
              i===1 ? 'Startup Saves 200+ Dev Hours' :
              'Enterprise Migration Success Story'
            }</h4>
            <div className="h-px w-full bg-gradient-to-r from-amber-200 to-rose-200 dark:from-amber-800 dark:to-rose-800 my-3"></div>
            <p className="text-gray-600 dark:text-gray-400 text-xs">{
              i===0 ? 'How one team built their entire frontend with Kaisen UI in record time' :
              i===1 ? 'Reducing UI development time by 65% with our component library' :
              'How a Fortune 500 company transitioned their design system'
            }</p>
          </div>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white/90 dark:bg-gray-800/90 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
          <div className="h-48 bg-gradient-to-br from-amber-400/70 to-rose-400/70 dark:from-amber-600/70 dark:to-rose-600/70"></div>
          <div className="p-6">
            <span className="text-xs font-semibold px-2 py-1 rounded bg-amber-100/50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400">UPDATE</span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-3 mb-2">Version 3.2 Patch Notes</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">All the new features and improvements in our latest release.</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
)
    },
    
  ],
  Social:[
    {
      id:"Video+comments",
      name:"Video + Comments",
      description:"A video post with comments",
      code:`<div className="bg-gradient-to-br w-full from-gray-900 to-blue-900 p-6 rounded-3xl border border-gray-700 hover:border-blue-500 transition-colors duration-300 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]">
  <div className="aspect-video bg-gradient-to-r from-blue-600 to-violet-700 rounded-xl flex items-center justify-center text-gray-100 font-mono font-black text-2xl tracking-widest shadow-inner">
    KAISEN TECH DEMO
  </div>
  <div className="mt-6 h-64 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-blue-500/50">
    {[...Array(6)].map((_, i) => (
      <div key={i} className={\`p-3 rounded-lg backdrop-blur \${i%3 === 0 
        ? 'bg-blue-900/60 border border-blue-800/50' 
        : i%3 === 1 
          ? 'bg-violet-900/60 border border-violet-800/50' 
          : 'bg-gray-800/70 border border-gray-700/50'} 
        hover:bg-gradient-to-r \${i%3 === 0 
          ? 'hover:from-blue-900/70 hover:to-blue-800/70' 
          : i%3 === 1 
            ? 'hover:from-violet-900/70 hover:to-violet-800/70' 
            : 'hover:from-gray-800/80 hover:to-gray-700/80'} transition-all\`}>
        <div className="flex items-center gap-2">
          <div className={\`h-2.5 w-2.5 rounded-full \${i%3 === 0 
            ? 'bg-cyan-400' 
            : i%3 === 1 
              ? 'bg-fuchsia-400' 
              : 'bg-gray-400'}\`}></div>
          <div className={\`font-bold \${i%3 === 0 
            ? 'text-cyan-300' 
            : i%3 === 1 
              ? 'text-fuchsia-300' 
              : 'text-gray-300'}\`}>
            KaisenDev_{i+1}
          </div>
        </div>
        <p className="mt-1.5 text-sm text-gray-300 pl-4">The performance metrics with Kaisen are breaking all our records!</p>
      </div>
    ))}
    <div className="sticky bottom-0 pt-3 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent">
      <div className="flex gap-3">
        <div className="flex-1 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
          <input 
            type="text" 
            placeholder="Ask about Kaisen tech..." 
            className="w-full p-3 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none"
          />
        </div>
        <button className="px-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold rounded-xl flex items-center justify-center shadow-md hover:shadow-blue-500/30 transition-all">
          Post
        </button>
      </div>
    </div>
  </div>
</div>`,
preview:()=>(
  <div className="bg-gradient-to-br w-full from-gray-900 to-blue-900 p-6 rounded-3xl border border-gray-700 hover:border-blue-500 transition-colors duration-300 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]">
  <div className="aspect-video bg-gradient-to-r from-blue-600 to-violet-700 rounded-xl flex items-center justify-center text-gray-100 font-mono font-black text-2xl tracking-widest shadow-inner">
    KAISEN TECH DEMO
  </div>
  <div className="mt-6 h-64 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-blue-500/50">
    {[...Array(6)].map((_, i) => (
      <div key={i} className={`p-3 rounded-lg backdrop-blur ${i%3 === 0 
        ? 'bg-blue-900/60 border border-blue-800/50' 
        : i%3 === 1 
          ? 'bg-violet-900/60 border border-violet-800/50' 
          : 'bg-gray-800/70 border border-gray-700/50'} 
        hover:bg-gradient-to-r ${i%3 === 0 
          ? 'hover:from-blue-900/70 hover:to-blue-800/70' 
          : i%3 === 1 
            ? 'hover:from-violet-900/70 hover:to-violet-800/70' 
            : 'hover:from-gray-800/80 hover:to-gray-700/80'} transition-all`}>
        <div className="flex items-center gap-2">
          <div className={`h-2.5 w-2.5 rounded-full ${i%3 === 0 
            ? 'bg-cyan-400' 
            : i%3 === 1 
              ? 'bg-fuchsia-400' 
              : 'bg-gray-400'}`}></div>
          <div className={`font-bold ${i%3 === 0 
            ? 'text-cyan-300' 
            : i%3 === 1 
              ? 'text-fuchsia-300' 
              : 'text-gray-300'}`}>
            KaisenDev_{i+1}
          </div>
        </div>
        <p className="mt-1.5 text-sm text-gray-300 pl-4">The performance metrics with Kaisen are breaking all our records!</p>
      </div>
    ))}
    <div className="sticky bottom-0 pt-3 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent">
      <div className="flex gap-3">
        <div className="flex-1 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
          <input 
            type="text" 
            placeholder="Ask about Kaisen tech..." 
            className="w-full p-3 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none"
          />
        </div>
        <button className="px-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold rounded-xl flex items-center justify-center shadow-md hover:shadow-blue-500/30 transition-all">
          Post
        </button>
      </div>
    </div>
  </div>
</div>
)

    },{
      id:'Poll',
      name:'Poll',
      description:'A poll card',
      code:`<div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg border border-white w-full max-w-md">
  <h3 className="text-2xl font-bold text-blue-600 mb-4">What's your favorite Kaisen UI feature?</h3>
  <div className="space-y-3 mb-5">
    {['Component Library', 'Dark Mode System', 'Performance', 'Customization'].map((option, i) => (
      <div key={i} className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <button className="relative w-full text-left p-3 pl-5 bg-white rounded-full border border-blue-100 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between">
          <span className="text-blue-800 font-medium">{option}</span>
          <span className="text-blue-400 font-bold text-sm">23%</span>
        </button>
      </div>
    ))}
  </div>
  <div className="flex justify-between items-center pt-3 border-t border-blue-100">
    <span className="text-sm text-blue-500">128 votes</span>
    <button className="px-5 py-2 bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200">
      Vote Now
    </button>
  </div>
</div>`,
preview:()=>(
  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg border border-white w-full max-w-md">
  <h3 className="text-2xl font-bold text-blue-600 mb-4">What's your favorite Kaisen UI feature?</h3>
  <div className="space-y-3 mb-5">
    {['Component Library', 'Dark Mode System', 'Performance', 'Customization'].map((option, i) => (
      <div key={i} className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <button className="relative w-full text-left p-3 pl-5 bg-white rounded-full border border-blue-100 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between">
          <span className="text-blue-800 font-medium">{option}</span>
          <span className="text-blue-400 font-bold text-sm">23%</span>
        </button>
      </div>
    ))}
  </div>
  <div className="flex justify-between items-center pt-3 border-t border-blue-100">
    <span className="text-sm text-blue-500">128 votes</span>
    <button className="px-5 py-2 bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200">
      Vote Now
    </button>
  </div>
</div>
)
    },{
      id:"Share-menu",
      name:"Share Menu",
      description:"A share menu card",
      code:`<div className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 w-fit">
  <h3 className="text-lg font-semibold text-gray-700 mb-4">Share this</h3>
  <div className="grid grid-cols-5 gap-3">
    {/* Twitter */}
    <button className="p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-blue-400 group-hover:fill-blue-500 transition-colors">
        <path d="M22.46 6.012a8.58 8.58 0 0 1-2.466.676 4.305 4.305 0 0 0 1.886-2.374 8.591 8.591 0 0 1-2.725 1.041 4.292 4.292 0 0 0-7.313 3.914 12.184 12.184 0 0 1-8.846-4.483 4.286 4.286 0 0 0 1.328 5.728 4.283 4.283 0 0 1-1.943-.537v.054a4.294 4.294 0 0 0 3.442 4.208 4.306 4.306 0 0 1-1.938.074 4.296 4.296 0 0 0 4.01 2.98 8.61 8.61 0 0 1-5.33 1.838 8.697 8.697 0 0 1-1.022-.063 12.15 12.15 0 0 0 6.59 1.932c7.908 0 12.23-6.55 12.23-12.23 0-.186-.004-.372-.012-.558a8.724 8.724 0 0 0 2.152-2.223z"/>
      </svg>
    </button>

    {/* Facebook */}
    <button className="p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-blue-600 group-hover:fill-blue-700 transition-colors">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
      </svg>
    </button>

    {/* LinkedIn */}
    <button className="p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-blue-700 group-hover:fill-blue-800 transition-colors">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    </button>

    {/* WhatsApp */}
    <button className="p-2 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-green-500 group-hover:fill-green-600 transition-colors">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297a11.815 11.815 0 00-8.415-3.48c-6.617 0-11.998 5.381-11.998 11.998 0 2.03.503 3.914 1.385 5.589l-1.454 5.341 5.412-1.455a11.945 11.945 0 005.629 1.387h.059c6.617 0 11.998-5.381 11.998-12 0-3.27-1.32-6.234-3.48-8.415"/>
      </svg>
    </button>

    {/* Copy Link */}
    <button className="p-2 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-purple-500 group-hover:fill-purple-600 transition-colors">
        <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/>
      </svg>
    </button>
  </div>
</div>`,
preview:()=>(
  <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 w-fit">
  <h3 className="text-lg font-semibold text-gray-700 mb-4">Share this</h3>
  <div className="grid grid-cols-5 gap-3">
    <button className="p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-blue-400 group-hover:fill-blue-500 transition-colors">
        <path d="M22.46 6.012a8.58 8.58 0 0 1-2.466.676 4.305 4.305 0 0 0 1.886-2.374 8.591 8.591 0 0 1-2.725 1.041 4.292 4.292 0 0 0-7.313 3.914 12.184 12.184 0 0 1-8.846-4.483 4.286 4.286 0 0 0 1.328 5.728 4.283 4.283 0 0 1-1.943-.537v.054a4.294 4.294 0 0 0 3.442 4.208 4.306 4.306 0 0 1-1.938.074 4.296 4.296 0 0 0 4.01 2.98 8.61 8.61 0 0 1-5.33 1.838 8.697 8.697 0 0 1-1.022-.063 12.15 12.15 0 0 0 6.59 1.932c7.908 0 12.23-6.55 12.23-12.23 0-.186-.004-.372-.012-.558a8.724 8.724 0 0 0 2.152-2.223z"/>
      </svg>
    </button>
    <button className="p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-blue-600 group-hover:fill-blue-700 transition-colors">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
      </svg>
    </button>
    <button className="p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-blue-700 group-hover:fill-blue-800 transition-colors">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    </button>
    <button className="p-2 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-green-500 group-hover:fill-green-600 transition-colors">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297a11.815 11.815 0 00-8.415-3.48c-6.617 0-11.998 5.381-11.998 11.998 0 2.03.503 3.914 1.385 5.589l-1.454 5.341 5.412-1.455a11.945 11.945 0 005.629 1.387h.059c6.617 0 11.998-5.381 11.998-12 0-3.27-1.32-6.234-3.48-8.415"/>
      </svg>
    </button>
    <button className="p-2 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-purple-500 group-hover:fill-purple-600 transition-colors">
        <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/>
      </svg>
    </button>
  </div>
</div>
)
    },
    {
      id:"Emoji-picker",
      name:"Emoji Picker",
      description :"An emoji picker",
      code:`<div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border-4 border-black dark:border-neon-purple shadow-[8px_8px_0_0_black] dark:shadow-[8px_8px_0_0_#8a2be2]">
  <h3 className="font-mono text-xl font-bold text-white dark:text-neon-pink mb-4 tracking-tighter">REACT-O-MATIC 9000</h3>
  <div className="grid grid-cols-8 gap-1 mb-3">
    {['🤖','👾','🎮','💾','🔋','🖥️','👽','🕹️','🔮','🧿','🎧','📟','👓','⏱️','📡','💿'].map((e,i) => (
      <button key={i} className="text-2xl p-1 bg-gray-100 dark:bg-gray-800 hover:bg-yellow-300 dark:hover:bg-neon-purple rounded-sm border border-black dark:border-neon-blue transform hover:scale-150 transition-all duration-100">
        {e}
      </button>
    ))}
  </div>
  <div className="relative">
    <input 
      type="text" 
      placeholder="SEARCH EMOJIS..." 
      className="w-full p-2 pl-8 bg-gray-100 dark:bg-gray-800 border-2 border-black dark:border-neon-green font-mono text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
    />
    <span className="absolute left-2 top-2.5 text-black dark:text-neon-yellow">🔍</span>
  </div>
</div>`,
preview:()=>(
  <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border-4 border-black dark:border-neon-purple shadow-[8px_8px_0_0_black] dark:shadow-[8px_8px_0_0_#8a2be2]">
  <h3 className="font-mono text-xl font-bold text-white dark:text-neon-pink mb-4 tracking-tighter">REACT-O-MATIC 9000</h3>
  <div className="grid grid-cols-8 gap-1 mb-3">
    {['🤖','👾','🎮','💾','🔋','🖥️','👽','🕹️','🔮','🧿','🎧','📟','👓','⏱️','📡','💿'].map((e,i) => (
      <button key={i} className="text-2xl p-1 bg-gray-100 dark:bg-gray-800 hover:bg-yellow-300 dark:hover:bg-neon-purple rounded-sm border border-black dark:border-neon-blue transform hover:scale-150 transition-all duration-100">
        {e}
      </button>
    ))}
  </div>
  <div className="relative">
    <input 
      type="text" 
      placeholder="SEARCH EMOJIS..." 
      className="w-full p-2 pl-8 bg-gray-100 dark:bg-gray-800 border-2 border-black dark:border-neon-green font-mono text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
    />
    <span className="absolute left-2 top-2.5 text-black dark:text-neon-yellow">🔍</span>
  </div>
</div>
)
    }
  ],
  Form: [
    {
      id:"request",
      name:"Request Form",
      description:"A request form",
      code:`<div className="bg-white dark:bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-300 w-full max-w-2xl">
  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-900 mb-6">Submit New Component</h3>
  <div className="grid grid-cols-2 gap-6">
    <div className="col-span-2">
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Component Name</label>
      <input type="text" className="w-full p-3 bg-gray-50 dark:bg-gray-100 border border-gray-200 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900" />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Category</label>
      <select className="w-full p-3 bg-gray-50 dark:bg-gray-100 border border-gray-200 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900">
        <option>UI Elements</option>
        <option>Form Controls</option>
        <option>Navigation</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Complexity</label>
      <div className="flex gap-4">
        <label className="flex items-center">
          <input type="radio" name="complexity" className="h-4 w-4 text-blue-500" />
          <span className="ml-2 text-gray-700 dark:text-gray-800">Simple</span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="complexity" className="h-4 w-4 text-blue-500" />
          <span className="ml-2 text-gray-700 dark:text-gray-800">Advanced</span>
        </label>
      </div>
    </div>
    <div className="col-span-2">
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Description</label>
      <textarea rows="3" className="w-full p-3 bg-gray-50 dark:bg-gray-100 border border-gray-200 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"></textarea>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Dependencies</label>
      <div className="space-y-2">
        <label className="flex items-center">
          <input type="checkbox" className="h-4 w-4 text-blue-500 rounded border-gray-300" />
          <span className="ml-2 text-gray-700 dark:text-gray-800">React</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="h-4 w-4 text-blue-500 rounded border-gray-300" />
          <span className="ml-2 text-gray-700 dark:text-gray-800">Tailwind</span>
        </label>
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Priority</label>
      <select className="w-full p-3 bg-gray-50 dark:bg-gray-100 border border-gray-200 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900">
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </div>
    <div className="col-span-2">
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Preview Image</label>
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-300 dark:border-gray-400 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-200">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <p className="text-sm text-gray-500 dark:text-gray-600">Upload component screenshot</p>
          </div>
          <input type="file" className="hidden" />
        </label>
      </div>
    </div>
    <div className="col-span-2 flex justify-end gap-4">
      <button className="px-6 py-3 border border-gray-300 dark:border-gray-400 rounded-lg text-gray-700 dark:text-gray-800 font-medium hover:bg-gray-100 dark:hover:bg-gray-200">
        Cancel
      </button>
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
        Submit Component
      </button>
    </div>
  </div>
</div>`,
preview:()=>(
  <div className="bg-white dark:bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-300 w-full max-w-2xl">
  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-900 mb-6">Submit New Component</h3>
  <div className="grid grid-cols-2 gap-6">
    <div className="col-span-2">
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Component Name</label>
      <input type="text" className="w-full p-3 bg-gray-50 dark:bg-gray-100 border border-gray-200 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900" />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Category</label>
      <select className="w-full p-3 bg-gray-50 dark:bg-gray-100 border border-gray-200 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900">
        <option>UI Elements</option>
        <option>Form Controls</option>
        <option>Navigation</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Complexity</label>
      <div className="flex gap-4">
        <label className="flex items-center">
          <input type="radio" name="complexity" className="h-4 w-4 text-blue-500" />
          <span className="ml-2 text-gray-700 dark:text-gray-800">Simple</span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="complexity" className="h-4 w-4 text-blue-500" />
          <span className="ml-2 text-gray-700 dark:text-gray-800">Advanced</span>
        </label>
      </div>
    </div>
    <div className="col-span-2">
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Description</label>
      <textarea rows="3" className="w-full p-3 bg-gray-50 dark:bg-gray-100 border border-gray-200 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"></textarea>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Dependencies</label>
      <div className="space-y-2">
        <label className="flex items-center">
          <input type="checkbox" className="h-4 w-4 text-blue-500 rounded border-gray-300" />
          <span className="ml-2 text-gray-700 dark:text-gray-800">React</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="h-4 w-4 text-blue-500 rounded border-gray-300" />
          <span className="ml-2 text-gray-700 dark:text-gray-800">Tailwind</span>
        </label>
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Priority</label>
      <select className="w-full p-3 bg-gray-50 dark:bg-gray-100 border border-gray-200 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900">
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </div>
    <div className="col-span-2">
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-700 mb-1">Preview Image</label>
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-300 dark:border-gray-400 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-200">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <p className="text-sm text-gray-500 dark:text-gray-600">Upload component screenshot</p>
          </div>
          <input type="file" className="hidden" />
        </label>
      </div>
    </div>
    <div className="col-span-2 flex justify-end gap-4">
      <button className="px-6 py-3 border border-gray-300 dark:border-gray-400 rounded-lg text-gray-700 dark:text-gray-800 font-medium hover:bg-gray-100 dark:hover:bg-gray-200">
        Cancel
      </button>
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
        Submit Component
      </button>
    </div>
  </div>
</div>
)
    },
    {
      id:"feedback",
      name:"Feedback Form",
      description:"A feedback form",
      code:`<div className="bg-blue-50 dark:bg-blue-100 p-8 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-300 w-full max-w-2xl">
  <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-900 mb-6">Kaisen UI Feedback</h3>
  <div className="space-y-6">
    <div className="grid grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-blue-700 dark:text-blue-800 mb-1">Your Role</label>
        <select className="w-full p-3 bg-white dark:bg-blue-50 border border-blue-200 dark:border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-blue-900">
          <option>Developer</option>
          <option>Designer</option>
          <option>Product Manager</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-blue-700 dark:text-blue-800 mb-1">Usage Frequency</label>
        <select className="w-full p-3 bg-white dark:bg-blue-50 border border-blue-200 dark:border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-blue-900">
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-blue-700 dark:text-blue-800 mb-1">Favorite Components</label>
      <div className="grid grid-cols-3 gap-3">
        {['Buttons', 'Forms', 'Cards', 'Modals', 'Navigation', 'Tables'].map((component) => (
          <label key={component} className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-blue-500 rounded border-blue-300" />
            <span className="ml-2 text-blue-800 dark:text-blue-900">{component}</span>
          </label>
        ))}
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-blue-700 dark:text-blue-800 mb-1">Overall Rating</label>
      <div className="flex items-center gap-1">
        {[1,2,3,4,5].map((star) => (
          <button key={star} className="text-3xl text-amber-400 hover:scale-110 transition-transform">★</button>
        ))}
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-blue-700 dark:text-blue-800 mb-1">What's missing?</label>
      <textarea rows="3" className="w-full p-3 bg-white dark:bg-blue-50 border border-blue-200 dark:border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-blue-900"></textarea>
    </div>
    <div>
      <label className="block text-sm font-medium text-blue-700 dark:text-blue-800 mb-1">Would you recommend Kaisen UI?</label>
      <div className="flex gap-6">
        <label className="flex items-center">
          <input type="radio" name="recommend" className="h-4 w-4 text-blue-500" />
          <span className="ml-2 text-blue-800 dark:text-blue-900">Definitely</span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="recommend" className="h-4 w-4 text-blue-500" />
          <span className="ml-2 text-blue-800 dark:text-blue-900">Maybe</span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="recommend" className="h-4 w-4 text-blue-500" />
          <span className="ml-2 text-blue-800 dark:text-blue-900">Not sure</span>
        </label>
      </div>
    </div>
    <div className="flex justify-end">
      <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
        Submit Feedback
      </button>
    </div>
  </div>
</div>`,
preview:()=>(
  <div className="bg-blue-50 dark:bg-blue-100 p-8 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-300 w-full max-w-2xl">
  <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-900 mb-6">Kaisen UI Feedback</h3>
  <div className="space-y-6">
    <div className="grid grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-blue-700 dark:text-blue-800 mb-1">Your Role</label>
        <select className="w-full p-3 bg-white dark:bg-blue-50 border border-blue-200 dark:border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-blue-900">
          <option>Developer</option>
          <option>Designer</option>
          <option>Product Manager</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-blue-700 dark:text-blue-800 mb-1">Usage Frequency</label>
        <select className="w-full p-3 bg-white dark:bg-blue-50 border border-blue-200 dark:border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-blue-900">
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-blue-700 dark:text-blue-800 mb-1">Favorite Components</label>
      <div className="grid grid-cols-3 gap-3">
        {['Buttons', 'Forms', 'Cards', 'Modals', 'Navigation', 'Tables'].map((component) => (
          <label key={component} className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-blue-500 rounded border-blue-300" />
            <span className="ml-2 text-blue-800 dark:text-blue-900">{component}</span>
          </label>
        ))}
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-blue-700 dark:text-blue-800 mb-1">Overall Rating</label>
      <div className="flex items-center gap-1">
        {[1,2,3,4,5].map((star) => (
          <button key={star} className="text-3xl text-amber-400 hover:scale-110 transition-transform">★</button>
        ))}
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-blue-700 dark:text-blue-800 mb-1">What's missing?</label>
      <textarea rows="3" className="w-full p-3 bg-white dark:bg-blue-50 border border-blue-200 dark:border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-blue-900"></textarea>
    </div>
    <div>
      <label className="block text-sm font-medium text-blue-700 dark:text-blue-800 mb-1">Would you recommend Kaisen UI?</label>
      <div className="flex gap-6">
        <label className="flex items-center">
          <input type="radio" name="recommend" className="h-4 w-4 text-blue-500" />
          <span className="ml-2 text-blue-800 dark:text-blue-900">Definitely</span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="recommend" className="h-4 w-4 text-blue-500" />
          <span className="ml-2 text-blue-800 dark:text-blue-900">Maybe</span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="recommend" className="h-4 w-4 text-blue-500" />
          <span className="ml-2 text-blue-800 dark:text-blue-900">Not sure</span>
        </label>
      </div>
    </div>
    <div className="flex justify-end">
      <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
        Submit Feedback
      </button>
    </div>
  </div>
</div>
)
    }
  ],
  Navbar: [
    {
      id:"glass",
      name:"Glassmorphism Navbar",
      description:"A glassmorphism navbar",
      code:`<div className="fixed  top-0 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl bg-white/80 dark:bg-gray-50/90 backdrop-blur-lg rounded-full shadow-xl border border-gray-200 dark:border-gray-300 z-50">
  <div className="flex justify-between items-center p-3">
    <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent dark:from-blue-600 dark:to-purple-600">
      KAISEN
    </div>

    {/* Desktop Navigation - Hidden on mobile */}
    <div className="hidden md:flex gap-1">
      <button className="px-5 py-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-800 dark:text-gray-900 font-medium transition-colors">
        Home
      </button>
      <button className="px-5 py-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-800 dark:text-gray-900 font-medium transition-colors">
        About
      </button>
      <button className="px-5 py-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-800 dark:text-gray-900 font-medium transition-colors">
        Components
      </button>
      <button className="px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors">
        Get Started
      </button>
    </div>

    {/* Mobile Menu Button - Hidden on desktop */}
    <button className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  {/* Mobile Menu - Hidden by default, shown when toggled */}
  <div className="md:hidden hidden flex-col p-4 space-y-2 bg-white dark:bg-gray-100 rounded-xl mt-2 border border-gray-200 dark:border-gray-300">
    <button className="w-full px-5 py-3 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-800 dark:text-gray-900 font-medium transition-colors text-left">
      Home
    </button>
    <button className="w-full px-5 py-3 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-800 dark:text-gray-900 font-medium transition-colors text-left">
      About
    </button>
    <button className="w-full px-5 py-3 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-800 dark:text-gray-900 font-medium transition-colors text-left">
      Components
    </button>
    <button className="w-full px-5 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors text-center">
      Get Started
    </button>
  </div>
</div>`,
preview:()=>(
  <div className="fixed  top-0 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl bg-white/80 dark:bg-gray-50/90 backdrop-blur-lg rounded-full shadow-xl border border-gray-200 dark:border-gray-300 z-50">
  <div className="flex justify-between items-center p-3">
    <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent dark:from-blue-600 dark:to-purple-600">
      KAISEN
    </div>

    {/* Desktop Navigation - Hidden on mobile */}
    <div className="hidden md:flex gap-1">
      <button className="px-5 py-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-800 dark:text-gray-900 font-medium transition-colors">
        Home
      </button>
      <button className="px-5 py-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-800 dark:text-gray-900 font-medium transition-colors">
        About
      </button>
      <button className="px-5 py-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-800 dark:text-gray-900 font-medium transition-colors">
        Components
      </button>
      <button className="px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors">
        Get Started
      </button>
    </div>

    {/* Mobile Menu Button - Hidden on desktop */}
    <button className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  {/* Mobile Menu - Hidden by default, shown when toggled */}
  <div className="md:hidden hidden flex-col p-4 space-y-2 bg-white dark:bg-gray-100 rounded-xl mt-2 border border-gray-200 dark:border-gray-300">
    <button className="w-full px-5 py-3 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-800 dark:text-gray-900 font-medium transition-colors text-left">
      Home
    </button>
    <button className="w-full px-5 py-3 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-800 dark:text-gray-900 font-medium transition-colors text-left">
      About
    </button>
    <button className="w-full px-5 py-3 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-800 dark:text-gray-900 font-medium transition-colors text-left">
      Components
    </button>
    <button className="w-full px-5 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors text-center">
      Get Started
    </button>
  </div>
</div>
)
    },
    {
      id:"Cool",
      name:"Plain Navbar",
      description:"A cool navbar",
      code:`<div className="fixed top-0 left-0 w-full bg-white dark:bg-gray-50 shadow-md z-50">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        KAISEN
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <button className="text-gray-700 dark:text-gray-800 hover:text-blue-500 font-medium">
          Components
        </button>
        <button className="text-gray-700 dark:text-gray-800 hover:text-blue-500 font-medium">
          Docs
        </button>
        <button className="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full">
          Try Now
        </button>
      </div>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden p-2">
        <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
        <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
        <div className="w-6 h-0.5 bg-gray-700"></div>
      </button>
    </div>
    
    {/* Mobile Menu (hidden by default) */}
    <div className="md:hidden hidden bg-white dark:bg-gray-50 py-2 px-4 border-t border-gray-200">
      <button className="block w-full py-2 text-left text-gray-700 dark:text-gray-800 hover:text-blue-500">
        Components
      </button>
      <button className="block w-full py-2 text-left text-gray-700 dark:text-gray-800 hover:text-blue-500">
        Docs
      </button>
      <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full mt-2">
        Try Now
      </button>
    </div>
  </div>
</div>`,
preview:()=>(
  <div className="fixed top-0 left-0 w-full bg-white dark:bg-gray-50 shadow-md z-50">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        KAISEN
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <button className="text-gray-700 dark:text-gray-800 hover:text-blue-500 font-medium">
          Components
        </button>
        <button className="text-gray-700 dark:text-gray-800 hover:text-blue-500 font-medium">
          Docs
        </button>
        <button className="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full">
          Try Now
        </button>
      </div>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden p-2">
        <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
        <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
        <div className="w-6 h-0.5 bg-gray-700"></div>
      </button>
    </div>
    
    {/* Mobile Menu (hidden by default) */}
    <div className="md:hidden hidden bg-white dark:bg-gray-50 py-2 px-4 border-t border-gray-200">
      <button className="block w-full py-2 text-left text-gray-700 dark:text-gray-800 hover:text-blue-500">
        Components
      </button>
      <button className="block w-full py-2 text-left text-gray-700 dark:text-gray-800 hover:text-blue-500">
        Docs
      </button>
      <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full mt-2">
        Try Now
      </button>
    </div>
  </div>
</div>
)
    },
    {
      id:"Floating",
      name:"Floating Navbar",
      description:"A floating navbar",
      code:`<div className="fixed top-0 left-0 w-full bg-orange-400 dark:bg-orange-500 z-50">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-between py-4">
      <div className="text-3xl font-black text-white mb-4 md:mb-0">
        KAISEN<span className="text-orange-800">UI</span>
      </div>
      
      <div className="w-full md:w-auto">
        <div className="flex flex-wrap justify-center gap-2">
          <button className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm font-medium">
            Components
          </button>
          <button className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm font-medium">
            Templates
          </button>
          <button className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm font-medium">
            Docs
          </button>
          <button className="px-3 py-1.5 bg-orange-700 hover:bg-orange-800 text-white rounded-full text-sm font-medium">
            GitHub
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`,
preview:()=>(
  <div className="fixed top-0 left-0 w-full bg-orange-400 dark:bg-orange-500 z-50">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-between py-4">
      <div className="text-3xl font-black text-white mb-4 md:mb-0">
        KAISEN<span className="text-orange-800">UI</span>
      </div>
      
      <div className="w-full md:w-auto">
        <div className="flex flex-wrap justify-center gap-2">
          <button className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm font-medium">
            Components
          </button>
          <button className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm font-medium">
            Templates
          </button>
          <button className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm font-medium">
            Docs
          </button>
          <button className="px-3 py-1.5 bg-orange-700 hover:bg-orange-800 text-white rounded-full text-sm font-medium">
            GitHub
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
)
    }
  ]
  
}
export default sampleComponents;