
import React from "react";

const VerticalBorderTabs = () => {
  return (
    <div className="flex">
    <div className="flex flex-col border-r border-gray-200 dark:border-gray-700 pr-4">
      <button className="py-2 px-4 text-left border-l-2 border-amber-500 dark:border-amber-600 text-sm font-medium dark:text-white">
        Introduction
      </button>
      <button className="py-2 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
        Kaisen UI
      </button>
      <button className="py-2 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
        Installation
      </button>
    </div>
    <div className="flex-1 pl-4">
      <p className="text-sm text-gray-600 dark:text-gray-300">Select a tab to view content</p>
    </div>
  </div>
  );
};

export default VerticalBorderTabs;
