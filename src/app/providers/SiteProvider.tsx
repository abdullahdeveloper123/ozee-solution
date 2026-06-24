'use client';

import type { ReactNode } from 'react';
import App from '@/App';

export default function SiteProvider({ children }: { children: ReactNode }) {
  return <App>{children}</App>;
}
