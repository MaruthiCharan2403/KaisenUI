
import React from "react";

const Colorgrid = () => {
  return (
    <div className="py-20 w-full px-4 md:px-8 bg-white/5">
  <div className="max-w-7xl mx-auto flex flex-col items-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
      The <span className="text-pink-500">Creators</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-3xl">
      {[
        { name: "Charan", role: "Developer", color: "bg-pink-500" },
        { name: "Varun", role: "Developer", color: "bg-blue-500" }
      ].map((person, i) => (
        <div key={i} className="relative group mx-auto w-full max-w-xs">
          <div className={`${person.color} h-60 rounded-2xl transform transition-all group-hover:scale-95`}></div>
          <div className="absolute inset-0 flex items-end p-6">
            <div className="bg-black/80 backdrop-blur-sm w-full p-4 rounded-xl transform transition-all translate-y-4 group-hover:translate-y-0">
              <h3 className="text-xl font-bold">{person.name}</h3>
              <p className="text-gray-400">{person.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default Colorgrid;
