import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

const components = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className="text-3xl font-bold mt-8 mb-4 font-serif text-primary" {...props} />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className="text-2xl font-bold mt-8 mb-4 font-serif text-primary/90" {...props} />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 className="text-xl font-bold mt-6 mb-3 font-serif" {...props} />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className="mb-6 leading-relaxed text-lg text-muted-foreground" {...props} />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary transition-all" {...props} />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className="list-disc ml-6 mb-6 space-y-2 text-muted-foreground" {...props} />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className="list-decimal ml-6 mb-6 space-y-2 text-muted-foreground" {...props} />
    ),
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote className="border-l-4 border-primary/20 pl-6 italic my-8 text-xl text-primary/80 font-serif" {...props} />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => (
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary font-medium" {...props} />
    ),
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
        <pre className="bg-secondary/50 p-6 rounded-xl overflow-x-auto mb-8 border border-border" {...props} />
    ),
};

export function MDXContent({ source }: { source: string }) {
    return (
        <div className="mdx-content">
            <MDXRemote source={source} components={components} />
        </div>
    );
}
