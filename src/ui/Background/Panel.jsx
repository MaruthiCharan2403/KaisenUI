
import React from "react";

const Panel = () => {
  return (
     <div className="fixed overflow-hidden h-screen w-screen rounded-2xl bg-gray-900 dark:bg-black shadow-xl flex items-center justify-center relative border border-cyan-500/50 dark:border-cyan-600/50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
        <span className="text-cyan-500 font-bold text-xl relative z-10">FUTURISTIC PANEL</span>
      </div>
  );
};

export default Panel;
