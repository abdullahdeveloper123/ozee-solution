import type { ReactNode } from 'react';
import SiteProvider from '@/app/providers/SiteProvider';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return <SiteProvider>{children}</SiteProvider>;
}
