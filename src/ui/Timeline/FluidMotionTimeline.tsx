
import React from "react";

const FluidMotionTimeline = () => {
  return (
    <div className="relative">
        <svg className="absolute left-6 top-0 h-full w-4" viewBox="0 0 10 100" preserveAspectRatio="none">
          <path 
            d="M5 0 Q10 25 5 50 T10 100" 
            stroke="url(#gradient)" 
            strokeWidth="2" 
            fill="none" 
            strokeDasharray="5 3"
            className="animate-[dash_10s_linear_infinite]"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
        <div className="space-y-16 pl-20">
          <div className="relative">
            <div className="absolute -left-16 top-0 w-12 h-12 rounded-3xl bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-600 dark:to-amber-800 flex items-center justify-center shadow-lg transform rotate-12">
              <div className="w-8 h-8 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold">1</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-800/50">
              <h3 className="text-xl font-bold dark:text-white mb-2">Genesis</h3>
              <p className="text-gray-600 dark:text-gray-400">Kaisen UI conceptualized as a design system for the metaverse era</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-16 top-0 w-12 h-12 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 flex items-center justify-center shadow-lg transform -rotate-12">
              <div className="w-8 h-8 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold">2</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-800/50">
              <h3 className="text-xl font-bold dark:text-white mb-2">Evolution</h3>
              <p className="text-gray-600 dark:text-gray-400">Adaptive components that learn from user interactions</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FluidMotionTimeline;
