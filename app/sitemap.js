const BASE_URL = "https://www.integramagna.com";

async function getBlogSlugs() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/posts?limit=200&sort=-publishedAt&depth=0`,
      { next: { revalidate: 3600 } }, // re-fetch at most once per hour
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.docs || [];
  } catch {
    return [];
  }
}

export default async function sitemap() {
  const blogs = await getBlogSlugs();

  // Static pages
  const staticRoutes = [
    { url: `${BASE_URL}`, priority: 1.0 }, // Homepage
    { url: `${BASE_URL}/services`, priority: 0.95 }, // Services
    { url: `${BASE_URL}/work`, priority: 0.9 }, // Work (main)
    { url: `${BASE_URL}/contact`, priority: 0.9 }, // Contact
    { url: `${BASE_URL}/about`, priority: 0.8 }, // About
    { url: `${BASE_URL}/thinking`, priority: 0.7 }, // Thinking
    // /blogs listing is added conditionally below
    { url: `${BASE_URL}/career`, priority: 0.6 }, // Career
    { url: `${BASE_URL}/work/boat`, priority: 0.65 }, // Case studies
    { url: `${BASE_URL}/work/royal-legacy`, priority: 0.65 },
    { url: `${BASE_URL}/work/decathlon`, priority: 0.65 },
    { url: `${BASE_URL}/work/adnd`, priority: 0.65 },
    { url: `${BASE_URL}/work/prestige-university`, priority: 0.65 },
    { url: `${BASE_URL}/work/motivata`, priority: 0.65 },
    { url: `${BASE_URL}/work/neelam-foresteria`, priority: 0.65 },
    { url: `${BASE_URL}/work/tilx`, priority: 0.65 },
    { url: `${BASE_URL}/work/taskey`, priority: 0.65 },
    { url: `${BASE_URL}/work/hari-keshri`, priority: 0.65 },
    { url: `${BASE_URL}/work/marriott`, priority: 0.65 },
  ].map((route) => ({
    ...route,
    lastModified: new Date(),
  }));

  // Only published posts enter the sitemap
  const publishedBlogs = blogs.filter(
    (blog) => blog.slug && blog._status === "published",
  );

  // Individual blog pages
  const blogRoutes = publishedBlogs.map((blog) => ({
    url: `${BASE_URL}/blogs/${blog.slug}`,
    lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
    priority: 0.55,
  }));

  // /blogs listing only appears when there is at least one published post
  const blogListingRoute =
    publishedBlogs.length > 0
      ? [{ url: `${BASE_URL}/blogs`, lastModified: new Date(), priority: 0.7 }]
      : [];

  return [...staticRoutes, ...blogListingRoute, ...blogRoutes];
}
