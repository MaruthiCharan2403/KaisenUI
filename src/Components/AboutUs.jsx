import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AboutUs() {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
  {/* Hero Section with Animated Elements */}
  <div className="relative h-screen flex items-center justify-center">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
    </div>
    
    <div className="relative z-10 text-center px-4">
      <div className="mb-6 flex justify-center">
        <div className="relative">
          <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center transform rotate-12">
            <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center transform -rotate-12">
              <span className="text-white text-3xl font-bold">UI</span>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-pink-500 rounded-lg"></div>
        </div>
      </div>
      <h1 className="text-6xl md:text-8xl font-extrabold mb-4">KAISEN<span className="text-pink-500">UI</span></h1>
      <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300">Crafting tomorrow's interfaces with today's code</p>
    </div>
    
    <div className="absolute bottom-10 left-0 right-0 flex justify-center">
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  </div>

  {/* Our Mission */}
  <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-pink-500">Mission</span></h2>
        <p className="text-xl text-gray-300 mb-6">We're on a mission to democratize beautiful interfaces. Our component library empowers developers to create stunning experiences without sacrificing performance or accessibility.</p>
        <div className="flex flex-wrap gap-4">
          <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl">Accessible</div>
          <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl">Performant</div>
          <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl">Customizable</div>
          <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl">Modern</div>
        </div>
      </div>
      <div className="md:w-1/2 md:pl-10">
        <div className="relative">
          <div className="w-full h-64 md:h-80 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl"></div>
          <div className="absolute top-6 left-6 right-6 bottom-6 bg-black rounded-xl flex items-center justify-center">
            <div className="grid grid-cols-3 gap-3 p-6">
              {[...Array(9)].map((_, i) => (
                <div key={i} className={`h-12 rounded-lg ${
                  ['bg-blue-500', 'bg-pink-500', 'bg-purple-500', 'bg-yellow-500', 'bg-green-500', 'bg-red-500', 'bg-indigo-500', 'bg-orange-500', 'bg-teal-500'][i]
                }`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Team Section */}
  <div className="py-20 px-4 md:px-8 bg-white/5">
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

  {/* Features */}
  <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Why <span className="text-pink-500">KAISEN</span>UI?</h2>
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

  {/* CTA */}
  <div className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to build <span className="text-pink-500">beautiful</span> interfaces?</h2>
      <p className="text-xl text-gray-300 mb-10">Join thousands of developers creating amazing experiences with KAISENUI</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors" onClick={()=>{navigate('/components')}}>Get Started</button>
        {/* <button className="px-8 py-4 bg-transparent border-2 border-white rounded-xl hover:bg-white/10 transition-colors">View Documentation</button> */}
      </div>
    </div>
  </div>

  {/* Footer */}
  {/* <div className="py-10 px-4 md:px-8 border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-6 md:mb-0">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
          <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
            <span className="text-white text-xs font-bold">UI</span>
          </div>
        </div>
        <span className="text-xl font-bold">PRISMUI</span>
      </div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-pink-500 transition-colors">GitHub</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Twitter</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Discord</a>
        <a href="#" className="hover:text-pink-500 transition-colors">Documentation</a>
      </div>
    </div> */}
  {/* </div> */}
</div>
  )
}
