
import React from "react";

const TeamProfileHighlight = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
    <div className="h-32 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900"></div>
    <div className="px-6 pb-6 -mt-12">
      <div className="h-24 w-24 bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700 rounded-full border-4 border-white dark:border-gray-800 mx-auto"></div>
      <div className="text-center mt-4">
        <h3 className="text-xl font-medium dark:text-white">Riley Jones</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Creator of Kaisen UI</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">Building tools that make development faster and more enjoyable</p>
      </div>
    </div>
  </div>
  );
};

export default TeamProfileHighlight;
