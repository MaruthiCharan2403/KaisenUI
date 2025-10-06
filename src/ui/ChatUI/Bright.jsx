
import React from "react";

const Bright = () => {
  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-3xl bg-gradient-to-br from-purple-50 to-blue-50">
  <div className="space-y-4">
    <div className="flex justify-start">
      <div className="max-w-xs px-5 py-3 rounded-3xl rounded-tl-none bg-white/80 backdrop-blur-md border border-purple-200 shadow-sm">
        <div className="text-sm text-purple-800">Hey! Check out these Kaisen UI components</div>
      </div>
    </div>
    <div className="flex justify-end">
      <div className="max-w-xs px-5 py-3 rounded-3xl rounded-tr-none bg-gradient-to-r from-purple-400 to-blue-400 text-white shadow-md">
        <div className="text-sm">They look amazing! The gradients are 🔥</div>
      </div>
    </div>
    <div className="flex justify-start">
      <div className="max-w-xs px-5 py-3 rounded-3xl rounded-tl-none bg-white/80 backdrop-blur-md border border-blue-200 shadow-sm">
        <div className="text-sm text-blue-800">Right? Wait till you see the dark mode!</div>
      </div>
    </div>
  </div>
  <div className="mt-6 flex gap-2">
    <input 
      type="text" 
      placeholder="Type your message..." 
      className="flex-1 px-4 py-2 rounded-full bg-white/90 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300/50"
    />
    <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 text-white shadow-md hover:shadow-lg transition-all">
      Send
    </button>
  </div>
</div>
  );
};

export default Bright;
