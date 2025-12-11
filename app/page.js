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
      {/* Awwwards fixed badge (inserted) */}
      <div
        id="awwwards"
        style={{ position: "fixed", zIndex: 999, transform: "translateY(-50%)", top: "50%", right: 0 }}
      >
        <a href="https://www.awwwards.com/sites/integra-magna" target="_blank" rel="noreferrer">
          <svg width="53.08" height="171.358" viewBox="0 0 53.08 171.358" xmlns="http://www.w3.org/2000/svg">
            <path className="js-color-bg" fill="#000000" d="M0 0h53.08v171.358H0z"></path>
            <g className="js-color-text" fill="#fff">
              <path d="M20.047 153.665v-1.9h3.888v-4.093h-3.888v-1.9h10.231v1.9h-4.59v4.093h4.59v1.9zM29.898 142.236c-.331.565-.784.997-1.359 1.294s-1.222.446-1.944.446c-.721 0-1.369-.149-1.943-.446a3.316 3.316 0 0 1-1.36-1.294c-.331-.564-.497-1.232-.497-2.002s.166-1.438.497-2.002a3.316 3.316 0 0 1 1.36-1.294c.574-.297 1.223-.445 1.943-.445.723 0 1.369.148 1.944.445a3.307 3.307 0 0 1 1.359 1.294c.331.564.497 1.232.497 2.002s-.166 1.438-.497 2.002m-1.703-3.347c-.435-.33-.967-.496-1.601-.496-.633 0-1.166.166-1.601.496-.433.332-.649.78-.649 1.346 0 .564.217 1.013.649 1.345.435.331.968.497 1.601.497.634 0 1.166-.166 1.601-.497.435-.332.649-.78.649-1.345.001-.566-.214-1.014-.649-1.346M22.911 134.852v-1.813h1.186a3.335 3.335 0 0 1-.951-1.009 2.423 2.423 0 0 1-.352-1.271c0-.682.19-1.229.57-1.645.381-.413.932-.621 1.652-.621h5.262v1.812h-4.721c-.419 0-.727.096-.921.285-.195.19-.292.447-.292.769 0 .302.115.58.35.833.234.254.577.458 1.03.613.454.156.993.234 1.616.234h2.938v1.813h-7.367zM29.898 125.136a3.314 3.314 0 0 1-1.359 1.294c-.575.297-1.222.445-1.944.445-.721 0-1.369-.148-1.943-.445a3.322 3.322 0 0 1-1.36-1.294c-.331-.565-.497-1.232-.497-2.002 0-.771.166-1.438.497-2.003a3.313 3.313 0 0 1 1.36-1.293c.574-.297 1.223-.446 1.943-.446.723 0 1.369.149 1.944.446s1.028.728 1.359 1.293.497 1.232.497 2.003c.001.769-.166 1.436-.497 2.002m-1.703-3.347c-.435-.331-.967-.497-1.601-.497-.633 0-1.166.166-1.601.497-.433.331-.649.778-.649 1.345 0 .564.217 1.013.649 1.344.435.332.968.498 1.601.498.634 0 1.166-.166 1.601-.498.435-.331.649-.779.649-1.344.001-.567-.214-1.014-.649-1.345M22.911 117.75v-1.812h1.199c-.419-.265-.742-.586-.972-.966s-.345-.784-.345-1.213c0-.272.05-.569.146-.892l1.682.336a1.429 1.429 0 0 0-.205.76c0 .576.261 1.048.783 1.418.521.37 1.342.557 2.461.557h2.617v1.812h-7.366zM29.812 111.252c-.391.511-.857.851-1.403 1.016l-.776-1.446c.381-.138.68-.329.893-.577.215-.249.321-.544.321-.885a1.2 1.2 0 0 0-.168-.658c-.112-.175-.294-.263-.548-.263-.225 0-.406.105-.548.313-.142.21-.291.534-.446.973-.019.068-.058.17-.117.307-.224.565-.506 1.004-.848 1.315-.34.313-.779.467-1.314.467-.381 0-.727-.102-1.039-.306a2.185 2.185 0 0 1-.744-.84 2.554 2.554 0 0 1-.279-1.207c0-.497.105-.949.314-1.359.211-.408.506-.725.886-.949l.993 1.082c-.43.292-.644.686-.644 1.184a.84.84 0 0 0 .154.504.471.471 0 0 0 .401.212c.176 0 .338-.103.49-.307.15-.205.334-.604.547-1.199.205-.564.474-1.001.805-1.308.332-.308.756-.46 1.271-.46.721 0 1.299.229 1.732.687s.65 1.057.65 1.797c.001.759-.194 1.396-.583 1.907M35.481 17.006l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.782-14.969h3.713l2.673 10.276 2.525-10.276h3.445l2.524 10.276 2.674-10.276zM37.978 27.163c1.426 0 2.496 1.068 2.496 2.495 0 1.425-1.07 2.495-2.496 2.495-1.425 0-2.494-1.07-2.494-2.495-.001-1.427 1.069-2.495 2.494-2.495"></path>
            </g>
          </svg>
        </a>
      </div>

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
