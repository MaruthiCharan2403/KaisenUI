
import React from "react";

const MinimalistCardSteps = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
      <div className="w-10 h-10 rounded-full bg-amber-400 dark:bg-amber-600 flex items-center justify-center text-sm font-bold text-white mb-4">1</div>
      <h3 className="text-lg font-medium dark:text-white">Get Started</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">Install Kaisen UI package via npm or yarn</p>
    </div>
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
      <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-400 mb-4">2</div>
      <h3 className="text-lg font-medium dark:text-white">Import</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">Add components to your project</p>
    </div>
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
      <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-400 mb-4">3</div>
      <h3 className="text-lg font-medium dark:text-white">Build</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">Create amazing interfaces faster</p>
    </div>
  </div>
  );
};

export default MinimalistCardSteps;
