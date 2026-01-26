import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';
import { routing } from '@/i18n/routing';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://behlulbulca.github.io';
  const locales = routing.locales;

  // Static pages
  const staticPages = ['', '/about', '/contact'];

  // Generate entries for each locale
  const staticEntries: MetadataRoute.Sitemap = [];

  locales.forEach(locale => {
    staticPages.forEach(page => {
      staticEntries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : 0.8,
      });
    });
  });

  // Generate blog post entries for each locale
  const blogEntries: MetadataRoute.Sitemap = [];

  locales.forEach(locale => {
    const posts = getAllPosts(locale);
    posts.forEach(post => {
      blogEntries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.meta.date),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  return [...staticEntries, ...blogEntries];
}
