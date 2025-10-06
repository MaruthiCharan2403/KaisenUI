
import React from "react";

const GlassmorphicDataTable = () => {
  return (
    <div className="backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-800/50 rounded-2xl overflow-hidden shadow-lg">
    <table className="w-full border-separate border-spacing-0">
      <thead>
        <tr className="text-left backdrop-blur-sm bg-white/30 dark:bg-gray-800/30">
          <th className="p-4 font-medium dark:text-white/90 border-b border-white/20 dark:border-gray-700/50">Framework</th>
          <th className="p-4 font-medium dark:text-white/90 border-b border-white/20 dark:border-gray-700/50">Stars</th>
          <th className="p-4 font-medium dark:text-white/90 border-b border-white/20 dark:border-gray-700/50">Kaisen Score</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors">
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30 font-medium dark:text-white">Kaisen UI</td>
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30 text-amber-500 dark:text-amber-400">8,742</td>
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-amber-500 dark:bg-amber-600 h-2 rounded-full" style={{width: '92%'}}></div>
            </div>
          </td>
        </tr>
        <tr className="hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors">
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30 font-medium dark:text-white">React</td>
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30">201,543</td>
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-blue-500 dark:bg-blue-600 h-2 rounded-full" style={{width: '88%'}}></div>
            </div>
          </td>
        </tr>
        <tr className="hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors">
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30 font-medium dark:text-white">Vue</td>
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30">178,234</td>
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-emerald-500 dark:bg-emerald-600 h-2 rounded-full" style={{width: '85%'}}></div>
            </div>
          </td>
        </tr>
        <tr className="hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors">
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30 font-medium dark:text-white">Svelte</td>
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30">45,678</td>
          <td className="p-4 border-b border-white/10 dark:border-gray-700/30">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-rose-500 dark:bg-rose-600 h-2 rounded-full" style={{width: '79%'}}></div>
            </div>
          </td>
        </tr>
        <tr className="hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors">
          <td className="p-4 font-medium dark:text-white">Solid</td>
          <td className="p-4">32,456</td>
          <td className="p-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-purple-500 dark:bg-purple-600 h-2 rounded-full" style={{width: '76%'}}></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default GlassmorphicDataTable;
