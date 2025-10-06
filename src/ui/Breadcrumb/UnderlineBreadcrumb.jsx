
import React from "react";

const UnderlineBreadcrumb = () => {
  return (
    <div className="flex items-center gap-2">  
    <a href="#" className="relative px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">  
      <span>Kaisen UI</span>  
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 hover:w-full"></span>  
    </a>  
    <span className="text-gray-400 dark:text-gray-500">›</span>  
    <a href="#" className="relative px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">  
      <span>Blog</span>  
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 hover:w-full"></span>  
    </a>  
    <span className="text-gray-400 dark:text-gray-500">›</span>  
    <span className="px-2 py-1 font-semibold text-gray-900 dark:text-white">Breadcrumbs</span>  
  </div>  
  );
};

export default UnderlineBreadcrumb;
