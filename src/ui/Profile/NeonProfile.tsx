
import React from "react";

const NeonProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-950 to-black p-6 md:p-10">
    <div className="max-w-6xl mx-auto">
      <div className="relative">
        <div className="absolute top-20 left-1/4 w-1/2 h-1/2 bg-fuchsia-600 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-1/3 h-1/3 bg-cyan-500 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/3">
              <div className="bg-black/60 backdrop-blur-xl border border-violet-500/20 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(149,76,233,0.25)]">
                <div className="p-8 flex flex-col items-center">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-fuchsia-600 via-violet-600 to-cyan-600 p-1">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <span className="text-4xl font-bold bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 text-transparent bg-clip-text">KU</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold mt-6 text-white">Zara Neon</h2>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 font-medium">Lead Developer at Kaisen UI</p>
                  
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent my-6"></div>
                  
                  <div className="grid grid-cols-3 w-full gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">63</div>
                      <div className="text-xs text-violet-300">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">21.5k</div>
                      <div className="text-xs text-violet-300">Followers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">5.8k</div>
                      <div className="text-xs text-violet-300">Following</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 w-full">
                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white font-medium relative overflow-hidden group">
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span className="relative">Connect</span>
                    </button>
                  </div>
                  
                  <div className="mt-6 w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-violet-300">Profile Completion</span>
                      <span className="text-xs text-violet-300">92%</span>
                    </div>
                    <div className="w-full h-1.5 bg-violet-900/50 rounded-full overflow-hidden">
                      <div className="h-full w-[92%] bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-black/60 backdrop-blur-xl border border-violet-500/20 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(149,76,233,0.25)] p-6">
                <h3 className="text-lg font-bold text-white">Tech Stack</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-fuchsia-900/50 to-fuchsia-800/50 text-fuchsia-300 text-xs">React</span>
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-900/50 to-violet-800/50 text-violet-300 text-xs">TypeScript</span>
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-900/50 to-purple-800/50 text-purple-300 text-xs">Next.js</span>
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-900/50 to-blue-800/50 text-blue-300 text-xs">Tailwind</span>
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-900/50 to-cyan-800/50 text-cyan-300 text-xs">GraphQL</span>
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-teal-900/50 to-teal-800/50 text-teal-300 text-xs">Node.js</span>
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-fuchsia-900/50 to-violet-800/50 text-fuchsia-300 text-xs">Kaisen UI</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3">
              <div className="bg-black/60 backdrop-blur-xl border border-violet-500/20 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(149,76,233,0.25)] p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">About Me</h3>
                  <div className="px-3 py-1 rounded-full bg-violet-900/50 text-violet-300 text-xs">Developer</div>
                </div>
                
                <p className="mt-4 text-violet-200">Building the future of web interfaces at Kaisen UI. Passionate about creating seamless, accessible, and visually stunning user experiences that push the boundaries of what's possible on the web.</p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white">Kaisen UI Projects</h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-black to-violet-950 border border-violet-500/20 rounded-xl p-5 group hover:border-violet-500/50 transition-all">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-fuchsia-600 to-violet-600 flex items-center justify-center text-white font-bold">KU</div>
                        <div className="px-2 py-1 rounded-full bg-violet-900/30 text-violet-300 text-xs">Active</div>
                      </div>
                      <h4 className="font-semibold mt-4 text-white">Kaisen UI Framework</h4>
                      <p className="text-sm text-violet-300 mt-1">Component library with 200+ elements</p>
                      <div className="mt-4 w-full h-1 bg-violet-900/30 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full"></div>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-xs text-violet-400">85% complete</span>
                        <span className="text-xs text-violet-400">v2.4.0</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-black to-violet-950 border border-violet-500/20 rounded-xl p-5 group hover:border-violet-500/50 transition-all">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center text-white font-bold">KA</div>
                        <div className="px-2 py-1 rounded-full bg-blue-900/30 text-blue-300 text-xs">Beta</div>
                      </div>
                      <h4 className="font-semibold mt-4 text-white">Kaisen Analytics</h4>
                      <p className="text-sm text-violet-300 mt-1">Real-time user behavior tracking</p>
                      <div className="mt-4 w-full h-1 bg-violet-900/30 rounded-full overflow-hidden">
                        <div className="h-full w-[62%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-xs text-violet-400">62% complete</span>
                        <span className="text-xs text-violet-400">v0.9.2</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white">Activity</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-600 flex-shrink-0 flex items-center justify-center text-white text-xs">ZN</div>
                      <div>
                        <p className="text-violet-200">Released <span className="text-white font-medium">Kaisen UI v2.4.0</span> with new animation library and improved accessibility</p>
                        <p className="text-xs text-violet-400 mt-1">2 days ago</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-600 flex-shrink-0 flex items-center justify-center text-white text-xs">ZN</div>
                      <div>
                        <p className="text-violet-200">Started development on <span className="text-white font-medium">Kaisen Mobile SDK</span></p>
                        <p className="text-xs text-violet-400 mt-1">1 week ago</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-600 flex-shrink-0 flex items-center justify-center text-white text-xs">ZN</div>
                      <div>
                        <p className="text-violet-200">Published article <span className="text-white font-medium">"The Future of UI Design with Kaisen"</span></p>
                        <p className="text-xs text-violet-400 mt-1">2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-black/60 backdrop-blur-xl border border-violet-500/20 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(149,76,233,0.25)] p-6">
                <h3 className="text-lg font-bold text-white">Contact</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 flex items-center justify-center text-white text-xs">@</div>
                    <span className="text-violet-200">zara@kaisenui.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center text-white text-xs">W</div>
                    <span className="text-violet-200">kaisenui.com/team/zara</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white text-xs">L</div>
                    <span className="text-violet-200">Tokyo, Japan</span>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-3">
                  <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white text-sm">Message</button>
                  <button className="flex-1 py-2 rounded-lg bg-black border border-violet-500 text-violet-300 text-sm">Share Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default NeonProfile;
