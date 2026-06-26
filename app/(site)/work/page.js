"use client";
import { useEffect, useRef, useState } from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import TransitionLink from '@/app/components/TransitionLink';
import dynamic from 'next/dynamic';
import workStyles from '@/app/styles/Work.module.css';
import SlideUpText from "@/app/components/SlideUpText";
import ViewporTextAnim from '@/app/components/ViewporTextAnim';
import SplitType from "split-type";
import { gsap } from "gsap";
import workGraphic from '@/app/assets/work/work_graphic.webp';
import caseStudies from "@/app/json/caseStudies.json"; // Import JSON file with case study data
import AnimateImage from "@/app/components/AnimateImage";
import Head from 'next/head';

const Footer = dynamic(() => import('@/app/components/Footer/FinalFooter'), { ssr: false });

const Work = () => {
  const [startAnimations, setStartAnimations] = useState(false);

  const textRef = useRef(null);

  useEffect(() => {
    document.title = 'Work | Integra Magna | Design Agency'; // Set the document title
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const split = new SplitType(textRef.current, { types: 'lines' });

      gsap.from(split.lines, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      return () => {
        split.revert();
      };
    }
  }, []);

  const combinedSquares = [];

  // Loop through the case studies and group two square items together
  for (let i = 0; i < caseStudies.length; i++) {
    const current = caseStudies[i];

    // If the current layout is square and the next one is also square, group them together
    if (current.layout === 'square' && caseStudies[i + 1] && caseStudies[i + 1].layout === 'square') {
      combinedSquares.push([current, caseStudies[i + 1]]);
      i++; // Skip the next one since it's already grouped
    } else {
      combinedSquares.push([current]);
    }
  }

  return (
    <>
      <Head>
        <title>Work | Integra Magna | Design Agency</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="UX UI, Web design, UI Design, UX Design, Website design, Website development, Branding, Logo Design, Website,  Brand Identity, Marketing, Marketing Designs, Brand Strategy, Marketing Campaigns" />
        <meta name="author" content="Integra Magna" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://integramagna.com/work" />
        <link rel="shortcut icon" href="/assets/integramagna-fevicon.ico" type="image/x-icon" />
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

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://integramagna.com/" },
              { "@type": "ListItem", "position": 2, "name": "Work", "item": "https://integramagna.com/work" },
            ],
          })}
        </script>

        {/* Facebook Pixel Code */}
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

        {/* Google Analytics */}
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

      </Head>
      <div id="content">
        <section className={workStyles.workHeaderSection}>
          <div className={workStyles.workHeaderContainer}>
            <div className={workStyles.headerContent}>
              <SlideUpText text="The Alchemy of Aesthetics: Designing with purpose and passion." className={`${workStyles.workHeaderHeading} headTrans`} ref={textRef} tag='h2' delay={0.7} />
              <SlideUpText text="&quot;Elevating and Enhancing Experiences: Here Every Design Tells a Story&quot;" className={`${workStyles.headingExplainer}`} tag='p' delay={1.4} />
            </div>
            <div className={workStyles.workHeaderImageContainer}>
              <div className="imageWrapper">
                <AnimateImage className="media-container">
                  <img
                    src="/assets/images/work/work_graphic.webp"
                    alt="Work Graphic"
                    layout="responsive"
                    sizes="(max-width: 640px) 500vw, 100vw"
                    width={1200}
                    height={800}
                    delay={1.5}
                  />
                </AnimateImage>
              </div>
            </div>
          </div>
        </section>

        <section className={`${workStyles.workPageGridSection} f-upper-section`}>

          <h2 className={`${workStyles.caseStudyHeading} headTrans`}>
            <SlideUpText text={`Case Studies (${caseStudies.length})`} delay={2} />

          </h2>


          {/* Loop through the combinedSquares array */}
          {combinedSquares.map((group, index) => {
            // If there is only one item, it's either a landscape item or a leftover square item
            if (group.length === 1) {
              const study = group[0];
              return (
                <div
                  key={index}
                  className={
                    study.layout === 'landscape'
                      ? workStyles.singleImageDetailHolder
                      : workStyles.doubleImageDetailHolder
                  }
                >
                  <TransitionLink href={study.link}>
                    <AnimateImage className={workStyles.imageContainerSingle} media-container>
                      <video
                        autoPlay
                        muted
                        webkit-playsinline
                        playsInline
                        loop
                        className={`${workStyles.thumbnailImage} ${study.layout === 'landscape'
                          ? workStyles.landscapeRatio
                          : workStyles.squareRatio
                          }`}
                        poster={study.thumbnail}
                      >
                        <source src={study.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className={workStyles.detailsContainer}>
                        <h3 className={workStyles.workHeadingClient}>{study.client}</h3>
                        <p className={workStyles.vertical}>{study.category}</p>
                      </div>
                    </AnimateImage>
                  </TransitionLink>
                </div>
              );
            }

            // If there are two items, render them side by side
            if (group.length === 2) {
              return (
                <div key={index} className={workStyles.doubleImageDetailHolder}>
                  {group.map((study, subIndex) => (
                    <TransitionLink href={study.link} key={subIndex}>
                      <AnimateImage className={workStyles.imageContainerSingle} media-container>
                        <video
                          autoPlay
                          playsInline
                          webkit-playsinline
                          muted
                          loop
                          className={`${workStyles.thumbnailImage} ${workStyles.squareRatio}`}
                          poster={study.thumbnail}
                        >
                          <source src={study.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div className={workStyles.detailsContainer}>
                          <h3 className={workStyles.workHeadingClient}>{study.client}</h3>
                          <p className={workStyles.vertical}>{study.category}</p>
                        </div>
                      </AnimateImage>
                    </TransitionLink>
                  ))}
                </div>
              );
            }
          })}
        </section>

        <div className="line_container site-container-padding">
          <div className="div_line"></div>
        </div>

        {/* <Form /> */}
        <Footer />
      </div>
    </>
  );
};

export default Work;
