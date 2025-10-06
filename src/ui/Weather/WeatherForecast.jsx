
import React from "react";

const WeatherForecast = () => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 w-full max-w-md overflow-hidden">
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">3-Day Forecast • Kaisen UI</p>
    <div className="flex gap-4">
      <div className="flex-1 text-center">
        <p className="font-medium dark:text-white">Mon</p>
        <div className="h-10 w-10 mx-auto my-2 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-400 dark:to-blue-600 rounded-full"></div>
        <p className="text-sm dark:text-gray-300">22° / 14°</p>
      </div>
      <div className="flex-1 text-center">
        <p className="font-medium dark:text-white">Tue</p>
        <div className="h-10 w-10 mx-auto my-2 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-400 dark:to-gray-600 rounded-full"></div>
        <p className="text-sm dark:text-gray-300">19° / 12°</p>
      </div>
      <div className="flex-1 text-center">
        <p className="font-medium dark:text-white">Wed</p>
        <div className="h-10 w-10 mx-auto my-2 bg-gradient-to-br from-amber-100 to-amber-300 dark:from-amber-400 dark:to-amber-600 rounded-full"></div>
        <p className="text-sm dark:text-gray-300">26° / 18°</p>
      </div>
    </div>
  </div>
  );
};

export default WeatherForecast;
