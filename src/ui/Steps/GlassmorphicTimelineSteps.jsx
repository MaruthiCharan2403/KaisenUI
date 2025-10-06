
import React from "react";

const GlassmorphicTimelineSteps = () => {
  return (
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
          <p className="text-gray-600 dark:text-gray-400">Build beautiful interfaces with our carefully crafted components</p>
          <button className="mt-6 px-6 py-2 bg-amber-500 dark:bg-amber-600 text-white rounded-lg hover:bg-amber-600 dark:hover:bg-amber-700 transition-colors">Get Started</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default GlassmorphicTimelineSteps;
