import blogs from "@/app/json/blogInnerData.json";
import BlogContent from "@/app/components/Thinking/BlogContent";
import styles from "@/app/styles/BlogInternal.module.css";
export default function BlogPage({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return <div>Blog not found</div>;

  return (
    <div className={styles.blogInternalMain}>
    <div className={styles.blogMainTitle}>
      <h1>{blog.title}</h1>
      <div className={styles.blogDetails}>
        <span className="author">✍️ {blog.author}</span>
        <span className="date">📅 {blog.date}</span>
        <span className="readTime">⏱️ {blog.readTime}</span>
      </div>
    </div>

    <div className={styles.blogContent}>
      <BlogContent content={blog.content} />
    </div>

    <div className={styles.socialBox}>
      <div className={styles.socialLinks}>
        <a href="#">Fb</a>
        <a href="#">X</a>
        <a href="#">In</a>
      </div>
    </div>
  </div>
  );
}
