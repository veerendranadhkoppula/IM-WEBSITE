"use client";
import { useEffect, useCallback } from 'react';
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from '@/app/styles/Services.module.css';
import topShape from "@/app/components/Services/top-shape1.svg";
import bottomShape from "@/app/components/Services/bottom-shape1.svg";

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const MovingShape = () => {
  // Setup GSAP animations
  const setupAnimations = useCallback(() => {
    const commonScrollTriggerConfig = {
      trigger: `.${styles.service_hero_section}`,
      start: "center center",
      end: `${window.innerHeight}`,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true
    };

    gsap.to(`.${styles.img1}`, {
      x: -window.innerWidth / 4,
      scrollTrigger: commonScrollTriggerConfig
    });

    gsap.to(`.${styles.img2}`, {
      x: window.innerWidth / 4,
      scrollTrigger: commonScrollTriggerConfig
    });
  }, []);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      if (typeof window === 'undefined') return;
      
      if (mounted) {
        setupAnimations();
      }
    };

    init();

    // Cleanup function
    return () => {
      mounted = false;
      // Clean up ScrollTrigger instances
      // ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [setupAnimations]);

  return (
    <div className={styles.images_shape_move_container}>
      <div className={styles.shape_container}>
        <Image
          src={topShape}
          alt="Top decorative shape"
          className={styles.img1}
          width={1920}
          height={110}
          priority={true}
          quality={75}
          layout='responsive'
        />
        <Image
          src={bottomShape}
          alt="Bottom decorative shape"
          className={styles.img2}
          width={1920}
          height={110}
          priority={true}
          quality={75}
          layout='responsive'

        />
      </div>
    </div>
  );
};

export default MovingShape;