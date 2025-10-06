import fs from 'fs/promises';
import path from 'path';
import sampleComponents from '../utils/componentLoader.js';

// Helper to remove whitespace and special chars for filenames
const makeFileName = (name) =>
  name.replace(/[\s\-]+/g, '').replace(/[^\w]/g, '') + '.jsx';

// Template for React page
const reactTemplate = (componentName, jsxCode) => `
import React from "react";

const ${componentName} = () => (
  ${jsxCode}
);

export default ${componentName};
`;

export async function generateComponents(categoryInput) {
  const category = categoryInput.trim();
  const components = sampleComponents[category];

  if (!components) {
    console.error(`No components found for category: ${category}`);
    return;
  }

  // Create the ui/category folder if it doesn't exist
  const dirPath = path.join('ui', category);
  await fs.mkdir(dirPath, { recursive: true });

  // For each subcomponent, create a React file
  for (const comp of components) {
    const fileName = makeFileName(comp.name);
    const componentName = comp.name.replace(/[\s\-]+/g, '');
    const code = comp.code;
    const fileContent = reactTemplate(componentName, code);

    await fs.writeFile(path.join(dirPath, fileName), fileContent, 'utf8');
    console.log(`Created ${dirPath}/${fileName}`);
  }
}

// CLI usage
if (process.argv.length > 2 && import.meta.url === `file://${process.argv[1]}`) {
  const userInput = process.argv[2];
  if (!userInput) {
    console.error('Please provide a category name (e.g., Button)');
    process.exit(1);
  }
  await generateComponents(userInput);
}