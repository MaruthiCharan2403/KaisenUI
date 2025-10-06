
import React from "react";

const SplitTestimonial = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
    <div className="md:w-1/3 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900 p-8 flex items-center justify-center">
      <p className="text-5xl font-light text-gray-400 dark:text-gray-500">"</p>
    </div>
    <div className="md:w-2/3 p-8">
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Using Kaisen UI cut our development time in half. The clean design system requires zero customization.</p>
      <div>
        <p className="font-medium dark:text-white">Samira Khan</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Lead Designer, Creative Labs</p>
      </div>
    </div>
  </div>
  );
};

export default SplitTestimonial;
