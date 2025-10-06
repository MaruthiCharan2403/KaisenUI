
import React from "react";

const BasicTestimonial = () => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 max-w-md">
    <div className="h-3 w-16 bg-gradient-to-r from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700 mb-4"></div>
    <p className="text-gray-700 dark:text-gray-300 italic mb-6">"Kaisen UI transformed our workflow. The components are so intuitive that our team adopted them instantly."</p>
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
      <div>
        <p className="font-medium dark:text-white">Alex Rivera</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">CTO, TechCorp</p>
      </div>
    </div>
  </div>
  );
};

export default BasicTestimonial;
