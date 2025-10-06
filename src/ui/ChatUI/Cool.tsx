
import React from "react";

const Cool = () => {
  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl bg-gradient-to-br from-cyan-50 to-green-50 p-6 shadow-xl">
  <div className="h-96 overflow-y-auto space-y-3 mb-4">
    <div className="flex justify-start">
      <div className="px-5 py-3 rounded-2xl rounded-tl-none bg-white/90 border border-cyan-200 shadow-sm">
        <div className="text-sm text-cyan-800">Kaisen UI v3 just dropped!</div>
      </div>
    </div>
    <div className="flex justify-end">
      <div className="px-5 py-3 rounded-2xl rounded-tr-none bg-gradient-to-r from-cyan-400 to-green-400 text-white shadow-md">
        <div className="text-sm">No way! What's new?</div>
      </div>
    </div>
    <div className="flex justify-start">
      <div className="px-5 py-3 rounded-2xl rounded-tl-none bg-white/90 border border-green-200 shadow-sm">
        <div className="text-sm text-green-800">40 new components and auto dark mode!</div>
      </div>
    </div>
  </div>
  <div className="flex gap-3">
    <div className="flex-1 bg-white/90 rounded-full p-1 pl-4 border border-cyan-200">
      <input 
        type="text" 
        placeholder="Message..." 
        className="w-full bg-transparent focus:outline-none text-sm"
      />
    </div>
    <button className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-green-400 text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform">
      ↑
    </button>
  </div>
</div>
  );
};

export default Cool;
