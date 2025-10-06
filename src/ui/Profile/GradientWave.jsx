
import React from "react";

const GradientWave = () => {
  return (
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
  );
};

export default GradientWave;
