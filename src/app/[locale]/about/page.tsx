import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('About');

    return {
        title: t('title'),
        description: t('intro'),
    };
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('About');

    // NOTE: In a real Next-Intl setup iterating arrays often requires specific config or usage pattern.
    // Here we hardcode indices based on our known JSON structure for simplicity and type safety assurance in this snippet.
    // Alternatively, we could request `t.raw('education')` if we configured it, but standard approach is by key.

    return (
        <div className="max-w-3xl mx-auto py-12 md:py-20 space-y-12">
            <section className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-balance">
                    {t('title')}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    {t('intro')}
                </p>
            </section>

            <section className="space-y-8">
                <h2 className="text-2xl font-bold font-serif border-b pb-2">{t('experienceTitle')}</h2>
                <div className="space-y-8">
                    {[0, 1].map((i) => (
                        <div key={i} className="group">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{t(`experience.${i}.role`)}</h3>
                                <span className="text-sm text-muted-foreground font-mono">{t(`experience.${i}.date`)}</span>
                            </div>
                            <div className="text-primary font-medium mb-2">{t(`experience.${i}.company`)}</div>
                            <p className="text-muted-foreground">{t(`experience.${i}.description`)}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-8">
                <h2 className="text-2xl font-bold font-serif border-b pb-2">{t('educationTitle')}</h2>
                <div className="space-y-8">
                    {[0, 1].map((i) => (
                        <div key={i} className="group">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{t(`education.${i}.degree`)}</h3>
                                <span className="text-sm text-muted-foreground font-mono">{t(`education.${i}.date`)}</span>
                            </div>
                            <div className="text-primary font-medium mb-2">{t(`education.${i}.school`)}</div>
                            <p className="text-muted-foreground">{t(`education.${i}.description`)}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-serif border-b pb-2">{t('skillsTitle')}</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                    <li className="bg-secondary/30 p-4 rounded-lg">
                        <strong className="block text-foreground mb-1">Stack:</strong> {t('skills.web')}
                    </li>
                    <li className="bg-secondary/30 p-4 rounded-lg">
                        <strong className="block text-foreground mb-1">Languages:</strong> {t('skills.languages')}
                    </li>
                    <li className="bg-secondary/30 p-4 rounded-lg">
                        <strong className="block text-foreground mb-1">Data & ML:</strong> {t('skills.ml')}
                    </li>
                    <li className="bg-secondary/30 p-4 rounded-lg">
                        <strong className="block text-foreground mb-1">Databases:</strong> {t('skills.db')}
                    </li>
                </ul>
            </section>
        </div>
    );
}
