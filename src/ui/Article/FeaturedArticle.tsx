
import React from "react";

const FeaturedArticle = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="p-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
    <div className="p-6">
      <div className="flex justify-between items-start">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">Kaisen UI</span>
        <span className="text-xs text-gray-400">Component Showcase</span>
      </div>
      
      <h2 className="mt-4 text-2xl font-bold text-gray-800 leading-tight">The Art of Minimal Design</h2>
      <p className="mt-2 text-gray-600">Discover how Kaisen UI helps you build cleaner interfaces faster with our thoughtfully designed components.</p>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500">"Kaisen UI components remove the clutter so you can focus on what matters - creating exceptional user experiences."</p>
        <div className="mt-4 flex items-center">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Kaisen Team</p>
            <p className="text-xs text-gray-500">UI Architects</p>
          </div>
          <button className="px-4 py-2 text-xs font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Explore More
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FeaturedArticle;
