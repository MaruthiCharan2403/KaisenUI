
import React from "react";

const Blinking = () => {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-xl">
  <div className="flex justify-center space-x-3 mb-8">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="relative">
        <input
          type="text"
          maxLength="1"
          className="w-14 h-14 text-4xl text-center rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-indigo-400/30 dark:border-indigo-600/30 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none"
        />
        <div className="absolute bottom-0 left-1/2 h-1 w-6 bg-indigo-500 dark:bg-indigo-400 transform -translate-x-1/2 animate-pulse"></div>
      </div>
    ))}
  </div>
  <button className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 text-white font-bold hover:shadow-lg transition-all">
    Confirm OTP
  </button>
</div>
  );
};

export default Blinking;
