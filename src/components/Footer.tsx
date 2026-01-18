import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="mt-auto py-12 px-6 border-t border-border/40">
            <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Behlül Bulca. {t('rights')}</p>
                <div className="flex gap-4">
                    <a href="mailto:behlulbulca02@gmail.com" className="hover:text-foreground transition-colors">Email</a>
                    <a href="https://www.linkedin.com/in/behlulbulca/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
                    <a href="https://github.com/BehlulBulca" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
