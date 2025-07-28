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
import Script from 'next/script'
export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const [isCaseStudyPage, setIsCaseStudyPage] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true); // Track the first load
  const [prevPathname, setPrevPathname] = useState(null); // Track previous pathname for route change
  useEffect(() => {
    // Your name
    const name = "© Integra Magna 2025";
    // Styling for the console box
    const style = `
      background: white;
      color: black;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
      font-weight: bold;
    `;
    // Display name in the console
    console.log(`%c ${name} `, style);
  }, []);
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
    <body>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-PZT78R1EN8`}
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PZT78R1EN8', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        id="clarity-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "slvab8trwz");
          `,
        }}
      />
      <div id="transition-overlay" className={`transitionOverlay ${isInitialLoad ? "" : "hidden"}`}
      ></div>
      {isCaseStudyPage ? <CaseStudyHeader /> : <Header />}
      <main>{children}</main>
      <SpeedInsights />
      <Analytics />
    </body>
  );
}