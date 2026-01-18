import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggeredList } from "@/components/animations/StaggeredList";
import { getTranslations } from 'next-intl/server';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const posts = getAllPosts(locale);
  const t = await getTranslations('Home');

  return (
    <div className="py-12 space-y-20">
      <FadeIn delay={200} className="text-center space-y-6 max-w-3xl mx-auto pt-10">
        <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight text-balance">
          {t('heroTitleStart')}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-900 dark:from-neutral-400 dark:to-neutral-100">
            {t('heroTitleHighlight')}
          </span>
          {t('heroTitleEnd')}
        </h1>
        <p className="text-xl text-muted-foreground text-balance leading-relaxed relative z-10">
          {t('heroDescription')}
        </p>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 -z-10 opacity-10 dark:opacity-20 pointer-events-none select-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-illustration.png"
            alt="ASCII Globe Background"
            className="w-full max-w-4xl mx-auto object-contain animate-spin-slow"
          />
        </div>
      </FadeIn>

      <StaggeredList delay={600} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {posts.map((post, index) => (
          // Div wrapper needed for StaggeredList to target
          <div key={post.slug} style={{ opacity: 0 }}>
            <PostCard post={post} index={index} />
          </div>
        ))}
      </StaggeredList>
    </div>
  );
}
