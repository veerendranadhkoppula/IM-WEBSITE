"use client";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation';
import landingStyles from "@/app/styles/LandingPage.module.css";
import TeamImageAndService from "@/app/components/Landing/TeamImageAndService";
import Testimonial from "@/app/components/Testimonial/Testimonial";
import Footer from "@/app/components/Footer/FinalFooter";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Work from "@/app/components/Landing/Work/Work";
import ZoomingVideo from "@/app/components/Landing/ZoomingVideo/ZoomingVideo";
import Clients from "@/app/components/Landing/Clientele/Clients";
import HeroHeading from "@/app/components/Landing/Heading/HeroHeading";


gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {


  const headingRef = useRef(null);
  useEffect(() => {
    document.title = 'Integra Magna | Branding, Strategy, and UX UI Design Agency'; // Set the document title
  }, []);


  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);
  const heroTexts = useRef([]);
  const pathname = usePathname();

  const words = ['designers', 'engineers', 'artists'];
  const colors = ['#FA7598', '#007934', '#FFA600']; // Corresponding colors for the words

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500); // Pause before deleting
        setTypingSpeed(100);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(200);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, typingSpeed, loopNum]);





  return (
    <>
      {/* <Head>
        <title>Integra Magna | Branding, Strategy, and UX UI Design Agency</title>
        <meta charset="UTF-8" />
        <meta property="og:title" content="Integra Magna | Branding & UX/UI Design Agency" />
        <meta property="og:description" content="Integra Magna is a strategic design agency that creates the digital product and brand experiences that elevate companies to their next exciting chapter." />
        <meta property="og:url" content="https://integramagna.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Integra Magna" />
        <meta itemprop="name" content="Integra Magna | Branding, Strategy, and UX UI Design Agency" />
        <meta itemprop="description"
          content="Integra Magna is a strategic design agency that creates the digital product and brand experiences that elevate companies to their next exciting chapter." />
        <meta itemprop="image" content="https://s3.ap-south-1.amazonaws.com/integramagna.com/assets/social_thumbnail.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://s3.ap-south-1.amazonaws.com/integramagna.com/assets/social_thumbnail.png" />
        <meta name="twitter:title" content="Integra Magna | Branding & UX/UI Design Agency" />
        <meta name="twitter:site" content="@Integra_Magna" />
        <meta name="p:domain_verify" content="805f252a9d4ede6c6a9a0dfbcca2183c" />
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        <meta name="image" property="image"
          content="https://s3.ap-south-1.amazonaws.com/integramagna.com/assets/social_thumbnail.png" />
        <meta property="og:image" content="https://s3.ap-south-1.amazonaws.com/integramagna.com/assets/social_thumbnail.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta name="description"
          content="Integra Magna is a strategic design agency that creates the digital product and brand experiences that elevate companies to their next exciting chapter." />
        <meta name="keywords"
          content="Creative Design agency, UX UI Design, website development, best website design, Product design, UX Design, UI Design, branding, Marketing plans, Integra Magna, design" />
        <meta name="author" content="Integra Magna" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://integramagna.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Integra Magna",
            "url": "https://integramagna.com/",
            "logo": "https://integramagna.com/assets/social_thumbnail.png",
            "sameAs": [
              "https://x.com/Integra_Magna/",
              "https://www.linkedin.com/company/integramagna",
              "https://www.instagram.com/integra.magna",
              "https://www.behance.net/integra_magna/",
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91 7772003322",
                "contactType": "Office",
                "areaServed": "International",
                "email": "hi@integramagna.com",
              },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://integramagna.com/" },
              { "@type": "ListItem", "position": 2, "name": "Work", "item": "https://integramagna.com/work" },
              { "@type": "ListItem", "position": 3, "name": "Services", "item": "https://integramagna.com/services" },
              { "@type": "ListItem", "position": 4, "name": "Thinking", "item": "https://integramagna.com/thinking" },
              { "@type": "ListItem", "position": 5, "name": "Career", "item": "https://integramagna.com/career" },
              { "@type": "ListItem", "position": 6, "name": "About", "item": "https://integramagna.com/about" },
              { "@type": "ListItem", "position": 7, "name": "Contact", "item": "https://integramagna.com/contact" },
            ],
          })}
        </script>
  
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1034189087944346');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1034189087944346&ev=PageView&noscript=1"
          />
        </noscript>
      
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PZT78R1EN8"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PZT78R1EN8', {
              'page_path': window.location.pathname,
              'page_title': document.title
            });
          `}
        </script>
      </Head> */}
      <div className={landingStyles.content}>

        <HeroHeading />

        <ZoomingVideo />

        <section
          className={`${landingStyles.site_container_padding} ${landingStyles.top_bottom_spacing} ${landingStyles.left_align}`}
          style={{ paddingTop: "100px" }}
        >
          <h1 className={landingStyles.typwrite_text}>
            <span>We are a cadre of professional </span> <br />
            <span
              className={landingStyles.typewrite}
              style={{ color: colors[loopNum % colors.length] }}
            >
              {text}
              <span className={landingStyles.cursor}>|</span>
            </span>
            <span>
              {" "}
              and cats <br className={landingStyles.phone_breaker} />
              in disguise.
            </span>
          </h1>
        </section>

        <Work />

        <Clients />

        <TeamImageAndService>
          <section
            className={`${landingStyles.site_container_padding} ${landingStyles.top_bottom_spacing} ${landingStyles.l_a_t}`}
          >
            <h4 className={landingStyles.l_a_t_h}>
              We&apos;re a global powerhouse of creativity and innovation. We work with
              the best brands in the biz, and we&apos;re not afraid to shake things up
              with our daring and unconventional designs.
            </h4>
          </section>

          <Testimonial />
        </TeamImageAndService>

      </div >

      <Footer />

    </>
  );
}
