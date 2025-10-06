
import React from "react";

const OffsetBlocks = () => {
  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-16 bg-teal-500 dark:bg-teal-600"></div>
      <div className="relative pt-6 px-6">
        <div className="w-16 h-16 bg-orange-500 dark:bg-orange-600 rounded-lg mt-4 flex items-center justify-center text-white font-bold text-2xl">KU</div>
      </div>
    </div>
    
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">Exceptional Design System</h3>
          <p className="text-sm text-teal-600 dark:text-teal-400">by Alex Rivera</p>
        </div>
        <div className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 text-xs rounded-full">Top Reviewer</div>
      </div>
      
      <div className="mb-4">
        <div className="flex space-x-1 mb-2">
          <div className="w-6 h-6 bg-yellow-500 dark:bg-yellow-600 rounded-sm"></div>
          <div className="w-6 h-6 bg-yellow-500 dark:bg-yellow-600 rounded-sm"></div>
          <div className="w-6 h-6 bg-yellow-500 dark:bg-yellow-600 rounded-sm"></div>
          <div className="w-6 h-6 bg-yellow-500 dark:bg-yellow-600 rounded-sm"></div>
          <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
        </div>
        <p className="text-gray-700 dark:text-gray-300">Kaisen UI has become our go-to for all projects. The attention to detail and the innovative approach to component design is unmatched in the industry.</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 text-xs rounded-full">Components</span>
        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 text-xs rounded-full">Design System</span>
        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded-full">Accessibility</span>
      </div>
      
      <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-500 dark:bg-green-600 rounded-full mr-2"></div>
          <span className="text-sm text-gray-500 dark:text-gray-400">Verified</span>
        </div>
        <span className="text-sm text-teal-600 dark:text-teal-400">March 15, 2025</span>
      </div>
    </div>
  </div>
  );
};

export default OffsetBlocks;
