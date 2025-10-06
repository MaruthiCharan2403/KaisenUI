
import React from "react";

const FloatingNavbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-orange-400 dark:bg-orange-500 z-50">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-between py-4">
      <div className="text-3xl font-black text-white mb-4 md:mb-0">
        KAISEN<span className="text-orange-800">UI</span>
      </div>
      
      <div className="w-full md:w-auto">
        <div className="flex flex-wrap justify-center gap-2">
          <button className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm font-medium">
            Components
          </button>
          <button className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm font-medium">
            Templates
          </button>
          <button className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm font-medium">
            Docs
          </button>
          <button className="px-3 py-1.5 bg-orange-700 hover:bg-orange-800 text-white rounded-full text-sm font-medium">
            GitHub
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default FloatingNavbar;
