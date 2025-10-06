
import React from "react";

const BasicPricing = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-8 max-w-5xl mx-auto">
    <div className="flex-1 rounded-2xl bg-gradient-to-br from-pink-100/40 to-rose-100/40 dark:from-pink-900/20 dark:to-rose-900/20 p-1 hover:shadow-lg hover:shadow-pink-200/30 dark:hover:shadow-pink-800/10 transition-all">
      <div className="h-full rounded-xl bg-white dark:bg-gray-900 p-6">
        <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-4">Starter</h3>
        <div className="mb-6">
          <span className="text-4xl font-black text-gray-900 dark:text-white">$0</span>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-pink-300/70 to-rose-300/70 dark:from-pink-700/50 dark:to-rose-700/50 mb-6"></div>
        <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-400">
          <li>Core components</li>
          <li>Community support</li>
          <li>MIT license</li>
        </ul>
        <button className="w-full py-2.5 px-5 bg-pink-600/10 dark:bg-pink-600/20 text-pink-600 dark:text-pink-400 font-medium rounded-lg hover:bg-pink-600/20 dark:hover:bg-pink-600/30 transition-colors">
          Get Started
        </button>
      </div>
    </div>
    <div className="flex-1 rounded-2xl bg-gradient-to-br from-indigo-100/40 to-violet-100/40 dark:from-indigo-900/20 dark:to-violet-900/20 p-1 scale-105 z-10 shadow-xl hover:shadow-indigo-200/30 dark:hover:shadow-indigo-800/10">
      <div className="h-full rounded-xl bg-white dark:bg-gray-900 p-6 relative">
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-indigo-500 dark:bg-indigo-600 text-white text-xs font-bold">BEST VALUE</div>
        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Pro</h3>
        <div className="mb-6">
          <span className="text-4xl font-black text-gray-900 dark:text-white">$29</span>
          <span className="text-indigo-500/80 dark:text-indigo-400/80">/month</span>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-indigo-300/70 to-violet-300/70 dark:from-indigo-700/50 dark:to-violet-700/50 mb-6"></div>
        <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-400">
          <li>Premium components</li>
          <li>Priority support</li>
          <li>Commercial license</li>
          <li>Private repos</li>
        </ul>
        <button className="w-full py-2.5 px-5 bg-gradient-to-r from-indigo-500 to-violet-500 dark:from-indigo-600 dark:to-violet-600 text-white font-medium rounded-lg hover:shadow-lg transition-all">
          Upgrade Now
        </button>
      </div>
    </div>
    <div className="flex-1 rounded-2xl bg-gradient-to-br from-teal-100/40 to-cyan-100/40 dark:from-teal-900/20 dark:to-cyan-900/20 p-1 hover:shadow-lg hover:shadow-teal-200/30 dark:hover:shadow-teal-800/10 transition-all">
      <div className="h-full rounded-xl bg-white dark:bg-gray-900 p-6">
        <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-4">Enterprise</h3>
        <div className="mb-6">
          <span className="text-4xl font-black text-gray-900 dark:text-white">$99</span>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-teal-300/70 to-cyan-300/70 dark:from-teal-700/50 dark:to-cyan-700/50 mb-6"></div>
        <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-400">
          <li>Unlimited components</li>
          <li>24/7 support</li>
          <li>White-label</li>
          <li>Dedicated SLAs</li>
        </ul>
        <button className="w-full py-2.5 px-5 bg-teal-600/10 dark:bg-teal-600/20 text-teal-600 dark:text-teal-400 font-medium rounded-lg hover:bg-teal-600/20 dark:hover:bg-teal-600/30 transition-colors">
          Contact Sales
        </button>
      </div>
    </div>
  </div>
  );
};

export default BasicPricing;
