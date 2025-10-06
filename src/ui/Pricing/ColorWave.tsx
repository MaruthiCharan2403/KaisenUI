
import React from "react";

const ColorWave = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-6xl mx-auto">
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100/50 to-violet-100/50 dark:from-purple-900/20 dark:to-violet-900/20 border-2 border-purple-200 dark:border-purple-800 hover:shadow-lg hover:shadow-purple-200/50 dark:hover:shadow-purple-800/20 transition-all">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Starter</h3>
        <div className="my-6">
          <span className="text-5xl font-black text-gray-900 dark:text-white">$0</span>
          <span className="text-purple-500/80 dark:text-purple-400/80">/forever</span>
        </div>
        <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
          <li>• 100+ components</li>
          <li>• Community support</li>
          <li>• MIT License</li>
        </ul>
        <button className="w-full py-3 px-6 bg-purple-600/10 dark:bg-purple-600/20 text-purple-600 dark:text-purple-400 font-bold rounded-lg hover:bg-purple-600/20 dark:hover:bg-purple-600/30 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100/50 to-cyan-100/50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-700 scale-105 z-10 shadow-xl hover:shadow-blue-200/50 dark:hover:shadow-blue-800/20">
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-500 dark:bg-blue-600 text-white text-xs font-bold">POPULAR</div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Pro</h3>
        <div className="my-6">
          <span className="text-5xl font-black text-gray-900 dark:text-white">$29</span>
          <span className="text-blue-500/80 dark:text-blue-400/80">/month</span>
        </div>
        <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
          <li>• 500+ components</li>
          <li>• Priority support</li>
          <li>• Commercial License</li>
          <li>• Private repos</li>
        </ul>
        <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg transition-all">
          Upgrade Now
        </button>
      </div>
    </div>
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100/50 to-teal-100/50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800 hover:shadow-lg hover:shadow-emerald-200/50 dark:hover:shadow-emerald-800/20 transition-all">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Enterprise</h3>
        <div className="my-6">
          <span className="text-5xl font-black text-gray-900 dark:text-white">$99</span>
          <span className="text-emerald-500/80 dark:text-emerald-400/80">/month</span>
        </div>
        <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
          <li>• Unlimited components</li>
          <li>• 24/7 Support</li>
          <li>• White-label</li>
          <li>• Dedicated SLAs</li>
        </ul>
        <button className="w-full py-3 px-6 bg-emerald-600/10 dark:bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 font-bold rounded-lg hover:bg-emerald-600/20 dark:hover:bg-emerald-600/30 transition-colors">
          Contact Sales
        </button>
      </div>
    </div>
  </div>
  );
};

export default ColorWave;
