"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/app/components/Footer/FinalFooter"), {
  ssr: false,
});

import Link from "next/link";
import styles from "./blogs.module.css";

const BASE_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "";
const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

function getImageUrl(media) {
  if (!media) return null;
  if (typeof media === "string") return media;
  const url = media.url || "";
  return url.startsWith("http") ? url : `${BASE_URL}${url}`;
}

function extractText(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
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

// Pull categories from a blog post — handles both populated and id-only forms
function getBlogCategories(blog) {
  const cats = blog.categories;
  if (!cats || !Array.isArray(cats) || cats.length === 0) return [];
  return cats.map((c) =>
    typeof c === "object"
      ? { id: c.id, title: extractText(c.title) || c.title || "Uncategorised" }
      : { id: c, title: "Uncategorised" },
  );
}

function BlogCard({ blog }) {
  const heroImg = getImageUrl(blog.heroImage);
  const title = extractText(blog.title) || blog.title;
  const description = extractText(blog.meta?.description) || "";
  const author =
    blog.populatedAuthors?.map((a) => a.name).join(", ") || "Integra Magna";
  const date = blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;
  const categories = getBlogCategories(blog);

  return (
    <Link href={`/blogs/${blog.slug}`} className={styles.card}>
      <div className={styles.cardImageWrapper}>
        {heroImg ? (
          <img
            src={heroImg}
            alt={title}
            className={styles.cardImage}
            loading="lazy"
          />
        ) : (
          <div className={styles.cardImagePlaceholder} />
        )}
        <div className={styles.cardImageOverlay} />
        {/* Category badges on image */}
        {categories.length > 0 && (
          <div className={styles.cardBadges}>
            {categories.slice(0, 2).map((cat) => (
              <span key={cat.id} className={styles.cardBadge}>
                {cat.title}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>{title}</h2>
        {description && <p className={styles.cardDescription}>{description}</p>}
        <div className={styles.cardMeta}>
          <span className={styles.cardAuthor}>{author}</span>
          {date && <span className={styles.cardDot}>·</span>}
          {date && <span className={styles.cardDate}>{date}</span>}
          {blog.readTime && (
            <>
              <span className={styles.cardDot}>·</span>
              <span className={styles.cardRead}>{blog.readTime} min read</span>
            </>
          )}
        </div>
        <div className={styles.cardArrow}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function BlogsClient({ blogs, featuredBlog }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Derive unique categories from all blog posts
  const categories = useMemo(() => {
    const map = new Map();
    blogs.forEach((blog) => {
      getBlogCategories(blog).forEach((cat) => {
        if (!map.has(cat.id)) map.set(cat.id, cat.title);
      });
    });
    return Array.from(map.entries()).map(([id, title]) => ({ id, title }));
  }, [blogs]);

  // Filter blogs whenever the active category changes; also reset visible count
  const filteredBlogs = useMemo(() => {
    if (activeCategory === "all") return blogs;
    return blogs.filter((blog) =>
      getBlogCategories(blog).some((c) => c.id === activeCategory),
    );
  }, [blogs, activeCategory]);

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < filteredBlogs.length;

  function handleCategoryChange(id) {
    setActiveCategory(id);
    setVisibleCount(INITIAL_COUNT); // reset back to 6 on each filter change
  }

  return (
    <>
      <div className={styles.page}>
        {/* Hero */}
        <div className={styles.hero}>
          <p className={styles.heroEyebrow}>Our Thinking</p>
          <h1 className={styles.heroTitle}>Ideas Worth Reading</h1>
          <p className={styles.heroSub}>
            Perspectives on design, branding, and the craft of building great
            digital products.
          </p>
        </div>

        {/* Filter row: count on the left, dropdown on the right */}
        <div className={styles.filterRow}>
          <h2 className={styles.blogCount}>
            Articles ({filteredBlogs.length})
          </h2>

          {categories.length > 0 && (
            <div className={styles.filterWrapper} ref={dropdownRef}>
              <button
                className={styles.dropdownTrigger}
                onClick={() => setDropdownOpen((o) => !o)}
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
              >
                <span className={styles.dropdownLabel}>
                  {activeCategory === "all"
                    ? "All Categories"
                    : categories.find((c) => c.id === activeCategory)?.title ||
                      "All Categories"}
                </span>
                <svg
                  className={`${styles.dropdownChevron} ${
                    dropdownOpen ? styles.dropdownChevronOpen : ""
                  }`}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {dropdownOpen && (
                <ul className={styles.dropdownMenu} role="listbox">
                  <li
                    role="option"
                    aria-selected={activeCategory === "all"}
                    className={`${styles.dropdownItem} ${
                      activeCategory === "all" ? styles.dropdownItemActive : ""
                    }`}
                    onClick={() => {
                      handleCategoryChange("all");
                      setDropdownOpen(false);
                    }}
                  >
                    All Categories
                    {activeCategory === "all" && (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </li>
                  {categories.map((cat) => (
                    <li
                      key={cat.id}
                      role="option"
                      aria-selected={activeCategory === cat.id}
                      className={`${styles.dropdownItem} ${
                        activeCategory === cat.id
                          ? styles.dropdownItemActive
                          : ""
                      }`}
                      onClick={() => {
                        handleCategoryChange(cat.id);
                        setDropdownOpen(false);
                      }}
                    >
                      {cat.title}
                      {activeCategory === cat.id && (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
        {/* end filterRow */}

        {/* Grid */}
        {filteredBlogs.length === 0 ? (
          <div className={styles.empty}>
            <p>No posts in this category yet — check back soon.</p>
          </div>
        ) : (
          <>
            <div className={styles.grid}>
              {visibleBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {hasMore && (
              <div className={styles.loadMoreWrapper}>
                <button
                  className={styles.loadMore}
                  onClick={() =>
                    setVisibleCount((c) =>
                      Math.min(c + LOAD_MORE_COUNT, filteredBlogs.length),
                    )
                  }
                >
                  Load More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
