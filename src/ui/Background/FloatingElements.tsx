
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
                width: `${crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295 * 20 + 5}px`,
                height: `${crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295 * 20 + 5}px`,
                left: `${crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295 * 100}%`,
                top: `${crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295 * 100}%`,
                opacity: crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295 * 0.5 + 0.3,
                animation: `float ${crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295 * 10 + 10}s linear infinite`,
                animationDelay: `${crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295 * 5}s`,
              }}
            ></div>
          ))}
          <span className="text-gray-800 dark:text-white font-bold text-xl relative z-10">Floating Elements</span>
        </div>
  );
};

export default FloatingElements;
