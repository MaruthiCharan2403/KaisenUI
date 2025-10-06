"use client"

import { useState, useEffect } from "react"
import { Copy, Check, Code, Eye, Search, Menu, X } from "lucide-react"
import sampleComponents from "../utils/componentLoader"
import { pageview } from "./Analytics"
import { useLocation } from "react-router-dom"
import HelmetSEO from "./helmetseo"

// Component categories - dynamically generated from loaded components
const componentCategories = Object.keys(sampleComponents)
  .sort()
  .map(name => ({ name }))

const customScrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #18181b; /* zinc-900 */
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #e11d48; /* rose-600 */
    border-radius: 2px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #be123c; /* rose-700 */
  }
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #e11d48 #18181b;
  }
  .custom-scrollbar:hover {
    scrollbar-color: #be123c #18181b;
  }
`;

type PreviewRendererProps = {
  PreviewComponent: React.FC;
};

function PreviewRenderer({ PreviewComponent }: PreviewRendererProps) {
  return (
    <div className="p-8 flex items-center justify-center min-h-[300px]">
      <PreviewComponent />
    </div>
  );
}

export default function ComponentsPage() {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);
  
  // Get first available category and component
  const firstCategory = componentCategories[0]?.name || "Button";
  const firstComponent = sampleComponents[firstCategory]?.[0]?.id || "";
  
  const [selectedCategory, setSelectedCategory] = useState(firstCategory)
  const [selectedComponent, setSelectedComponent] = useState(firstComponent)
  const [viewMode, setViewMode] = useState("preview") // "preview" or "code"
  const [installMethod, setInstallMethod] = useState<"cli" | "manual">("cli")
  const [packageManager, setPackageManager] = useState<"npm" | "pnpm" | "yarn" | "bun">("npm")
  const [copied, setCopied] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

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
      if (installMethod === "cli") {
        // Copy CLI command based on package manager
        const commands = {
          npm: `npx kaisenui add ${currentComponent.id}`,
          pnpm: `pnpm dlx kaisenui add ${currentComponent.id}`,
          yarn: `yarn dlx kaisenui add ${currentComponent.id}`,
          bun: `bunx kaisenui add ${currentComponent.id}`
        }
        navigator.clipboard.writeText(commands[packageManager]);
      } else {
        navigator.clipboard.writeText(currentComponent.code);
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Toggle category expansion
  const toggleCategory = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter((c) => c !== category))
    } else {
      setExpandedCategories([...expandedCategories, category])
    }
  }

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col">
      <HelmetSEO
        title="React & Tailwind CSS Components - Kaisen UI"
        description="Explore our collection of beautiful, accessible React components built with Tailwind CSS. Copy and paste into your projects."
        keywords="react components, tailwind components, ui components, react ui library, tailwindcss components, accessible components, modern ui components"
        canonicalUrl="https://kaisenui.me/components"
        children={undefined}
      />
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
        {/* Sidebar */}
        <aside
          className={`fixed md:static z-20 bg-zinc-900 border-r border-zinc-800 flex flex-col w-full md:w-64 transition-all duration-300 ease-in-out ${
            sidebarOpen ? "left-0" : "-left-full md:-left-64"
          } md:left-0 h-screen`}
        >
          <div className="p-4 border-b border-zinc-800">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-rose-500" />
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
                      if (window.innerWidth < 768) {
                        setSidebarOpen(false)
                      }
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md ${
                      selectedCategory === category.name
                        ? "bg-rose-700 text-white"
                        : "text-zinc-400 hover:bg-rose-800 hover:text-white"
                    } transition-colors`}
                  >
                    <span className="flex items-center">{category.name}</span>
                  </button>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className={`flex-1 overflow-y-auto bg-black custom-scrollbar ${sidebarOpen ? "hidden md:block" : "block"}`}>
          <div className="container mx-auto px-4 py-8">
            {/* Component header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-rose-600">{currentComponent?.name || selectedCategory}</h1>
                {currentComponent && (
                  <p className="text-sm text-zinc-400 mt-1">{currentComponent.description}</p>
                )}
              </div>

              {/* View mode toggle */}
              <div className="mt-4 md:mt-0 flex items-center bg-zinc-900 rounded-md p-1">
                <button
                  onClick={() => setViewMode("preview")}
                  className={`flex items-center px-3 py-1.5 text-sm rounded-md ${
                    viewMode === "preview" ? "bg-rose-700 text-white" : "text-zinc-400 hover:bg-rose-800 hover:text-white"
                  }`}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </button>
                <button
                  onClick={() => setViewMode("code")}
                  className={`flex items-center px-3 py-1.5 text-sm rounded-md ${
                    viewMode === "code" ? "bg-rose-700 text-white" : "text-zinc-400 hover:bg-rose-800 hover:text-white"
                  }`}
                >
                  <Code className="h-4 w-4 mr-2" />
                  Code
                </button>
              </div>
            </div>

            {/* Install method toggle (CLI vs Manual) - Only show in code view */}
            {viewMode === "code" && currentComponent && (
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-zinc-900 rounded-md p-1">
                  <button
                    onClick={() => setInstallMethod("cli")}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      installMethod === "cli"
                        ? "bg-rose-600 text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    CLI Installation
                  </button>
                  <button
                    onClick={() => setInstallMethod("manual")}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      installMethod === "manual"
                        ? "bg-rose-600 text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Manual Copy
                  </button>
                </div>
              </div>
            )}

            {/* Component display */}
            <div className="bg-zinc-900 border border-rose-700 rounded-xl overflow-hidden">
              {/* Preview mode */}
              {viewMode === "preview" && currentComponent && (
                <PreviewRenderer PreviewComponent={currentComponent.preview} />
              )}

              {/* Code mode */}
              {viewMode === "code" && currentComponent && (
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center justify-center p-2 bg-zinc-800 rounded-md hover:bg-rose-700 transition-colors"
                      aria-label="Copy code"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 text-zinc-400" />
                      )}
                    </button>
                  </div>

                  {installMethod === "cli" ? (
                    <div className="p-8">
                      <div className="space-y-6">
                        {/* CLI Quick Start */}
                        <div className="text-center p-8 border-2 border-dashed border-zinc-700 rounded-xl">
                          <h3 className="text-2xl font-bold text-white mb-3">
                            Install via CLI
                          </h3>
                          <p className="text-zinc-400 mb-6">
                            Use the Kaisen CLI to add this component to your project
                          </p>

                          {/* Package Manager Selector */}
                          <div className="flex justify-center mb-6">
                            <div className="inline-flex items-center gap-2 bg-zinc-950 border border-zinc-700 rounded-lg p-1">
                              {(["npm", "pnpm", "yarn", "bun"] as const).map((pm) => (
                                <button
                                  key={pm}
                                  onClick={() => setPackageManager(pm)}
                                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                                    packageManager === pm
                                      ? "bg-rose-600 text-white"
                                      : "text-zinc-400 hover:text-white"
                                  }`}
                                >
                                  {pm}
                                </button>
                              ))}
                            </div>
                          </div>
                          
                          {/* Quick Command */}
                          <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-700 max-w-2xl mx-auto mb-6">
                            <code className="text-lg text-rose-500">
                              {packageManager === "npm" && `npx kaisenui add ${currentComponent.id}`}
                              {packageManager === "pnpm" && `pnpm dlx kaisenui add ${currentComponent.id}`}
                              {packageManager === "yarn" && `yarn dlx kaisenui add ${currentComponent.id}`}
                              {packageManager === "bun" && `bunx kaisenui add ${currentComponent.id}`}
                            </code>
                          </div>                          
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-zinc-900">
                      <div className="bg-zinc-800 px-4 py-3 border-b border-zinc-700 flex items-center justify-between">
                        <p className="text-sm text-zinc-300">
                          <span className="font-semibold text-white">File:</span>{" "}
                          <code className="text-rose-500">ui/{currentComponent.fileName}.tsx</code>
                        </p>
                      </div>
                      <div className="overflow-auto custom-scrollbar max-h-[600px]">
                        <pre className="p-6 m-0 text-sm leading-relaxed">
                          <code className="text-zinc-300 font-mono whitespace-pre block">
                            {currentComponent.code}
                          </code>
                        </pre>
                      </div>
                    </div>
                  )}
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
                <h2 className="text-xl font-bold mb-4 text-rose-600">Variants</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sampleComponents[selectedCategory].map((component) => (
                    <button
                      key={component.id}
                      onClick={() => setSelectedComponent(component.id)}
                      className={`p-6 text-left bg-zinc-900 border ${
                        selectedComponent === component.id ? "border-rose-600" : "border-zinc-800"
                      } rounded-xl hover:border-rose-600/50 transition-colors`}
                    >
                      <h3 className="font-medium mb-2 text-rose-600">{component.name}</h3>
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