"use client";
import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import dynamic from 'next/dynamic';
import servicesStyles from '@/app/styles/Services.module.css'; // CSS Module for Services page
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PinnedSectionRight from '@/app/components/Services/PinnedSectionRight';
import SlideUpText from "@/app/components/SlideUpText";
import MovingShape from "@/app/components/Services/MovingShape"

// Lazy load Testimonial and Footer components for better performance
const Testimonial = dynamic(() => import('@/app/components/Testimonial/Testimonial'), { ssr: false });
const Footer = dynamic(() => import('@/app/components/Footer/FinalFooter'), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

  useEffect(() => {
    document.title = "Services | Integra Magna | Design Agency";
  }, []);


  return (
    <>
      <div id="content">
        <section className={servicesStyles.service_hero_section}>
          <div className={servicesStyles.service_header_container}>

            <SlideUpText
              text={`Let's Transform Businesses\nwith Precision`}
              className={`${servicesStyles.Service_hero_heading} headTrans`}
              Tag="h1"
              delay={0.7}
            />

            <SlideUpText
              text={`We redefine corporate landscapes with our visionary design ethos. Our comprehensive services are tailored to enhance your entire business ecosystem. We're all about giving your business the edge it deserves.`}
              className={`${servicesStyles.Service_hero_subheading} headTrans`}
              Tag="span"
              delay={1.3}
            />

          </div>


          <MovingShape />

        </section>

        <div className={servicesStyles.Approach_container}>
          <h2>Approach</h2>
          <p>
            Our company&apos;s essence is captured in a visual language that blends our
            founder&apos;s values, artist&apos;s creativity, and team spirit with the
            distinctiveness of our clients. We offer expert strategy, web and
            product design, development, animated video creation, and more.
          </p>
        </div>

        <div className={servicesStyles.Industries_served_container}>
          <div className={`${servicesStyles.Industries_served_box_20} initialTransition`}>
            <h1>
              <SlideUpText
                text="20+"
                Tag="h1"
              />
            </h1>
            <p>Industries Served</p>

          </div>
          <div className={servicesStyles.Industries_served_box_line}></div>
          <div className={`${servicesStyles.Industries_served_box_100} initialTransition`}>
            <h1>
              <SlideUpText
                text="100+"
                Tag="h1"
              />
            </h1>
            <p>Brands</p>
          </div>
          <div className={`${servicesStyles.Industries_served_box_7} initialTransition`}>
            <h1>
              <SlideUpText
                text="07"
                Tag="h1"
              />
            </h1>
            <p>Countries</p>
          </div>
          <div className={`${servicesStyles.Industries_served_box_28} initialTransition`}>
            <h1>
              <SlideUpText
                text="28+"
                Tag="h1"
              />
            </h1>
            <p>Apps & Initiatives Launched</p>
          </div>
        </div>

        {/* Pinned section ( it's a component you already built) */}
        <PinnedSectionRight />

        <Testimonial />
        <section className="f-upper-section">
          <div className="line_container site-container-padding">
            <div className="div_line"></div>
          </div>
        </section>
        {/* <Form /> */}
      </div>
      <Footer />
    </>
  );
};

export default Services;
