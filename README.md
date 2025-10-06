# 🎨 Kaisen UI

[![npm version](https://img.shields.io/npm/v/kaisen.svg)](https://www.npmjs.com/package/kaisenui)
[![Li| Command | Description | Example |
|---------|-------------|----------|
| `kaisenui init` | Initialize Kaisen UI in your project | `npx kaisenuiui init` |
|6. **Commit and push**
   ```bash
   git add .
   git commit -m "Add: Your descriptive commit message"
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**ui add <component>` | Add a component to your project | `npx kaisenuiui add glow-button` |
| `kaisenui list` | List all available components | `npx kaisenuiui list` |
| `kaisenui list -c <category>` | Filter components by category | `npx kaisenuiui list -c buttons` | MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

> Beautiful, accessible, and customizable React + Tailwind CSS components that you can copy and paste into your apps.

🌐 **Website**: [kaisenui.me](https://kaisenui.me)  
📦 **NPM**: [@kaisenui](https://www.npmjs.com/package/kaisenuiui)  
⭐ **GitHub**: [MaruthiCharan2403/KaisenUI](https://github.com/MaruthiCharan2403/KaisenUI)

---

## ✨ Features

- ⚡ **Lightning Fast** - Zero runtime dependencies, optimized performance
- 🎨 **100+ Components** - Buttons, Cards, Forms, Navbars, and more
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🎭 **Beautiful Animations** - Smooth transitions and micro-interactions
- 🔧 **Fully Customizable** - Own the code, modify as you need
- 📋 **Copy & Paste Ready** - No complicated setup or build process
- 🌓 **Dark Mode Support** - Built with dark themes in mind
- ♿ **Accessible** - WCAG compliant components
- 📖 **TypeScript Support** - Full type definitions included
- 🚀 **CLI Tool** - Add components with a single command

---

## 🚀 Quick Start

### Option 1: CLI Installation (Recommended)

The fastest way to add components to your project:

```bash
# Using npx (no installation needed)
npx kaisenuiui init

# Or install globally
npm install -g kaisenui
kaisenui init

# Add components
npx kaisenuiui add glow-button
```

**Supports**: npm, pnpm, yarn, bun

### Option 2: Manual Copy-Paste

1. Visit [kaisenui.me/components](https://kaisenui.me/components)
2. Browse and preview components
3. Click "Manual Copy" to get the code
4. Paste into your project

---

## 📦 CLI Installation Guide

### Prerequisites

- Node.js 16+ and npm/pnpm/yarn/bun
- React 18+ project (Vite, Next.js, CRA, or Remix)
- Tailwind CSS configured

### Step 1: Initialize

Run the init command in your project root:

```bash
# npm
npx kaisenui init

# pnpm  
pnpm dlx kaisenui init

# yarn
yarn dlx kaisenui init

# bun
bunx kaisenui init
```

This will:
- ✅ Detect your framework (Vite, Next.js, CRA, Remix)
- ✅ Create component directory (`src/ui/` or framework-specific)
- ✅ Install dependencies (lucide-react, clsx, tailwind-merge)
- ✅ Generate `kaisen.config.json`
- ✅ Set up utility files

### Step 2: Add Components

```bash
# Add a specific component
npx kaisenui add glow-button

# List all available components
npx kaisenui list

# List components by category
npx kaisenui list --category buttons
```

### Step 3: Import and Use

```tsx
import GlowButton from '@/ui/Button/GlowButton'

function App() {
  return (
    <div>
      <GlowButton>Click me!</GlowButton>
    </div>
  )
}
```

### CLI Commands

| Command | Description | Example |
|---------|-------------|---------|
| `kaisenui init` | Initialize Kaisen UI in your project | `npx kaisenui init` |
| `kaisenui add <component>` | Add a component to your project | `npx kaisenui add glow-button` |
| `kaisenui list` | List all available components | `npx kaisenui list` |
| `kaisenui list -c <category>` | Filter components by category | `npx kaisenui list -c buttons` |

### CLI Options

```bash
# Skip prompts and use defaults
kaisen init --yes

# Specify custom component path
kaisen add glow-button --path src/components

# View help
kaisen --help
```

---

## 🏗️ Framework Support

Kaisen UI works seamlessly with all major React frameworks:

| Framework | Status | Component Path | Auto-Detect |
|-----------|--------|----------------|-------------|
| **Vite** | ✅ Full Support | `src/ui/` | Yes |
| **Next.js** (App Router) | ✅ Full Support | `components/ui/` | Yes |
| **Next.js** (Pages Router) | ✅ Full Support | `components/ui/` | Yes |
| **Create React App** | ✅ Full Support | `src/ui/` | Yes |
| **Remix** | ✅ Full Support | `app/components/ui/` | Yes |

The CLI automatically detects your framework and configures the correct paths.

---

## 📂 Component Categories

### 🎯 UI Components (100+)

- **Buttons** - Glow, Liquid, Neon, Simple
- **Cards** - Feature, Holographic, Glow, Release
- **Forms** - Input, Feedback, Request, Contact
- **Navigation** - Navbar, Breadcrumb, Footer, Pagination
- **Layout** - Hero, Banner, CTA, Background
- **Data Display** - Table, Timeline, Steps, Pricing
- **Feedback** - Loaders, Alerts, Modals, Toast
- **Content** - Blog, Article, News, Magazine
- **Social** - Profile, Team, Testimonial, Review
- **404 Pages** - Cosmic, Neon, Vignette
- **And more...**

Explore all components at [kaisenui.me/components](https://kaisenui.me/components)

---

## 🎨 Technology Stack

- **React** 18+ - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **Vite** - Build tool
- **React Router** - Client-side routing

---

## 🛠️ Local Development

### Clone and Setup

```bash
# Clone the repository
git clone https://github.com/MaruthiCharan2403/KaisenUI.git
cd KaisenUI

# Install dependencies
npm install
# or
pnpm install
```


### Project Structure

```
KaisenUI/
├── src/
│   ├── ui/              # Component library (100+ components)
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Form/
│   │   └── ...
│   ├── Components/      # Website components
│   │   ├── Home.tsx
│   │   ├── UIComponents.tsx
│   │   ├── CliInstallation.tsx
│   │   └── ...
│   ├── utils/           # Utility functions
│   │   └── componentLoader.tsx
│   ├── types/           # TypeScript types
│   └── App.tsx          # Main app component
├── cli/                 # CLI tool source
│   ├── commands/
│   │   ├── init.ts
│   │   ├── add.ts
│   │   └── list.ts
│   ├── utils/
│   └── index.ts
├── public/              # Static assets
└── package.json
```

---

## 🤝 Contributing

We love contributions! Whether it's bug fixes, new components, or documentation improvements.

### How to Contribute

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/KaisenUI.git
   cd KaisenUI
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

3. **Make your changes**
   - Add new components to `src/ui/CategoryName/`
   - Follow existing naming conventions
   - Use TypeScript and Tailwind CSS
   - Ensure components are responsive and accessible
   - **Important**: Add your component to `cli/registry.ts` (see Registry section below)

4. **Generate the registry** (if you added a new component)
   ```bash
   npm run registry:generate
   # This auto-generates the component registry from src/ui/
   ```

5. **Test your changes**
   ```bash
   npm run dev
   # Test your component thoroughly in the browser
   # Also test the CLI: npx kaisenui add your-component
   ```

6. **Commit and push**
   ```bash
   git add .
   git commit -m "Add: Your descriptive commit message"
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Go to your fork on GitHub
   - Click "Pull Request"
   - Describe your changes clearly
   - Wait for review

### Component Registry

**Important**: After creating a new component, it must be registered to be available via CLI!

The registry auto-generates from your component structure. Run:

```bash
npm run registry:generate
```

This script scans `src/ui/` and creates `cli/registry.ts` with all components, including:
- Component ID (e.g., `glow-button`)
- Category (folder name, e.g., `Button`)
- File name (e.g., `GlowButton.tsx`)
- Description (auto-generated or custom)
- Dependencies (auto-detected from imports)

**File Structure for Auto-Detection:**
```
src/ui/
├── Button/
│   ├── GlowButton.tsx       → ID: glow-button, Category: Button
│   ├── NeonButton.tsx       → ID: neon-button, Category: Button
│   └── SimpleButton.tsx     → ID: simple-button, Category: Button
├── Card/
│   ├── FeatureCard.tsx      → ID: featurecard, Category: Card
│   └── GlowCard.tsx         → ID: glowcard, Category: Card
```

The generator automatically:
- ✅ Converts file names to kebab-case IDs
- ✅ Detects category from folder name
- ✅ Scans for dependencies (lucide-react, clsx, etc.)
- ✅ Generates descriptions

### Component Guidelines

When creating new components:

- ✅ Use **TypeScript** for type safety
- ✅ Use **Tailwind CSS** for styling (no inline styles)
- ✅ Make components **responsive** (mobile-first)
- ✅ Add **hover/focus states** for interactivity
- ✅ Include **accessibility** attributes (aria-labels, roles)
- ✅ Use **Lucide React** for icons
- ✅ Export as **default export**
- ✅ Keep components **self-contained**
- ✅ **Run `npm run registry:generate`** after adding components

### Example Component Structure

```tsx
const ColorMatrix = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20">
    <div className="container mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            Why Kaisen UI?
          </h2>
          <p className="text-lg text-cyan-900/80 dark:text-cyan-100/80 mb-8">
            Experience the future of React components with our zero-runtime atomic CSS system.
          </p>
          
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-cyan-200 dark:border-cyan-800/50">
              <h3 className="text-xl font-semibold text-cyan-700 dark:text-cyan-400 mb-2">40% Faster Rendering</h3>
              <p className="text-cyan-900/70 dark:text-cyan-100/70">Compiles to pure CSS during build</p>
            </div>
            
            <div className="p-5 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/50">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">Automatic Dark Mode</h3>
              <p className="text-blue-900/70 dark:text-blue-100/70">System preference detection</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700"></div>
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 dark:from-pink-600 dark:to-rose-700"></div>
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 dark:from-amber-600 dark:to-orange-700"></div>
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 dark:from-purple-600 dark:to-indigo-700"></div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ColorMatrix;

```

### Areas to Contribute

- 🎨 **New Components** - Create unique, reusable components
- 🐛 **Bug Fixes** - Fix existing issues
- 📖 **Documentation** - Improve README, add examples
- ♿ **Accessibility** - Enhance a11y support
- 🎭 **Animations** - Add smooth transitions
- 🌐 **Internationalization** - Add i18n support
- 🧪 **Testing** - Add unit/integration tests

---

## Creators

<div align="center">

| [Charan](https://github.com/MaruthiCharan2403) | [Varun](https://github.com/VarunreddyT) |
|:---:|:---:|
| [![Charan](https://github.com/MaruthiCharan2403.png?size=100)](https://github.com/MaruthiCharan2403) | [![Varun](https://github.com/VarunreddyT.png?size=100)](https://github.com/VarunreddyT) |
| [@MaruthiCharan2403](https://github.com/MaruthiCharan2403) | [@VarunreddyT](https://github.com/VarunreddyT) |

</div>

---

## 📄 License

MIT License - see [LICENSE.md](LICENSE.md) for details.

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)

---

## 📞 Support & Community

- 🌐 **Website**: [kaisenui.me](https://kaisenui.me)
- 💬 **Issues**: [GitHub Issues](https://github.com/MaruthiCharan2403/KaisenUI/issues)
- 📧 **Email**: yssmc24@gmail.com
- ⭐ **Star us**: If you find this helpful!

---

## 🗺️ Roadmap

- [ ] More component categories (Charts, Maps, etc.)
- [ ] Figma design kit
- [ ] Storybook documentation
- [ ] Component playground with live editing
- [ ] VS Code extension
- [ ] Themes and presets
- [ ] Unit tests for all components
- [ ] Performance benchmarks

---

<div align="center">

**Made with ❤️ by the Kaisen UI Team**

[Website](https://kaisenui.me) • [NPM](https://www.npmjs.com/package/kaisenuiui) • [GitHub](https://github.com/MaruthiCharan2403/KaisenUI)

⭐ **Star us on GitHub** if you find this useful!

</div>
