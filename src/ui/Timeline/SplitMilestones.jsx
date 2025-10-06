
import React from "react";

const SplitMilestones = () => {
  return (
    <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 transform -translate-x-1/2"></div>
        <div className="flex justify-between items-stretch mb-16">
          <div className="w-5/12 pr-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 relative">
              <div className="absolute -right-6 top-1/2 w-6 h-6 bg-amber-400 dark:bg-amber-600 rounded-full transform -translate-y-1/2 border-4 border-white dark:border-gray-900"></div>
              <p className="text-xs font-mono text-amber-500 dark:text-amber-400 mb-1">PHASE 1</p>
              <h3 className="text-xl font-bold dark:text-white">Foundation</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Core component library and design system established</p>
            </div>
          </div>
          <div className="w-5/12"></div> {/* Spacer */}
        </div>
        <div className="flex justify-between items-stretch mb-16">
          <div className="w-5/12"></div> {/* Spacer */}
          <div className="w-5/12 pl-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 relative">
              <div className="absolute -left-6 top-1/2 w-6 h-6 bg-blue-400 dark:bg-blue-600 rounded-full transform -translate-y-1/2 border-4 border-white dark:border-gray-900"></div>
              <p className="text-xs font-mono text-blue-500 dark:text-blue-400 mb-1">PHASE 2</p>
              <h3 className="text-xl font-bold dark:text-white">Expansion</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Added 50+ new components and utilities</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-stretch">
          <div className="w-5/12 pr-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 relative">
              <div className="absolute -right-6 top-1/2 w-6 h-6 bg-purple-400 dark:bg-purple-600 rounded-full transform -translate-y-1/2 border-4 border-white dark:border-gray-900"></div>
              <p className="text-xs font-mono text-purple-500 dark:text-purple-400 mb-1">PHASE 3</p>
              <h3 className="text-xl font-bold dark:text-white">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">AI-powered component generation</p>
            </div>
          </div>
          <div className="w-5/12"></div> {/* Spacer */}
        </div>
      </div>
  );
};

export default SplitMilestones;
