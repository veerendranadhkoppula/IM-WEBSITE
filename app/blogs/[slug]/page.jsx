import AnimatedText from "@/app/components/SlideUpText";
import BlogContent from "@/app/components/Thinking/BlogContent";
import styles from "@/app/styles/BlogInternal.module.css";
import { notFound } from "next/navigation";
import Footer from "@/app/components/Footer/FinalFooter";
async function getBlog(slug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/posts?where[slug][equals]=${slug}`,
      {
        next: { revalidate: 60 }, // Cache for 1 minute
      },
    );

    if (!res.ok) return null;

    const data = await res.json();
    return data.docs?.[0] || null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

// Helper to get image URL
const getImageUrl = (media) => {
  if (!media) return null;
  if (typeof media === "string") return media;
  const url = media.url || "";
  return url.startsWith("http")
    ? url
    : `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}${url}`;
};

// Helper to extract plain text from a value that may be a Lexical rich-text JSON or a plain string
function extractText(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  // Lexical rich-text: recursively extract all text nodes
  if (typeof value === "object") {
    const nodes = value?.root?.children ?? value?.children ?? [];
    return nodes
      .map((node) => {
        if (node.type === "text") return node.text ?? "";
        if (node.children) return extractText(node);
        return "";
      })
      .join("")
      .trim();
  }
  return String(value);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) return { title: "Blog Not Found" };

  const { meta } = blog;
  const ogImage = getImageUrl(meta?.image || blog.heroImage);

  const title = extractText(meta?.title) || blog.title;
  const description = extractText(meta?.description);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <div className={styles.blogInternalMain}>
        <div className={styles.blogMainTitle}>
          <h1 className={styles.h1}>
            <AnimatedText text={extractText(blog.title)} tag="span" />
          </h1>
          <div className={styles.blogDetails}>
            {blog.populatedAuthors && blog.populatedAuthors.length > 0 && (
              <span className={styles.author}>
                Author :{" "}
                {blog.populatedAuthors.map((author) => author.name).join(", ")}
              </span>
            )}
            {blog.publishedAt && (
              <span className={styles.date}>
                Date : {new Date(blog.publishedAt).toLocaleDateString()}
              </span>
            )}
            {blog.readTime && (
              <span className={styles.readTime}>
                Read Time : {blog.readTime} min read
              </span>
            )}
          </div>
        </div>
        <div className={styles.spacing} />

        {blog.heroImage && (
          <div className={styles.heroImageContainer}>
            <img
              src={getImageUrl(blog.heroImage)}
              alt={blog.title}
              className={styles.heroImage}
              style={{
                width: "100%",
                maxHeight: "500px",
                objectFit: "cover",
                borderRadius: "12px",
                // marginBottom: "40px",
              }}
            />
          </div>
        )}

        <div className={styles.blogContent}>
          <BlogContent content={blog.content} />
        </div>

        <div className={styles.socialBox}>
          <div className={styles.socialLinks}>
            {/* Facebook Share */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.integramagna.com/blogs/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on Facebook"
            >
              Fb
            </a>

            {/* X (Twitter) Share */}
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://www.integramagna.com/blogs/${slug}`)}&text=${encodeURIComponent(blog.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on X"
            >
              X
            </a>

            {/* LinkedIn Share */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.integramagna.com/blogs/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on LinkedIn"
            >
              In
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
