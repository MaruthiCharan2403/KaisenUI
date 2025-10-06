import chalk from 'chalk';
import ora from 'ora';
import { getComponentRegistry } from '../registry.js';

export async function list(options: { category?: string }) {
  const spinner = ora('Loading components...').start();
  const registry = await getComponentRegistry();
  spinner.succeed('Components loaded');

  let components = registry;

  if (options.category) {
    components = registry.filter(
      (c: { category: string; }) => c.category.toLowerCase() === (options.category ? options.category.toLowerCase() : '')
    );
  }
  const grouped = components.reduce((acc: { [x: string]: any[]; }, component: { category: string | number; }) => {
    if (!acc[component.category]) {
      acc[component.category] = [];
    }
    acc[component.category]!.push(component);
    return acc;
  }, {} as Record<string, typeof components>);

  console.log(chalk.bold.magenta('\n📦 Available Components\n'));

  Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([category, comps]) => {
      console.log(chalk.bold.cyan(`\n${category} (${comps.length})`));
      (comps as Array<{ id: string; description: string; }>).forEach((comp) => {
        console.log(`  ${chalk.white(comp.id.padEnd(30))} ${chalk.gray(comp.description)}`);
      });
    });

  console.log(chalk.gray(`\n\nTotal: ${components.length} components`));
  console.log(chalk.gray('Use') + chalk.white(' kaisen add <component-id>') + chalk.gray(' to add a component\n'));
}
