
import React from "react";

const GetStarted = () => {
  return (
    <div className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to build <span className="text-pink-500">beautiful</span> interfaces?</h2>
      <p className="text-xl text-gray-300 mb-10">Join thousands of developers creating amazing experiences with KAISENUI</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors" onClick={()=>{navigate('/components')}}>Get Started</button>
        
      </div>
    </div>
  </div>
  );
};

export default GetStarted;
