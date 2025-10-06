
import React from "react";

const GroupAvatar = () => {
  return (
    <div className="flex -space-x-3">
    <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:z-10 hover:scale-110 transition-transform duration-200">KU</div>
    <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-indigo-600 dark:text-indigo-300 hover:z-10 hover:scale-110 transition-transform duration-200">KS</div>
    <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-purple-600 dark:text-purple-300 hover:z-10 hover:scale-110 transition-transform duration-200">EN</div>
    <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-200 hover:z-10 hover:scale-110 transition-transform duration-200">+3</div>
  </div>
  );
};

export default GroupAvatar;
