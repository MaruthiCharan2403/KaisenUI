
import React from "react";

const GradientCTA = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-xl"></div>
    <div className="relative z-10">
      <h3 className="mb-2 text-2xl font-bold text-white">Elevate Your UI Experience</h3>
      <p className="mb-4 text-white/80">Join thousands of developers using Kaisen UI to build stunning interfaces.</p>
      <button className="rounded-lg bg-white px-6 py-2 font-medium text-indigo-600 shadow-lg transition-all hover:bg-opacity-90 dark:shadow-indigo-900/20">Get Started</button>
    </div>
  </div>
  );
};

export default GradientCTA;
