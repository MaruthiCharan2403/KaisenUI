
import React from "react";

const PlainNavbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white dark:bg-gray-50 shadow-md z-50">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        KAISEN
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <button className="text-gray-700 dark:text-gray-800 hover:text-blue-500 font-medium">
          Components
        </button>
        <button className="text-gray-700 dark:text-gray-800 hover:text-blue-500 font-medium">
          Docs
        </button>
        <button className="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full">
          Try Now
        </button>
      </div>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden p-2">
        <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
        <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
        <div className="w-6 h-0.5 bg-gray-700"></div>
      </button>
    </div>
    
    {/* Mobile Menu (hidden by default) */}
    <div className="md:hidden hidden bg-white dark:bg-gray-50 py-2 px-4 border-t border-gray-200">
      <button className="block w-full py-2 text-left text-gray-700 dark:text-gray-800 hover:text-blue-500">
        Components
      </button>
      <button className="block w-full py-2 text-left text-gray-700 dark:text-gray-800 hover:text-blue-500">
        Docs
      </button>
      <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full mt-2">
        Try Now
      </button>
    </div>
  </div>
</div>
  );
};

export default PlainNavbar;
