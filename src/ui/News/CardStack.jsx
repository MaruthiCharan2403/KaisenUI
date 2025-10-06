
import React from "react";

const CardStack = () => {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-rose-50 dark:from-gray-900 dark:to-gray-800 p-8">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row gap-8 mb-12">
      <div className="md:w-2/3">
        <div className="h-[500px] rounded-3xl bg-gradient-to-br from-rose-500 to-amber-500 dark:from-rose-700 dark:to-amber-700 relative overflow-hidden p-10 flex flex-col justify-end">
          <h1 className="text-4xl font-bold text-white mb-4">Redefining Developer Experience</h1>
          <p className="text-white/90 text-lg max-w-2xl">How Kaisen UI's intuitive API design reduces learning curve and boosts productivity.</p>
        </div>
      </div>
      <div className="md:w-1/3 space-y-6">
        <h3 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 dark:from-amber-400 dark:to-rose-400 bg-clip-text text-transparent">Trending</h3>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-6 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-lg transition-all">
            <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">CASE STUDY</span>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-1 mb-2">{
              i===0 ? 'From Zero to Production in 3 Days' :
              i===1 ? 'Startup Saves 200+ Dev Hours' :
              'Enterprise Migration Success Story'
            }</h4>
            <div className="h-px w-full bg-gradient-to-r from-amber-200 to-rose-200 dark:from-amber-800 dark:to-rose-800 my-3"></div>
            <p className="text-gray-600 dark:text-gray-400 text-xs">{
              i===0 ? 'How one team built their entire frontend with Kaisen UI in record time' :
              i===1 ? 'Reducing UI development time by 65% with our component library' :
              'How a Fortune 500 company transitioned their design system'
            }</p>
          </div>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white/90 dark:bg-gray-800/90 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
          <div className="h-48 bg-gradient-to-br from-amber-400/70 to-rose-400/70 dark:from-amber-600/70 dark:to-rose-600/70"></div>
          <div className="p-6">
            <span className="text-xs font-semibold px-2 py-1 rounded bg-amber-100/50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400">UPDATE</span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-3 mb-2">Version 3.2 Patch Notes</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">All the new features and improvements in our latest release.</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default CardStack;
