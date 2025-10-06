
import React from "react";

const GridGallery = () => {
  return (
    <div className="w-full h-[70vh] grid grid-cols-3 grid-rows-2 gap-4 rounded-3xl overflow-hidden">
    <div className="row-span-2 col-span-2 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 flex items-center justify-center hover:scale-[1.02] transition-transform duration-500">
      <span className="text-6xl font-bold text-white/90">KAISEN</span>
    </div>
    <div className="bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700 hover:scale-105 transition-transform duration-300"></div>
    <div className="bg-gradient-to-br from-pink-400 to-rose-500 dark:from-pink-600 dark:to-rose-700 hover:scale-105 transition-transform duration-300"></div>
    <div className="bg-gradient-to-br from-amber-400 to-orange-500 dark:from-amber-600 dark:to-orange-700 hover:scale-105 transition-transform duration-300"></div>
    <div className="bg-gradient-to-br from-green-400 to-emerald-500 dark:from-green-600 dark:to-emerald-700 hover:scale-105 transition-transform duration-300"></div>
    <div className="absolute bottom-8 right-8 flex gap-3">
      <div className="w-4 h-4 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-indigo-400 dark:border-indigo-600 cursor-pointer hover:scale-125 transition-transform"></div>
      <div className="w-4 h-4 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-indigo-400 dark:border-indigo-600 cursor-pointer hover:scale-125 transition-transform"></div>
      <div className="w-4 h-4 rounded-full bg-indigo-500 dark:bg-indigo-400 border-2 border-white dark:border-gray-900 cursor-pointer hover:scale-125 transition-transform"></div>
      <div className="w-4 h-4 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-indigo-400 dark:border-indigo-600 cursor-pointer hover:scale-125 transition-transform"></div>
    </div>
  </div>
  );
};

export default GridGallery;
