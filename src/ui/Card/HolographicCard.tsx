
import React from "react";

const HolographicCard = () => {
  return (
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
  );
};

export default HolographicCard;
