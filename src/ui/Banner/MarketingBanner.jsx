
import React from "react";

const MarketingBanner = () => {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 px-6 py-8 shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-600/30">
    <div className="absolute -top-16 -right-4 h-32 w-32 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-xl"></div>
    <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-xl"></div>
    <div className="relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Supercharge Your Development
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Kaisen UI v2.0 is here - 40% faster, 30% lighter, and packed with new components. Join 10,000+ developers who ship better UIs faster.
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="inline-flex items-center gap-x-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <span>Get Started</span>
            <span className="h-3 w-3 rounded-full bg-white/20 animate-pulse"></span>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">100+</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Components</p>
        </div>
        <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">10K+</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Developers</p>
        </div>
        <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">40%</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Faster</p>
        </div>
        <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">0ms</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Runtime</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MarketingBanner;
