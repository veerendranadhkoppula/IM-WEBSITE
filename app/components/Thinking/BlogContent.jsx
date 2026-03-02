import styles from "@/app/styles/BlogInternal.module.css";
import React from "react";

const LexicalRenderer = ({ node }) => {
  if (!node) return null;

  // Handle Text Nodes
  if (node.type === "text") {
    let text = node.text;
    if (node.format & 1) text = <strong>{text}</strong>; // Bold
    if (node.format & 2) text = <em>{text}</em>; // Italic
    if (node.format & 4)
      text = <span style={{ textDecoration: "line-through" }}>{text}</span>; // Strikethrough
    if (node.format & 8) text = <u>{text}</u>; // Underline
    if (node.format & 16)
      text = <code className={styles.inlineCode}>{text}</code>; // Code
    return text;
  }

  // Handle Br Node
  if (node.type === "linebreak") return <br />;

  // Recursively render children
  const children =
    node.children?.map((child, i) => (
      <LexicalRenderer key={i} node={child} />
    )) || null;

  switch (node.type) {
    case "root":
      return <>{children}</>;
    case "paragraph":
      return <p className={styles.paragraph}>{children}</p>;
    case "heading":
      const Tag = node.tag || "h3";
      return <Tag className={styles[Tag]}>{children}</Tag>;
    case "list":
      const ListTag = node.tag === "ol" ? "ol" : "ul";
      return <ListTag className={styles.list}>{children}</ListTag>;
    case "listitem":
      return <li className={styles.listItem}>{children}</li>;
    case "autolink":
    case "link":
      const linkUrl = node.fields?.url || node.url || "#";
      return (
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {children}
        </a>
      );
    case "quote":
      return <blockquote className={styles.blockquote}>{children}</blockquote>;
    case "horizontalrule":
      return <hr className={styles.horizontalRule} />;

    // Handle Custom Blocks (BlocksFeature)
    case "block":
      const blockData = node.fields || {};
      const blockType = blockData.blockType;

      if (blockType === "mediaBlock") {
        const media = blockData.media;
        if (!media) return null;

        const imageUrl = media.url?.startsWith("http")
          ? media.url
          : `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}${media.url}`;

        return (
          <div className={styles.mediaBlock}>
            <img src={imageUrl} alt={media.alt || "media"} />
            {blockData.caption && (
              <p className={styles.caption}>{blockData.caption}</p>
            )}
          </div>
        );
      }

      if (blockType === "banner") {
        return (
          <div
            className={`${styles.banner} ${styles[blockData.type || "default"]}`}
          >
            <LexicalRenderer node={blockData.content} />
          </div>
        );
      }

      if (blockType === "code") {
        return (
          <pre className={styles.codeBlock}>
            <code>{blockData.code}</code>
          </pre>
        );
      }

      return null;

    default:
      return <span>{children}</span>;
  }
};

export default function BlogContent({ content }) {
  if (!content || !content.root) {
    return (
      <div className={styles.blogWrapper}>
        <p>Loading or invalid content...</p>
      </div>
    );
  }

  return (
    <div className={styles.blogWrapper}>
      <LexicalRenderer node={content.root} />
    </div>
  );
}
