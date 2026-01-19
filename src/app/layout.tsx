import { ReactNode } from 'react';
import { Inter, Newsreader, Playfair_Display } from "next/font/google";
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning className={`${inter.variable} ${newsreader.variable} ${playfair.variable}`}>
      <body className="bg-background text-foreground antialiased font-sans selection:bg-primary selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
