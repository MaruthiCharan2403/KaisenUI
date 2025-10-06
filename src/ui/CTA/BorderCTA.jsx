
import React from "react";

const BorderCTA = () => {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900/50 rounded-xl p-8 border border-gray-200 dark:border-gray-800 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-5 hover:opacity-10 transition-opacity duration-500"></div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Join the UI Revolution</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-6">10,000+ developers trust Kaisen for production-grade interfaces</p>
    <button className="px-6 py-2.5 font-medium bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 hover:border-indigo-500 dark:hover:border-indigo-400 relative overflow-hidden">
      <span className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 -skew-x-12"></span>
      <span className="relative">Get Started</span>
    </button>
  </div>
  );
};

export default BorderCTA;
