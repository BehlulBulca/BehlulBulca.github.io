import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug, locale } = await params;
    const post = getPostBySlug(slug, locale);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.meta.title} | AniTest`,
        description: post.meta.excerpt,
        openGraph: {
            title: post.meta.title,
            description: post.meta.excerpt,
            type: "article",
            publishedTime: post.meta.date,
        },
    };
}

export async function generateStaticParams() {
    // Generate params for all locales and all posts
    const locales = ['en', 'tr'];
    const params = [];

    for (const locale of locales) {
        const posts = getAllPosts(locale);
        for (const post of posts) {
            params.push({ slug: post.slug, locale });
        }
    }

    return params;
}

export default async function BlogPost({ params }: PageProps) {
    const { slug, locale } = await params;
    const post = getPostBySlug(slug, locale);

    if (!post) {
        notFound();
    }

    return (
        <article className="max-w-3xl mx-auto py-12 md:py-20">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors group"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
            </Link>

            <header className="mb-12 space-y-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <time dateTime={post.meta.date}>
                        {format(new Date(post.meta.date), "MMMM d, yyyy")}
                    </time>
                    <span>•</span>
                    {post.meta.tags?.map(tag => (
                        <span key={tag} className="text-primary font-medium">#{tag}</span>
                    ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
                    {post.meta.title}
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4">
                    {post.meta.excerpt}
                </p>
            </header>

            <div className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-p:font-sans max-w-none">
                <MDXContent source={post.content} />
            </div>
        </article>
    );
}
