import type { ReactNode } from 'react';

export enum Language {
  ES = 'ES',
  GL = 'GL',
  EN = 'EN'
}

export interface NavItem {
  name: string;
  href: string;
}

export interface EventItem {
  id: number;
  title: string;
  day: string;
  month?: string;
  image: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  icon: ReactNode;
  description: string;
}