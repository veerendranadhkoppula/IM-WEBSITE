// app/layout.js
"use client";
import Lenis from "lenis";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "@/app/styles/global.min.css";
import "@/app/styles/header.css";
import Header from "@/app/components/Header/Header";
import CaseStudyHeader from "@/app/components/Case-Studies/CaseStudyHeader";
import { animatePageIn, animatePageOut } from "@/animations"; // Ensure path is correct
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [isCaseStudyPage, setIsCaseStudyPage] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true); // Track the first load
  const [prevPathname, setPrevPathname] = useState(null); // Track previous pathname for route change

  useEffect(() => {
    setIsCaseStudyPage(pathname.startsWith("/work/"));
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis(
        {
          easing: (x) => 1 - Math.pow(1 - x, 3),
          duration: 0.6, // Duration for scroll
          smooth: true,
        }
      );

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  useEffect(() => {
    // Animate page in on initial load
    if (isInitialLoad) {
      animatePageIn();
      setIsInitialLoad(false);
    } else if (prevPathname !== pathname) {
      // If pathname changes (route change), animate page out, then in
      animatePageOut(pathname);
      animatePageIn();
      setPrevPathname(pathname);
    }
  }, [pathname, isInitialLoad, prevPathname]);


  return (
    <html lang="en">
      <body>

        {/* Transition Overlay */}
        <div id="transition-overlay" className={`transitionOverlay ${isInitialLoad ? "" : "hidden"}`}
        ></div>
        {isCaseStudyPage ? <CaseStudyHeader /> : <Header />}
        <main>{children}</main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
