
import React from "react";

const ColorWave = () => {
  return (
    <div className="flex items-center justify-center space-x-1 gap-2">
    <div className="px-4 py-2 rounded-lg bg-indigo-500/10 dark:bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 font-medium border border-indigo-400/30 dark:border-indigo-600/30 hover:bg-indigo-500/20 dark:hover:bg-indigo-600/20 transition-all">
      Prev
    </div>
    <div className="flex items-center space-x-1 gap-2">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-600/20 dark:to-purple-600/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-medium hover:bg-gradient-to-br from-indigo-500/30 to-purple-500/30 dark:hover:from-indigo-600/30 dark:hover:to-purple-600/30 transition-all">
        1
      </div>
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500/20 to-rose-500/20 dark:from-pink-600/20 dark:to-rose-600/20 flex items-center justify-center text-pink-600 dark:text-pink-400 font-medium hover:bg-gradient-to-br from-pink-500/30 to-rose-500/30 dark:hover:from-pink-600/30 dark:hover:to-rose-600/30 transition-all">
        2
      </div>
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-600/20 dark:to-blue-600/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-medium hover:bg-gradient-to-br from-cyan-500/30 to-blue-500/30 dark:hover:from-cyan-600/30 dark:hover:to-blue-600/30 transition-all">
        3
      </div>
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20 dark:shadow-indigo-600/30">
        4
      </div>
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 dark:from-amber-600/20 dark:to-orange-600/20 flex items-center justify-center text-amber-600 dark:text-amber-400 font-medium hover:bg-gradient-to-br from-amber-500/30 to-orange-500/30 dark:hover:from-amber-600/30 dark:hover:to-orange-600/30 transition-all">
        5
      </div>
    </div>
    <div className="px-4 py-2 rounded-lg bg-indigo-500/10 dark:bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 font-medium border border-indigo-400/30 dark:border-indigo-600/30 hover:bg-indigo-500/20 dark:hover:bg-indigo-600/20 transition-all">
      Next
    </div>
  </div>
  );
};

export default ColorWave;
