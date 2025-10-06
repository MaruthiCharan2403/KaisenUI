
import React from "react";

const HexagonalProfile = () => {
  return (
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
  );
};

export default HexagonalProfile;
