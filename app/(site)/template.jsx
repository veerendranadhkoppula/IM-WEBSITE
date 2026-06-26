"use client";

import { useEffect, useState, useRef } from "react";
import { animatePageIn } from "@/animations";

export default function Template({ children }) {
  const loaderRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      let progressValue = 0;
      const interval = setInterval(() => {
        progressValue += 2;
        setProgress(progressValue);
        if (progressValue >= 100) {
          clearInterval(interval);
        }
      }, 20);

      return () => clearInterval(interval);
    } else {
      setProgress(100);
    }
  }, [inView]);

  return (
    <div>
      <div
        ref={loaderRef}
        id="transition-element"
        className="transitionElement "
      >
        <div className="loader-content">
          <span className="transitionPageName" id="transitionPageName">
          </span>
          <div className="loader">
            <div className="loading-percentage" style={{ width: `${progress}%` }}>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
