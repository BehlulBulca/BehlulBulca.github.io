"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
    const t = useTranslations('Navigation');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="mx-auto max-w-5xl px-4 md:px-6 h-16 flex items-center justify-between glass mt-4 rounded-full">
                <Link href="/" className="text-xl font-display font-bold tracking-tight hover:opacity-70 transition-opacity">
                    Behlül Bulca
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <div className="flex gap-2 text-xs font-mono">
                        <Link href="/" locale="en" className="hover:text-primary transition-colors">EN</Link>
                        <span className="text-border/50">|</span>
                        <Link href="/" locale="tr" className="hover:text-primary transition-colors">TR</Link>
                    </div>
                    <div className="h-4 w-px bg-border/50" />
                    <Link href="/" className="hover:text-primary/70 transition-colors">
                        {t('home')}
                    </Link>
                    <Link href="/about" className="hover:text-primary/70 transition-colors">
                        {t('about')}
                    </Link>
                    <Link
                        href="/contact"
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                    >
                        {t('contact')}
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 -mr-2 touch-manipulation"
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <div
                className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                style={{ top: '80px', paddingBottom: 'env(safe-area-inset-bottom)' }}
            >
                <nav className="flex flex-col items-center justify-center h-full gap-8 text-lg font-medium">
                    {/* Language Switcher */}
                    <div className="flex gap-4 text-sm font-mono">
                        <Link 
                            href="/" 
                            locale="en" 
                            className="px-4 py-2 rounded-full border border-border hover:bg-secondary transition-colors touch-manipulation"
                            onClick={closeMenu}
                        >
                            English
                        </Link>
                        <Link 
                            href="/" 
                            locale="tr" 
                            className="px-4 py-2 rounded-full border border-border hover:bg-secondary transition-colors touch-manipulation"
                            onClick={closeMenu}
                        >
                            Türkçe
                        </Link>
                    </div>

                    <div className="w-16 h-px bg-border/50" />

                    <Link 
                        href="/" 
                        className="hover:text-primary transition-colors touch-manipulation py-2"
                        onClick={closeMenu}
                    >
                        {t('home')}
                    </Link>
                    <Link 
                        href="/about" 
                        className="hover:text-primary transition-colors touch-manipulation py-2"
                        onClick={closeMenu}
                    >
                        {t('about')}
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors touch-manipulation"
                        onClick={closeMenu}
                    >
                        {t('contact')}
                    </Link>
                </nav>
            </div>
        </header>
    );
}
