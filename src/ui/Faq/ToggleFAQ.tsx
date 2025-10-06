
import React from "react";

const ToggleFAQ = () => {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 p-8 shadow-inner border border-cyan-100 dark:border-cyan-900/50">
    <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">Developer Questions</h2>
    
    <div className="space-y-3">
      <div className="group rounded-lg overflow-hidden">
        <div className="px-5 py-3.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-cyan-200 dark:border-cyan-800/50 rounded-lg cursor-pointer hover:shadow-md transition-shadow">
          <h3 className="font-medium text-cyan-800 dark:text-cyan-200 flex items-center">
            <span className="w-3 h-3 rounded-full bg-cyan-500 dark:bg-cyan-400 mr-3 group-hover:animate-pulse"></span>
            What makes Kaisen UI different?
          </h3>
          <div className="mt-2 text-cyan-700/80 dark:text-cyan-300/80 pl-6">
            Our atomic CSS approach eliminates runtime overhead while providing design flexibility that adapts to your brand.
          </div>
        </div>
      </div>
      
      <div className="group rounded-lg overflow-hidden">
        <div className="px-5 py-3.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-cyan-200 dark:border-cyan-800/50 rounded-lg cursor-pointer hover:shadow-md transition-shadow">
          <h3 className="font-medium text-cyan-800 dark:text-cyan-200 flex items-center">
            <span className="w-3 h-3 rounded-full bg-cyan-500 dark:bg-cyan-400 mr-3 group-hover:animate-pulse"></span>
            How customizable are the components?
          </h3>
          <div className="mt-2 text-cyan-700/80 dark:text-cyan-300/80 pl-6">
            Every component is built with customization hooks and CSS variables for complete control without sacrificing performance.
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ToggleFAQ;
