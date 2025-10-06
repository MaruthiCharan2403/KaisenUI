
import React from "react";

const Simple = () => {
  return (
    <div className="py-10 w-full px-4 md:px-8 border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-6 md:mb-0">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
          <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
            <span className="text-white text-xs font-bold">UI</span>
          </div>
        </div>
        <span className="text-xl font-bold">KAISENUI</span>
      </div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-pink-500 transition-colors">GitHub</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Twitter</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Discord</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Documentation</a>
      </div>
    </div>
  </div>
  );
};

export default Simple;
