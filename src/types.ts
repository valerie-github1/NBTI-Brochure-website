/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type TabId = 'hub' | 'mandate' | 'footprint' | 'framework' | 'leadership';

export interface Pioneer {
  id: string;
  name: string;
  category: string;
  role: string;
  description: string;
  summary: string;
  quote: string;
  faculty: string;
  globalImpact: string;
  link: string;
  image: string;
}

export interface Partner {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Milestone {
  id: string;
  title: string;
  progress: number;
  status: string;
  description: string;
  icon: string;
  tag: string;
}
