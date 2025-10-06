
import React from "react";

const Light = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 border-t border-indigo-100 dark:border-gray-700">
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">Kaisen UI</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Build faster with atomic components</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Components</h4>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Buttons</a></li>
          <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Cards</a></li>
          <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Forms</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Resources</h4>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Docs</a></li>
          <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Templates</a></li>
          <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Blog</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Connect</h4>
        <div className="flex space-x-4">
          <a href="#" className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800">T</a>
          <a href="#" className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800">G</a>
          <a href="#" className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center text-pink-600 dark:text-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800">D</a>
        </div>
      </div>
    </div>
    <div className="mt-12 pt-8 border-t border-indigo-100 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-500 text-center">
      © 2025 Kaisen UI. All rights reserved.
    </div>
  </div>
</div>
  );
};

export default Light;
