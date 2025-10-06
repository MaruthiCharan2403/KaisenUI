
import React from "react";

const BlogPost = () => {
  return (
    <div className="py-6 border-b border-gray-200 dark:border-gray-800 group">
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-24 h-24 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden"></div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Advanced Theming in Kaisen UI</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400 line-clamp-2">Deep dive into our theming system that adapts to both light and dark modes while maintaining perfect contrast ratios.</p>
        <div className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-500">
          <span>June 2, 2025</span>
          <span className="mx-2">•</span>
          <span>Kaisen UI Team</span>
          <span className="mx-2">•</span>
          <span>7 min read</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BlogPost;
