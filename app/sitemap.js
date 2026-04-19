import { categories, getPublishedArticles } from '@/data/articles';

// /sitemap.xml を自動生成します。GoogleにURL一覧を伝える役割。
// 本番URLは .env.local の NEXT_PUBLIC_SITE_URL を見ます。
export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const now = new Date().toISOString();

  const staticUrls = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: now },
    { url: `${base}/privacy`, lastModified: now },
    { url: `${base}/disclosure`, lastModified: now },
  ];

  const categoryUrls = Object.values(categories).map((c) => ({
    url: `${base}/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const articleUrls = getPublishedArticles().map((a) => ({
    url: `${base}/articles/${a.slug}`,
    lastModified: a.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...staticUrls, ...categoryUrls, ...articleUrls];
}
