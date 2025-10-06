
import React from "react";

const EmojiPicker = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border-4 border-black dark:border-neon-purple shadow-[8px_8px_0_0_black] dark:shadow-[8px_8px_0_0_#8a2be2]">
  <h3 className="font-mono text-xl font-bold text-white dark:text-neon-pink mb-4 tracking-tighter">REACT-O-MATIC 9000</h3>
  <div className="grid grid-cols-8 gap-1 mb-3">
    {['🤖','👾','🎮','💾','🔋','🖥️','👽','🕹️','🔮','🧿','🎧','📟','👓','⏱️','📡','💿'].map((e,i) => (
      <button key={i} className="text-2xl p-1 bg-gray-100 dark:bg-gray-800 hover:bg-yellow-300 dark:hover:bg-neon-purple rounded-sm border border-black dark:border-neon-blue transform hover:scale-150 transition-all duration-100">
        {e}
      </button>
    ))}
  </div>
  <div className="relative">
    <input 
      type="text" 
      placeholder="SEARCH EMOJIS..." 
      className="w-full p-2 pl-8 bg-gray-100 dark:bg-gray-800 border-2 border-black dark:border-neon-green font-mono text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
    />
    <span className="absolute left-2 top-2.5 text-black dark:text-neon-yellow">🔍</span>
  </div>
</div>
  );
};

export default EmojiPicker;
