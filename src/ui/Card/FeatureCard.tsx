
import React from "react";

const FeatureCard = () => {
  return (
    <div className="py-20 w-full px-4 md:px-8 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: "100+ Components", desc: "Everything you need to build modern interfaces", color: "from-purple-600 to-blue-600" },
        { title: "Zero Dependencies", desc: "Lightweight and blazing fast performance", color: "from-pink-600 to-purple-600" },
        { title: "Fully Customizable", desc: "Tailor components to match your brand", color: "from-blue-600 to-cyan-600" },
        { title: "Dark Mode Ready", desc: "Beautiful in light and dark themes", color: "from-pink-600 to-red-600" }
      ].map((feature, i) => (
        <div key={i} className="relative overflow-hidden rounded-2xl h-64 group">
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-90 transition-transform duration-500 group-hover:scale-110`}></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.desc}</p>
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default FeatureCard;
