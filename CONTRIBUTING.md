# 🤝 Contributing to Kaisen UI

First off, thank you for considering contributing to Kaisen UI! It's people like you that make Kaisen UI such a great component library.

## 🎃 Hacktoberfest 2025

We're participating in Hacktoberfest! All meaningful contributions are welcome and will be counted towards your Hacktoberfest progress.

### What Counts as a Valid Contribution?

- ✅ New UI components
- ✅ Bug fixes
- ✅ Feature enhancements
- ✅ Documentation improvements
- ✅ Performance optimizations
- ✅ Accessibility improvements
- ✅ TypeScript improvements
- ✅ Test additions

### What Doesn't Count?

- ❌ Spam PRs
- ❌ Trivial changes (fixing typos in comments, etc.)
- ❌ PRs that don't follow our guidelines
- ❌ Duplicate PRs

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
  - [Adding New Components](#adding-new-components)
  - [Fixing Bugs](#fixing-bugs)
  - [Adding Features](#adding-features)
  - [Improving Documentation](#improving-documentation)
- [Development Setup](#development-setup)
- [Component Guidelines](#component-guidelines)
- [Pull Request Process](#pull-request-process)
- [Style Guide](#style-guide)
- [Issue Labels](#issue-labels)

---

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to yssmc24@gmail.com.

**Be Kind. Be Respectful. Be Professional.**

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/pnpm/yarn/bun
- Git
- A code editor (VS Code recommended)
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Quick Start

1. **Fork the repository**
   
   Click the "Fork" button at the top right of this page.

2. **Clone your fork**
   ```bash
   git clone https://github.com/MaruthiCharan2403/KaisenUI.git
   cd KaisenUI
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

4. **Create a branch**
   ```bash
   # For new components
   git checkout -b component/component-name
   
   # For bug fixes
   git checkout -b fix/bug-description
   
   # For features
   git checkout -b feature/feature-name
   
   # For documentation
   git checkout -b docs/what-you-are-documenting
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎯 How to Contribute

### Adding New Components

We love new components! Here's how to add one:

#### 1. Choose a Category

Components are organized by category in `src/ui/`:
```
src/ui/
├── Button/
├── Card/
├── Form/
├── Hero/
├── Navbar/
└── ...
```

Create a new category folder if your component doesn't fit existing ones.

#### 2. Create Your Component

Create a new `.tsx` file in the appropriate category folder:

```tsx
// src/ui/Button/AnimatedButton.tsx

import React from 'react';

const AnimatedButton = () => {
  return (
    <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:scale-105 transition-transform duration-200">
      Click Me
    </button>
  );
};

export default AnimatedButton;
```

#### 3. Follow Component Guidelines

- ✅ Use **TypeScript** for type safety
- ✅ Use **Tailwind CSS** only (no inline styles)
- ✅ Make it **responsive** (mobile-first approach)
- ✅ Add **hover/focus/active states**
- ✅ Include **accessibility** attributes (ARIA labels, roles, etc.)
- ✅ Use **Lucide React** for icons (if needed)
- ✅ Export as **default export**
- ✅ Keep components **self-contained** (no external dependencies except React and Lucide)
- ✅ Support **dark mode** with Tailwind's `dark:` prefix

#### 4. Register Your Component

After creating your component, generate the registry:

```bash
npm run registry:generate
```

This automatically scans `src/ui/` and adds your component to `cli/registry.ts`.

#### 5. Test Your Component

```bash
# Run the dev server
npm run dev

# Test the CLI
npx kaisenui add your-component-name
```

Make sure:
- Component renders correctly
- Responsive on mobile, tablet, and desktop
- Dark mode works
- No console errors
- CLI can add the component successfully

#### 6. Add Documentation (Optional but Appreciated)

Add usage examples or special notes in the component file as comments.

---

### Fixing Bugs

Found a bug? Here's how to fix it:

1. **Check if it's already reported**
   
   Search [existing issues](https://github.com/MaruthiCharan2403/KaisenUI/issues) first.

2. **Create an issue** (if not already reported)
   
   Describe:
   - What happened
   - What you expected to happen
   - Steps to reproduce
   - Screenshots (if applicable)

3. **Fix the bug**
   
   Create a branch: `git checkout -b fix/bug-description`

4. **Test thoroughly**
   
   Make sure your fix doesn't break anything else.

5. **Submit a PR**
   
   Reference the issue number in your PR description.

---

### Adding Features

Want to add a new feature? Great! Here's the process:

1. **Discuss first** (for major features)
   
   Open an issue or discussion to get feedback before investing time.

2. **Examples of features we'd love:**
   - New animation variants
   - Accessibility improvements
   - Performance optimizations
   - CLI enhancements
   - Framework-specific templates
   - Testing utilities
   - Storybook integration
   - Component playground
   - Theme customization system
   - A11y checker tool

3. **Implementation**
   
   Follow our code style and best practices.

4. **Documentation**
   
   Update README.md or create new docs if needed.

---

### Improving Documentation

Documentation is just as important as code!

**Areas to improve:**
- README.md clarity
- Component usage examples
- Setup guides for different frameworks
- CLI command documentation
- Architecture diagrams
- Video tutorials
- Blog posts/guides

---

## 🛠️ Development Setup

### Project Structure

```
KaisenUI/
├── src/
│   ├── ui/                    # 🎨 Component library (your components go here)
│   │   ├── Button/
│   │   ├── Card/
│   │   └── ...
│   ├── Components/            # Website components
│   ├── utils/                 # Utility functions
│   └── App.tsx               # Main app
├── cli/                       # 🚀 CLI tool
│   ├── commands/             # CLI commands (init, add, list)
│   ├── utils/                # CLI utilities
│   └── registry.ts           # Auto-generated component registry
├── public/                    # Static assets
├── scripts/
│   └── generate-registry.js  # Registry generator script
└── package.json
```

### Available Scripts

```bash
# Development
npm run dev                    # Start dev server
npm run build                  # Build website
npm run preview               # Preview production build

# CLI Development
npm run build:cli             # Build CLI tool
npm run registry:generate     # Generate component registry

# Quality
npm run lint                  # Run ESLint

# Deployment
npm run deploy                # Deploy to GitHub Pages
```

---

## 📐 Component Guidelines

### Design Principles

1. **Simplicity** - Components should be easy to understand and use
2. **Flexibility** - Allow customization without being overly complex
3. **Consistency** - Follow existing patterns and naming conventions
4. **Performance** - Optimize for speed and bundle size
5. **Accessibility** - Always consider users with disabilities

### Technical Requirements

#### ✅ DO:

```tsx
// ✅ Good: TypeScript, Tailwind, responsive, accessible
const GoodButton = () => {
  return (
    <button 
      className="px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 rounded-lg transition-colors duration-200 md:px-8 md:py-4"
      aria-label="Submit form"
    >
      Submit
    </button>
  );
};
```

#### ❌ DON'T:

```tsx
// ❌ Bad: Inline styles, no responsiveness, no dark mode
const BadButton = () => {
  return (
    <button style={{ backgroundColor: 'blue', padding: '12px' }}>
      Submit
    </button>
  );
};
```

### Naming Conventions

- **Component Files**: PascalCase (e.g., `GlowButton.tsx`)
- **Component IDs**: kebab-case (e.g., `glow-button`)
- **Category Folders**: PascalCase (e.g., `Button/`, `Card/`)

### Required Component Structure

```tsx
import React from 'react';
// Import icons from lucide-react if needed
import { Star } from 'lucide-react';

const ComponentName = () => {
  return (
    <div className="...">
      {/* Your component JSX */}
    </div>
  );
};

export default ComponentName;
```

### Accessibility Checklist

- [ ] Semantic HTML elements
- [ ] ARIA labels where needed
- [ ] Keyboard navigation support
- [ ] Focus visible states
- [ ] Sufficient color contrast (WCAG AA minimum)
- [ ] Screen reader friendly
- [ ] Reduced motion support (`motion-reduce:`)

### Responsive Design

Use Tailwind's responsive prefixes:
```tsx
<div className="
  text-sm md:text-base lg:text-lg
  px-4 md:px-6 lg:px-8
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
">
```

### Dark Mode

Always include dark mode variants:
```tsx
<div className="
  bg-white dark:bg-gray-900
  text-gray-900 dark:text-white
  border-gray-200 dark:border-gray-700
">
```

---

## 🔄 Pull Request Process

### Before Submitting

- [ ] Code follows our style guide
- [ ] Component is in the correct category folder
- [ ] Registry generated (`npm run registry:generate`)
- [ ] Component tested in browser
- [ ] CLI command tested (`npx kaisenui add your-component`)
- [ ] No console errors or warnings
- [ ] Dark mode works
- [ ] Responsive on all screen sizes
- [ ] Accessibility attributes added
- [ ] Branch is up to date with `main`

### PR Title Format

Use conventional commit format:

- `feat: Add AnimatedButton component`
- `fix: Resolve dark mode issue in Card component`
- `docs: Update CLI installation guide`
- `perf: Optimize component loader`
- `refactor: Improve registry generation script`
- `style: Fix Tailwind class ordering`
- `test: Add tests for Button components`

### PR Description Template

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] New component
- [ ] Bug fix
- [ ] Feature enhancement
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Refactoring

## Component Details (if applicable)
- **Component Name**: AnimatedButton
- **Category**: Button
- **Description**: A button with smooth hover animations

## Screenshots/Demo
[Add screenshots or GIF showing your component]

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have tested my changes
- [ ] Registry generated successfully
- [ ] Component works via CLI
- [ ] Dark mode supported
- [ ] Responsive design implemented
- [ ] Accessibility attributes added
- [ ] No breaking changes

## Related Issues
Closes #123
```

### Review Process

1. Maintainers will review within 48 hours
2. Address feedback if requested
3. Once approved, your PR will be merged
4. Your contribution will be acknowledged in releases

---

## 🎨 Style Guide

### TypeScript

```tsx
// Use interfaces for props
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

// Use arrow functions
const Button = ({ children, variant = 'primary', onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};
```

### Tailwind CSS

```tsx
// Group related utilities
className="
  // Layout
  flex items-center justify-center
  // Sizing
  w-full h-12
  // Spacing
  px-6 py-3
  // Typography
  text-lg font-semibold
  // Colors
  bg-blue-500 text-white
  // Effects
  rounded-lg shadow-lg
  // Interactions
  hover:bg-blue-600 active:scale-95
  // Transitions
  transition-all duration-200
  // Responsive
  md:w-auto md:px-8
  // Dark mode
  dark:bg-blue-700
"
```

### Code Organization

- Keep components under 200 lines when possible
- Extract complex logic into separate functions
- Use meaningful variable names
- Add comments for complex logic only

---

## 🏷️ Issue Labels

We use labels to organize issues:

- `hacktoberfest` - Hacktoberfest-friendly issues
- `good first issue` - Perfect for beginners
- `help wanted` - We'd love contributions here
- `component` - New component requests
- `bug` - Something isn't working
- `enhancement` - New feature or improvement
- `documentation` - Documentation improvements
- `accessibility` - A11y improvements
- `performance` - Performance optimizations

---

## 💡 Ideas for Contributions

Not sure where to start? Here are some ideas:

### New Components
- Skeleton loaders
- Toast notifications
- Modal/Dialog
- Tooltip
- Dropdown menu
- Tabs
- Accordion
- Progress bar
- Badge
- Chip
- Switch/Toggle
- Radio group
- Checkbox group
- Date picker
- Color picker
- File upload
- Image gallery
- Carousel
- Video player
- Audio player
- Charts/Graphs

### Features
- Live code editor
- Component playground
- Theme builder
- Color palette generator
- Copy-paste tracking
- Component analytics
- VS Code extension
- Figma plugin
- Component testing framework

### Improvements
- Add unit tests
- Improve TypeScript types
- Add JSDoc comments
- Create video tutorials
- Write blog posts
- Improve SEO
- Add animations
- Optimize bundle size
- Improve accessibility
- Add keyboard shortcuts

---

## 🆘 Getting Help

Need help? Here's how to get it:

- 💬 [GitHub Discussions](https://github.com/MaruthiCharan2403/KaisenUI/discussions) - Ask questions
- 🐛 [GitHub Issues](https://github.com/MaruthiCharan2403/KaisenUI/issues) - Report bugs
- 📧 Email: yssmc24@gmail.com
- 🌐 Website: [kaisenui.me](https://kaisenui.me)

---

## 🎁 Recognition

All contributors will be:
- Listed in our README
- Mentioned in release notes
- Given credit in component documentation

Top contributors may receive:
- Special recognition badge
- Featured on our website
- Direct collaboration opportunities

---

## 📝 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## 🙏 Thank You!

Every contribution, no matter how small, makes Kaisen UI better. We appreciate your time and effort!

**Happy Hacking! 🎃**

---

<div align="center">

**Made with ❤️ by the Kaisen UI Community**

[Website](https://kaisenui.me) • [GitHub](https://github.com/MaruthiCharan2403/KaisenUI) • [NPM](https://www.npmjs.com/package/kaisenui)

</div>
