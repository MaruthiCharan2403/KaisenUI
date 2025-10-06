
import React from "react";

const PricingBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-500 to-purple-400 dark:from-purple-700 dark:to-purple-500 w-full p-6 flex flex-col sm:flex-row items-center justify-between rounded-lg overflow-hidden shadow-lg border border-purple-300/30 dark:border-purple-600/30">      
        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -top-8 -left-8 w-40 h-40 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>
        <div className="text-left z-10 transform -rotate-1">
          <h2 className="text-4xl font-black text-white drop-shadow-sm">Up to 50% Off</h2>
        </div>
        <div className="text-white text-lg font-medium my-3 sm:my-0 mx-4 z-10 flex items-center">
          <div className="inline-block mr-2 w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
          Plus free shipping! Use code: 
          <span className="ml-2 font-mono font-bold bg-white/20 backdrop-blur-sm px-3 py-1 rounded border-b-2 border-white/30">KAISEN50</span>
        </div>
        <div className="z-10">
          <button className="relative group bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-300 px-8 py-2.5 rounded-lg font-semibold overflow-hidden">
            <span className="relative z-10">Shop Now</span>
            <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-500 dark:to-pink-500 transition-all duration-300 group-hover:w-full"></div>
            <div className="absolute inset-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0 bg-white/20 dark:bg-white/10 blur-xl"></div>
          </button>
        </div>
      </div>
  );
};

export default PricingBanner;
