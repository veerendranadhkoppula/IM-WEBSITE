import { NextResponse } from 'next/server';

// Static pages of your site
const staticPages = [
  { url: '/', priority: 1.0 },
  { url: '/work', priority: 0.8 },
  { url: '/services', priority: 0.8 },
  { url: '/thinking', priority: 0.8 },
  { url: '/career', priority: 0.8 },
  { url: '/about', priority: 0.8 },
  { url: '/contact', priority: 0.8 },
  { url: '/privacy-policy', priority: 0.8 },
];

// Dynamic routes (e.g., fetched from an API or file)
const dynamicPages = [
  { url: '/work/boat', priority: 0.64 },
  { url: '/work/royal-legacy', priority: 0.64 },
  { url: '/work/decathlon', priority: 0.64 },
  { url: '/work/adnd', priority: 0.64 },
  { url: '/work/prestige-university', priority: 0.64 },
  { url: '/work/motivata', priority: 0.64 },
  { url: '/work/neelam-foresteria', priority: 0.64 },
  { url: '/work/tilx', priority: 0.64 },
  { url: '/work/taskey', priority: 0.64 },
];

// Base URL of your site
const BASE_URL = 'https://integramagna.com';

export async function GET() {
  const urls = [...staticPages, ...dynamicPages];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (page) => `
  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
