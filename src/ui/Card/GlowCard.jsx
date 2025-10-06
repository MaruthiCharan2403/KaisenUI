
import React from "react";

const GlowCard = () => {
  return (
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
  );
};

export default GlowCard;
