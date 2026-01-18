import { FadeIn } from "@/components/animations/FadeIn";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('Contact');

    const contacts = [
        {
            icon: Mail,
            label: t('email'),
            value: "behlulbulca02@gmail.com",
            href: "mailto:behlulbulca02@gmail.com",
            color: "hover:text-red-500"
        },
        {
            icon: Linkedin,
            label: t('linkedin'),
            value: "https://www.linkedin.com/in/behlulbulca/",
            href: "https://www.linkedin.com/in/behlulbulca/",
            color: "hover:text-blue-600"
        },
        {
            icon: Github,
            label: t('github'),
            value: "https://github.com/BehlulBulca",
            href: "https://github.com/BehlulBulca",
            color: "hover:text-gray-900 dark:hover:text-white"
        }
    ];

    return (
        <div className="max-w-3xl mx-auto py-12 md:py-20 space-y-12">
            <FadeIn className="space-y-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-balance">
                    {t('title')}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
                    {t('description')}
                </p>
            </FadeIn>

            <div className="grid grid-cols-1 gap-6">
                {contacts.map((contact, index) => (
                    <FadeIn key={contact.label} delay={index * 100 + 200}>
                        <a
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-6 p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-all group ${contact.color}`}
                        >
                            <contact.icon size={32} className="shrink-0 transition-transform group-hover:scale-110" />
                            <div className="flex flex-col text-left overflow-hidden">
                                <span className="font-medium text-foreground text-lg">{contact.label}</span>
                                <span className="text-muted-foreground break-all">{contact.value}</span>
                            </div>
                        </a>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
}
