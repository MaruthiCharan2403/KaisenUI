
import React from "react";

const Holographic = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
  <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
    Verify Your Identity
  </div>
  <div className="flex space-x-4">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="relative">
        <input
          type="text"
          maxLength="1"
          className="w-12 h-16 text-3xl text-center rounded-xl bg-white/80 dark:bg-gray-800/80 border-2 border-indigo-300 dark:border-indigo-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20"
        />
        <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent group-hover:border-indigo-400/30 dark:group-hover:border-indigo-600/30"></div>
      </div>
    ))}
  </div>
  <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white font-medium shadow-lg hover:shadow-indigo-500/30 dark:hover:shadow-purple-700/30 transition-all">
    Verify Code
  </button>
</div>
  );
};

export default Holographic;
