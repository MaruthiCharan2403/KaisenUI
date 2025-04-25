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
  { name: "CTA" },
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
  CTA: [
    {
      id: "quick-cta",
      name: "Gradient CTA",
      description: "A simple CTA with a button",
      code: `<div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-xl"></div>
  <div className="relative z-10">
    <h3 className="mb-2 text-2xl font-bold text-white">Elevate Your UI Experience</h3>
    <p className="mb-4 text-white/80">Join thousands of developers using Kaisen UI to build stunning interfaces.</p>
    <button className="rounded-lg bg-white px-6 py-2 font-medium text-indigo-600 shadow-lg transition-all hover:bg-opacity-90 dark:shadow-indigo-900/20">Get Started</button>
  </div>
</div>`,
      preview: () => (
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-xl"></div>
  <div className="relative z-10">
    <h3 className="mb-2 text-2xl font-bold text-white">Elevate Your UI Experience</h3>
    <p className="mb-4 text-white/80">Join thousands of developers using Kaisen UI to build stunning interfaces.</p>
    <button className="rounded-lg bg-white px-6 py-2 font-medium text-indigo-600 shadow-lg transition-all hover:bg-opacity-90 dark:shadow-indigo-900/20">Get Started</button>
  </div>
</div>
      ),
    },
    {
      id: "border-cta",
      name: "Border CTA",
      description: "A CTA with border",
      code: `<div className="relative bg-gray-50 dark:bg-gray-900/50 rounded-xl p-8 border border-gray-200 dark:border-gray-800 overflow-hidden">
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-5 hover:opacity-10 transition-opacity duration-500"></div>
  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Join the UI Revolution</h3>
  <p className="text-gray-600 dark:text-gray-400 mb-6">10,000+ developers trust Kaisen for production-grade interfaces</p>
  <button className="px-6 py-2.5 font-medium bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 hover:border-indigo-500 dark:hover:border-indigo-400 relative overflow-hidden">
    <span className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 -skew-x-12"></span>
    <span className="relative">Get Started</span>
  </button>
</div>`,
      preview: () => (
        <div className="relative p-0.5 rounded-xl bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 dark:from-indigo-500 dark:via-purple-600 dark:to-pink-600 animate-[gradient_8s_ease_infinite] bg-[length:400%_400%]">
  <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Code at Light Speed</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-6">Kaisen UI components compile 40% faster than alternatives</p>
    <button className="w-full px-6 py-3.5 font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 dark:hover:shadow-indigo-600/20 transition-all duration-300 transform hover:-translate-y-1">
      Download Now
    </button>
  </div>
</div>
      ),
    },
    {
      id: "input-cta",
      name: "Input CTA",
      description: "A CTA with input field and button",
      code: `<div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-700 hover:opacity-10 dark:via-slate-700"></div>
  <div className="mb-4 flex justify-between">
    <div className="w-2/3">
      <h3 className="mb-2 text-lg font-bold text-slate-800 dark:text-white">Join Kaisen UI Community</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">Access premium components and early updates.</p>
    </div>
    <div className="flex items-start justify-end">
      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">Limited Time</span>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <input 
      type="email" 
      placeholder="Enter your email" 
      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-500" 
    />
    <button className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">Subscribe</button>
  </div>
</div>`,
      preview: () => (
        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-700 hover:opacity-10 dark:via-slate-700"></div>
  <div className="mb-4 flex justify-between">
    <div className="w-2/3">
      <h3 className="mb-2 text-lg font-bold text-slate-800 dark:text-white">Join Kaisen UI Community</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">Access premium components and early updates.</p>
    </div>
    <div className="flex items-start justify-end">
      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">Limited Time</span>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <input 
      type="email" 
      placeholder="Enter your email" 
      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-500" 
    />
    <button className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">Subscribe</button>
  </div>
</div>
      ),
    },
  ],
  Tabs : [
    {
      id: "minimal-underline-tabs",
      name: "Minimal Underline Tabs",
      description: "A simple tab component with underline effect",
      code: `<div className="border-b border-gray-200 dark:border-gray-700">
  <div className="flex space-x-8">
    <button className="pb-3 px-1 border-b-2 border-amber-500 dark:border-amber-600 text-sm font-medium dark:text-white">
      Kaisen UI
    </button>
    <button className="pb-3 px-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
      Components
    </button>
    <button className="pb-3 px-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
      Docs
    </button>
  </div>
</div>`,
      preview: () => (
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex space-x-8">
            <button className="pb-3 px-1 border-b-2 border-amber-500 dark:border-amber-600 text-sm font-medium dark:text-white">
              Kaisen UI
            </button>
            <button className="pb-3 px-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Components
            </button>
            <button className="pb-3 px-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Docs
            </button>
          </div>
        </div>
      ),
    },
    {
      id: "contained-pill-tabs",
      name: "Contained Pill Tabs",
      description: "A tab component with pill shape",
      code: `<div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1 inline-flex">
  <button className="px-4 py-2 text-sm font-medium rounded-full bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white">
    Overview
  </button>
  <button className="px-4 py-2 text-sm font-medium rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
    Kaisen UI
  </button>
  <button className="px-4 py-2 text-sm font-medium rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
    Features
  </button>
</div>`,
      preview: () => (
        <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1 inline-flex">
          <button className="px-4 py-2 text-sm font-medium rounded-full bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white">
            Overview
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            Kaisen UI
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            Features
          </button>
        </div>
      ),
    },
    {
      id: "vertical-border-tabs",
      name: "Vertical Border Tabs",
      description: "A vertical tab component with border",
      code: `<div className="flex">
  <div className="flex flex-col border-r border-gray-200 dark:border-gray-700 pr-4">
    <button className="py-2 px-4 text-left border-l-2 border-amber-500 dark:border-amber-600 text-sm font-medium dark:text-white">
      Introduction
    </button>
    <button className="py-2 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
      Kaisen UI
    </button>
    <button className="py-2 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
      Installation
    </button>
  </div>
  <div className="flex-1 pl-4">
    <p className="text-sm text-gray-600 dark:text-gray-300">Select a tab to view content</p>
  </div>
</div>`,
      preview: () => (
        <div className="flex">
          <div className="flex flex-col border-r border-gray-200 dark:border-gray-700 pr-4">
            <button className="py-2 px-4 text-left border-l-2 border-amber-500 dark:border-amber-600 text-sm font-medium dark:text-white">
              Introduction
            </button>
            <button className="py-2 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Kaisen UI
            </button>
            <button className="py-2 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Installation
            </button>
          </div>
          <div className="flex-1 pl-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">Select a tab to view content</p>
          </div>
        </div>
      ),

    }
  ],
  Team: [
    {
      id: "team-member",
      name: "Team Member",
      description: "A simple Team member card",
      code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center w-64">
  <div className="h-24 w-24 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-800 rounded-full mx-auto mb-4"></div>
  <h3 className="text-lg font-medium dark:text-white">Taylor Morgan</h3>
  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Lead Designer</p>
  <p className="text-xs text-gray-600 dark:text-gray-300">Crafted Kaisen UI's visual identity</p>
</div>`,
      preview: () => (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center w-64">
          <div className="h-24 w-24 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-800 rounded-full mx-auto mb-4"></div>
          <h3 className="text-lg font-medium dark:text-white">Taylor Morgan</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Lead Designer</p>
          <p className="text-xs text-gray-600 dark:text-gray-300">Crafted Kaisen UI's visual identity</p>
        </div>
      ),
    },
    {
      id: "team-grid",
      name: "Team Grid",
      description: "A grid of team members",
      code: `<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Founder */}
  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
    <div className="h-40 bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-600 dark:to-amber-800 relative">
      <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-amber-100 to-amber-300 dark:from-amber-800 dark:to-amber-900 shadow-md transform group-hover:rotate-2 transition-transform"></div>
    </div>
    <div className="p-6 pt-10">
      <h3 className="text-xl font-bold dark:text-white">Riley Jones</h3>
      <p className="text-amber-500 dark:text-amber-400 font-medium mb-3">Founder & CEO</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">Visionary behind Kaisen UI. Leads product strategy and core architecture.</p>
      <div className="flex gap-2 mt-4">
        <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-xs text-amber-600 dark:text-amber-300">TW</div>
        <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-xs text-amber-600 dark:text-amber-300">GH</div>
      </div>
    </div>
  </div>

  {/* Tech Lead */}
  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
    <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 relative">
      <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-800 dark:to-blue-900 shadow-md transform group-hover:-rotate-2 transition-transform"></div>
    </div>
    <div className="p-6 pt-10">
      <h3 className="text-xl font-bold dark:text-white">Jordan Lee</h3>
      <p className="text-blue-500 dark:text-blue-400 font-medium mb-3">Tech Lead</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">Ensures technical excellence across all Kaisen UI components.</p>
      <div className="flex gap-2 mt-4">
        <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-xs text-blue-600 dark:text-blue-300">GH</div>
        <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-xs text-blue-600 dark:text-blue-300">LI</div>
      </div>
    </div>
  </div>

  {/* Design Lead */}
  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
    <div className="h-40 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800 relative">
      <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-purple-100 to-purple-300 dark:from-purple-800 dark:to-purple-900 shadow-md transform group-hover:rotate-1 transition-transform"></div>
    </div>
    <div className="p-6 pt-10">
      <h3 className="text-xl font-bold dark:text-white">Morgan Taylor</h3>
      <p className="text-purple-500 dark:text-purple-400 font-medium mb-3">Design Lead</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">Crafts Kaisen UI's visual language and interaction patterns.</p>
      <div className="flex gap-2 mt-4">
        <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-xs text-purple-600 dark:text-purple-300">TW</div>
        <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-xs text-purple-600 dark:text-purple-300">DR</div>
      </div>
    </div>
  </div>

  {/* Backend Lead */}
  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
    <div className="h-40 bg-gradient-to-br from-emerald-400 to-emerald-600 dark:from-emerald-600 dark:to-emerald-800 relative">
      <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-emerald-100 to-emerald-300 dark:from-emerald-800 dark:to-emerald-900 shadow-md transform group-hover:-rotate-1 transition-transform"></div>
    </div>
    <div className="p-6 pt-10">
      <h3 className="text-xl font-bold dark:text-white">Casey Smith</h3>
      <p className="text-emerald-500 dark:text-emerald-400 font-medium mb-3">Backend Lead</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">Builds the robust systems powering Kaisen UI's infrastructure.</p>
      <div className="flex gap-2 mt-4">
        <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-xs text-emerald-600 dark:text-emerald-300">GH</div>
      </div>
    </div>
  </div>

  {/* Frontend Dev */}
  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
    <div className="h-40 bg-gradient-to-br from-rose-400 to-rose-600 dark:from-rose-600 dark:to-rose-800 relative">
      <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-rose-100 to-rose-300 dark:from-rose-800 dark:to-rose-900 shadow-md transform group-hover:rotate-2 transition-transform"></div>
    </div>
    <div className="p-6 pt-10">
      <h3 className="text-xl font-bold dark:text-white">Taylor Morgan</h3>
      <p className="text-rose-500 dark:text-rose-400 font-medium mb-3">Frontend Developer</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">Implements pixel-perfect UIs with Kaisen UI components.</p>
      <div className="flex gap-2 mt-4">
        <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-xs text-rose-600 dark:text-rose-300">GH</div>
        <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-xs text-rose-600 dark:text-rose-300">TW</div>
      </div>
    </div>
  </div>

  {/* Community Manager */}
  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
    <div className="h-40 bg-gradient-to-br from-indigo-400 to-indigo-600 dark:from-indigo-600 dark:to-indigo-800 relative">
      <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-indigo-100 to-indigo-300 dark:from-indigo-800 dark:to-indigo-900 shadow-md transform group-hover:-rotate-2 transition-transform"></div>
    </div>
    <div className="p-6 pt-10">
      <h3 className="text-xl font-bold dark:text-white">Alex Rivera</h3>
      <p className="text-indigo-500 dark:text-indigo-400 font-medium mb-3">Community Manager</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">Connects with Kaisen UI users and gathers feedback.</p>
      <div className="flex gap-2 mt-4">
        <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs text-indigo-600 dark:text-indigo-300">TW</div>
        <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs text-indigo-600 dark:text-indigo-300">DI</div>
      </div>
    </div>
  </div>
</div>`,
      preview: () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Founder */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="h-40 bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-600 dark:to-amber-800 relative">
              <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-amber-100 to-amber-300 dark:from-amber-800 dark:to-amber-900 shadow-md transform group-hover:rotate-2 transition-transform"></div>
            </div>
            <div className="p-6 pt-10">
              <h3 className="text-xl font-bold dark:text-white">Riley Jones</h3>
              <p className="text-amber-500 dark:text-amber-400 font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Visionary behind Kaisen UI. Leads product strategy and core architecture.</p>
              <div className="flex gap-2 mt-4">
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-xs text-amber-600 dark:text-amber-300">TW</div>
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-xs text-amber_600 dark:text_amber_300">GH</div>
              </div>
            </div>
          </div>

          {/* Tech Lead */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 relative">
              <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-800 dark:to-blue-900 shadow-md transform group-hover:-rotate-2 transition-transform"></div>
            </div>
            <div className="p-6 pt-10">
              <h3 className="text-xl font-bold dark:text-white">Jordan Lee</h3>
              <p className="text-blue-500 dark:text-blue-400 font-medium mb-3">Tech Lead</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Ensures technical excellence across all Kaisen UI components.</p>
              <div className="flex gap-2 mt-4">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-xs text-blue-600 dark:text-blue-300">GH</div>
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-xs text-blue_600 dark:text_blue_300">LI</div>
              </div>
            </div>
          </div>
            
            {/* Design Lead */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="h-40 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800 relative">
              <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-purple-100 to-purple-300 dark:from-purple-800 dark:to-purple-900 shadow-md transform group-hover:rotate-1 transition-transform"></div>
            </div>
            <div className="p-6 pt-10">
              <h3 className="text-xl font-bold dark:text-white">Morgan Taylor</h3>
              <p className="text-purple-500 dark:text-purple-400 font-medium mb-3">Design Lead</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Crafts Kaisen UI's visual language and interaction patterns.</p>
              <div className="flex gap-2 mt-4">
                <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-xs text-purple-600 dark:text-purple-300">TW</div>
                <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-xs text-purple_600 dark:text_purple_300">DR</div>
              </div>
            </div>
          </div>

          {/* Backend Lead */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="h-40 bg-gradient-to-br from-emerald-400 to-emerald-600 dark:from-emerald-600 dark:to-emerald-800 relative">
              <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-emerald-100 to-emerald-300 dark:from-emerald-800 dark:to-emerald-900 shadow-md transform group-hover:-rotate-1 transition-transform"></div>
            </div>
            <div className="p-6 pt-10">
              <h3 className="text-xl font-bold dark:text-white">Casey Smith</h3>
              <p className="text-emerald-500 dark:text-emerald-400 font-medium mb-3">Backend Lead</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Builds the robust systems powering Kaisen UI's infrastructure.</p>
              <div className="flex gap-2 mt-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-xs text-emerald-600 dark:text-emerald-300">GH</div>
              </div>
            </div>
          </div>

          {/* Frontend Dev */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="h-40 bg-gradient-to-br from-rose-400 to-rose-600 dark:from-rose-600 dark:to-rose-800 relative">
              <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-rose-100 to-rose-300 dark:from-rose-800 dark:to-rose-900 shadow-md transform group-hover:rotate-2 transition-transform"></div>
            </div>
            <div className="p-6 pt-10">
              <h3 className="text-xl font-bold dark:text-white">Taylor Morgan</h3>
              <p className="text-rose-500 dark:text-rose-400 font-medium mb-3">Frontend Developer</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Implements pixel-perfect UIs with Kaisen UI components.</p>
              <div className="flex gap-2 mt-4">
                <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-xs text-rose-600 dark:text-rose-300">GH</div>
                <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-xs text-rose_600 dark:text_rose_300">TW</div>
              </div>
            </div>
          </div>

          {/* Community Manager */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="h-40 bg-gradient-to-br from-indigo-400 to-indigo-600 dark:from-indigo-600 dark:to-indigo-800 relative">
              <div className="absolute -bottom-6 left-6 w-24 h-24 rounded-xl border-4 border-white dark:border-gray-900 bg-gradient-to-br from-indigo-100 to-indigo-300 dark:from-indigo-800 dark:to-indigo-900 shadow-md transform group-hover:-rotate-2 transition-transform"></div>
            </div>
            <div className="p-6 pt-10">
              <h3 className="text-xl font-bold dark:text-white">Alex Rivera</h3>
              <p className="text-indigo-500 dark:text-indigo-400 font-medium mb-3">Community Manager</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Connects with Kaisen UI users and gathers feedback.</p>
              <div className="flex gap-2 mt-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs text-indigo_600 dark:text_indigo_300">TW</div>
                <div className="w_8 h_8 rounded-lg bg-indigo_100 dark:bg-indigo_900/50 flex items-center justify-center text-xs text-indigo_600 dark:text_indigo_300">DI</div>
              </div>
            </div>
          </div>
        </div>
      ),

    },
    {
      id: "team-profile-highlight",
      name: "Team Profile Highlight",
      description: "A team profile highlight with gradient",
      code: `<div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
  <div className="h-32 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900"></div>
  <div className="px-6 pb-6 -mt-12">
    <div className="h-24 w-24 bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700 rounded-full border-4 border-white dark:border-gray-800 mx-auto"></div>
    <div className="text-center mt-4">
      <h3 className="text-xl font-medium dark:text-white">Riley Jones</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Creator of Kaisen UI</p>
      <p className="text-sm text-gray-600 dark:text-gray-300">Building tools that make development faster and more enjoyable</p>
    </div>
  </div>
</div>`,
      preview: () => (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900"></div>
          <div className="px-6 pb-6 -mt-12">
            <div className="h-24 w-24 bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700 rounded-full border-4 border-white dark:border-gray-800 mx-auto"></div>
            <div className="text-center mt-4">
              <h3 className="text-xl font-medium dark:text-white">Riley Jones</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Creator of Kaisen UI</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Building tools that make development faster and more enjoyable</p>
            </div>
          </div>
        </div>
      ),
    }
  ],
  Testimonial: [
    {
      id: "basic-testimonial",
      name: "Basic Testimonial",
      description: "A simple Testimonial with a border",

      code: `<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 max-w-md">
  <div className="h-3 w-16 bg-gradient-to-r from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700 mb-4"></div>
  <p className="text-gray-700 dark:text-gray-300 italic mb-6">"Kaisen UI transformed our workflow. The components are so intuitive that our team adopted them instantly."</p>
  <div className="flex items-center gap-3">
    <div className="h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
    <div>
      <p className="font-medium dark:text-white">Alex Rivera</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">CTO, TechCorp</p>
    </div>
  </div>
</div>`,
      preview: () => (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 max-w-md">
          <div className="h-3 w-16 bg-gradient-to-r from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700 mb-4"></div>
          <p className="text-gray-700 dark:text-gray-300 italic mb-6">"Kaisen UI transformed our workflow. The components are so intuitive that our team adopted them instantly."</p>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            <div>
              <p className="font-medium dark:text-white">Alex Rivera</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">CTO, TechCorp</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "split-testimonial",
      name: "Split Testimonial",
      description: "A split testimonial with text",
      code: `<div className="flex flex-col md:flex-row gap-6 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
  <div className="md:w-1/3 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900 p-8 flex items-center justify-center">
    <p className="text-5xl font-light text-gray-400 dark:text-gray-500">"</p>
  </div>
  <div className="md:w-2/3 p-8">
    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Using Kaisen UI cut our development time in half. The clean design system requires zero customization.</p>
    <div>
      <p className="font-medium dark:text-white">Samira Khan</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">Lead Designer, Creative Labs</p>
    </div>
  </div>
</div>`,
      preview: () => (
        <div className="flex flex-col md:flex-row gap-6 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
          <div className="md:w-1/3 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900 p-8 flex items-center justify-center">
            <p className="text-5xl font-light text-gray-400 dark:text-gray-500">"</p>
          </div>
          <div className="md:w-2/3 p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Using Kaisen UI cut our development time in half. The clean design system requires zero customization.</p>
            <div>
              <p className="font-medium dark:text-white">Samira Khan</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Lead Designer, Creative Labs</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "timeline-testimonial",
      name: "Timeline Testimonial",
      description: "A timeline testimonial with gradient",
      code: `<div className="relative pl-8">
  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-gray-300 dark:from-amber-600 dark:to-gray-700"></div>
  <div className="pb-8">
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
      <p className="text-gray-700 dark:text-gray-300 mb-4">"Kaisen UI's documentation is the best I've seen. We onboarded 15 developers in a week thanks to their clear examples."</p>
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        <div>
          <p className="text-sm font-medium dark:text-white">Jamie Chen</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Engineering Manager</p>
        </div>
      </div>
    </div>
    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 pl-6">Kaisen UI Case Study</p>
  </div>
</div>`,
      preview: () => (
        <div className="relative pl-8">
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-gray-300 dark:from-amber-600 dark:to-gray-700"></div>
          <div className="pb-8">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 dark:text-gray-300 mb-4">"Kaisen UI's documentation is the best I've seen. We onboarded 15 developers in a week thanks to their clear examples."</p>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium dark:text-white">Jamie Chen</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Engineering Manager</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 pl-6">Kaisen UI Case Study</p>
          </div>
        </div>
      ),
    }
  ],
  Timeline: [
    {
      id: "vertical-timeline",

      name: "Vertical Timeline",
      description: "A vertical timeline with events",
      code: `<div className="space-y-6">
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-4 h-4 bg-amber-400 dark:bg-amber-600 rounded-full"></div>
      <div className="w-px h-full bg-gray-300 dark:bg-gray-600"></div>
    </div>
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">Kaisen UI v1.0</p>
      <p className="font-medium dark:text-white">Initial Release</p>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Just the beginning of something great</p>
    </div>
  </div>
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-4 h-4 bg-gray-300 dark:bg-gray-500 rounded-full"></div>
      <div className="w-px h-full bg-gray-300 dark:bg-gray-600"></div>
    </div>
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">Kaisen UI v1.5</p>
      <p className="font-medium dark:text-white">Components Added</p>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">More building blocks for your projects</p>
    </div>
  </div>
</div>`,
      preview: () => (
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-amber-400 dark:bg-amber-600 rounded-full"></div>
              <div className="w-px h-full bg-gray-300 dark:bg-gray-600"></div>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Kaisen UI v1.0</p>
              <p className="font-medium dark:text-white">Initial Release</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Just the beginning of something great</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-gray-300 dark:bg-gray-500 rounded-full"></div>
              <div className="w-px h-full bg-gray-300 dark:bg-gray-600"></div>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Kaisen UI v1.5</p>
              <p className="font-medium dark:text-white">Components Added</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">More building blocks for your projects</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "horizontal-timeline",
      name: "Horizontal Timeline",
      description: "A horizontal timeline with events",
      code: `<div className="relative">
  <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2"></div>
  <div className="flex justify-between relative">
    <div className="flex flex-col items-center">
      <div className="w-6 h-6 bg-amber-400 dark:bg-amber-600 rounded-full mb-2"></div>
      <p className="text-xs font-medium dark:text-white">Start</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Kaisen UI</p>
    </div>
    <div className="flex flex-col items-center">
      <div className="w-6 h-6 bg-gray-300 dark:bg-gray-500 rounded-full mb-2"></div>
      <p className="text-xs font-medium dark:text-white">Progress</p>
    </div>
    <div className="flex flex-col items-center">
      <div className="w-6 h-6 border-2 border-gray-300 dark:border-gray-500 rounded-full mb-2"></div>
      <p className="text-xs font-medium dark:text-white">Future</p>
    </div>
  </div>
</div>`,
preview: () => (
  <div className="relative">
    <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2"></div>
    <div className="flex justify-between relative px-4">
      <div className="flex flex-col items-center w-20">
        <div className="w-6 h-6 bg-amber-400 dark:bg-amber-600 rounded-full mb-2"></div>
        <p className="text-xs font-medium dark:text-white text-center">Start</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">Kaisen UI</p>
      </div>
      <div className="flex flex-col items-center w-20">
        <div className="w-6 h-6 bg-gray-300 dark:bg-gray-500 rounded-full mb-2"></div>
        <p className="text-xs font-medium dark:text-white text-center">Progress</p>
      </div>
      <div className="flex flex-col items-center w-20">
        <div className="w-6 h-6 border-2 border-gray-300 dark:border-gray-500 rounded-full mb-2"></div>
        <p className="text-xs font-medium dark:text-white text-center">Future</p>
      </div>
    </div>
  </div>
)
    },
    {
      id: "timeline-card",
      name: "Timeline Card",
      description: "A timeline card with a gradient background",
      code: `<div className="space-y-4">
  <div className="relative pl-8">
    <div className="absolute left-0 top-0 w-4 h-4 bg-gray-800 dark:bg-gray-200 rounded-full mt-1"></div>
    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-6">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        <p className="text-sm text-gray-500 dark:text-gray-400">Kaisen UI</p>
        <p className="font-medium dark:text-white">Milestone Reached</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">100+ components added</p>
      </div>
    </div>
  </div>
  <div className="relative pl-8">
    <div className="absolute left-0 top-0 w-4 h-4 bg-gray-300 dark:bg-gray-500 rounded-full mt-1"></div>
    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-6">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        <p className="text-sm text-gray-500 dark:text-gray-400">Kaisen UI</p>
        <p className="font-medium dark:text-white">What's Next</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">More innovative components coming</p>
      </div>
    </div>
  </div>
</div>`,
      preview: () => (
        <div className="space-y-4">
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 w-4 h-4 bg-gray-800 dark:bg-gray-200 rounded-full mt-1"></div>
            <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <p className="text-sm text-gray-500 dark:text-gray-400">Kaisen UI</p>
                <p className="font-medium dark:text-white">Milestone Reached</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">100+ components added</p>
              </div>
            </div>
          </div>
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 w-4 h-4 bg-gray-300 dark:bg-gray-500 rounded-full mt-1"></div>
            <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <p className="text-sm text-gray-500 dark:text-gray-400">Kaisen UI</p>
                <p className="font-medium dark:text-white">What's Next</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">More innovative components coming</p>
              </div>
            </div>
          </div>
        </div>
      ),
    }
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
  Card: [
    {
      id: "holo-card",
      name: "Holographic Card",
      description: "A simple holographic card with a gradient background",
      code: `<div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-500">
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
  <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30"></div>
  <div className="p-6 relative">
    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full uppercase">KAISEN UI</span>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Atomic Design System</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-6">Build interfaces faster with our zero-runtime component library optimized for React and Vite</p>
    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent dark:via-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>
</div> `,
      preview: () => (
        <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-500">
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
  <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30"></div>
  <div className="p-6 relative">
    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full uppercase">KAISEN UI</span>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Atomic Design System</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-6">Build interfaces faster with our zero-runtime component library optimized for React and Vite</p>
    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent dark:via-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>
</div>
      ),
    },
    {
      id: "glow-card",
      name: "Glow Card",
      description: "A simple card with a glowing effect",
      code: `<div className="relative isolate overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors duration-300">
  <div className="absolute -inset-2 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-500/20 dark:from-indigo-600/20 dark:to-purple-600/20 rounded-xl animate-[pulse_3s_infinite]"></div>
  </div>
  <div className="h-10 w-10 rounded-lg mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700"></div>
  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Performance Engine</h3>
  <p className="text-gray-600 dark:text-gray-400 mb-6">Kaisen UI components render 40% faster than traditional React libraries</p>
  <div className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
    Explore
    <span className="ml-2 h-2 w-2 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse"></span>
  </div>
</div> `,
      preview: () => (
        <div className="relative isolate overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors duration-300">
  <div className="absolute -inset-2 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-500/20 dark:from-indigo-600/20 dark:to-purple-600/20 rounded-xl animate-[pulse_3s_infinite]"></div>
  </div>
  <div className="h-10 w-10 rounded-lg mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700"></div>
  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Performance Engine</h3>
  <p className="text-gray-600 dark:text-gray-400 mb-6">Kaisen UI components render 40% faster than traditional React libraries</p>
  <div className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
    Explore
    <span className="ml-2 h-2 w-2 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse"></span>
  </div>
</div>
      ),
    },
    {
      id:"release-card",
      name: "Release Card",
      description: "A card showcasing the latest release with a gradient background",
      code:`<div className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600"></div>
  <div className="pl-8 pr-6 py-6">
    <div className="flex items-center gap-2 mb-4">
      <div className="h-3 w-3 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-[pulse_2s_infinite]"></div>
      <span className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">NEW RELEASE</span>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Kaisen v3.0</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-6">The most advanced version of our UI system yet - now with dark mode auto-detection</p>
    <div className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group-hover:border-indigo-300 dark:group-hover:border-indigo-600">
      Learn More
      <span className="ml-2 block h-3 w-3 rounded-sm bg-indigo-500 dark:bg-indigo-400 group-hover:animate-[spin_1s_linear_infinite] transition-transform"></span>
    </div>
  </div>
</div>`,
      preview: () => (
<div className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600"></div>
  <div className="pl-8 pr-6 py-6">
    <div className="flex items-center gap-2 mb-4">
      <div className="h-3 w-3 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-[pulse_2s_infinite]"></div>
      <span className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">NEW RELEASE</span>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Kaisen v3.0</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-6">The most advanced version of our UI system yet - now with dark mode auto-detection</p>
    <div className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group-hover:border-indigo-300 dark:group-hover:border-indigo-600">
      Learn More
      <span className="ml-2 block h-3 w-3 rounded-sm bg-indigo-500 dark:bg-indigo-400 group-hover:animate-[spin_1s_linear_infinite] transition-transform"></span>
    </div>
  </div>
</div>
      ),}
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