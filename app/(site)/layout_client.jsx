"use client";
import Lenis from "lenis";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "@/app/styles/global.min.css";
import "@/app/styles/header.css";
import Header from "@/app/components/Header/Header";
import CaseStudyHeader from "@/app/components/Case-Studies/CaseStudyHeader";
import { animatePageIn, animatePageOut } from "@/animations";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script'

export default function LayoutClient({ children }) {
  const pathname = usePathname();

  const [isCaseStudyPage, setIsCaseStudyPage] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [prevPathname, setPrevPathname] = useState(null);

  useEffect(() => {
    const name = "© Integra Magna 2025";
    const style = `
      background: white;
      color: black;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
      font-weight: bold;
    `;
    console.log(`%c ${name} `, style);
  }, []);

  useEffect(() => {
    setIsCaseStudyPage(pathname.startsWith("/work/"));
  }, [pathname]);

  useEffect(() => {
    const lenis = new Lenis({
      easing: (x) => 1 - Math.pow(1 - x, 3),
      duration: 0.6,
      smooth: true,
    });

    let rafId;
    let destroyed = false;
    const lenisRaf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(lenisRaf);
    };
    rafId = requestAnimationFrame(lenisRaf);

    Promise.all([
      import('gsap').then((m) => m.gsap || m.default),
      import('gsap/dist/ScrollTrigger').then((m) => m.ScrollTrigger || m.default),
    ]).then(([gsap, ScrollTrigger]) => {
      if (destroyed) return;
      gsap.registerPlugin(ScrollTrigger);
      lenis.on('scroll', ScrollTrigger.update);
    });

    return () => {
      destroyed = true;
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (isInitialLoad) {
      animatePageIn();
      setIsInitialLoad(false);
    } else if (prevPathname !== pathname) {
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
