// Dynamically import all components from the ui folder structure
// This file replaces the manual Allcomponents.jsx file

import { FC } from 'react';
import type { ComponentsMap, ComponentData } from '../types/components';

// Helper to convert component name to readable format
const formatComponentName = (fileName: string): string => {
  return fileName
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase());
};

// Helper to generate description from component name
const generateDescription = (componentName: string, categoryName: string): string => {
  return `A ${componentName.toLowerCase()} component for ${categoryName.toLowerCase()}`;
};

// Helper to extract JSX code from component source
const extractJSXCode = (sourceCode: string): string => {
  if (!sourceCode) return '';
  
  // Return the full source code as-is
  return sourceCode.trim();
};

// Import component modules for rendering
const componentModules = import.meta.glob('../ui/**/*.tsx', { eager: true }) as Record<string, { default: FC }>;

// Import component source code as raw text  
const componentSourceModules = import.meta.glob('../ui/**/*.tsx', { eager: true, as: 'raw' }) as Record<string, string>;

// Process and organize components
const processComponents = (): ComponentsMap => {
  const organized: ComponentsMap = {};

  Object.entries(componentModules).forEach(([path, module]) => {
    // Extract category and component name from path
    // Example path: ../ui/Button/GlowButton.tsx
    const pathParts = path.split('/');
    const fileName = pathParts[pathParts.length - 1]?.replace('.tsx', '');
    const category = pathParts[pathParts.length - 2];

    // Skip if no category or filename
    if (!category || !fileName) return;

    // Initialize category array if it doesn't exist
    if (!organized[category]) {
      organized[category] = [];
    }

    // Get the actual component for rendering
    const Component = module?.default;
    
    // Get the source code
    const sourceCode = componentSourceModules[path] || '';
    const fullCode = extractJSXCode(sourceCode);

    // Create component object
    const componentData: ComponentData = {
      id: fileName.toLowerCase().replace(/([A-Z])/g, '-$1').replace(/^-/, ''),
      name: formatComponentName(fileName),
      description: generateDescription(fileName, category),
      code: fullCode || `// Code for ${fileName} not available`,
      preview: Component || (() => <div className="text-gray-400">Component not found</div>),
      category: category,
      fileName: fileName,
    };

    organized[category]?.push(componentData);
  });

  return organized;
};

// Generate components object
const sampleComponents = processComponents();

export default sampleComponents;
