
import React from "react";

const Newspaper = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3">
        <div className="h-[600px] rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-700 dark:to-blue-800 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 p-10">
            <h1 className="text-4xl font-bold text-white mb-4">The Future of UI Development</h1>
            <p className="text-white/90 text-lg max-w-2xl">Why thousands of developers are switching to Kaisen UI's atomic design system for their projects.</p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 space-y-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-6 group">
            <div className={`md:w-1/3 h-40 rounded-xl ${i===0 ? 'bg-gradient-to-br from-pink-500 to-rose-500' : i===1 ? 'bg-gradient-to-br from-purple-500 to-indigo-500' : 'bg-gradient-to-br from-amber-500 to-orange-500'}`}></div>
            <div className="md:w-2/3">
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">DEVELOPMENT</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{
                i===0 ? 'Component Architecture Explained' : 
                i===1 ? 'Why Design Systems Matter' : 
                'Performance Benchmarks'
              }</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{
                i===0 ? 'Learn how we structure components for maximum reusability and performance.' :
                i===1 ? 'How Kaisen UI helps teams maintain design consistency at scale.' :
                'See how we outperform traditional component libraries in speed tests.'
              }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  );
};

export default Newspaper;
