import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface Post {
    slug: string;
    meta: {
        title: string;
        date: string;
        excerpt: string;
        tags?: string[];
        coverImage?: string;
        [key: string]: unknown;
    };
    content: string;
}

export function getAllPosts(locale: string = 'en'): Post[] {
    const postsDirectory = path.join(contentDirectory, locale);

    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            meta: data as Post["meta"],
            content,
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.meta.date < b.meta.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getPostBySlug(slug: string, locale: string = 'en'): Post | null {
    const postsDirectory = path.join(contentDirectory, locale);
    try {
        const fullPath = path.join(postsDirectory, `${slug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            meta: data as Post["meta"],
            content,
        };
    } catch {
        return null;
    }
}
