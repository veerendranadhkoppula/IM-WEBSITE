'use client';
import { useRef } from 'react';
import MouseMagnetRepel from '@/app/components/Thinking/RepelImage';
import styles from '@/app/styles/Thinking.module.css'; // Import CSS module
import SlideUpText from "@/app/components/SlideUpText";
import thumbsup from "@/app/assets/landing/thumbsup.json";
import DiveintoDetail from "@/app/assets/landing/dive-into-detail.svg";
// import { Player as LottiePlayer } from '@lottiefiles/react-lottie-player';
// import thumbsup from "@/app/assets/landing/thumbsup.webp";

import Image from "next/legacy/image";

export default function Hero() {
  const textRef = useRef(null);

  return (
    <div className={styles.thinkingContainer}>
      <div className={styles.thinkingHero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroHeading}>
            {/* <h1>INTEGRA MAGNA</h1> */}
            <SlideUpText text="BEYOND ORDINARY" ref={textRef} tag='h1' delay={0.5} />
          </div>
          <div className={styles.interImage}>
            {['1.jpg', '2.jpg', '3.jpg', '4.jpg'].map((img, i) => (
              <MouseMagnetRepel
                key={i}
                ref={(el) => (imagesRef.current[i] = el)} // Add image refs
                src={`/assets/images/thinking/${img}`}
                alt="Repelling Effect"
                effectRadius={300}
                repelStrength={1.5}
                rotate={i % 2 === 0 ? -7 : 5} // Alternate tilt
                translate={{ x: i * 0.01, y: -i * 5.01 }} // Incremental offset
              />
            ))}
          </div>
          <div className={styles.thinkingHeroBottom}>

            <div className={styles.dive_into_detail} id="divedetailarrow">
              <Image src={DiveintoDetail} alt="Scroll Down Arrow" />
            </div>

            <div className={styles.heroHeading}>
              {/* <h2>ILLUSTRATOR, DESIGNER & MURALIST</h2> */}
              <SlideUpText text="DESIGNS THAT LINGER, STORIES THAT SPEAK." ref={textRef} tag='h2' delay={0.9} />
            </div>
            <div className={styles.landing_circle}>

              <Image
                className="animHead"
                src={thumbsup}
                alt="Thumbs Up"
                background="transparent"
                speed={0.7}
                loop
                autoPlay
              />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
