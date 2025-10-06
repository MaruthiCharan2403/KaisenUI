
import React from "react";

const ReleaseCard = () => {
  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600"></div>
    <div className="pl-8 pr-6 py-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-3 w-3 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-[pulse_2s_infinite]"></div>
        <span className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">NEW RELEASE</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Kaisen v3.0</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">The most advanced version of our UI system yet - now with dark mode auto-detection</p>
      <div className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group-hover:border-indigo-300 dark:group-hover:border-indigo-600">
        Learn More
        <span className="ml-2 block h-3 w-3 rounded-sm bg-indigo-500 dark:bg-indigo-400 group-hover:animate-[spin_1s_linear_infinite] transition-transform"></span>
      </div>
    </div>
  </div>
  );
};

export default ReleaseCard;
