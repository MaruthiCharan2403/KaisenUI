"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Copy, Check, Code, Eye, ChevronDown, ChevronRight, Search, Github } from "lucide-react"

// Component categories
const componentCategories = [
  { name: "Article" },
  { name: "Avatar" },
  { name: "Banner" },
  { name: "Blog" },
  { name: "Breadcrumb" },
  { name: "Button" },
  { name: "Call to action" },
  { name: "Card" },
  { name: "Carousel" },
  { name: "Contact" },
  { name: "Error" },
  { name: "Faq" },
  { name: "Feature" },
  { name: "Footer" },
  { name: "Form" },
  { name: "Gallery" },
  { name: "Header" },
  { name: "Hero" },
  { name: "Input" },
  { name: "Loading" },
  { name: "Login" },
  { name: "Modal" },
  { name: "News" },
  { name: "Pagination" },
  { name: "Pricing" },
  { name: "Profile" },
  { name: "Review" },
  { name: "Shopping cart" },
  { name: "Sidebar" },
  { name: "Skeleton loader" },
  { name: "Slider" },
  { name: "Snackbar" },
  { name: "Stats" },
  { name: "Steps" },
  { name: "Table" },
  { name: "Tabs" },
  { name: "Team" },
  { name: "Testimonial" },
  { name: "Timeline" },
  { name: "Toggle" },
  { name: "Weather" },
]

// Sample component data
const sampleComponents = {
  Button: [
    {
      id: "glow-button",
      name: "Glow Button",
      description: "A button with a glowing effect",
      code: `<div className="relative group">
  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 animate-[pulse_2s_infinite]"></div>
  <button className="relative px-6 py-3 bg-white dark:bg-gray-900 rounded-lg font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 group-hover:border-transparent transition-all duration-300 group-hover:text-white group-hover:bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 shadow-lg group-hover:shadow-indigo-500/20">
    Kaisen Mode
  </button>
</div>`,
      preview: () => (
        <div className="relative group">
  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 animate-[pulse_2s_infinite]"></div>
  <button className="relative px-6 py-3 bg-white dark:bg-gray-900 rounded-lg font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 group-hover:border-transparent transition-all duration-300 group-hover:text-white group-hover:bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 shadow-lg group-hover:shadow-indigo-500/20">
    Kaisen Mode
  </button>
</div>
      ),
    },
    {
      id: "neon-button",
      name: "Neon Button",
      description: "A button with a neon effect",
      code: `<button className="relative px-6 py-3 font-medium text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-900 rounded-lg overflow-hidden transition-all duration-500 hover:text-white">
  <span className="relative z-10">Activate UI</span>
  <div className="absolute inset-0 border-2 border-indigo-400 dark:border-indigo-500 rounded-lg opacity-70 hover:opacity-100 hover:animate-[spin_3s_linear_infinite]"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
</button>`,
      preview: () => (
        <button className="relative px-6 py-3 font-medium text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-900 rounded-lg overflow-hidden transition-all duration-500 hover:text-white">
  <span className="relative z-10">Activate UI</span>
  <div className="absolute inset-0 border-2 border-indigo-400 dark:border-indigo-500 rounded-lg opacity-70 hover:opacity-100 hover:animate-[spin_3s_linear_infinite]"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
</button>
      ),
    },
    {
      id: "liquid-button",
      name: "Liquid Button",
      description: "A button with a liquid effect",
      code: `<div className="relative group">
  <button className="px-8 py-4 font-bold text-white bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-700 hover:bg-transparent">
    <span className="relative z-10">Unlock Kaisen</span>
    <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"></div>
  </button>
  <div className="absolute -bottom-1 -left-1 -right-1 -top-1 rounded-xl border-2 border-indigo-500 dark:border-indigo-400 opacity-0 group-hover:opacity-100 group-hover:animate-[ping_1.5s_ease-in-out_infinite] pointer-events-none"></div>
</div>`,
      preview: () => (
        <div className="relative group">
  <button className="px-8 py-4 font-bold text-white bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-700 hover:bg-transparent">
    <span className="relative z-10">Unlock Kaisen</span>
    <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"></div>
  </button>
  <div className="absolute -bottom-1 -left-1 -right-1 -top-1 rounded-xl border-2 border-indigo-500 dark:border-indigo-400 opacity-0 group-hover:opacity-100 group-hover:animate-[ping_1.5s_ease-in-out_infinite] pointer-events-none"></div>
</div>
      ),
    },
  ],
  Card: [
    {
      id: "basic-card",
      name: "Basic Card",
      description: "A simple card with title and content",
      code: `        <div className="bg-black bg-opacity-60 backdrop-blur-lg rounded-3xl p-8 border-4 border-yellow-400 transform hover:rotate-1 hover:scale-105 transition-all duration-300 shadow-2xl shadow-yellow-500/20">
          <div className="text-6xl mb-4 text-yellow-400">🔍</div>
          <h2 className="text-3xl font-bold mb-4 text-white">LASER-EYE DETECTION</h2>
          <p className="text-gray-300 text-lg">
            Our AI-powered scanners at toll plazas examine your tires with precision that would make NASA jealous. 
            We spot tread wear, pressure issues, and potential blowouts before they happen!
          </p>
        </div>`,
      preview: () => (
        <div className="bg-black bg-opacity-60 backdrop-blur-lg rounded-3xl p-8 border-4 border-yellow-400 transform hover:rotate-1 hover:scale-105 transition-all duration-300 shadow-2xl shadow-yellow-500/20">
          <div className="text-6xl mb-4 text-yellow-400">🔍</div>
          <h2 className="text-3xl font-bold mb-4 text-white">LASER-EYE DETECTION</h2>
          <p className="text-gray-300 text-lg">
            Our AI-powered scanners at toll plazas examine your tires with precision that would make NASA jealous.
            We spot tread wear, pressure issues, and potential blowouts before they happen!
          </p>
        </div>
      ),
    },
  ],
  Article: [
    {
      id: "basic-article",
      name: "Colorful Article",
      description: "A simple article layout with title and content",
      code: `<div className="max-w-md mx-auto bg-black border-4 border-purple-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-pink-500 font-bold">CYBERPUNK EDITION</div>
          <h2 className="block mt-1 text-2xl leading-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            HOW TO HACK YOUR BRAIN FOR FUN AND PROFIT
          </h2>
          <p className="mt-3 text-gray-300 text-justify">
            Scientists discovered that eating 37 bananas while standing on one foot unlocks 90% of your brain's potential.
          </p>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">AI</div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-purple-300">Anonymous Intelligence</p>
              <p className="text-sm text-blue-300">April 31, 2099</p>
            </div>
          </div>
        </div>
      </div>`,
      preview: () => (
        <div className="max-w-md mx-auto bg-black border-4 border-purple-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-pink-500 font-bold">CYBERPUNK EDITION</div>
            <h2 className="block mt-1 text-2xl leading-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              HOW TO HACK YOUR BRAIN FOR FUN AND PROFIT
            </h2>
            <p className="mt-3 text-gray-300 text-justify">
              Scientists discovered that eating 37 bananas while standing on one foot unlocks 90% of your brain's potential.
            </p>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">AI</div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-purple-300">Anonymous Intelligence</p>
                <p className="text-sm text-blue-300">April 31, 2099</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "featured-article",
      name: "Featured Article",
      description: "A featured article with image and content",
      code: `<div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
  <div className="p-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
  <div className="p-6">
    <div className="flex justify-between items-start">
      <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">Kaisen UI</span>
      <span className="text-xs text-gray-400">Component Showcase</span>
    </div>
    
    <h2 className="mt-4 text-2xl font-bold text-gray-800 leading-tight">The Art of Minimal Design</h2>
    <p className="mt-2 text-gray-600">Discover how Kaisen UI helps you build cleaner interfaces faster with our thoughtfully designed components.</p>
    
    <div className="mt-6 pt-4 border-t border-gray-100">
      <p className="text-sm text-gray-500">"Kaisen UI components remove the clutter so you can focus on what matters - creating exceptional user experiences."</p>
      <div className="mt-4 flex items-center">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">Kaisen Team</p>
          <p className="text-xs text-gray-500">UI Architects</p>
        </div>
        <button className="px-4 py-2 text-xs font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          Explore More
        </button>
      </div>
    </div>
  </div>
</div>`,
      preview: () => (
        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="p-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
          <div className="p-6">


            <h2 className="mt-4 text-2xl font-bold text-gray-800 leading-tight">The Art of Minimal Design</h2>
            <p className="mt-2 text-gray-600">Discover how Kaisen UI helps you build cleaner interfaces faster with our thoughtfully designed components.</p>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">"Kaisen UI components remove the clutter so you can focus on what matters - creating exceptional user experiences."</p>
              <div className="mt-4 flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Kaisen Team</p>
                  <p className="text-xs text-gray-500">UI Architects</p>
                </div>
                <button className="px-4 py-2 text-xs font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "blog-article",
      name: "Blog Article",
      description: "A blog article layout with title and content",
      code: `<div className="group relative max-w-2xl mx-auto bg-white dark:bg-gray-900 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700"></div>
  <div className="pl-8 pr-6 py-6">
    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/50 rounded-full uppercase">
      Kaisen Component
    </span>
    <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-indigo-600 to-purple-600">
      Building Modern UIs with Kaisen
    </h2>
    <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
      <span>Published on May 15, 2023</span>
      <span>•</span>
      <span>5 min read</span>
    </div>
    <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
      Discover how Kaisen UI revolutionizes your workflow with atomic design principles and zero-runtime CSS. Our library provides the perfect balance between customization and convenience for React developers.
    </p>
    <div className="mt-6">
      <a href="#" className="inline-flex items-center font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
        <span>Read more</span>
        <span className="ml-1.5 block w-0 group-hover:w-4 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300"></span>
      </a>
    </div>
  </div>
  <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
    <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,gray_1px,transparent_1px),linear-gradient(to_bottom,gray_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,gray_1px,transparent_1px),linear-gradient(to_bottom,gray_1px,transparent_1px)]"></div>
  </div>
</div>`,
      preview: () => (
        <div className="group relative max-w-2xl mx-auto bg-white dark:bg-gray-900 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700"></div>
          <div className="pl-8 pr-6 py-6">

            <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-indigo-600 to-purple-600">
              Building Modern UIs with Kaisen
            </h2>
            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Published on May 15, 2023</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Discover how Kaisen UI revolutionizes your workflow with atomic design principles and zero-runtime CSS. Our library provides the perfect balance between customization and convenience for React developers.
            </p>
            <div className="mt-6">
              <a href="#" className="inline-flex items-center font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
                <span>Read more</span>
                <span className="ml-1.5 block w-0 group-hover:w-4 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300"></span>
              </a>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,gray_1px,transparent_1px),linear-gradient(to_bottom,gray_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,gray_1px,transparent_1px),linear-gradient(to_bottom,gray_1px,transparent_1px)]"></div>
          </div>
        </div>

      )
    }
  ],
  Avatar: [
    {
      id: "basic-avatar",
      name: "Basic Avatar",
      description: "A simple avatar with a border",
      code: `<div className="relative inline-block">
  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-300 to-purple-400 dark:from-indigo-500 dark:to-purple-600 overflow-hidden border-2 border-white dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-xl font-bold text-white">KU</span>
    </div>
  </div>
  <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-white dark:border-gray-800 bg-emerald-400 dark:bg-emerald-500"></div>
  <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-white dark:border-gray-800 animate-ping bg-emerald-400 dark:bg-emerald-500 opacity-75"></div>
</div>`,
      preview: () => (
        <div className="relative inline-block">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-300 to-purple-400 dark:from-indigo-500 dark:to-purple-600 overflow-hidden border-2 border-white dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-white">KU</span>
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-white dark:border-gray-800 bg-emerald-400 dark:bg-emerald-500"></div>
          <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-white dark:border-gray-800 animate-ping bg-emerald-400 dark:bg-emerald-500 opacity-75"></div>
        </div>
      ),
    },
    {
      id: "group-avatar",
      name: "Group Avatar",
      description: "A rounded avatar with shadow",
      code: `<div className="flex -space-x-3">
  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:z-10 hover:scale-110 transition-transform duration-200">KU</div>
  <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-indigo-600 dark:text-indigo-300 hover:z-10 hover:scale-110 transition-transform duration-200">KS</div>
  <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-purple-600 dark:text-purple-300 hover:z-10 hover:scale-110 transition-transform duration-200">EN</div>
  <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-200 hover:z-10 hover:scale-110 transition-transform duration-200">+3</div>
</div>`,
      preview: () => (
        <div className="flex -space-x-3">
          <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:z-10 hover:scale-110 transition-transform duration-200">KU</div>
          <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-indigo-600 dark:text-indigo-300 hover:z-10 hover:scale-110 transition-transform duration-200">KS</div>
          <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-purple-600 dark:text-purple-300 hover:z-10 hover:scale-110 transition-transform duration-200">EN</div>
          <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-white dark:border-gray-800 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-200 hover:z-10 hover:scale-110 transition-transform duration-200">+3</div>
        </div>
      ),
    },
  ],
  Banner: [

    {
      id: "hero-banner",
      name: "Hero Banner",
      description: "A hero banner with image and call to action",
      code: `<div className="relative p-6 bg-white dark:bg-gray-900 rounded-lg group">
  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 p-0.5 -z-10">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-lg animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-20 transition-opacity"></div>
  </div>
  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Why Kaisen UI?</h3>
  <p className="mt-2 text-gray-600 dark:text-gray-300">Experience the perfect blend of customization and performance with our atomic design system.</p>
  <div className="mt-4 inline-block px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Explore Components</div>
</div>`,
      preview: () => (
        <div className="relative p-6 bg-white dark:bg-gray-900 rounded-lg group">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 p-0.5 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-lg animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Why Kaisen UI?</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Experience the perfect blend of customization and performance with our atomic design system.</p>
          <div className="mt-4 inline-block px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Explore Components</div>
        </div>
      ),
    },
    {
      id: "Marketing Banner",
      name: "Marketing Banner",
      description: "A marketing banner with image and text",
      code: `<div className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 px-6 py-8 shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-600/30">
  <div className="absolute -top-16 -right-4 h-32 w-32 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-xl"></div>
  <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-xl"></div>
  <div className="relative z-10">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Supercharge Your Development
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Kaisen UI v2.0 is here - 40% faster, 30% lighter, and packed with new components. Join 10,000+ developers who ship better UIs faster.
        </p>
      </div>
      <div className="flex-shrink-0">
        <div className="inline-flex items-center gap-x-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <span>Get Started</span>
          <span className="h-3 w-3 rounded-full bg-white/20 animate-pulse"></span>
        </div>
      </div>
    </div>
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">100+</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Components</p>
      </div>
      <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">10K+</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Developers</p>
      </div>
      <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">40%</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Faster</p>
      </div>
      <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">0ms</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Runtime</p>
      </div>
    </div>
  </div>
</div>`,
      preview: () => (
        <div className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 px-6 py-8 shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-600/30">        <div className="absolute -top-16 -right-4 h-32 w-32 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-xl"></div>
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-xl"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Supercharge Your Development
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Kaisen UI v2.0 is here - 40% faster, 30% lighter, and packed with new components. Join 10,000+ developers who ship better UIs faster.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="inline-flex items-center gap-x-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <span>Get Started</span>
                  <span className="h-3 w-3 rounded-full bg-white/20 animate-pulse"></span>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">100+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Components</p>
              </div>
              <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">10K+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Developers</p>
              </div>
              <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">40%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Faster</p>
              </div>
              <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">0ms</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Runtime</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "pricing-banner",
      name: "Pricing Banner",
      description: "A pricing banner with image and call to action",
      code: `<div className="relative bg-gradient-to-r from-purple-500 to-purple-400 dark:from-purple-700 dark:to-purple-500 w-full p-6 flex flex-col sm:flex-row items-center justify-between rounded-lg overflow-hidden shadow-lg border border-purple-300/30 dark:border-purple-600/30">      
      <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -top-8 -left-8 w-40 h-40 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>
      <div className="text-left z-10 transform -rotate-1">
        <h2 className="text-4xl font-black text-white drop-shadow-sm">Up to 50% Off</h2>
      </div>
      <div className="text-white text-lg font-medium my-3 sm:my-0 mx-4 z-10 flex items-center">
        <div className="inline-block mr-2 w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
        Plus free shipping! Use code: 
        <span className="ml-2 font-mono font-bold bg-white/20 backdrop-blur-sm px-3 py-1 rounded border-b-2 border-white/30">KAISEN50</span>
      </div>
      <div className="z-10">
        <button className="relative group bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-300 px-8 py-2.5 rounded-lg font-semibold overflow-hidden">
          <span className="relative z-10">Shop Now</span>
          <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-500 dark:to-pink-500 transition-all duration-300 group-hover:w-full"></div>
          <div className="absolute inset-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0 bg-white/20 dark:bg-white/10 blur-xl"></div>
        </button>
      </div>
    </div>`,
      preview: () => (
        <div className="relative bg-gradient-to-r from-purple-500 to-purple-400 dark:from-purple-700 dark:to-purple-500 w-full p-6 flex flex-col sm:flex-row items-center justify-between rounded-lg overflow-hidden shadow-lg border border-purple-300/30 dark:border-purple-600/30">
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="text-left z-10 transform -rotate-1">
            <h2 className="text-4xl font-black text-white drop-shadow-sm">Up to 50% Off</h2>
          </div>

          <div className="text-white text-lg font-medium my-3 sm:my-0 mx-4 z-10 flex items-center">
            <div className="inline-block mr-2 w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
            Plus free shipping! Use code:
            <span className="ml-2 font-mono font-bold bg-white/20 backdrop-blur-sm px-3 py-1 rounded border-b-2 border-white/30">KAISEN50</span>
          </div>

          <div className="z-10">
            <button className="relative group bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-300 px-8 py-2.5 rounded-lg font-semibold overflow-hidden">
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-500 dark:to-pink-500 transition-all duration-300 group-hover:w-full"></div>
              <div className="absolute inset-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0 bg-white/20 dark:bg-white/10 blur-xl"></div>
            </button>
          </div>


        </div>
      )

    }
  ],
  Blog: [
    {
      id: "basic-blog",
      name: "Basic Blog",
      description: "A simple Blog with a border",
      code: `<div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
  <div className="h-48 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50"></div>
  <div className="p-6">
    <div className="flex gap-2 mb-4">
      <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">Kaisen UI</span>
      <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">Tutorial</span>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Mastering Component Composition</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">Learn how to combine Kaisen UI components like atomic particles to create stunning interfaces with minimal effort.</p>
    <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
      <span>May 15, 2023</span>
      <span className="mx-2">•</span>
      <span>5 min read</span>
    </div>
  </div>
</div>`,
      preview: () => (
        <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
          <div className="h-48 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50"></div>
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">Kaisen UI</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">Tutorial</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Mastering Component Composition</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">Learn how to combine Kaisen UI components like atomic particles to create stunning interfaces with minimal effort.</p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
              <span>May 15, 2023</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "featured-blog",
      name: "Featured Blog",
      description: "A rounded avatar with shadow",
      code: `<div className="relative isolate">
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl transform group-hover:scale-[1.01] transition-transform duration-300"></div>
  <div className="p-8">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">Why Kaisen UI is the Future of React Development</h2>
    <div className="flex items-start gap-8">
      <div className="flex-1">
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-400 mb-6">Discover how Kaisen UI's zero-runtime approach eliminates bundle bloat while delivering stunning visual results through our atomic design system.</p>
        <div className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          Continue Reading
          <span className="ml-2 w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
        </div>
      </div>
      <div className="hidden md:block w-32 h-32 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50"></div>
    </div>
  </div>
</div>`,
      preview: () => (
        <div className="relative isolate">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl transform group-hover:scale-[1.01] transition-transform duration-300"></div>
          <div className="p-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">Why Kaisen UI is the Future of React Development</h2>
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <p className="text-lg leading-8 text-gray-600 dark:text-gray-400 mb-6">Discover how Kaisen UI's zero-runtime approach eliminates bundle bloat while delivering stunning visual results through our atomic design system.</p>
                <div className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  Continue Reading
                  <span className="ml-2 w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                </div>
              </div>
              <div className="hidden md:block w-32 h-32 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id:"blog-post",
      name: "Blog Post",
      description: "A blog post with image and text",
      code:`<div className="py-6 border-b border-gray-200 dark:border-gray-800 group">
  <div className="flex gap-6">
    <div className="flex-shrink-0 w-24 h-24 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden"></div>
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Advanced Theming in Kaisen UI</h3>
      <p className="mt-1 text-gray-600 dark:text-gray-400 line-clamp-2">Deep dive into our theming system that adapts to both light and dark modes while maintaining perfect contrast ratios.</p>
      <div className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-500">
        <span>June 2, 2023</span>
        <span className="mx-2">•</span>
        <span>Kaisen UI Team</span>
        <span className="mx-2">•</span>
        <span>7 min read</span>
      </div>
    </div>
  </div>
</div>`,
preview: () => (
  <div className="py-6 border-b border-gray-200 dark:border-gray-800 group">
  <div className="flex gap-6">
    <div className="flex-shrink-0 w-24 h-24 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden"></div>
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Advanced Theming in Kaisen UI</h3>
      <p className="mt-1 text-gray-600 dark:text-gray-400 line-clamp-2">Deep dive into our theming system that adapts to both light and dark modes while maintaining perfect contrast ratios.</p>
      <div className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-500">
        <span>June 2, 2023</span>
        <span className="mx-2">•</span>
        <span>Kaisen UI Team</span>
        <span className="mx-2">•</span>
        <span>7 min read</span>
      </div>
    </div>
  </div>
</div>
)
    }
  ],
  Breadcrumb: [
    {
      id: "basic-breadcrumb",
      name: "Basic Breadcrumb",
      description: "A simple Breadcrumb with a border",
      code: `<div className="flex items-center space-x-2 text-sm">  
  <a href="#" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">Kaisen UI</a>  
  <span className="text-gray-400 dark:text-gray-500">/</span>  
  <a href="#" className="font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Docs</a>  
  <span className="text-gray-400 dark:text-gray-500">/</span>  
  <a href="#" className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">Components</a>  
  <span className="text-gray-400 dark:text-gray-500">/</span>  
  <span className="font-semibold text-gray-900 dark:text-white">Breadcrumb</span>  
</div>  `,
      preview: () => (
        <div className="flex items-center space-x-2 text-sm">  
  <a href="#" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">Kaisen UI</a>  
  <span className="text-gray-400 dark:text-gray-500">/</span>  
  <a href="#" className="font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Docs</a>  
  <span className="text-gray-400 dark:text-gray-500">/</span>  
  <a href="#" className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">Components</a>  
  <span className="text-gray-400 dark:text-gray-500">/</span>  
  <span className="font-semibold text-gray-900 dark:text-white">Breadcrumb</span>  
</div>  
      ),
    },
    {
      id: "Underline-Breadcrumb",
      name: "Underline Breadcrumb",
      description: "A Breadcrumb with underline effect",
      code: `<div className="flex items-center gap-2">  
  <a href="#" className="relative px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">  
    <span>Kaisen UI</span>  
    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 hover:w-full"></span>  
  </a>  
  <span className="text-gray-400 dark:text-gray-500">›</span>  
  <a href="#" className="relative px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">  
    <span>Blog</span>  
    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 hover:w-full"></span>  
  </a>  
  <span className="text-gray-400 dark:text-gray-500">›</span>  
  <span className="px-2 py-1 font-semibold text-gray-900 dark:text-white">Breadcrumbs</span>  
</div>  `,
      preview: () => (
        <div className="flex items-center gap-2">  
  <a href="#" className="relative px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">  
    <span>Kaisen UI</span>  
    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 hover:w-full"></span>  
  </a>  
  <span className="text-gray-400 dark:text-gray-500">›</span>  
  <a href="#" className="relative px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">  
    <span>Blog</span>  
    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 hover:w-full"></span>  
  </a>  
  <span className="text-gray-400 dark:text-gray-500">›</span>  
  <span className="px-2 py-1 font-semibold text-gray-900 dark:text-white">Breadcrumbs</span>  
</div>  
      ),
    },
  ],
  Weather: [
    {
      id: "weather-card",
      name: "Weather Card",
      description: "A clean weather display card with temperature, condition, and Kaisen UI branding.",
      code: `<div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 w-64 shadow-sm hover:shadow-md transition-shadow">
  <div className="flex justify-between items-start">
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">Kaisen UI Weather</p>
      <h3 className="text-2xl font-semibold dark:text-white">24°C</h3>
      <p className="text-gray-700 dark:text-gray-300">Sunny</p>
    </div>
    <div className="h-12 w-12 bg-gradient-to-br from-amber-200 to-amber-400 dark:from-amber-400 dark:to-amber-600 rounded-full"></div>
  </div>
  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
    <p className="text-xs text-gray-500 dark:text-gray-400">Powered by Kaisen UI</p>
  </div>
</div>`,
      preview: () => (
        <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 w-64 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Kaisen UI Weather</p>
              <h3 className="text-2xl font-semibold dark:text-white">24°C</h3>
              <p className="text-gray-700 dark:text-gray-300">Sunny</p>
            </div>
            <div className="h-12 w-12 bg-gradient-to-br from-amber-200 to-amber-400 dark:from-amber-400 dark:to-amber-600 rounded-full"></div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Powered by Kaisen UI</p>
          </div>
        </div>
      ),
    },
    {
      id: "weather-forecast",
      name: "Weather Forecast",
      description: "A compact 3-day forecast with minimalist weather indicators and dark mode support.",
      code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 w-full max-w-md overflow-hidden">
  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">3-Day Forecast • Kaisen UI</p>
  <div className="flex gap-4">
    <div className="flex-1 text-center">
      <p className="font-medium dark:text-white">Mon</p>
      <div className="h-10 w-10 mx-auto my-2 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-400 dark:to-blue-600 rounded-full"></div>
      <p className="text-sm dark:text-gray-300">22° / 14°</p>
    </div>
    <div className="flex-1 text-center">
      <p className="font-medium dark:text-white">Tue</p>
      <div className="h-10 w-10 mx-auto my-2 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-400 dark:to-gray-600 rounded-full"></div>
      <p className="text-sm dark:text-gray-300">19° / 12°</p>
    </div>
    <div className="flex-1 text-center">
      <p className="font-medium dark:text-white">Wed</p>
      <div className="h-10 w-10 mx-auto my-2 bg-gradient-to-br from-amber-100 to-amber-300 dark:from-amber-400 dark:to-amber-600 rounded-full"></div>
      <p className="text-sm dark:text-gray-300">26° / 18°</p>
    </div>
  </div>
</div>`,
      preview: () => (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 w-full max-w-md overflow-hidden">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">3-Day Forecast • Kaisen UI</p>
          <div className="flex gap-4">
            <div className="flex-1 text-center">
              <p className="font-medium dark:text-white">Mon</p>
              <div className="h-10 w-10 mx-auto my-2 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-400 dark:to-blue-600 rounded-full"></div>
              <p className="text-sm dark:text-gray-300">22° / 14°</p>
            </div>
            <div className="flex-1 text-center">
              <p className="font-medium dark:text-white">Tue</p>
              <div className="h-10 w-10 mx-auto my-2 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-400 dark:to-gray-600 rounded-full"></div>
              <p className="text-sm dark:text-gray-300">19° / 12°</p>
            </div>
            <div className="flex-1 text-center">
              <p className="font-medium dark:text-white">Wed</p>
              <div className="h-10 w-10 mx-auto my-2 bg-gradient-to-br from-amber-100 to-amber-300 dark:from-amber-400 dark:to-amber-600 rounded-full"></div>
              <p className="text-sm dark:text-gray-300">26° / 18°</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "weather-widget",
      name: "Weather Widget",
      description: "A tiny yet functional weather widget with current temperature and precipitation data.",
      code: `<div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl w-60">
  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Kaisen UI</p>
  <div className="flex items-center justify-between">
    <div>
      <p className="text-5xl font-light dark:text-white">18°</p>
      <p className="text-gray-600 dark:text-gray-300">Cloudy</p>
    </div>
    <div className="h-16 w-16 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-500 dark:to-gray-700 rounded-full"></div>
  </div>
  <div className="mt-3 h-px bg-gray-200 dark:bg-gray-700"></div>
  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Precipitation: 10%</p>
</div>`,
      preview: () => (
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl w-60">
          <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Kaisen UI</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-5xl font-light dark:text-white">18°</p>
              <p className="text-gray-600 dark:text-gray-300">Cloudy</p>
            </div>
            <div className="h-16 w-16 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-500 dark:to-gray-700 rounded-full"></div>
          </div>
          <div className="mt-3 h-px bg-gray-200 dark:bg-gray-700"></div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Precipitation: 10%</p>
        </div>
      ),
    }
  ],
}

export default function ComponentsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Button")
  const [selectedComponent, setSelectedComponent] = useState("primary-button")
  const [viewMode, setViewMode] = useState("preview") // "preview" or "code"
  const [copied, setCopied] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState([]);

  // Filter categories based on search query
  const filteredCategories = componentCategories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Get the current component
  const currentComponent = sampleComponents[selectedCategory]?.find(
    (comp) => comp.id === selectedComponent,
  )

  // Copy code to clipboard
  const copyToClipboard = () => {
    if (currentComponent) {
      navigator.clipboard.writeText(currentComponent.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Toggle category expansion
  const toggleCategory = (category) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter((c) => c !== category))
    } else {
      setExpandedCategories([...expandedCategories, category])
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col pt-24">

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`bg-zinc-900 border-r border-zinc-800 flex flex-col w-64 ${sidebarOpen ? "block" : "hidden"} md:block`}
        >
          <div className="p-4 border-b border-zinc-800">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search components..."
                className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-4 space-y-1">
              {filteredCategories.map((category) => (
                <div key={category.name} className="mb-1">
                  <button
                    onClick={() => {
                      toggleCategory(category.name)
                      setSelectedCategory(category.name)
                      if (sampleComponents[category.name]?.length > 0) {
                        setSelectedComponent(sampleComponents[category.name][0].id)
                      }
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md ${selectedCategory === category.name
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                      } transition-colors`}
                  >
                    <span className="flex items-center">

                      {category.name}
                    </span>
                  </button>


                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-zinc-950">
          <div className="container mx-auto px-4 py-8">
            {/* Component header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold">{currentComponent?.name || selectedCategory}</h1>
              </div>

              {/* View mode toggle */}
              <div className="mt-4 md:mt-0 flex items-center bg-zinc-900 rounded-md p-1">
                <button
                  onClick={() => setViewMode("preview")}
                  className={`flex items-center px-3 py-1.5 text-sm rounded-md ${viewMode === "preview" ? "bg-zinc-800 text-white" : "text-zinc-400"
                    }`}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </button>
                <button
                  onClick={() => setViewMode("code")}
                  className={`flex items-center px-3 py-1.5 text-sm rounded-md ${viewMode === "code" ? "bg-zinc-800 text-white" : "text-zinc-400"
                    }`}
                >
                  <Code className="h-4 w-4 mr-2" />
                  Code
                </button>
              </div>
            </div>

            {/* Component display */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              {/* Preview mode */}
              {viewMode === "preview" && currentComponent && (
                <div className="p-8 flex items-center justify-center min-h-[300px]">{currentComponent.preview()}</div>
              )}

              {/* Code mode */}
              {viewMode === "code" && currentComponent && (
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center justify-center p-2 bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors"
                      aria-label="Copy code"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 text-zinc-400" />
                      )}
                    </button>
                  </div>
                  <pre className="p-4 text-sm text-zinc-300 overflow-x-auto">
                    <code>{currentComponent.code}</code>
                  </pre>
                </div>
              )}

              {/* No component selected */}
              {!currentComponent && (
                <div className="p-8 flex items-center justify-center min-h-[300px] text-zinc-400">
                  Select a component to view
                </div>
              )}
            </div>

            {/* Component variants */}
            {sampleComponents[selectedCategory]?.length > 1 && (
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Variants</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sampleComponents[selectedCategory].map((component) => (
                    <button
                      key={component.id}
                      onClick={() => setSelectedComponent(component.id)}
                      className={`p-6 text-left bg-zinc-900 border ${selectedComponent === component.id ? "border-rose-500" : "border-zinc-800"
                        } rounded-xl hover:border-rose-500/50 transition-colors`}
                    >
                      <h3 className="font-medium mb-2">{component.name}</h3>
                    </button>
                  ))}
                </div>
              </div>
            )}


          </div>
        </main>
      </div>
    </div>
  )
}