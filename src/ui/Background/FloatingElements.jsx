
import React from "react";

const FloatingElements = () => {
  return (
    <div className="fixed overflow-hidden h-screen w-screen  bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 shadow-xl flex items-center justify-center relative overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${
                i % 4 === 0
                  ? "bg-cyan-400 dark:bg-cyan-600"
                  : i % 4 === 1
                    ? "bg-pink-400 dark:bg-pink-600"
                    : i % 4 === 2
                      ? "bg-yellow-400 dark:bg-yellow-600"
                      : "bg-green-400 dark:bg-green-600"
              }`}
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
          <span className="text-gray-800 dark:text-white font-bold text-xl relative z-10">Floating Elements</span>
        </div>
  );
};

export default FloatingElements;
