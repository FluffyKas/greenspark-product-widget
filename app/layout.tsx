import type { Metadata } from 'next';
import './styles/styles.css';

export const metadata: Metadata = {
  title: 'Greenspark - Product Widgets',
  description: 'A component displaying product widgets.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
