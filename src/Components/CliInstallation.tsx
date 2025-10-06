import { useState } from "react"
import { Copy, Check, Terminal, Zap, Package, Sparkles, Download, BookOpen, Github } from "lucide-react"
import { Link } from "react-router-dom"
import HelmetSEO from "./helmetseo"

export default function CliInstallation() {
  const [copied, setCopied] = useState<string | null>(null)
  const [packageManager, setPackageManager] = useState<"npm" | "pnpm" | "yarn" | "bun">("npm")

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }
  const getCommand = (type: "install" | "init" | "add" | "list", component?: string) => {
    const commands = {
      npm: {
        install: "npm install -g kaisenui",
        init: "npx kaisenui init",
        add: component ? `npx kaisenui add ${component}` : "npx kaisenui add",
        list: "npx kaisenui list"
      },
      pnpm: {
        install: "pnpm add -g kaisenui",
        init: "pnpm dlx kaisenui init",
        add: component ? `pnpm dlx kaisenui add ${component}` : "pnpm dlx kaisenui add",
        list: "pnpm dlx kaisenui list"
      },
      yarn: {
        install: "yarn global add kaisenui",
        init: "yarn dlx kaisenui init",
        add: component ? `yarn dlx kaisenui add ${component}` : "yarn dlx kaisenui add",
        list: "yarn dlx kaisenui list"
      },
      bun: {
        install: "bun add -g kaisenui",
        init: "bunx kaisenui init",
        add: component ? `bunx kaisenui add ${component}` : "bunx kaisenui add",
        list: "bunx kaisenui list"
      }
    }
    return commands[packageManager][type]
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <HelmetSEO
        title="CLI Installation - Kaisen UI"
        description="Install the Kaisen UI CLI to quickly add beautiful React + Tailwind components to your project. Works with Vite, Next.js, Create React App, and Remix."
        keywords="kaisen ui cli, react cli, component cli, install kaisen, npm package, tailwind components"
        canonicalUrl="https://kaisenui.me/cli-installation"
        children={undefined}
      />
      <div className="border-b border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-600/10 border border-rose-600/20 text-rose-400 text-sm font-medium mb-6">
              <Terminal className="h-4 w-4" />
              <span>Command Line Interface</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Kaisen UI CLI
            </h1>
            <p className="text-xl text-zinc-400 mb-8">
              Add beautiful React components to your project with a single command.
              <br />
              Works with Vite, Next.js, Create React App, and Remix.
            </p>
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg p-1">
                {(["npm", "pnpm", "yarn", "bun"] as const).map((pm) => (
                  <button
                    key={pm}
                    onClick={() => setPackageManager(pm)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
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

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-6 py-3 flex items-center gap-3">
                <Terminal className="h-5 w-5 text-rose-400" />
                <code className="text-emerald-400 font-mono">{getCommand("init")}</code>
                <button
                  onClick={() => copyToClipboard(getCommand("init"), "hero-init")}
                  className="p-1 hover:bg-zinc-800 rounded transition-colors"
                  aria-label="Copy command"
                >
                  {copied === "hero-init" ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-zinc-400" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Zap className="h-8 w-8 text-rose-400" />
              Quick Start
            </h2>
            <div className="space-y-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-600 text-white text-lg font-bold flex-shrink-0">
                    1
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Install the CLI</h3>
                    <p className="text-zinc-400 mb-4">
                      Install Kaisen UI globally or use {packageManager === "npm" ? "npx" : packageManager === "pnpm" ? "pnpm dlx" : packageManager === "yarn" ? "yarn dlx" : "bunx"} (no installation needed)
                    </p>
                    <div className="space-y-3">
                      <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-700 flex items-center justify-between">
                        <code className="text-emerald-400 font-mono text-sm">{getCommand("install")}</code>
                        <button
                          onClick={() => copyToClipboard(getCommand("install"), "step1-install")}
                          className="p-2 hover:bg-zinc-800 rounded transition-colors"
                          aria-label="Copy command"
                        >
                          {copied === "step1-install" ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4 text-zinc-400" />
                          )}
                        </button>
                      </div>
                      <div className="text-sm text-zinc-500">
                        Or use without installation (recommended):
                      </div>
                      <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-700 flex items-center justify-between">
                        <code className="text-emerald-400 font-mono text-sm">{getCommand("init")}</code>
                        <button
                          onClick={() => copyToClipboard(getCommand("init"), "step1-no-install")}
                          className="p-2 hover:bg-zinc-800 rounded transition-colors"
                          aria-label="Copy command"
                        >
                          {copied === "step1-no-install" ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4 text-zinc-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-600 text-white text-lg font-bold flex-shrink-0">
                    2
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Initialize in Your Project</h3>
                    <p className="text-zinc-400 mb-4">
                      Run this in your React project root. It will set up the component structure and install dependencies.
                    </p>
                    <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-700 flex items-center justify-between">
                      <code className="text-emerald-400 font-mono text-sm">{getCommand("init")}</code>
                      <button
                        onClick={() => copyToClipboard(getCommand("init"), "step2")}
                        className="p-2 hover:bg-zinc-800 rounded transition-colors"
                        aria-label="Copy command"
                      >
                        {copied === "step2" ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4 text-zinc-400" />
                        )}
                      </button>
                    </div>
                    <div className="mt-4 p-4 bg-zinc-950/50 rounded-lg border border-zinc-800">
                      <p className="text-sm text-zinc-400">This will:</p>
                      <ul className="mt-2 space-y-1 text-sm text-zinc-300">
                        <li>• Create <code className="text-rose-400">src/ui/</code> folder (or framework-specific path)</li>
                        <li>• Install dependencies (lucide-react, clsx, tailwind-merge)</li>
                        <li>• Create <code className="text-rose-400">kaisen.config.json</code></li>
                        <li>• Set up utility files</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-600 text-white text-lg font-bold flex-shrink-0">
                    3
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Add Components</h3>
                    <p className="text-zinc-400 mb-4">
                      Browse <Link to="/components" className="text-rose-400 hover:text-rose-300 underline">available components</Link> and add them to your project.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-700 flex items-center justify-between">
                        <code className="text-emerald-400 font-mono text-sm">{getCommand("add", "glow-button")}</code>
                        <button
                          onClick={() => copyToClipboard(getCommand("add", "glow-button"), "step3")}
                          className="p-2 hover:bg-zinc-800 rounded transition-colors"
                          aria-label="Copy command"
                        >
                          {copied === "step3" ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4 text-zinc-400" />
                          )}
                        </button>
                      </div>
                      <div className="text-sm text-zinc-500">
                        List all available components:
                      </div>
                      <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-700 flex items-center justify-between">
                        <code className="text-emerald-400 font-mono text-sm">{getCommand("list")}</code>
                        <button
                          onClick={() => copyToClipboard(getCommand("list"), "step3-list")}
                          className="p-2 hover:bg-zinc-800 rounded transition-colors"
                          aria-label="Copy command"
                        >
                          {copied === "step3-list" ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4 text-zinc-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-600 text-white text-lg font-bold flex-shrink-0">
                    4
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Import and Use</h3>
                    <p className="text-zinc-400 mb-4">
                      Components are copied to your project, ready to use and customize.
                    </p>
                    <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-700">
                      <pre className="text-sm text-zinc-300 overflow-x-auto">
                        <code>{`import GlowButton from '@/ui/Button/GlowButton'\n\nfunction App() {\n  return <GlowButton/> \n}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Terminal className="h-8 w-8 text-rose-400" />
              Available Commands
            </h2>
            <div className="space-y-4">
              <CommandCard
                command={getCommand("init")}
                description="Initialize Kaisen UI in your project"
                options={[
                  { flag: "-y, --yes", desc: "Skip prompts and use defaults" }
                ]}
                copied={copied}
                onCopy={copyToClipboard}
              />
              <CommandCard
                command={getCommand("add", "<component>")}
                description="Add a component to your project"
                example={getCommand("add", "glow-button")}
                options={[
                  { flag: "-p, --path <path>", desc: "Custom path for components (default: src/ui)" }
                ]}
                copied={copied}
                onCopy={copyToClipboard}
              />
              <CommandCard
                command={getCommand("list")}
                description="List all available components"
                options={[
                  { flag: "-c, --category <category>", desc: "Filter by category" }
                ]}
                copied={copied}
                onCopy={copyToClipboard}
              />
            </div>
          </section>

          
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Package className="h-8 w-8 text-rose-400" />
              Framework Support
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <FrameworkCard
                name="Vite"
                status="Full Support"
                path="src/ui"
                autoDetect={true}
              />
              <FrameworkCard
                name="Next.js"
                status="Full Support"
                path="components/ui"
                autoDetect={true}
              />
              <FrameworkCard
                name="Create React App"
                status="Full Support"
                path="src/ui"
                autoDetect={true}
              />
              <FrameworkCard
                name="Remix"
                status="Full Support"
                path="app/components/ui"
                autoDetect={true}
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-rose-400" />
              Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard
                icon={<Zap className="h-6 w-6" />}
                title="Auto-Detection"
                description="Automatically detects your framework (Vite, Next.js, CRA, Remix) and configures paths"
              />
              <FeatureCard
                icon={<Download className="h-6 w-6" />}
                title="Auto Dependencies"
                description="Installs required dependencies (lucide-react, clsx, tailwind-merge) automatically"
              />
              <FeatureCard
                icon={<Terminal className="h-6 w-6" />}
                title="TypeScript Support"
                description="Full TypeScript support with type definitions. JavaScript also supported"
              />
              <FeatureCard
                icon={<Package className="h-6 w-6" />}
                title="No Vendor Lock-in"
                description="Components are copied to your project. You own the code and can customize freely"
              />
            </div>
          </section>

          <section className="border-t border-zinc-800 pt-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-rose-400" />
              Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/components"
                className="block p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-rose-500/50 transition-all group"
              >
                <Package className="h-8 w-8 text-rose-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">Browse Components</h3>
                <p className="text-sm text-zinc-400">Explore 100+ production-ready components</p>
              </Link>
              <a
                href="https://github.com/MaruthiCharan2403/KaisenUI"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-rose-500/50 transition-all group"
              >
                <Github className="h-8 w-8 text-rose-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">GitHub Repository</h3>
                <p className="text-sm text-zinc-400">View source code and contribute</p>
              </a>
              <a
                href="https://www.npmjs.com/package/kaisenui"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-rose-500/50 transition-all group"
              >
                <Terminal className="h-8 w-8 text-rose-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">npm Package</h3>
                <p className="text-sm text-zinc-400">View package on npm registry</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function CommandCard({ command, description, example, options, copied, onCopy }: {
  command: string
  description: string
  example?: string
  options?: { flag: string; desc: string }[]
  copied: string | null
  onCopy: (text: string, id: string) => void
}) {
  const cmdId = command.replace(/\s+/g, '-')
  
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <code className="text-lg text-emerald-400 font-mono">{command}</code>
          </div>
          <p className="text-zinc-400 text-sm">{description}</p>
        </div>
        <button
          onClick={() => onCopy(example || command, cmdId)}
          className="p-2 hover:bg-zinc-800 rounded transition-colors"
          aria-label="Copy command"
        >
          {copied === cmdId ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-zinc-400" />
          )}
        </button>
      </div>
      {example && command !== example && (
        <div className="mb-3 p-3 bg-zinc-950 rounded-lg border border-zinc-700">
          <code className="text-sm text-zinc-300">{example}</code>
        </div>
      )}
      {options && options.length > 0 && (
        <div className="mt-4 space-y-2">
          {options.map((opt, idx) => (
            <div key={idx} className="flex gap-3 text-sm">
              <code className="text-rose-400">{opt.flag}</code>
              <span className="text-zinc-500">{opt.desc}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function FrameworkCard({ name, status, path, autoDetect }: {
  name: string
  status: string
  path: string
  autoDetect: boolean
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <span className="px-2 py-1 bg-emerald-600/10 border border-emerald-600/20 text-emerald-400 text-xs rounded-full">
          {status}
        </span>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="text-zinc-500">Auto-detect:</span>
          {autoDetect ? (
            <Check className="h-4 w-4 text-emerald-400" />
          ) : (
            <span className="text-zinc-500">Manual</span>
          )}
        </div>
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="text-zinc-500">Path:</span>
          <code className="text-rose-400">{path}</code>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
      <div className="flex items-center gap-3 mb-3 text-rose-400">
        {icon}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm text-zinc-400">{description}</p>
    </div>
  )
}
