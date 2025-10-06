
import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative p-6 bg-white dark:bg-gray-900 rounded-lg group">
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 p-0.5 -z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-lg animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-20 transition-opacity"></div>
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Why Kaisen UI?</h3>
    <p className="mt-2 text-gray-600 dark:text-gray-300">Experience the perfect blend of customization and performance with our atomic design system.</p>
    <div className="mt-4 inline-block px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Explore Components</div>
  </div>
  );
};

export default HeroBanner;
