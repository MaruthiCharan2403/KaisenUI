
import React from "react";

const FeaturedBlog = () => {
  return (
    <div className="relative isolate">
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl transform group-hover:scale-[1.01] transition-transform duration-300"></div>
    <div className="p-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">Why Kaisen UI is the Future of React Development</h2>
      <div className="flex items-start gap-8">
        <div className="flex-1">
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-400 mb-6">Discover how Kaisen UI's zero-runtime approach eliminates bundle bloat while delivering stunning visual results through our atomic design system.</p>
          <div className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Continue Reading
            <span className="ml-2 w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          </div>
        </div>
        <div className="hidden md:block w-32 h-32 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50"></div>
      </div>
    </div>
  </div>
  );
};

export default FeaturedBlog;
