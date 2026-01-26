import { Link } from "@/i18n/routing";
import { format } from "date-fns";
import { Post } from "@/lib/posts";
import { ArrowUpRight } from "lucide-react";

export function PostCard({ post }: { post: Post; index?: number }) {
    // Format date on server side with consistent locale to avoid hydration mismatch
    const formattedDate = format(new Date(post.meta.date), "MMMM d, yyyy");
    
    return (
        <div className="group relative">
            <Link href={`/blog/${post.slug}`} className="block">
                <article className="p-6 rounded-2xl border border-border bg-card hover:bg-secondary/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg h-full flex flex-col overflow-hidden">
                    {post.meta.coverImage && (
                        <div className="relative w-full h-56 mb-4 overflow-hidden border-b border-border/50 flex items-center justify-center bg-black">
                            <img
                                src={post.meta.coverImage}
                                alt={post.meta.title}
                                width={1024}
                                height={1024}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    )}
                    <div className="flex items-center justify-between mb-4">
                        <time className="text-sm text-muted-foreground font-medium" suppressHydrationWarning>
                            {formattedDate}
                        </time>
                        <div className="p-2 rounded-full bg-secondary text-secondary-foreground opacity-0 group-hover:opacity-100 transition-opacity transform -rotate-45 group-hover:rotate-0 duration-300">
                            <ArrowUpRight size={16} />
                        </div>
                    </div>

                    <h3 className="text-xl font-bold font-serif mb-3 group-hover:text-primary transition-colors">
                        {post.meta.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-1">
                        {post.meta.excerpt}
                    </p>

                    {post.meta.tags && (
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {post.meta.tags.map((tag) => (
                                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-secondary/50 text-secondary-foreground font-medium">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </article>
            </Link>
        </div>
    );
}
