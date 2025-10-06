import { FC } from 'react';

export interface ComponentData {
  id: string;
  name: string;
  description: string;
  code: string;
  preview: FC;
  category?: string;
  fileName?: string;
}

export interface ComponentCategory {
  name: string;
}

export type ComponentsMap = Record<string, ComponentData[]>;
