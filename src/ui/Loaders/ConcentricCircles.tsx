
import React from "react";

const ConcentricCircles = () => {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
    <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-indigo-500 border-r-purple-500 border-b-pink-500 border-l-cyan-500 animate-[spin_1.5s_linear_infinite]"></div>
    <div className="absolute w-24 h-24 rounded-full border-[6px] border-transparent border-t-purple-500 border-r-pink-500 border-b-cyan-500 border-l-indigo-500 animate-[spin_1.8s_linear_infinite_reverse]"></div>
    <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-[pulse_2s_ease-in-out_infinite]"></div>
  </div>
  );
};

export default ConcentricCircles;
