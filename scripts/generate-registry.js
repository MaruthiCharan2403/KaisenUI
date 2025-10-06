#!/usr/bin/env node

/**
 * This script scans the src/ui folder and automatically generates
 * a complete component registry for the CLI
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uiPath = path.join(__dirname, '..', 'src', 'ui');
const registryPath = path.join(__dirname, '..', 'cli', 'registry.ts');

// Scan dependencies from component file
function extractDependencies(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const deps = [];
  
  // Check for lucide-react
  if (content.includes('from "lucide-react"') || content.includes("from 'lucide-react'")) {
    deps.push('lucide-react');
  }
  
  // Check for other common dependencies
  if (content.includes('from "clsx"') || content.includes("from 'clsx'")) {
    deps.push('clsx');
  }
  
  if (content.includes('from "tailwind-merge"') || content.includes("from 'tailwind-merge'")) {
    deps.push('tailwind-merge');
  }
  
  return [...new Set(deps)]; // Remove duplicates
}

// Generate description from component name
function generateDescription(componentName, category) {
  return `A ${componentName.toLowerCase()} component for ${category.toLowerCase()}`;
}

// Scan the ui folder
function scanComponents() {
  const components = [];
  const categories = fs.readdirSync(uiPath);
  
  for (const category of categories) {
    const categoryPath = path.join(uiPath, category);
    
    if (!fs.statSync(categoryPath).isDirectory()) continue;
    
    const files = fs.readdirSync(categoryPath);
    
    for (const file of files) {
      if (!file.endsWith('.tsx') && !file.endsWith('.jsx')) continue;
      
      const fileName = file.replace(/\.(tsx|jsx)$/, '');
      const filePath = path.join(categoryPath, file);
      const dependencies = extractDependencies(filePath);
      
      const component = {
        id: fileName.toLowerCase().replace(/([A-Z])/g, '-$1').replace(/^-/, ''),
        name: fileName.replace(/([A-Z])/g, ' $1').trim(),
        description: generateDescription(fileName, category),
        category,
        fileName,
        filePath: `src/ui/${category}/${file}`,
        dependencies,
      };
      
      components.push(component);
    }
  }
  
  return components.sort((a, b) => {
    if (a.category === b.category) {
      return a.name.localeCompare(b.name);
    }
    return a.category.localeCompare(b.category);
  });
}

// Generate registry file
function generateRegistryFile(components) {
  const content = `export interface ComponentInfo {
  id: string;
  name: string;
  description: string;
  category: string;
  fileName: string;
  filePath: string;
  dependencies: string[];
}

let cachedRegistry: ComponentInfo[] | null = null;

export async function getComponentRegistry(): Promise<ComponentInfo[]> {
  if (cachedRegistry) {
    return cachedRegistry;
  }

  // Auto-generated component registry
  const registry: ComponentInfo[] = ${JSON.stringify(components, null, 2)};

  cachedRegistry = registry;
  return registry;
}

export function clearRegistryCache() {
  cachedRegistry = null;
}
`;

  fs.writeFileSync(registryPath, content);
  console.log(`✅ Generated registry with ${components.length} components`);
  console.log(`📝 Registry file: ${registryPath}`);
}

// Main
try {
  console.log('🔍 Scanning components...');
  const components = scanComponents();
  
  console.log(`Found ${components.length} components in ${new Set(components.map(c => c.category)).size} categories`);
  
  generateRegistryFile(components);
  
  // Print summary
  const byCategory = components.reduce((acc, comp) => {
    acc[comp.category] = (acc[comp.category] || 0) + 1;
    return acc;
  }, {});
  
  console.log('\n📊 Components by category:');
  Object.entries(byCategory)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([category, count]) => {
      console.log(`  ${category}: ${count}`);
    });
    
} catch (error) {
  console.error('❌ Error generating registry:', error);
  process.exit(1);
}
