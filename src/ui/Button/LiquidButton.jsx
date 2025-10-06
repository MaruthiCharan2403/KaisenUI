
import React from "react";

const LiquidButton = () => {
  return (
    <div className="relative group">
    <button className="px-8 py-4 font-bold text-white bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-700 hover:bg-transparent">
      <span className="relative z-10">Unlock Kaisen</span>
      <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"></div>
    </button>
    <div className="absolute -bottom-1 -left-1 -right-1 -top-1 rounded-xl border-2 border-indigo-500 dark:border-indigo-400 opacity-0 group-hover:opacity-100 group-hover:animate-[ping_1.5s_ease-in-out_infinite] pointer-events-none"></div>
  </div>
  );
};

export default LiquidButton;
