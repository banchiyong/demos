import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GTSO Rebuild',
  description: 'Modern Next.js frontend concept for gtso.kr'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
