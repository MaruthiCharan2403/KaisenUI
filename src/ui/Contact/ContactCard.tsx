
import React from "react";

const ContactCard = () => {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl p-8 border border-gray-100">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]"></div>
    <h2 className="text-3xl font-bold text-gray-900 mb-1">Let's Build <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Something Amazing</span></h2>
    <p className="text-gray-600 mb-8">Kaisen UI powers 10,000+ projects. Yours could be next.</p>
    
    <div className="space-y-6">
      <div className="relative">
        <input type="text" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all placeholder-gray-900" placeholder="Your Name" />
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
      
      <div className="relative">
        <input type="email" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all placeholder-gray-900" placeholder="Email" />
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
      
      <div className="relative">
        <textarea className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all min-h-[120px] placeholder-gray-900" placeholder="Tell us about your project"></textarea>
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400 w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
      
      <button className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-300 transition-all hover:-translate-y-0.5">
        Send Message
        <span className="ml-2 inline-block h-2 w-2 rounded-full bg-white/80 animate-pulse"></span>
      </button>
    </div>
    
    <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-indigo-100 animate-[ping_2s_infinite]"></div>
  </div>
  );
};

export default ContactCard;
