
import React from "react";

const Neon = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-950 dark:bg-black flex items-center justify-center">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="absolute w-[80%] h-[80%] rounded-full border-4 border-fuchsia-500 dark:border-fuchsia-600 opacity-40 animate-pulse origin-center"></div>
    <div className="absolute w-[70%] h-[70%] rounded-full border-4 border-fuchsia-500 dark:border-fuchsia-600 opacity-50 animate-pulse origin-center delay-300"></div>
    <div className="absolute w-[60%] h-[60%] rounded-full border-4 border-fuchsia-500 dark:border-fuchsia-600 opacity-60 animate-pulse origin-center delay-600"></div>
    <div className="absolute w-[50%] h-[50%] rounded-full border-4 border-fuchsia-500 dark:border-fuchsia-600 opacity-70 animate-pulse origin-center delay-900"></div>
    <div className="absolute w-[40%] h-[40%] rounded-full border-4 border-fuchsia-500 dark:border-fuchsia-600 opacity-80 animate-pulse origin-center delay-1200"></div>
    <div className="absolute w-[30%] h-[30%] rounded-full border-4 border-fuchsia-500 dark:border-fuchsia-600 opacity-90 animate-pulse origin-center delay-1500"></div>
  </div>
  <div className="relative z-10 text-center transform rotate-12">
    <div className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500 dark:from-fuchsia-400 dark:to-cyan-400 mb-8 animate-pulse">
      404
    </div>
    <div className="text-2xl text-white dark:text-white/90 font-bold max-w-md mx-auto">
      You've been sucked into the void! Don't worry, it happens to the best of us... just not usually twice in one day.
    </div>
  </div>
</div>
  );
};

export default Neon;
