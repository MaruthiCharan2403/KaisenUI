
import React from "react";

const ColorMatrix = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20">
    <div className="container mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            Why Kaisen UI?
          </h2>
          <p className="text-lg text-cyan-900/80 dark:text-cyan-100/80 mb-8">
            Experience the future of React components with our zero-runtime atomic CSS system.
          </p>
          
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-cyan-200 dark:border-cyan-800/50">
              <h3 className="text-xl font-semibold text-cyan-700 dark:text-cyan-400 mb-2">40% Faster Rendering</h3>
              <p className="text-cyan-900/70 dark:text-cyan-100/70">Compiles to pure CSS during build</p>
            </div>
            
            <div className="p-5 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/50">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">Automatic Dark Mode</h3>
              <p className="text-blue-900/70 dark:text-blue-100/70">System preference detection</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700"></div>
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 dark:from-pink-600 dark:to-rose-700"></div>
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 dark:from-amber-600 dark:to-orange-700"></div>
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 dark:from-purple-600 dark:to-indigo-700"></div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ColorMatrix;
