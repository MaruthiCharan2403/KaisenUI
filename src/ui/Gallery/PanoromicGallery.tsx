
import React from "react";

const PanoromicGallery = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden rounded-3xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 border-2 border-purple-200 dark:border-purple-900/30 shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-700 dark:to-indigo-800 flex items-center justify-center">
      <span className="text-5xl font-bold text-white/80">KAISEN UI SHOWCASE</span>
    </div>
    <div className="absolute bottom-8 left-8 right-8 grid grid-cols-4 gap-4 h-[30%]">
      <div className="bg-gradient-to-br from-amber-400 to-pink-500 dark:from-amber-600 dark:to-pink-700 rounded-xl hover:scale-110 transition-transform"></div>
      <div className="bg-gradient-to-br from-emerald-400 to-cyan-500 dark:from-emerald-600 dark:to-cyan-700 rounded-xl hover:scale-110 transition-transform"></div>
      <div className="bg-gradient-to-br from-rose-400 to-fuchsia-500 dark:from-rose-600 dark:to-fuchsia-700 rounded-xl hover:scale-110 transition-transform"></div>
      <div className="bg-gradient-to-br from-blue-400 to-violet-500 dark:from-blue-600 dark:to-violet-700 rounded-xl hover:scale-110 transition-transform"></div>
    </div>
    
  </div>
  );
};

export default PanoromicGallery;
