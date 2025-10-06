
import React from "react";

const GlassmorphismNavbar = () => {
  return (
    <div className="fixed  top-0 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl bg-white/80 dark:bg-gray-50/90 backdrop-blur-lg rounded-full shadow-xl border border-gray-200 dark:border-gray-300 z-50">
  <div className="flex justify-between items-center p-3">
    <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent dark:from-blue-600 dark:to-purple-600">
      KAISEN
    </div>

    {/* Desktop Navigation - Hidden on mobile */}
    <div className="hidden md:flex gap-1">
      <button className="px-5 py-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-800 dark:text-gray-900 font-medium transition-colors">
        Home
      </button>
      <button className="px-5 py-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-800 dark:text-gray-900 font-medium transition-colors">
        About
      </button>
      <button className="px-5 py-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-800 dark:text-gray-900 font-medium transition-colors">
        Components
      </button>
      <button className="px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors">
        Get Started
      </button>
    </div>

    {/* Mobile Menu Button - Hidden on desktop */}
    <button className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  {/* Mobile Menu - Hidden by default, shown when toggled */}
  <div className="md:hidden hidden flex-col p-4 space-y-2 bg-white dark:bg-gray-100 rounded-xl mt-2 border border-gray-200 dark:border-gray-300">
    <button className="w-full px-5 py-3 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-800 dark:text-gray-900 font-medium transition-colors text-left">
      Home
    </button>
    <button className="w-full px-5 py-3 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-800 dark:text-gray-900 font-medium transition-colors text-left">
      About
    </button>
    <button className="w-full px-5 py-3 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-800 dark:text-gray-900 font-medium transition-colors text-left">
      Components
    </button>
    <button className="w-full px-5 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors text-center">
      Get Started
    </button>
  </div>
</div>
  );
};

export default GlassmorphismNavbar;
