import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import { getComponentRegistry } from '../registry.js';
import { downloadComponent } from '../utils/download.js';
import { detectDependencies, installDependencies } from '../utils/dependencies.js';

export async function add(componentName: string, options: { path?: string }) {
  console.log(chalk.bold.magenta(`\n🎨 Adding ${componentName}...\n`));

  const cwd = process.cwd();
  const configPath = path.join(cwd, 'kaisen.config.json');
  if (!fs.existsSync(configPath)) {
    console.log(chalk.red('❌ Kaisen UI not initialized. Run "kaisenui init" first.'));
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  const componentsPath = options.path || config.componentsPath || 'src/ui';
  const targetPath = path.join(cwd, componentsPath);
  const spinner = ora('Loading component registry...').start();
  const registry = await getComponentRegistry();
  spinner.succeed('Registry loaded');
  const component = registry.find(
    (c) => c.name.toLowerCase() === componentName.toLowerCase() || c.id === componentName.toLowerCase()
  );

  if (!component) {
    console.log(chalk.red(`❌ Component "${componentName}" not found.`));
    console.log(chalk.gray('\nRun') + chalk.white(' kaisenui list') + chalk.gray(' to see all available components.'));
    process.exit(1);
  }
  const downloadSpinner = ora(`Downloading ${component.name}...`).start();
  try {
    const componentDir = path.join(targetPath, component.category);
    fs.ensureDirSync(componentDir);

    const ext = config.typescript ? 'tsx' : 'jsx';
    const componentPath = path.join(componentDir, `${component.fileName}.${ext}`);
    const code = await downloadComponent(component, config.registry);
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
  return code
    .replace(/: React\.FC/g, '')
    .replace(/: React\.ReactNode/g, '')
    .replace(/interface \w+Props \{[^}]+\}/gs, '')
    .replace(/: \w+(\[\])?/g, '')
    .replace(/as \w+/g, '')
    .replace(/\.tsx/g, '.jsx');
}
