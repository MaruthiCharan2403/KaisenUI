
import React from "react";

const SplitScreen = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
        <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center p-8 md:p-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              KAISEN UI<br/>
              <span className="bg-gradient-to-r from-amber-300 to-rose-400 bg-clip-text text-transparent">UI COMPONENTS</span>
            </h1>
            <div className="h-1 w-24 bg-amber-400 mb-8"></div>
            <p className="text-indigo-100 text-lg mb-10 max-w-md">
              Kaisen UI delivers atomic design principles with zero runtime overhead for maximum performance.
            </p>
            <div className="px-8 py-3.5 bg-white text-indigo-700 font-bold rounded-full inline-block hover:bg-amber-100 transition-colors cursor-pointer">
              EXPLORE 3.0
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md h-96 rounded-3xl bg-white/20 backdrop-blur-md border-2 border-white/30"></div>
        </div>
      </div>
  );
};

export default SplitScreen;
