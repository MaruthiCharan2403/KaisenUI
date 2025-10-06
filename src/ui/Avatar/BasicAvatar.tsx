
import React from "react";

const BasicAvatar = () => {
  return (
    <div className="relative inline-block">
    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-300 to-purple-400 dark:from-indigo-500 dark:to-purple-600 overflow-hidden border-2 border-white dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-white">KU</span>
      </div>
    </div>
    <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-white dark:border-gray-800 bg-emerald-400 dark:bg-emerald-500"></div>
    <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-white dark:border-gray-800 animate-ping bg-emerald-400 dark:bg-emerald-500 opacity-75"></div>
  </div>
  );
};

export default BasicAvatar;
