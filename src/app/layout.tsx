import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter as a more standard sans-serif font
import './globals.css';
// Import the local copy of Botpress CSS to allow modifications/fixes
// Removed: import '@/styles/botpress.css'; // This file doesn't exist and caused errors
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"

// If Geist fonts are explicitly required, uncomment the lines below
// import { Geist, Geist_Mono } from 'next/font/google';
// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });
// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' }); // Use Inter font

export const metadata: Metadata = {
  title: 'OptiAssist - Your Virtual Assistant',
  description: 'Optitech company website with integrated AI virtual assistant.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Use Inter font variable, remove Geist if not used */}
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
