import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';
import ora from 'ora';
import prompts from 'prompts';
import { detectFramework, getFrameworkDisplayName, getFrameworkSpecificInstructions } from '../utils/framework-detector';

export async function init(options: { yes?: boolean }) {
  console.log(chalk.bold.magenta('\n🎨 Initializing Kaisen UI...\n'));

  const cwd = process.cwd();
  
  // Detect framework
  const framework = detectFramework(cwd);
  console.log(chalk.cyan(`📦 Detected: ${getFrameworkDisplayName(framework)}\n`));
  
  const uiPath = path.join(cwd, framework.componentsPath);

  // Check if already initialized
  if (fs.existsSync(uiPath)) {
    const { overwrite } = await prompts({
      type: 'confirm',
      name: 'overwrite',
      message: 'UI folder already exists. Do you want to continue?',
      initial: false,
    });

    if (!overwrite) {
      console.log(chalk.yellow('❌ Initialization cancelled.'));
      process.exit(0);
    }
  }

  let config = {
    typescript: true,
    installDeps: true,
  };

  if (!options.yes) {
    const response = await prompts([
      {
        type: 'confirm',
        name: 'typescript',
        message: 'Use TypeScript?',
        initial: true,
      },
      {
        type: 'confirm',
        name: 'installDeps',
        message: 'Install dependencies automatically?',
        initial: true,
      },
    ]);

    config = { ...config, ...response };
  }

  // Create ui directory structure
  const spinner = ora('Creating directory structure...').start();
  try {
    fs.ensureDirSync(uiPath);
    spinner.succeed('Directory structure created');
  } catch (error) {
    spinner.fail('Failed to create directories');
    console.error(error);
    process.exit(1);
  }

  // Create kaisen.config.json
  const configSpinner = ora('Creating configuration file...').start();
  try {
    const kaisenConfig = {
      typescript: config.typescript,
      componentsPath: framework.componentsPath,
      framework: framework.name,
      aliasPrefix: framework.aliasPrefix,
      tailwind: true,
      registry: 'https://raw.githubusercontent.com/MaruthiCharan2403/KaisenUI/main',
    };

    fs.writeFileSync(
      path.join(cwd, 'kaisen.config.json'),
      JSON.stringify(kaisenConfig, null, 2)
    );
    configSpinner.succeed('Configuration file created');
  } catch (error) {
    configSpinner.fail('Failed to create configuration');
    console.error(error);
    process.exit(1);
  }

  // Install dependencies
  if (config.installDeps) {
    const depsSpinner = ora('Installing dependencies...').start();
    try {
      const deps = ['lucide-react', 'clsx', 'tailwind-merge'];
      const devDeps = config.typescript ? ['@types/react', '@types/node'] : [];

      // Check if package manager is npm, pnpm, or yarn
      let packageManager = 'npm';
      if (fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))) {
        packageManager = 'pnpm';
      } else if (fs.existsSync(path.join(cwd, 'yarn.lock'))) {
        packageManager = 'yarn';
      }

      const installCmd = packageManager === 'yarn' ? 'add' : 'install';
      
      execSync(`${packageManager} ${installCmd} ${deps.join(' ')}`, {
        stdio: 'inherit',
        cwd,
      });

      if (devDeps.length > 0) {
        const devFlag = packageManager === 'yarn' ? '--dev' : '--save-dev';
        execSync(`${packageManager} ${installCmd} ${devFlag} ${devDeps.join(' ')}`, {
          stdio: 'inherit',
          cwd,
        });
      }

      depsSpinner.succeed('Dependencies installed');
    } catch (error) {
      depsSpinner.fail('Failed to install dependencies');
      console.error(error);
    }
  }

  // Create utils file for cn helper
  const utilsSpinner = ora('Creating utility files...').start();
  try {
    // Determine lib path based on framework
    let libPath: string;
    if (framework.name === 'nextjs') {
      libPath = framework.srcDir ? path.join(cwd, 'src', 'lib') : path.join(cwd, 'lib');
    } else if (framework.name === 'remix') {
      libPath = path.join(cwd, 'app', 'lib');
    } else {
      libPath = path.join(cwd, 'src', 'lib');
    }
    
    fs.ensureDirSync(libPath);

    const ext = config.typescript ? 'ts' : 'js';
    const utilsContent = `import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs${config.typescript ? ': ClassValue[]' : ''}) {
  return twMerge(clsx(inputs));
}
`;

    fs.writeFileSync(path.join(libPath, `utils.${ext}`), utilsContent);
    utilsSpinner.succeed('Utility files created');
  } catch (error) {
    utilsSpinner.fail('Failed to create utility files');
    console.error(error);
  }

  console.log(chalk.bold.green('\n✅ Kaisen UI initialized successfully!\n'));
  
  // Show framework-specific instructions
  const instructions = getFrameworkSpecificInstructions(framework);
  instructions.forEach(instruction => {
    console.log(chalk.gray(instruction));
  });
  
  console.log(chalk.cyan('\nNext steps:'));
  console.log(chalk.gray('  1. Run') + chalk.white(' kaisen add <component>') + chalk.gray(' to add components'));
  console.log(chalk.gray('  2. Run') + chalk.white(' kaisen list') + chalk.gray(' to see all available components\n'));
}
