import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '@/lib/LangContext';

export const metadata: Metadata = {
  title: 'Kohei Kuramoto | Data Engineer & Developer',
  description: 'Portfolio of Kohei Kuramoto — Data Engineer and Full-Stack Developer based in Melbourne, Australia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
