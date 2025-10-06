
import React from "react";

const ColorfulArticle = () => {
  return (
    <div className="max-w-md mx-auto bg-black border-4 border-purple-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-pink-500 font-bold">CYBERPUNK EDITION</div>
            <h2 className="block mt-1 text-2xl leading-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              HOW TO HACK YOUR BRAIN FOR FUN AND PROFIT
            </h2>
            <p className="mt-3 text-gray-300 text-justify">
              Scientists discovered that eating 37 bananas while standing on one foot unlocks 90% of your brain's potential.
            </p>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">AI</div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-purple-300">Anonymous Intelligence</p>
                <p className="text-sm text-blue-300">April 31, 2099</p>
              </div>
            </div>
          </div>
        </div>
  );
};

export default ColorfulArticle;
