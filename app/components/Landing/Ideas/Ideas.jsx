"use client";
import { useState } from "react";
import styles from "./Ideas.module.css";
import Image from "next/image";
import img1 from "./1.jpg";
import img2 from "./2.png";
import img3 from "./1.jpg";
import img4 from "./2.png";
import img5 from "./1.jpg";
import img6 from "./2.png";
import img7 from "./1.jpg";
import img8 from "./2.png";
import img9 from "./1.jpg";
import img10 from "./2.png";
import img11 from "./1.jpg";
import img12 from "./2.png";
import img13 from "./1.jpg";
import img14 from "./2.png";
import img15 from "./1.jpg";
import img16 from "./2.png";
import img17 from "./1.jpg";
import img18 from "./2.png";

const DR = [4, -4, 0, -3];
const MR = [4.2, -3.94, 10.3, -3];


const TAG_COLORS = ["#007934", "#F87498", "#BEB8B9", "#FFB600"];


const TAG_DESKTOP_POS = [
  { left: "8%",  bottom: "calc(50% + 8px)"  },
  { left: "22%", bottom: "calc(50% + 12px)" },
  { left: "5%",  top:    "calc(50% + 8px)"  },
  { left: "20%", top:    "calc(50% + 12px)" },
];

const INDUSTRIES = [
  {
    name: "Food & Beverages",
    images: [img1, img2],
    tags: ["QSR Chains", "Premium FMCG", "Cloud Kitchen", "Organic Brands"],
  },
  {
    name: "Hospitality & Travel",
    images: [img3, img4],
    tags: ["Luxury Hotels", "Boutique Stays", "Travel Tech", "Airlines"],
  },
  {
    name: "Technology & SaaS",
    images: [img5, img6],
    tags: ["B2B SaaS", "AI Startups", "Dev Tools", "Enterprise"],
  },
  {
    name: "Real Estate & Interior Design",
    images: [img7, img8],
    tags: ["Luxury Homes", "PropTech", "Architecture", "Interiors"],
  },
  {
    name: "Healthcare & Wellness",
    images: [img9, img10],
    tags: ["HealthTech", "Pharma", "Wellness", "Clinics"],
  },
  {
    name: "Education & EdTech",
    images: [img11, img12],
    tags: ["EdTech", "Universities", "Coaching", "E-Learning"],
  },
  {
    name: "Media, Entertainment & Events",
    images: [img13, img14],
    tags: ["Streaming", "Live Events", "OTT Platforms", "Gaming"],
  },
  {
    name: "FinTech & Financial Services",
    images: [img15, img16],
    tags: ["FinTech", "Banking", "Insurance", "WealthTech"],
  },
  {
    name: "Retail & Consumer Brands",
    images: [img17, img18],
    tags: ["D2C Brands", "E-commerce", "Luxury", "Fashion"],
  },
];

const REPEAT = 6;

const ArrowRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    <path
      d="M3 8H13M13 8L9 4M13 8L9 12"
      stroke="#848484"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const tagBg = (color) =>
  `linear-gradient(90deg, #ffffff 47%, ${color}40 100%) padding-box, ` +
  `linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(153,153,153,0.07) 100%) border-box`;

export default function Ideas() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <h2 className={styles.heading}>
          Ideas That Scale Across{" "}
          <span className={styles.serif}>Industries</span>
        </h2>
        <p className={styles.desc}>
          We partner with brands across diverse sectors to create meaningful
          experiences that drive growth and impact
        </p>
      </div>

      <div className={styles.bottom}>
        <div className={styles.industryList}>
          {INDUSTRIES.map((ind, i) => {
            const isActive = activeIndex === i;
            const chunk = (ind.name + "  •  ").repeat(REPEAT);

            return (
              <div
                key={i}
                className={styles.industryRow}
                style={{ zIndex: isActive ? 10 : 1 }}
              >
                <div
                  className={styles.desktopItem}
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  {isActive ? (
                    <div className={styles.marqueeOuter}>
                      <div className={styles.marqueeInner}>
                        <span aria-hidden="true">{chunk}</span>
                        <span aria-hidden="true">{chunk}</span>
                      </div>
                    </div>
                  ) : (
                    <span className={styles.inactiveLabel}>{ind.name}</span>
                  )}
                </div>

                {isActive && (
                  <div className={styles.rowPanel}>
                    <div className={styles.imgWrap1}>
                      <Image
                        src={ind.images[0]}
                        alt={ind.name}
                        fill
                        style={{ objectFit: "cover", borderRadius: "10px" }}
                      />
                    </div>
                    <div className={styles.imgWrap2}>
                      <Image
                        src={ind.images[1]}
                        alt={ind.name}
                        fill
                        style={{ objectFit: "cover", borderRadius: "10px" }}
                      />
                    </div>
                    {ind.tags.map((label, ti) => (
                      <span
                        key={ti}
                        className={styles.tag}
                        style={{
                          position: "absolute",
                          background: tagBg(TAG_COLORS[ti]),
                          transform: `rotate(${DR[ti]}deg)`,
                          ...TAG_DESKTOP_POS[ti],
                        }}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                )}

                <div className={styles.mobileItem}>
                  <div
                    className={styles.mobileRow}
                    onClick={() => setActiveIndex(isActive ? -1 : i)}
                  >
                    <span
                      className={
                        isActive
                          ? styles.mobileActiveLabel
                          : styles.mobileInactiveLabel
                      }
                    >
                      {ind.name}
                    </span>
                    {!isActive && <ArrowRight />}
                  </div>

                  {isActive && (
                    <div className={styles.mobileExpand}>
                      <div className={styles.mobileImages}>
                        <div className={styles.mobileImg1}>
                          <Image
                            src={ind.images[0]}
                            alt={ind.name}
                            width={300}
                            height={200}
                            style={{ objectFit: "cover", borderRadius: "10px", width: "100%", height: "100%" }}
                          />
                        </div>
                        <div className={styles.mobileImg2}>
                          <Image
                            src={ind.images[1]}
                            alt={ind.name}
                            width={300}
                            height={200}
                            style={{ objectFit: "cover", borderRadius: "10px", width: "100%", height: "100%" }}
                          />
                        </div>
                      </div>
                      <div className={styles.mobileTags}>
                        {ind.tags.map((label, ti) => (
                          <span
                            key={ti}
                            className={styles.tag}
                            style={{
                              background: tagBg(TAG_COLORS[ti]),
                              transform: `rotate(${MR[ti]}deg)`,
                            }}
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
