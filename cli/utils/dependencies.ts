import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import { ComponentInfo } from '../registry';

export function detectDependencies(component: ComponentInfo): string[] {
  return component.dependencies.filter((dep) => {
    // Check if dependency is already installed
    try {
      require.resolve(dep);
      return false;
    } catch {
      return true;
    }
  });
}

export async function installDependencies(deps: string[], cwd: string): Promise<void> {
  if (deps.length === 0) return;

  // Detect package manager
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
}
