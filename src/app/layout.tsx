import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site.config';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#1e293b',
              color: '#f8fafc',
              fontSize: '13px',
              fontFamily: 'monospace',
              border: '1px solid #334155',
              borderRadius: '8px',
              padding: '12px 16px',
            },
            success: {
              iconTheme: {
                primary: '#eab308',
                secondary: '#0f172a',
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
