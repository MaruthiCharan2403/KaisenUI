
import React from "react";

const TextLoader = () => {
  return (
    <div className="relative w-20 h-20 mx-auto">
  <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-r-transparent border-b-transparent border-l-blue-500 animate-spin"></div>
    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-pink-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
  <div className="absolute top-1/4 left-1/4 w-10 h-10 rounded-full border-2 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent animate-spin animate-reverse"></div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    KAISEN
  </div>
</div>
  );
};

export default TextLoader;
