"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Copy, Check, Code, Eye, ChevronDown, ChevronRight, Search, Github, Menu, X } from "lucide-react"
import sampleComponents from "./Allcomponents"

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
  { name: "Contact" },
  { name: "Faq" },
  { name: "Gallery" },
  { name: "Hero" },
  { name: "Loaders" },
  { name: "Pagination" },
  { name: "Pricing" },
  { name: "Profile" },
  { name: "Review" },
  { name: "Steps" },
  { name: "Table" },
  { name: "Tabs" },
  { name: "Team" },
  { name: "Testimonial" },
  { name: "Timeline" },
  { name: "Weather" },
]

// Custom scrollbar styles
const customScrollbarStyles = `
  /* Custom scrollbar for WebKit browsers (Chrome, Safari, newer Edge) */
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #27272a; /* zinc-800 */
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #52525b; /* zinc-600 */
    border-radius: 2px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #e11d48; /* rose-600 */
  }

  /* For Firefox */
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #e11d48 #27272a; /* thumb track */
  }
  
  .custom-scrollbar:hover {
    scrollbar-color: #e11d48 #27272a; /* hover thumb color */
  }
`;

export default function ComponentsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Article")
  const [selectedComponent, setSelectedComponent] = useState("basic-article")
  const [viewMode, setViewMode] = useState("preview") // "preview" or "code"
  const [copied, setCopied] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false) // Set to false by default for mobile
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState([]);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col pt-12">
      {/* Inject custom scrollbar styles */}
      <style dangerouslySetInnerHTML={{ __html: customScrollbarStyles }} />
      
      {/* Mobile sidebar toggle button */}
      <div className="md:hidden fixed top-16 left-4 z-30">
        <button 
          onClick={toggleSidebar}
          className="p-2 bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500"
        >
          {sidebarOpen ? (
            <X className="h-5 w-5 text-zinc-100" />
          ) : (
            <Menu className="h-5 w-5 text-zinc-100" />
          )}
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with mobile responsiveness */}
        <aside
          className={`fixed md:static z-20 bg-zinc-900 border-r border-zinc-800 flex flex-col w-full md:w-64 transition-all duration-300 ease-in-out ${
            sidebarOpen ? "left-0" : "-left-full md:-left-64"
          } md:left-0 h-screen`}
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
          <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
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
                      // Close sidebar on mobile after category selection
                      if (window.innerWidth < 768) {
                        setSidebarOpen(false)
                      }
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md ${
                      selectedCategory === category.name
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

        {/* Main content - hidden on mobile when sidebar is open */}
        <main className={`flex-1 overflow-y-auto bg-zinc-950 custom-scrollbar ${sidebarOpen ? "hidden md:block" : "block"}`}>
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
                  <pre className="p-4 text-sm text-zinc-300 overflow-x-auto custom-scrollbar">
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
                      className={`p-6 text-left bg-zinc-900 border ${
                        selectedComponent === component.id ? "border-rose-500" : "border-zinc-800"
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
      
      {/* Overlay for mobile to close sidebar when clicking outside */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}