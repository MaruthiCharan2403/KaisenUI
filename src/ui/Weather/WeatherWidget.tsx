
import React from "react";

const WeatherWidget = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl w-60">
    <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Kaisen UI</p>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-5xl font-light dark:text-white">18°</p>
        <p className="text-gray-600 dark:text-gray-300">Cloudy</p>
      </div>
      <div className="h-16 w-16 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-500 dark:to-gray-700 rounded-full"></div>
    </div>
    <div className="mt-3 h-px bg-gray-200 dark:bg-gray-700"></div>
    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Precipitation: 10%</p>
  </div>
  );
};

export default WeatherWidget;
