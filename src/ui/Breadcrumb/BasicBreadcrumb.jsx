
import React from "react";

const BasicBreadcrumb = () => {
  return (
    <div className="flex items-center space-x-2 text-sm">  
    <a href="#" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">Kaisen UI</a>  
    <span className="text-gray-400 dark:text-gray-500">/</span>  
    <a href="#" className="font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Docs</a>  
    <span className="text-gray-400 dark:text-gray-500">/</span>  
    <a href="#" className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">Components</a>  
    <span className="text-gray-400 dark:text-gray-500">/</span>  
    <span className="font-semibold text-gray-900 dark:text-white">Breadcrumb</span>  
  </div>  
  );
};

export default BasicBreadcrumb;
