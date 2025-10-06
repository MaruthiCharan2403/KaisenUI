
import React from "react";

const MediaTimeline = () => {
  return (
    <div className="space-y-12">
        <div className="flex flex-col md:flex-row gap-6 group">
          <div className="md:w-1/3 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 md:hidden"></div>
            <div className="w-8 h-8 rounded-full bg-amber-400 dark:bg-amber-600 flex items-center justify-center text-white font-bold absolute left-0 top-4 z-10">1</div>
            <div className="h-48 md:h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-xl overflow-hidden shadow-md">
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800">
              <p className="text-sm text-amber-500 dark:text-amber-400 mb-1">2025</p>
              <h3 className="text-xl font-bold dark:text-white">Kaisen UI Born</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">The initial concept for a revolutionary UI kit was created during a hackathon</p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200">Milestone</span>
              </div>
            </div>
          </div>
        <div className="flex flex-col md:flex-row gap-6 group">
          <div className="md:w-1/3 relative md:order-last">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 md:hidden"></div>
            <div className="w-8 h-8 rounded-full bg-blue-400 dark:bg-blue-600 flex items-center justify-center text-white font-bold absolute left-0 top-4 z-10">2</div>
            <div className="h-48 md:h-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900 rounded-xl overflow-hidden shadow-md">
            </div>
          </div>
          <div className="md:w-2/3 md:order-first">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800">
              <p className="text-sm text-blue-500 dark:text-blue-400 mb-1">2024</p>
              <h3 className="text-xl font-bold dark:text-white">Version 2.0</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Complete redesign with adaptive dark mode and performance improvements</p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">Released</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default MediaTimeline;
