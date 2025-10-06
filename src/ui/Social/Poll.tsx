
import React from "react";

const Poll = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg border border-white w-full max-w-md">
  <h3 className="text-2xl font-bold text-blue-600 mb-4">What's your favorite Kaisen UI feature?</h3>
  <div className="space-y-3 mb-5">
    {['Component Library', 'Dark Mode System', 'Performance', 'Customization'].map((option, i) => (
      <div key={i} className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <button className="relative w-full text-left p-3 pl-5 bg-white rounded-full border border-blue-100 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between">
          <span className="text-blue-800 font-medium">{option}</span>
          <span className="text-blue-400 font-bold text-sm">23%</span>
        </button>
      </div>
    ))}
  </div>
  <div className="flex justify-between items-center pt-3 border-t border-blue-100">
    <span className="text-sm text-blue-500">128 votes</span>
    <button className="px-5 py-2 bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200">
      Vote Now
    </button>
  </div>
</div>
  );
};

export default Poll;
