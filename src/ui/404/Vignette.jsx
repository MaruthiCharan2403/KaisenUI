
import React from "react";

const Vignette = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-fuchsia-600 via-purple-700 to-indigo-800 dark:from-fuchsia-900 dark:via-purple-950 dark:to-indigo-950 flex items-center justify-center perspective-[2000px]">
  {/* Shattered Reality Background */}
  <div className="absolute inset-0 flex flex-wrap opacity-80">
    <div className="w-full h-1/6 bg-gradient-to-r from-pink-500 to-rose-500 dark:from-pink-700 dark:to-rose-700 transform -skew-y-12 translate-y-4 animate-pulse"></div>
    <div className="w-full h-1/6 bg-gradient-to-r from-rose-500 to-orange-500 dark:from-rose-700 dark:to-orange-700 transform skew-y-12 -translate-y-4 animate-pulse delay-150"></div>
    <div className="w-full h-1/6 bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-700 dark:to-amber-700 transform -skew-y-12 translate-y-4 animate-pulse delay-300"></div>
    <div className="w-full h-1/6 bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-amber-700 dark:to-yellow-700 transform skew-y-12 -translate-y-4 animate-pulse delay-500"></div>
    <div className="w-full h-1/6 bg-gradient-to-r from-yellow-500 to-lime-500 dark:from-yellow-700 dark:to-lime-700 transform -skew-y-12 translate-y-4 animate-pulse delay-700"></div>
    <div className="w-full h-1/6 bg-gradient-to-r from-lime-500 to-green-500 dark:from-lime-700 dark:to-green-700 transform skew-y-12 -translate-y-4 animate-pulse delay-1000"></div>
  </div>
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/20 backdrop-blur-md rounded-lg rotate-12 animate-bounce"></div>
    <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/20 backdrop-blur-md rounded-lg -rotate-12 animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-white/20 backdrop-blur-md rounded-lg rotate-45 animate-bounce delay-300"></div>
    <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-white/20 backdrop-blur-md rounded-lg -rotate-45 animate-pulse delay-500"></div>
    <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/10 backdrop-blur-md rounded-full animate-ping"></div>
    <div className="absolute top-10 left-10 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute top-3/4 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 dark:from-purple-600 dark:to-indigo-700 rounded-full blur-xl animate-pulse delay-700"></div>
    <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 dark:from-rose-600 dark:to-pink-700 rounded-full blur-xl animate-pulse delay-500"></div>
  </div>
  <div className="relative z-10 transform -rotate-6 scale-110">
    <div className="relative">
      {/* Main 404 Text */}
      <div className="text-[15rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 dark:from-white dark:to-white/50 select-none">
        404
      </div>
      <div className="absolute -inset-1 text-[15rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 dark:from-cyan-300 dark:to-blue-500 opacity-70 blur-sm animate-pulse select-none">
        404
      </div>
      
      <div className="absolute -inset-2 text-[15rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-pink-600 dark:from-fuchsia-300 dark:to-pink-500 opacity-70 blur-sm animate-pulse delay-300 select-none">
        404
      </div>
    </div>
    <div className="relative mt-8 text-3xl font-bold text-white dark:text-white/90 text-center transform rotate-2 select-none">
      <div className="absolute inset-0 blur-sm text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-300 dark:to-orange-400 animate-pulse">
        Congratulations! You broke the internet!
      </div>
      <div>
        Congratulations! You broke the internet!
      </div>
    </div>
    <div className="mt-4 text-xl text-white/80 dark:text-white/70 text-center max-w-lg mx-auto font-medium italic transform -rotate-1 select-none">
      We'd give you a prize, but it was on this page... which doesn't exist.
    </div>
  </div>
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-black/40 dark:to-transparent pointer-events-none"></div>
  <div className="absolute inset-0 pointer-events-none">
    <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse" style={{top: '10%'}}></div>
    <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-100" style={{top: '20%'}}></div>
    <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-200" style={{top: '30%'}}></div>
    <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-300" style={{top: '40%'}}></div>
    <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-400" style={{top: '50%'}}></div>
    <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-500" style={{top: '60%'}}></div>
    <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-600" style={{top: '70%'}}></div>
    <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-700" style={{top: '80%'}}></div>
    <div className="w-full h-px bg-white/20 dark:bg-white/10 animate-pulse delay-800" style={{top: '90%'}}></div>
  </div>
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_black_120%)] opacity-40 dark:opacity-60 pointer-events-none"></div>
  <div className="absolute bottom-4 left-0 right-0 text-center text-white/50 dark:text-white/30 text-sm animate-bounce select-none">
    Try clicking anywhere... or don't, this page is broken anyway
  </div>
</div>
  );
};

export default Vignette;
