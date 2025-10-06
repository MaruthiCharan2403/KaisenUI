# 🎨 Kaisen UI

[![npm version](https://img.shields.io/npm/v/kaisen.svg)](https://www.npmjs.com/package/kaisen)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

> Beautiful, accessible, and customizable React + Tailwind CSS components that you can copy and paste into your apps.

🌐 **Website**: [kaisenui.me](https://kaisenui.me)  
📦 **NPM**: [@kaisen](https://www.npmjs.com/package/kaisen)  
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
npx kaisen init

# Or install globally
npm install -g kaisen
kaisen init

# Add components
npx kaisen add glow-button
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
npx kaisen init

# pnpm  
pnpm dlx kaisen init

# yarn
yarn dlx kaisen init

# bun
bunx kaisen init
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
npx kaisen add glow-button

# List all available components
npx kaisen list

# List components by category
npx kaisen list --category buttons
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
| `kaisen init` | Initialize Kaisen UI in your project | `npx kaisen init` |
| `kaisen add <component>` | Add a component to your project | `npx kaisen add glow-button` |
| `kaisen list` | List all available components | `npx kaisen list` |
| `kaisen list -c <category>` | Filter components by category | `npx kaisen list -c buttons` |

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

### Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Build CLI
npm run build:cli

# Generate component registry
npm run registry:generate
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

4. **Test your changes**
   ```bash
   npm run dev
   # Test your component thoroughly
   ```

5. **Commit and push**
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

### Example Component Structure

```tsx
// src/ui/Button/NewButton.tsx
import { ButtonHTMLAttributes } from 'react'

interface NewButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export default function NewButton({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: NewButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${variant === 'primary' ? 'bg-rose-600' : 'bg-zinc-800'} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
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

## 📄 License

MIT License - see [LICENSE.md](LICENSE.md) for details.

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)

---

## 📞 Support & Community

- 🌐 **Website**: [kaisenui.me](https://kaisenui.me)
- 💬 **Issues**: [GitHub Issues](https://github.com/MaruthiCharan2403/KaisenUI/issues)
- 📧 **Email**: Contact via GitHub
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

[Website](https://kaisenui.me) • [NPM](https://www.npmjs.com/package/kaisen) • [GitHub](https://github.com/MaruthiCharan2403/KaisenUI)

⭐ **Star us on GitHub** if you find this useful!

</div>
