import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Copy, Check, ChevronRight, Github, Twitter } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
  <Link 
    to="/" 
    className="text-xl font-bold"
  >
    <span className="text-white">Kaisen</span>
    <span className="text-pink-500"> UI</span>
  </Link>
</div>
          <div className="hidden md:flex space-x-8">
            
            <Link to="/components" className="text-zinc-300 hover:text-white transition-colors">
              Components
            </Link>
            <Link to="/about" className="text-zinc-300 hover:text-white transition-colors">
              About Us
            </Link>
            
          </div>
          <div className="flex items-center space-x-4">
            
            <Link
              to="/components"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-zinc-200 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}