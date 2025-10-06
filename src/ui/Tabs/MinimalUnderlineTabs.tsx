
import React from "react";

const MinimalUnderlineTabs = () => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
    <div className="flex space-x-8">
      <button className="pb-3 px-1 border-b-2 border-amber-500 dark:border-amber-600 text-sm font-medium dark:text-white">
        Kaisen UI
      </button>
      <button className="pb-3 px-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
        Components
      </button>
      <button className="pb-3 px-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
        Docs
      </button>
    </div>
  </div>
  );
};

export default MinimalUnderlineTabs;
