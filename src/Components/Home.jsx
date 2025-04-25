
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import { Copy, Check, ChevronRight, Github, Twitter } from "lucide-react"

export default function Home() {
  const [copied, setCopied] = useState(false)
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText("npm install @yourlib/ui")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-zinc-100">
      {/* Header */}
      
      
{/* Main content - wild cards */}
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}

        </div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              <span className="block">Beautiful UI Components</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-purple-500 to-violet-500">
                For Modern Web Apps
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-zinc-400">
              A collection of high-quality React components built with Tailwind CSS that you can copy and paste into
              your apps.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/components"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-zinc-200 transition-colors"
              >
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              
            </div>
          </div>

          </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600">
              Why Choose Kaisen UI?
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Designed for developers who want beautiful components without sacrificing flexibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-rose-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-zinc-400">
                Optimized for performance with zero unnecessary code. Your apps stay fast, always.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Customizable</h3>
              <p className="text-zinc-400">
                Every component is designed to be easily customized to match your brand's unique style.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-violet-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility First</h3>
              <p className="text-zinc-400">
                Built with accessibility in mind. All components follow WAI-ARIA standards.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-fuchsia-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-zinc-400">Components that look great on any device, from mobile to desktop.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-pink-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Developer Experience</h3>
              <p className="text-zinc-400">Intuitive API with comprehensive documentation and TypeScript support.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-rose-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Copy & Paste</h3>
              <p className="text-zinc-400">No complicated setup. Just copy, paste, and customize to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      

      

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
                <Link
                  to="/components"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-zinc-100 transition-colors"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  )
}
