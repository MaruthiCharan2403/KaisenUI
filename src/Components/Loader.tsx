import React from 'react';

export default function Loader() {
  return (
    <div className="relative flex justify-center items-center h-32">
      {/* Spinning tire */}
      <div className="absolute animate-bounce text-6xl">
      ☢
      </div>
      
      {/* Road line animation */}
      <div className="absolute w-full h-2 bg-yellow-400 animate-road-line"></div>
      
      
      
      
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes road-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes smoke {
          0% { 
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-20px) scale(1.5);
            opacity: 0.3;
          }
          100% { 
            transform: translateY(-40px) scale(0.5);
            opacity: 0;
          }
        }
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
        .animate-road-line {
          animation: road-line 1.5s linear infinite;
        }
        .animate-smoke {
          animation: smoke 3s ease-out infinite;
        }
      `}</style>
    </div>
  );
}