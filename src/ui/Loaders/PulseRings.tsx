
import React from "react";

const PulseRings = () => {
  return (
    <div className="relative w-20 h-20">
    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-500 animate-[spin_1.5s_linear_infinite]"></div>
    <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-purple-500 animate-[spin_1.8s_linear_infinite_reverse]"></div>
    <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-pink-500 animate-[spin_2.1s_linear_infinite]"></div>
  </div>
  );
};

export default PulseRings;
