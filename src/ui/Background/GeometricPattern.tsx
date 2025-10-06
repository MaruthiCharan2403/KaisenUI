
import React from "react";

const GeometricPattern = () => {
  return (
    <div className="fixed overflow-hidden h-screen w-screen   rounded-2xl bg-white dark:bg-gray-800 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className={`transform transition-all duration-700 hover:scale-110 ${
                  i % 3 === 0
                    ? "bg-rose-400 dark:bg-rose-600"
                    : i % 3 === 1
                      ? "bg-amber-400 dark:bg-amber-600"
                      : "bg-emerald-400 dark:bg-emerald-600"
                } ${Math.random() > 0.5 ? "opacity-80" : "opacity-40"}`}
              ></div>
            ))}
          </div>
          <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center">
            <span className="text-gray-800 dark:text-white font-bold text-xl">Geometric Pattern</span>
          </div>
        </div>
  );
};

export default GeometricPattern;
