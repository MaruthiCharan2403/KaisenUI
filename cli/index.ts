#!/usr/bin/env node

import { Command } from 'commander';
import { init } from './commands/init.js';
import { add } from './commands/add.js';
import { list } from './commands/list.js';

const program = new Command();

program
  .name('kaisenui')
  .description('CLI tool for Kaisen UI - Beautiful React + Tailwind components')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize Kaisen UI in your project')
  .option('-y, --yes', 'Skip prompts and use defaults')
  .action(init);

program
  .command('add <component>')
  .description('Add a component to your project')
  .option('-p, --path <path>', 'Custom path for components', 'src/ui')
  .action(add);

program
  .command('list')
  .description('List all available components')
  .option('-c, --category <category>', 'Filter by category')
  .action(list);

program.parse();
