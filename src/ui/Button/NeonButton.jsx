
import React from "react";

const NeonButton = () => {
  return (
    <button className="relative px-6 py-3 font-medium text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-900 rounded-lg overflow-hidden transition-all duration-500 hover:text-white">
    <span className="relative z-10">Activate UI</span>
    <div className="absolute inset-0 border-2 border-indigo-400 dark:border-indigo-500 rounded-lg opacity-70 hover:opacity-100 hover:animate-[spin_3s_linear_infinite]"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
  </button>
  );
};

export default NeonButton;
