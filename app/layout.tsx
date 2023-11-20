import type { Metadata } from 'next';
import './styles/styles.css';
import { WidgetsProvider } from './context/WidgetContext';

export const metadata: Metadata = {
  title: 'Greenspark - Product Widgets',
  description: 'A component displaying product widgets.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WidgetsProvider>{children}</WidgetsProvider>
      </body>
    </html>
  );
}
