
import React from "react";

const GlassmorphicCTA = () => {
  return (
    <div>
      <section className="py-20 w-full px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-rose-500 to-purple-600 p-8 md:p-12">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-10"></div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to build beautiful interfaces?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Start building with YourUI today and create stunning user interfaces in minutes, not hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-zinc-100 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
        </section>
    </div>
  );
};

export default GlassmorphicCTA;
