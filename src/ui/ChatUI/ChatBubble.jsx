
import React from "react";

const ChatBubble = () => {
  return (
    <div className="w-full max-w-sm mx-auto p-6 rounded-3xl bg-gradient-to-br from-pink-50 to-amber-50">
  <div className="space-y-4">
    <div className="flex justify-start">
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-amber-400"></div>
      <div className="ml-2 max-w-xs px-4 py-2 rounded-2xl rounded-tl-none bg-white/90 shadow-sm">
        <div className="text-xs text-pink-800">How's the Kaisen UI implementation going?</div>
      </div>
    </div>
    <div className="flex justify-end">
      <div className="max-w-xs px-4 py-2 rounded-2xl rounded-tr-none bg-gradient-to-r from-pink-400 to-amber-400 text-white shadow-md">
        <div className="text-xs">Smooth! The components are crazy good</div>
      </div>
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-pink-400 ml-2"></div>
    </div>
  </div>
  <div className="mt-6 relative">
    <input 
      type="text" 
      placeholder="Type here..." 
      className="w-full px-4 py-3 rounded-full bg-white/90 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300/50 pr-16"
    />
    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-amber-400 text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform">
      →
    </button>
  </div>
</div>
  );
};

export default ChatBubble;
