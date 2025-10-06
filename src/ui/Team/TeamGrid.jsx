
import React from "react";

const TeamGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="h-40 bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-600 dark:to-amber-800 relative">
        <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-amber-100 to-amber-300 dark:from-amber-800 dark:to-amber-900 shadow-md transform group-hover:rotate-2 transition-transform"></div>
      </div>
      <div className="p-6 pt-10">
        <h3 className="text-xl font-bold dark:text-white">Riley Jones</h3>
        <p className="text-amber-500 dark:text-amber-400 font-medium mb-3">Founder & CEO</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Visionary behind Kaisen UI. Leads product strategy and core architecture.</p>
        <div className="flex gap-2 mt-4">
          <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-xs text-amber-600 dark:text-amber-300">TW</div>
          <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-xs text-amber-600 dark:text-amber-300">GH</div>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 relative">
        <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-800 dark:to-blue-900 shadow-md transform group-hover:-rotate-2 transition-transform"></div>
      </div>
      <div className="p-6 pt-10">
        <h3 className="text-xl font-bold dark:text-white">Jordan Lee</h3>
        <p className="text-blue-500 dark:text-blue-400 font-medium mb-3">Tech Lead</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Ensures technical excellence across all Kaisen UI components.</p>
        <div className="flex gap-2 mt-4">
          <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-xs text-blue-600 dark:text-blue-300">GH</div>
          <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-xs text-blue-600 dark:text-blue-300">LI</div>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="h-40 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800 relative">
        <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-purple-100 to-purple-300 dark:from-purple-800 dark:to-purple-900 shadow-md transform group-hover:rotate-1 transition-transform"></div>
      </div>
      <div className="p-6 pt-10">
        <h3 className="text-xl font-bold dark:text-white">Morgan Taylor</h3>
        <p className="text-purple-500 dark:text-purple-400 font-medium mb-3">Design Lead</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Crafts Kaisen UI's visual language and interaction patterns.</p>
        <div className="flex gap-2 mt-4">
          <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-xs text-purple-600 dark:text-purple-300">TW</div>
          <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-xs text-purple-600 dark:text-purple-300">DR</div>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="h-40 bg-gradient-to-br from-emerald-400 to-emerald-600 dark:from-emerald-600 dark:to-emerald-800 relative">
        <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-emerald-100 to-emerald-300 dark:from-emerald-800 dark:to-emerald-900 shadow-md transform group-hover:-rotate-1 transition-transform"></div>
      </div>
      <div className="p-6 pt-10">
        <h3 className="text-xl font-bold dark:text-white">Casey Smith</h3>
        <p className="text-emerald-500 dark:text-emerald-400 font-medium mb-3">Backend Lead</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Builds the robust systems powering Kaisen UI's infrastructure.</p>
        <div className="flex gap-2 mt-4">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-xs text-emerald-600 dark:text-emerald-300">GH</div>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="h-40 bg-gradient-to-br from-rose-400 to-rose-600 dark:from-rose-600 dark:to-rose-800 relative">
        <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-rose-100 to-rose-300 dark:from-rose-800 dark:to-rose-900 shadow-md transform group-hover:rotate-2 transition-transform"></div>
      </div>
      <div className="p-6 pt-10">
        <h3 className="text-xl font-bold dark:text-white">Taylor Morgan</h3>
        <p className="text-rose-500 dark:text-rose-400 font-medium mb-3">Frontend Developer</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Implements pixel-perfect UIs with Kaisen UI components.</p>
        <div className="flex gap-2 mt-4">
          <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-xs text-rose-600 dark:text-rose-300">GH</div>
          <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-xs text-rose-600 dark:text-rose-300">TW</div>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="h-40 bg-gradient-to-br from-indigo-400 to-indigo-600 dark:from-indigo-600 dark:to-indigo-800 relative">
        <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-indigo-100 to-indigo-300 dark:from-indigo-800 dark:to-indigo-900 shadow-md transform group-hover:-rotate-2 transition-transform"></div>
      </div>
      <div className="p-6 pt-10">
        <h3 className="text-xl font-bold dark:text-white">Alex Rivera</h3>
        <p className="text-indigo-500 dark:text-indigo-400 font-medium mb-3">Community Manager</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Connects with Kaisen UI users and gathers feedback.</p>
        <div className="flex gap-2 mt-4">
          <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs text-indigo-600 dark:text-indigo-300">TW</div>
          <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs text-indigo-600 dark:text-indigo-300">DI</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TeamGrid;
