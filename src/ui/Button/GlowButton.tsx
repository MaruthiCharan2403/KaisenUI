
import React from "react";

const GlowButton = () => {
  return (
    <div className="relative group">
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 animate-[pulse_2s_infinite]"></div>
    <button className="relative px-6 py-3 bg-white dark:bg-gray-900 rounded-lg font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 group-hover:border-transparent transition-all duration-300 group-hover:text-white group-hover:bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 shadow-lg group-hover:shadow-indigo-500/20">
      Kaisen Mode
    </button>
  </div>
  );
};

export default GlowButton;
