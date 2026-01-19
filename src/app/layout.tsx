import { ReactNode } from 'react';
import { Inter, Newsreader, Playfair_Display } from "next/font/google";
import { Metadata, Viewport } from "next";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const newsreader = Newsreader({
    subsets: ["latin"],
    variable: "--font-newsreader",
    style: ["normal", "italic"],
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover', // For iOS notch/safe areas
};

export const metadata: Metadata = {
    title: 'Behlül Bulca',
    description: 'Personal portfolio and blog',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'Behlül Bulca',
    },
    formatDetection: {
        telephone: false, // Prevent auto-linking phone numbers
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning className={`${inter.variable} ${newsreader.variable} ${playfair.variable}`}>
      <head>
        {/* iOS Safari specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="bg-background text-foreground antialiased font-sans selection:bg-primary selection:text-white min-h-screen min-h-[100dvh] flex flex-col">
        {children}
      </body>
    </html>
  );
}
