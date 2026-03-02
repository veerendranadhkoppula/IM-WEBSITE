import BlogsClient from "./BlogsClient";
import { notFound } from "next/navigation";

async function getAllBlogs() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/posts?limit=100&sort=-publishedAt`,
      { next: { revalidate: 60 } },
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}
async function getFeaturedBlogs() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/globals/featured-blog?depth=2&draft=false&locale=undefined&trash=false`,
      { next: { revalidate: 60 } },
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export const metadata = {
  title: "Thinking | Integra Magna | Design Agency",
  description:
    "Explore insights, essays, and perspectives from the Integra Magna team on design, branding, and strategy.",
};

export default async function BlogsPage() {
  const blogs = await getAllBlogs();
  const featuredBlog = await getFeaturedBlogs();
  return <BlogsClient blogs={blogs} featuredBlog={featuredBlog} />;
}
