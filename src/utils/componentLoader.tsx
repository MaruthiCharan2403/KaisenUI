import { FC } from 'react';
import type { ComponentsMap, ComponentData } from '../types/components';

const formatComponentName = (fileName: string): string => {
  return fileName
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase());
};

const generateDescription = (componentName: string, categoryName: string): string => {
  return `A ${componentName.toLowerCase()} component for ${categoryName.toLowerCase()}`;
};

const extractJSXCode = (sourceCode: string): string => {
  if (!sourceCode) return '';
  
  return sourceCode.trim();
};

const componentModules = import.meta.glob('../ui/**/*.tsx', { eager: true }) as Record<string, { default: FC }>;

const componentSourceModules = import.meta.glob('../ui/**/*.tsx', { eager: true, as: 'raw' }) as Record<string, string>;

const processComponents = (): ComponentsMap => {
  const organized: ComponentsMap = {};
  Object.entries(componentModules).forEach(([path, module]) => {
    const pathParts = path.split('/');
    const fileName = pathParts[pathParts.length - 1]?.replace('.tsx', '');
    const category = pathParts[pathParts.length - 2];

    if (!category || !fileName) return;

    if (!organized[category]) {
      organized[category] = [];
    }

    const Component = module?.default;
    
    const sourceCode = componentSourceModules[path] || '';
    const fullCode = extractJSXCode(sourceCode);

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

const sampleComponents = processComponents();

export default sampleComponents;
