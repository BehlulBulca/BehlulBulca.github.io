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
    title: {
        default: 'Behlül Bulca - Econometrics & Web Development',
        template: '%s | Behlül Bulca'
    },
    description: 'Personal portfolio and blog of Behlül Bulca, Econometrics student and creative developer. Transforming complex financial data into meaningful web experiences using Python and Next.js.',
    keywords: ['Behlül Bulca', 'Econometrics', 'Web Development', 'Python', 'Next.js', 'Data Analysis', 'Portfolio', 'Blog'],
    authors: [{ name: 'Behlül Bulca' }],
    creator: 'Behlül Bulca',
    metadataBase: new URL('https://behlulbulca.github.io'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        alternateLocale: ['tr_TR'],
        url: 'https://behlulbulca.github.io',
        title: 'Behlül Bulca - Econometrics & Web Development',
        description: 'Personal portfolio and blog of Behlül Bulca, Econometrics student and creative developer.',
        siteName: 'Behlül Bulca Portfolio',
        images: [
            {
                url: '/images/hero-illustration.png',
                width: 1024,
                height: 1024,
                alt: 'Behlül Bulca Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Behlül Bulca - Econometrics & Web Development',
        description: 'Personal portfolio and blog of Behlül Bulca, Econometrics student and creative developer.',
        images: ['/images/hero-illustration.png'],
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'Behlül Bulca',
    },
    formatDetection: {
        telephone: false,
    },
};

export default async function RootLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  // Extract locale from params, default to 'en'
  const { locale = 'en' } = await params || {};

  return (
    <html lang={locale} suppressHydrationWarning className={`${inter.variable} ${newsreader.variable} ${playfair.variable}`}>
      <head>
        {/* iOS Safari specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* DNS prefetch and preconnect for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-foreground antialiased font-sans selection:bg-primary selection:text-white min-h-dvh flex flex-col">
        {children}
      </body>
    </html>
  );
}
