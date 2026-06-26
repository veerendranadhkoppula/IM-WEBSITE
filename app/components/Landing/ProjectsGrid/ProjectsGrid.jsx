/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import styles from "./ProjectsGrid.module.css";
import Image from "next/image";
import one from "./1.webp";
import two from "./2.webp";
import three from "./3.webp";
import four from "./4.webp";
import five from "./5.webp";
import six from "./6.webp";

const ArrowIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.20984 1.2511L13.7433 1.2511L13.7433 12.7845M12.9424 2.05203L1.24872 13.7457"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.9499 18.1374C17.2782 18.4656 17.8104 18.4656 18.1386 18.1374C18.4668 17.8092 18.4668 17.2771 18.1386 16.9488L10.4375 9.24807L17.8664 1.81953C18.1946 1.4913 18.1946 0.959153 17.8664 0.630932C17.5381 0.302711 17.006 0.30271 16.6777 0.630931L9.24881 8.05948L2.09182 0.902817C1.76358 0.574596 1.2314 0.574596 0.903168 0.902817C0.57493 1.23104 0.57493 1.76319 0.903166 2.09141L8.06017 9.24807L0.630941 16.6769C0.302705 17.0052 0.302705 17.5373 0.630941 17.8655C0.959178 18.1938 1.49135 18.1938 1.81959 17.8655L9.24882 10.4367L16.9499 18.1374Z"
      fill="black"
    />
  </svg>
);

const PrevArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 40 40"
  >
    <path
      fill="#363636"
      d="M0,20c0,11,9,20,20,20s20-9,20-20S31,0,20,0,0,9,0,20h0Z"
    />
    <path
      fill="#fff"
      d="M10.59,19.39c-.35.35-.35.87,0,1.21l5.55,5.55c.35.35.87.35,1.21,0s.35-.87,0-1.21l-4.94-4.94,4.94-4.94c.35-.35.35-.87,0-1.21s-.87-.35-1.21,0c0,0-5.55,5.55-5.55,5.55ZM11.2,20.87h18.47v-1.73H11.2v1.73Z"
    />
  </svg>
);

const NextArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 40 40"
  >
    <path
      fill="#363636"
      d="M40,20C40,9,31,0,20,0S0,9,0,20s9,20,20,20,20-9,20-20h0Z"
    />
    <path
      fill="#fff"
      d="M29.41,20.61c.35-.35.35-.87,0-1.21l-5.55-5.55c-.35-.35-.87-.35-1.21,0s-.35.87,0,1.21l4.94,4.94-4.94,4.94c-.35.35-.35.87,0,1.21s.87.35,1.21,0c0,0,5.55-5.55,5.55-5.55ZM28.8,19.13H10.33v1.73h18.47v-1.73Z"
    />
  </svg>
);

const projects = [
  {
    src: one,
    title: "Royal Legacy",
    tags: "Branding | Food",
    description:
      "UI/UX Design and Mobile Application Development crafted for Royal Legacy.",
    popupImages: [
      { type: "landscape", src: "/assets/images/projects/royal/1.webp" },
      {
        type: "double",
        src: [
          "/assets/images/projects/royal/2.webp",
          "/assets/images/projects/royal/3.webp",
        ],
      },
      { type: "square", src: "/assets/images/projects/royal/4.webp" },
      {
        type: "double",
        src: [
          "/assets/images/projects/royal/5.webp",
          "/assets/images/projects/royal/6.webp",
        ],
      },
      { type: "square", src: "/assets/images/projects/royal/7.webp" },
    ],
  },
  {
    src: two,
    title: "Magic Table",
    tags: "Branding | Lifestyle",
    description:
      "Complete branding identity and UI/UX design system for Prestige University.",
    popupImages: [
      { type: "landscape", src: "/assets/images/projects/magic/1.webp" },
      {
        type: "double",
        src: [
          "/assets/images/projects/magic/2.webp",
          "/assets/images/projects/magic/3.webp",
        ],
      },
      { type: "square", src: "/assets/images/projects/magic/4.webp" },
      {
        type: "double",
        src: [
          "/assets/images/projects/magic/5.webp",
          "/assets/images/projects/magic/6.webp",
        ],
      },
    ],
  },
  {
    src: three,
    title: "Neelam Foresteria",
    tags: "Branding | Hospitality",
    description: "Event design and brand activation for neelam India.",
    popupImages: [
      { type: "landscape", src: "/assets/images/projects/neelam/1.webp" },
      {
        type: "double",
        src: [
          "/assets/images/projects/neelam/2.webp",
          "/assets/images/projects/neelam/3.webp",
        ],
      },
      { type: "square", src: "/assets/images/projects/neelam/4.webp" },
      {
        type: "double",
        src: [
          "/assets/images/projects/neelam/5.webp",
          "/assets/images/projects/neelam/6.webp",
        ],
      },
      { type: "square", src: "/assets/images/projects/neelam/7.webp" },
    ],
  },
  {
    src: four,
    title: "Prestige University ",
    tags: "Branding | Education",
    description:
      "Branding and UI/UX design for the Motivata Festboard experience.",
    popupImages: [
      { type: "landscape", src: "/assets/images/projects/pres/1.webp" },
      {
        type: "double",
        src: [
          "/assets/images/projects/pres/2.webp",
          "/assets/images/projects/pres/3.webp",
        ],
      },
      { type: "square", src: "/assets/images/projects/pres/4.webp" },
      {
        type: "double",
        src: [
          "/assets/images/projects/pres/5.webp",
          "/assets/images/projects/pres/6.webp",
        ],
      },
      { type: "square", src: "/assets/images/projects/pres/7.webp" },
    ],
  },
  {
    src: five,
    title: "DRP Exotic",
    tags: "Branding | Food",
    description: "Event design and branding for The Indian Luxury Expo.",
    popupImages: [
      { type: "landscape", src: "/assets/images/projects/hari/1.webp" },
      {
        type: "double",
        src: [
          "/assets/images/projects/hari/2.webp",
          "/assets/images/projects/hari/3.webp",
        ],
      },
      { type: "square", src: "/assets/images/projects/hari/4.webp" },
      {
        type: "double",
        src: [
          "/assets/images/projects/hari/5.webp",
          "/assets/images/projects/hari/6.webp",
        ],
      },
      { type: "square", src: "/assets/images/projects/hari/7.webp" },
    ],
  },
  {
    src: six,
    title: "Satva",
    tags: "Branding | Education",
    description: "UI/UX Design and Mobile Application Development for ADND.",
    popupImages: [
      { type: "landscape", src: "/assets/images/projects/satva/1.webp" },
      {
        type: "double",
        src: [
          "/assets/images/projects/satva/2.webp",
          "/assets/images/projects/satva/3.webp",
        ],
      },
      { type: "square", src: "/assets/images/projects/satva/4.webp" },
      {
        type: "double",
        src: [
          "/assets/images/projects/satva/5.webp",
          "/assets/images/projects/satva/6.webp",
        ],
      },
      { type: "square", src: "/assets/images/projects/satva/7.webp" },
    ],
  },
];

const ProjectsGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const popupContentRef = useRef(null);

  const openPopup = useCallback((project, index) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  }, []);

  const closePopup = useCallback(() => setSelectedProject(null), []);
  const handleMouseMove = (e) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  useEffect(() => {
    const handleScroll = () => setCursorVisible(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNext = useCallback(() => {
    const next = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[next]);
    setCurrentIndex(next);
    if (popupContentRef.current) popupContentRef.current.scrollTop = 0;
  }, [currentIndex]);

  const handlePrevious = useCallback(() => {
    const prev = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prev]);
    setCurrentIndex(prev);
    if (popupContentRef.current) popupContentRef.current.scrollTop = 0;
  }, [currentIndex]);

  const isPopupOpen = selectedProject !== null;
  useEffect(() => {
    if (isPopupOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflowY = "scroll";

      const onEsc = (e) => {
        if (e.key === "Escape") closePopup();
      };
      window.addEventListener("keydown", onEsc);

      return () => {
        window.removeEventListener("keydown", onEsc);
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflowY = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isPopupOpen]);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <div className={styles.top}>
            <h3>
              Brands we&lsquo;ve built that
              <br />
              <span className={styles.spantext}>went on to win</span>
            </h3>
          </div>
          <div className={styles.bottom}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${styles.card} ${index === 1 || index === 2 ? styles.hideOnMobile : ""}`}
                onClick={() => openPopup(project, index)}
                onMouseEnter={() => setCursorVisible(true)}
                onMouseLeave={() => setCursorVisible(false)}
                onMouseMove={handleMouseMove}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardContentleft}>
                    <h3>{project.title}</h3>
                    <p>{project.tags}</p>
                  </div>
                  <div
                    className={styles.cardContentright}
                    role="button"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/work" className={styles.viewallcta}>
            <p>View All</p>
            <div className={styles.svgbg}>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.29695 1.20618C1.31168 1.37909 1.3604 1.55332 1.44033 1.71889C1.52026 1.88446 1.62983 2.0381 1.76274 2.17101C1.89565 2.30392 2.04929 2.41348 2.21486 2.49342C2.38043 2.57335 2.55466 2.62207 2.72757 2.6368L10.7008 3.32973L0.308425 13.7221C0.0834253 13.9471 -0.025963 14.2693 0.00432274 14.6178C0.0346071 14.9663 0.202085 15.3125 0.469914 15.5804C0.737743 15.8482 1.08398 16.0157 1.43247 16.0459C1.78095 16.0762 2.10313 15.9668 2.32813 15.7418L12.7205 5.34943L13.4152 13.3244C13.4455 13.6735 13.6133 14.0203 13.8816 14.2886C14.1498 14.5569 14.4967 14.7247 14.8458 14.755C15.1949 14.7853 15.5176 14.6758 15.743 14.4504C15.9684 14.225 16.078 13.9022 16.0476 13.5532L15.0787 2.40389C15.064 2.23099 15.0152 2.05675 14.9353 1.89119C14.8554 1.72562 14.7458 1.57197 14.6129 1.43906C14.48 1.30615 14.3263 1.19659 14.1608 1.11666C13.9952 1.03673 13.821 0.988002 13.6481 0.973273L2.49879 0.00433618C2.32583 -0.0109928 2.15748 0.00796115 2.00339 0.0601123C1.8493 0.112262 1.71251 0.196582 1.60085 0.308239C1.48919 0.419895 1.40487 0.55669 1.35272 0.71078C1.30057 0.864868 1.28162 1.03322 1.29695 1.20618Z" fill="#101820"/>
</svg>


            </div>

          </Link>
        </div>
      </div>

      {selectedProject && (
        <div
          className={styles.popup}
          onClick={closePopup}
        >
          <div
            className={styles.popupContent}
            ref={popupContentRef}
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.workInternalHeader}>
              <button
                className={styles.closeButton}
                onClick={closePopup}
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>

            <div className={styles.workInternalMain}>
              <div className={styles.workHeadContent}>
                <h2 className={styles.workTitle}>{selectedProject.title}</h2>
                <div className={styles.workDescription}>
                  <p>{selectedProject.tags}</p>
                </div>
              </div>

              {selectedProject.popupImages.map((image, i) => {
                if (image.type === "landscape")
                  return (
                    <div key={i} className={styles.popupLandscape}>
                      <img
                        src={image.src}
                        alt={`${selectedProject.title} ${i + 1}`}
                        className={styles.landscapeImage}
                      />
                    </div>
                  );
                if (image.type === "double")
                  return (
                    <div key={i} className={styles.popupTwoImages}>
                      {image.src.map((s, j) => (
                        <img
                          key={j}
                          src={s}
                          alt={`${selectedProject.title} ${i + 1}-${j + 1}`}
                          className={styles.twoImage}
                        />
                      ))}
                    </div>
                  );
                if (image.type === "square")
                  return (
                    <div key={i} className={styles.popupSingleImage}>
                      <img
                        src={image.src}
                        alt={`${selectedProject.title} ${i + 1}`}
                        className={styles.singleImage}
                      />
                    </div>
                  );
                return null;
              })}
            </div>

            <div className={styles.popupNavigation}>
              <button
                className={styles.arrowLeft}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                aria-label="Previous project"
              >
                <PrevArrow />
              </button>
              <button
                className={styles.arrowRight}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next project"
              >
                <NextArrow />
              </button>
            </div>
          </div>
        </div>
      )}
      {cursorVisible && (
        <div
          className={styles.customCursor}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className={styles.exploreCursorCircle}>
            <span className={styles.exploreCursorText}>Explore</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsGrid;
