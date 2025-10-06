
import React from "react";

const InputCTA = () => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-700 hover:opacity-10 dark:via-slate-700"></div>
    <div className="mb-4 flex justify-between">
      <div className="w-2/3">
        <h3 className="mb-2 text-lg font-bold text-slate-800 dark:text-white">Join Kaisen UI Community</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">Access premium components and early updates.</p>
      </div>
      <div className="flex items-start justify-end">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">Limited Time</span>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-500" 
      />
      <button className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">Subscribe</button>
    </div>
  </div>
  );
};

export default InputCTA;
