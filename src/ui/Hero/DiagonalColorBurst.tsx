
import React from "react";

const DiagonalColorBurst = () => {
  return (
    
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
  </div>
  );
};

export default DiagonalColorBurst;
