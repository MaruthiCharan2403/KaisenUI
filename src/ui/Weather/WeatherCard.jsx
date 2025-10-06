
import React from "react";

const WeatherCard = () => {
  return (
    <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 w-64 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Kaisen UI Weather</p>
        <h3 className="text-2xl font-semibold dark:text-white">24°C</h3>
        <p className="text-gray-700 dark:text-gray-300">Sunny</p>
      </div>
      <div className="h-12 w-12 bg-gradient-to-br from-amber-200 to-amber-400 dark:from-amber-400 dark:to-amber-600 rounded-full"></div>
    </div>
    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
      <p className="text-xs text-gray-500 dark:text-gray-400">Powered by Kaisen UI</p>
    </div>
  </div>
  );
};

export default WeatherCard;
