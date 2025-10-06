
import React from "react";

const VideoComments = () => {
  return (
    <div className="bg-gradient-to-br w-full from-gray-900 to-blue-900 p-6 rounded-3xl border border-gray-700 hover:border-blue-500 transition-colors duration-300 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]">
  <div className="aspect-video bg-gradient-to-r from-blue-600 to-violet-700 rounded-xl flex items-center justify-center text-gray-100 font-mono font-black text-2xl tracking-widest shadow-inner">
    KAISEN TECH DEMO
  </div>
  <div className="mt-6 h-64 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-blue-500/50">
    {[...Array(6)].map((_, i) => (
      <div key={i} className={`p-3 rounded-lg backdrop-blur ${i%3 === 0 
        ? 'bg-blue-900/60 border border-blue-800/50' 
        : i%3 === 1 
          ? 'bg-violet-900/60 border border-violet-800/50' 
          : 'bg-gray-800/70 border border-gray-700/50'} 
        hover:bg-gradient-to-r ${i%3 === 0 
          ? 'hover:from-blue-900/70 hover:to-blue-800/70' 
          : i%3 === 1 
            ? 'hover:from-violet-900/70 hover:to-violet-800/70' 
            : 'hover:from-gray-800/80 hover:to-gray-700/80'} transition-all`}>
        <div className="flex items-center gap-2">
          <div className={`h-2.5 w-2.5 rounded-full ${i%3 === 0 
            ? 'bg-cyan-400' 
            : i%3 === 1 
              ? 'bg-fuchsia-400' 
              : 'bg-gray-400'}`}></div>
          <div className={`font-bold ${i%3 === 0 
            ? 'text-cyan-300' 
            : i%3 === 1 
              ? 'text-fuchsia-300' 
              : 'text-gray-300'}`}>
            KaisenDev_{i+1}
          </div>
        </div>
        <p className="mt-1.5 text-sm text-gray-300 pl-4">The performance metrics with Kaisen are breaking all our records!</p>
      </div>
    ))}
    <div className="sticky bottom-0 pt-3 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent">
      <div className="flex gap-3">
        <div className="flex-1 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
          <input 
            type="text" 
            placeholder="Ask about Kaisen tech..." 
            className="w-full p-3 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none"
          />
        </div>
        <button className="px-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold rounded-xl flex items-center justify-center shadow-md hover:shadow-blue-500/30 transition-all">
          Post
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default VideoComments;
