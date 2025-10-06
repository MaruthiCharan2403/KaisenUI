import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import { getComponentRegistry } from '../registry';
import { downloadComponent } from '../utils/download';
import { detectDependencies, installDependencies } from '../utils/dependencies';

export async function add(componentName: string, options: { path?: string }) {
  console.log(chalk.bold.magenta(`\n🎨 Adding ${componentName}...\n`));

  const cwd = process.cwd();
  const configPath = path.join(cwd, 'kaisen.config.json');

  // Check if initialized
  if (!fs.existsSync(configPath)) {
    console.log(chalk.red('❌ Kaisen UI not initialized. Run "kaisen init" first.'));
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  const componentsPath = options.path || config.componentsPath || 'src/ui';
  const targetPath = path.join(cwd, componentsPath);

  // Get component registry
  const spinner = ora('Loading component registry...').start();
  const registry = await getComponentRegistry();
  spinner.succeed('Registry loaded');

  // Find component
  const component = registry.find(
    (c) => c.name.toLowerCase() === componentName.toLowerCase() || c.id === componentName.toLowerCase()
  );

  if (!component) {
    console.log(chalk.red(`❌ Component "${componentName}" not found.`));
    console.log(chalk.gray('\nRun') + chalk.white(' kaisen list') + chalk.gray(' to see all available components.'));
    process.exit(1);
  }

  // Download component
  const downloadSpinner = ora(`Downloading ${component.name}...`).start();
  try {
    const componentDir = path.join(targetPath, component.category);
    fs.ensureDirSync(componentDir);

    const ext = config.typescript ? 'tsx' : 'jsx';
    const componentPath = path.join(componentDir, `${component.fileName}.${ext}`);

    // Download from registry
    const code = await downloadComponent(component, config.registry);
    
    // Convert to JS if needed
    let finalCode = code;
    if (!config.typescript) {
      finalCode = convertTsToJs(code);
    }

    fs.writeFileSync(componentPath, finalCode);
    downloadSpinner.succeed(`${component.name} downloaded`);
  } catch (error) {
    downloadSpinner.fail('Failed to download component');
    console.error(error);
    process.exit(1);
  }

  // Detect and install dependencies
  const depsSpinner = ora('Checking dependencies...').start();
  try {
    const deps = detectDependencies(component);
    if (deps.length > 0) {
      depsSpinner.text = `Installing dependencies: ${deps.join(', ')}...`;
      await installDependencies(deps, cwd);
      depsSpinner.succeed(`Dependencies installed: ${deps.join(', ')}`);
    } else {
      depsSpinner.succeed('No additional dependencies needed');
    }
  } catch (error) {
    depsSpinner.warn('Failed to install some dependencies');
    console.error(error);
  }

  console.log(chalk.bold.green(`\n✅ ${component.name} added successfully!\n`));
  console.log(chalk.gray('Import it in your project:'));
  console.log(chalk.white(`  import ${component.fileName} from '@/ui/${component.category}/${component.fileName}'\n`));
}

function convertTsToJs(code: string): string {
  // Simple TS to JS conversion
  return code
    .replace(/: React\.FC/g, '')
    .replace(/: React\.ReactNode/g, '')
    .replace(/interface \w+Props \{[^}]+\}/gs, '')
    .replace(/: \w+(\[\])?/g, '')
    .replace(/as \w+/g, '')
    .replace(/\.tsx/g, '.jsx');
}
