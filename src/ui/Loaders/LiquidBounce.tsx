
import React from "react";

const LiquidBounce = () => {
  return (
    <div className="flex space-x-1 h-8 items-end">
    <div className="w-3 h-3 rounded-full bg-indigo-500 animate-[bounce_1s_infinite_0.1s]"></div>
    <div className="w-3 h-6 rounded-full bg-purple-500 animate-[bounce_1s_infinite_0.2s]"></div>
    <div className="w-3 h-4 rounded-full bg-pink-500 animate-[bounce_1s_infinite_0.3s]"></div>
    <div className="w-3 h-5 rounded-full bg-cyan-500 animate-[bounce_1s_infinite_0.4s]"></div>
    <div className="w-3 h-3 rounded-full bg-amber-500 animate-[bounce_1s_infinite_0.5s]"></div>
  </div>
  );
};

export default LiquidBounce;
