
import React from "react";

const BasicBlog = () => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
    <div className="h-48 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50"></div>
    <div className="p-6">
      <div className="flex gap-2 mb-4">
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">Kaisen UI</span>
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">Tutorial</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Mastering Component Composition</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">Learn how to combine Kaisen UI components like atomic particles to create stunning interfaces with minimal effort.</p>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
        <span>May 15, 2025</span>
        <span className="mx-2">•</span>
        <span>5 min read</span>
      </div>
    </div>
  </div>
  );
};

export default BasicBlog;
