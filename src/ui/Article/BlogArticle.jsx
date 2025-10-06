
import React from "react";

const BlogArticle = () => {
  return (
    <div className="group relative max-w-2xl mx-auto bg-white dark:bg-gray-900 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700"></div>
    <div className="pl-8 pr-6 py-6">
      <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/50 rounded-full uppercase">
        Kaisen Component
      </span>
      <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-indigo-600 to-purple-600">
        Building Modern UIs with Kaisen
      </h2>
      <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
        <span>Published on May 15, 2025</span>
        <span>•</span>
        <span>5 min read</span>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
        Discover how Kaisen UI revolutionizes your workflow with atomic design principles and zero-runtime CSS. Our library provides the perfect balance between customization and convenience for React developers.
      </p>
      <div className="mt-6">
        <a href="#" className="inline-flex items-center font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
          <span>Read more</span>
          <span className="ml-1.5 block w-0 group-hover:w-4 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300"></span>
        </a>
      </div>
    </div>
    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,gray_1px,transparent_1px),linear-gradient(to_bottom,gray_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,gray_1px,transparent_1px),linear-gradient(to_bottom,gray_1px,transparent_1px)]"></div>
    </div>
  </div>
  );
};

export default BlogArticle;
