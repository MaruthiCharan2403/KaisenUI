
import React from "react";

const MinimalisticDashboardTable = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-200 dark:border-gray-800">
          <th className="px-5 py-4 text-left text-sm font-medium dark:text-white/90">Project</th>
          <th className="px-5 py-4 text-left text-sm font-medium dark:text-white/90">Team</th>
          <th className="px-5 py-4 text-left text-sm font-medium dark:text-white/90">Progress</th>
          <th className="px-5 py-4 text-left text-sm font-medium dark:text-white/90">Version</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
          <td className="px-5 py-4 font-medium dark:text-white">Kaisen UI Core</td>
          <td className="px-5 py-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-600 dark:to-amber-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800"></div>
            </div>
          </td>
          <td className="px-5 py-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div className="bg-green-500 dark:bg-green-600 h-1.5 rounded-full" style={{width: '92%'}}></div>
            </div>
          </td>
          <td className="px-5 py-4 text-sm text-gray-500 dark:text-gray-400">1.4.2</td>
        </tr>
        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
          <td className="px-5 py-4 font-medium dark:text-white">Kaisen Docs</td>
          <td className="px-5 py-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 dark:from-emerald-600 dark:to-emerald-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 dark:from-indigo-600 dark:to-indigo-800"></div>
            </div>
          </td>
          <td className="px-5 py-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div className="bg-blue-500 dark:bg-blue-600 h-1.5 rounded-full" style={{width: '78%'}}></div>
            </div>
          </td>
          <td className="px-5 py-4 text-sm text-gray-500 dark:text-gray-400">0.9.3</td>
        </tr>
        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
          <td className="px-5 py-4 font-medium dark:text-white">Kaisen Pro</td>
          <td className="px-5 py-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 dark:from-rose-600 dark:to-rose-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 dark:from-pink-600 dark:to-pink-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-600 dark:to-amber-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800"></div>
            </div>
          </td>
          <td className="px-5 py-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div className="bg-purple-500 dark:bg-purple-600 h-1.5 rounded-full" style={{width: '45%'}}></div>
            </div>
          </td>
          <td className="px-5 py-4 text-sm text-gray-500 dark:text-gray-400">0.2.1</td>
        </tr>
        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
          <td className="px-5 py-4 font-medium dark:text-white">Kaisen Mobile</td>
          <td className="px-5 py-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 dark:from-violet-600 dark:to-violet-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 dark:from-cyan-600 dark:to-cyan-800"></div>
            </div>
          </td>
          <td className="px-5 py-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div className="bg-amber-500 dark:bg-amber-600 h-1.5 rounded-full" style={{width: '32%'}}></div>
            </div>
          </td>
          <td className="px-5 py-4 text-sm text-gray-500 dark:text-gray-400">0.1.5</td>
        </tr>
        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
          <td className="px-5 py-4 font-medium dark:text-white">Kaisen AI</td>
          <td className="px-5 py-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 dark:from-fuchsia-600 dark:to-fuchsia-800"></div>
            </div>
          </td>
          <td className="px-5 py-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div className="bg-indigo-500 dark:bg-indigo-600 h-1.5 rounded-full" style={{width: '15%'}}></div>
            </div>
          </td>
          <td className="px-5 py-4 text-sm text-gray-500 dark:text-gray-400">0.0.8</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default MinimalisticDashboardTable;
