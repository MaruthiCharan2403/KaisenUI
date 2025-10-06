
import React from "react";

const GradientHero = () => {
  return (
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
  );
};

export default GradientHero;
