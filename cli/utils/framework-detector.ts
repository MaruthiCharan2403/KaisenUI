import fs from 'fs-extra';
import path from 'path';

export interface FrameworkInfo {
  name: 'nextjs' | 'vite' | 'cra' | 'remix' | 'unknown';
  version?: string;
  isAppRouter?: boolean; 
  srcDir: boolean;
  componentsPath: string;
  aliasPrefix: string;
}

export function detectFramework(cwd: string): FrameworkInfo {
  const packageJsonPath = path.join(cwd, 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    return {
      name: 'unknown',
      srcDir: true,
      componentsPath: 'src/ui',
      aliasPrefix: '@',
    };
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };

  // Detect Next.js
  if (deps['next']) {
    const nextVersion = deps['next'].replace(/[\^~]/g, '');
    const majorVersion = parseInt(nextVersion.split('.')[0]);
    const isAppRouter = majorVersion >= 13 && fs.existsSync(path.join(cwd, 'app'));
    
    // Check if using src directory
    const hasSrcDir = fs.existsSync(path.join(cwd, 'src'));
    
    let componentsPath = 'components/ui';
    if (hasSrcDir) {
      if (isAppRouter) {
        componentsPath = 'src/components/ui';
      } else {
        componentsPath = 'src/components/ui';
      }
    } else {
      componentsPath = 'components/ui';
    }

    return {
      name: 'nextjs',
      version: nextVersion,
      isAppRouter,
      srcDir: hasSrcDir,
      componentsPath,
      aliasPrefix: '@',
    };
  }

  // Detect Vite
  if (deps['vite']) {
    return {
      name: 'vite',
      version: deps['vite'].replace(/[\^~]/g, ''),
      srcDir: true,
      componentsPath: 'src/ui',
      aliasPrefix: '@',
    };
  }

  // Detect Create React App
  if (deps['react-scripts']) {
    return {
      name: 'cra',
      version: deps['react-scripts'].replace(/[\^~]/g, ''),
      srcDir: true,
      componentsPath: 'src/ui',
      aliasPrefix: '@',
    };
  }

  // Detect Remix
  if (deps['@remix-run/react']) {
    return {
      name: 'remix',
      version: deps['@remix-run/react'].replace(/[\^~]/g, ''),
      srcDir: false,
      componentsPath: 'app/components/ui',
      aliasPrefix: '~',
    };
  }

  // Default to src/ui for unknown frameworks
  return {
    name: 'unknown',
    srcDir: true,
    componentsPath: 'src/ui',
    aliasPrefix: '@',
  };
}

export function getFrameworkDisplayName(framework: FrameworkInfo): string {
  switch (framework.name) {
    case 'nextjs':
      return `Next.js ${framework.version}${framework.isAppRouter ? ' (App Router)' : ' (Pages Router)'}`;
    case 'vite':
      return `Vite ${framework.version}`;
    case 'cra':
      return `Create React App ${framework.version}`;
    case 'remix':
      return `Remix ${framework.version}`;
    default:
      return 'React (Unknown setup)';
  }
}

export function getFrameworkSpecificInstructions(framework: FrameworkInfo): string[] {
  const instructions: string[] = [];

  switch (framework.name) {
    case 'nextjs':
      instructions.push('✓ Next.js detected - using ' + framework.componentsPath);
      if (framework.isAppRouter) {
        instructions.push('✓ App Router detected - components will work with Server/Client Components');
        instructions.push('  Add "use client" directive if using interactive components');
      }
      instructions.push(`✓ Import components: import Component from '${framework.aliasPrefix}/components/ui/...'`);
      break;
    
    case 'vite':
      instructions.push('✓ Vite detected - optimized for fast development');
      instructions.push(`✓ Import components: import Component from '${framework.aliasPrefix}/ui/...'`);
      break;
    
    case 'cra':
      instructions.push('✓ Create React App detected');
      instructions.push(`✓ Import components: import Component from '${framework.aliasPrefix}/ui/...'`);
      break;
    
    case 'remix':
      instructions.push('✓ Remix detected - using ' + framework.componentsPath);
      instructions.push(`✓ Import components: import Component from '${framework.aliasPrefix}/components/ui/...'`);
      break;
    
    default:
      instructions.push('✓ Using default path: ' + framework.componentsPath);
  }

  return instructions;
}
