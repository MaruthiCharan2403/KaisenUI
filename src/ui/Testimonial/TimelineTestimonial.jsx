
import React from "react";

const TimelineTestimonial = () => {
  return (
    <div className="relative pl-8">
    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-gray-300 dark:from-amber-600 dark:to-gray-700"></div>
    <div className="pb-8">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
        <p className="text-gray-700 dark:text-gray-300 mb-4">"Kaisen UI's documentation is the best I've seen. We onboarded 15 developers in a week thanks to their clear examples."</p>
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          <div>
            <p className="text-sm font-medium dark:text-white">Jamie Chen</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Engineering Manager</p>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 pl-6">Kaisen UI Case Study</p>
    </div>
  </div>
  );
};

export default TimelineTestimonial;
