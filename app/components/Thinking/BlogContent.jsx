import styles from "@/app/styles/BlogInternal.module.css";
import React from "react";
import blogs from "@/app/json/blogInnerData.json";

export default function BlogContent({ content }) {
  return (
    <div className={styles.blogWrapper}>
      {content.map((block, index) => {
        if (block.type === "text") {
          return (
            <div key={index} className={styles.textBox}>
              <p>{block.value}</p>
            </div>
          );
        }
        if (block.type === 'textBox') {
          return (
            <div key={index} className={styles.textBox}>
              {block.value.map((sub, subIndex) => (
                <p key={subIndex}>{sub.value}</p>
              ))}
            </div>
          );
        }

        if (block.type === 'image') {
          return (
            <div key={index} className={styles.imageContainer}>
              <img src={block.value} alt={block.alt || 'Blog Image'} />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
