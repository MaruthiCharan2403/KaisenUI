
import React from "react";

const Color = () => {
  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-br from-indigo-100/50 to-purple-100/50 dark:from-indigo-900/20 dark:to-purple-900/20">
  <div className="grid grid-cols-6 gap-2 mb-6">
    {[...Array(6)].map((_, i) => (
      <input
        key={i}
        type="text"
        maxLength="1"
        className={`h-12 text-2xl text-center rounded-lg border-2 bg-white/90 dark:bg-gray-800/90 ${i % 2 === 0 ? 'border-indigo-300 dark:border-indigo-700 focus:border-indigo-500 dark:focus:border-indigo-400' : 'border-purple-300 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400'} focus:outline-none focus:ring-2 ${i % 2 === 0 ? 'focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20' : 'focus:ring-purple-500/20 dark:focus:ring-purple-400/20'}`}
      />
    ))}
  </div>
  <div className="flex justify-center space-x-4">
    <button className="px-6 py-2 rounded-full bg-indigo-600/10 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600/20 dark:hover:bg-indigo-600/30 transition-colors">
      Resend Code
    </button>
    <button className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white hover:shadow-lg transition-all">
      Verify
    </button>
  </div>
</div>
  );
};

export default Color;
