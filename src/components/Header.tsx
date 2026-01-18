import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

export function Header() {
    const t = useTranslations('Navigation');

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between glass mt-4 rounded-full">
                <Link href="/" className="text-xl font-display font-bold tracking-tight hover:opacity-70 transition-opacity">
                    Behlül Bulca
                </Link>

                <nav className="flex items-center gap-6 text-sm font-medium">
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
            </div>
        </header>
    );
}
