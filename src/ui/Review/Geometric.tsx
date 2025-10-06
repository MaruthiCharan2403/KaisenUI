
import React from "react";

const Geometric = () => {
  return (
    <div className="relative w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500 dark:bg-purple-600 rounded-bl-[80px]"></div>
    <div className="absolute bottom-0 left-0 w-16 h-16 bg-cyan-500 dark:bg-cyan-600 rounded-tr-[60px]"></div>
    
    <div className="relative z-10">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-pink-500 dark:bg-pink-600 flex items-center justify-center text-white font-bold text-xl">K</div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">Kaisen UI Framework</h3>
          <p className="text-sm text-pink-600 dark:text-pink-400">by Mia Johnson</p>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex mb-2">
          <span className="text-yellow-500 dark:text-yellow-400 text-xl">★★★★</span>
          <span className="text-gray-300 dark:text-gray-600 text-xl">★</span>
        </div>
        <p className="text-gray-700 dark:text-gray-300">The Kaisen UI components are revolutionary! They've completely transformed our design workflow and made our applications stand out.</p>
      </div>
      
      <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
        <span className="text-sm text-gray-500 dark:text-gray-400">Verified Purchase</span>
        <span className="text-sm text-purple-600 dark:text-purple-400">2 days ago</span>
      </div>
    </div>
  </div>
  );
};

export default Geometric;
