
import React from "react";

const Accordion = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-8 shadow-lg border border-indigo-100 dark:border-indigo-900/50">
    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/40 dark:bg-indigo-800/30 rounded-full filter blur-xl"></div>
    <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">Kaisen UI FAQ</h2>
    
    <div className="space-y-4">
      <div className="group overflow-hidden rounded-xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900/30">
        <div className="px-5 py-4 flex justify-between items-center cursor-pointer">
          <h3 className="font-medium text-indigo-700 dark:text-indigo-300">How does Kaisen UI compare to other libraries?</h3>
          <div className="w-5 h-5 relative">
            <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-indigo-500 dark:bg-indigo-400 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-0.5 h-3 bg-indigo-500 dark:bg-indigo-400 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity"></div>
          </div>
        </div>
        <div className="px-5 pb-4 text-indigo-900/80 dark:text-indigo-100/80">
          Kaisen UI uses atomic design principles with zero-runtime CSS, making it 40% faster than traditional component libraries while maintaining full customization.
        </div>
      </div>
      
      <div className="group overflow-hidden rounded-xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900/30">
        <div className="px-5 py-4 flex justify-between items-center cursor-pointer">
          <h3 className="font-medium text-indigo-700 dark:text-indigo-300">Is dark mode supported out of the box?</h3>
          <div className="w-5 h-5 relative">
            <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-indigo-500 dark:bg-indigo-400 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-0.5 h-3 bg-indigo-500 dark:bg-indigo-400 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity"></div>
          </div>
        </div>
        <div className="px-5 pb-4 text-indigo-900/80 dark:text-indigo-100/80">
          Absolutely! Kaisen UI automatically detects system preferences and provides manual override options with perfect contrast ratios.
        </div>
      </div>
    </div>
  </div>
  );
};

export default Accordion;
