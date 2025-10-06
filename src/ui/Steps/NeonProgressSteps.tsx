
import React from "react";

const NeonProgressSteps = () => {
  return (
    <div className="relative h-64 w-full">
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800">
      <div className="h-full bg-gradient-to-r from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700" style={{width: '33%'}}></div>
    </div>
    <div className="absolute -bottom-2 left-[30%] w-6 h-6 rounded-full bg-amber-400 dark:bg-amber-600 border-4 border-white dark:border-gray-900 shadow-lg"></div>
    <div className="flex h-full">
      <div className="w-1/3 p-6 flex flex-col justify-end">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-800">
          <h3 className="font-medium dark:text-white">Step 1</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Install Kaisen UI</p>
        </div>
      </div>
      <div className="w-1/3 p-6 flex flex-col justify-end">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-800 opacity-70">
          <h3 className="font-medium dark:text-white/80">Step 2</h3>
          <p className="text-sm text-gray-600/80 dark:text-gray-400/80 mt-1">Import Components</p>
        </div>
      </div>
      <div className="w-1/3 p-6 flex flex-col justify-end">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-800 opacity-40">
          <h3 className="font-medium dark:text-white/60">Step 3</h3>
          <p className="text-sm text-gray-600/60 dark:text-gray-400/60 mt-1">Build Your App</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default NeonProgressSteps;
