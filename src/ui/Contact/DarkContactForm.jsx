
import React from "react";

const DarkContactForm = () => {
  return (
    <div className="relative bg-gray-900 rounded-2xl overflow-hidden p-8 border border-gray-800 shadow-[0_0_20px_0_rgba(99,102,241,0.1)]">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    <h2 className="text-3xl font-bold text-white mb-2">Contact <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Kaisen</span> Team</h2>
    <p className="text-gray-400 mb-8">We're revolutionizing UI development. Join the movement.</p>
    
    <div className="relative z-10 space-y-6">
      <div className="relative group">
        <input type="text" className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-900 transition-all text-white placeholder-gray-500" placeholder="Your Name" />
        <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-indigo-500 to-cyan-500 w-0 group-focus-within:w-full transition-all duration-500"></div>
      </div>
      
      <div className="relative group">
        <input type="email" className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-900 transition-all text-white placeholder-gray-500" placeholder="Email" />
        <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-cyan-500 to-purple-500 w-0 group-focus-within:w-full transition-all duration-500"></div>
      </div>
      
      <div className="relative group">
        <textarea className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-900 transition-all text-white placeholder-gray-500 min-h-[120px]" placeholder="Your message"></textarea>
        <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-purple-500 to-pink-500 w-0 group-focus-within:w-full transition-all duration-500"></div>
      </div>
      
      <button className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 transition-all hover:-translate-y-0.5 flex items-center justify-center">
        <span>Submit Request</span>
        <span className="ml-2 h-2 w-2 rounded-full bg-white/80 animate-pulse"></span>
      </button>
    </div>
    
    <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-indigo-600/20 blur-xl"></div>
    <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-purple-600/20 blur-xl"></div>
  </div> 
  );
};

export default DarkContactForm;
