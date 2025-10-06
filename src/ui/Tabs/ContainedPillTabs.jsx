
import React from "react";

const ContainedPillTabs = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1 inline-flex">
    <button className="px-4 py-2 text-sm font-medium rounded-full bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white">
      Overview
    </button>
    <button className="px-4 py-2 text-sm font-medium rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
      Kaisen UI
    </button>
    <button className="px-4 py-2 text-sm font-medium rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
      Features
    </button>
  </div>
  );
};

export default ContainedPillTabs;
