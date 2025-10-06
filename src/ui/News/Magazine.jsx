
import React from "react";

const Magazine = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-8">
  <div className="max-w-7xl mx-auto">
    <div className="mb-16">
      <div className="h-[500px] rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 to-transparent">
          <span className="inline-block px-4 py-1 mb-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm">FEATURED STORY</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kaisen UI Revolutionizes Web Development</h1>
          <p className="text-white/90 max-w-2xl">Discover how our atomic design system is transforming how developers build modern applications with unprecedented speed.</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`${i < 2 ? 'md:col-span-2' : ''} bg-white/90 dark:bg-gray-800/90 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all`}>
          <div className={`${i < 2 ? 'h-64' : 'h-48'} bg-gradient-to-br ${i%3===0 ? 'from-amber-400 to-pink-500' : i%3===1 ? 'from-blue-400 to-cyan-500' : 'from-purple-400 to-indigo-500'}`}></div>
          <div className="p-6">
            <span className="text-xs font-semibold px-2 py-1 rounded bg-indigo-100/50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400">TECHNOLOGY</span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-3 mb-2">{i < 2 ? 'How Our Components Achieve 40% Faster Rendering' : 'New Dark Mode Features'}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{i < 2 ? 'Deep dive into the architecture that makes Kaisen UI the fastest React component library available today.' : 'Explore our automatic theme detection system with manual override capabilities.'}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default Magazine;
