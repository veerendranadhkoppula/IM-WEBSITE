"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./NewLanding.module.css";

const imageCount = 60;
const getImagePath = (index) =>
  `/assets/images/landing/integraMagnaLandingSequence/${index
    .toString()
    .padStart(3, "0")}.webp`;

const imageArray = Array.from({ length: imageCount }, (_, i) =>
  getImagePath(i + 1)
);

const preloadImages = (arr) => {
  const images = [];
  let loaded = 0;
  return new Promise((resolve) => {
    arr.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        images[index] = img;
        loaded++;
        if (loaded === arr.length) resolve(images);
      };
    });
  });
};

const HeroVideo = () => {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    el.setAttribute("playsinline", "");
    el.setAttribute("webkit-playsinline", "");
    const tryPlay = () => el.play().catch(() => {});
    el.load();
    tryPlay();
    el.addEventListener("canplay", tryPlay, { once: true });
    return () => el.removeEventListener("canplay", tryPlay);
  }, []);

  return (
    <video
      ref={ref}
      loop
      muted
      playsInline
      preload="auto"
      onCanPlay={() => setReady(true)}
      className={styles.spectrumCanvas}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "contain",
        zIndex: 1,
        opacity: ready ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    >
      <source src="/assets/images/landing/Hero-Sequence.mp4" type="video/mp4" />
    </video>
  );
};

const SpectrumCanvas = () => {
  const canvasRef = useRef(null);
  const [isSmallDevice, setIsSmallDevice] = useState(true);
  const [mountVideo, setMountVideo] = useState(false);

  useEffect(() => {
    const check = () => setIsSmallDevice(window.innerWidth < 960);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isSmallDevice !== true) return;
    let started = false;
    const begin = () => {
      if (started) return;
      started = true;
      setMountVideo(true);
    };
    if (document.readyState === "complete") {
      const t = setTimeout(begin, 400);
      return () => clearTimeout(t);
    }
    window.addEventListener("load", begin, { once: true });
    const fallback = setTimeout(begin, 3000);
    return () => {
      window.removeEventListener("load", begin);
      clearTimeout(fallback);
    };
  }, [isSmallDevice]);

  useEffect(() => {
    if (isSmallDevice === null || isSmallDevice === true) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let cancelled = false;
    let cleanupMouseMove = null;
    let gsapInstance = null;

    import("gsap").then((mod) => {
      if (cancelled) return;
      const gsap = mod.default || mod.gsap || mod;
      gsapInstance = gsap;

      let images = [];

      const initMouseAnimation = () => {
        const handleMouseMove = (e) => {
          const x = e.clientX / window.innerWidth;
          const y = e.clientY / window.innerHeight;
          const imageIndex = Math.round((images.length - 1) * x);
          if (images[imageIndex]) {
            gsap.to(canvas, { rotation: -30 * (y - 0.5), duration: 0.1 });
            gsap.to(canvas, {
              opacity: 1,
              duration: 0.2,
              onComplete: () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(images[imageIndex], 0, 0, canvas.width, canvas.height);
                gsap.to(canvas, { opacity: 1, duration: 0.3 });
              },
            });
          }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      };

      canvas.style.opacity = "1";
      canvas.style.visibility = "visible";
      gsap.killTweensOf(canvas);

      const firstFrame = new Image();
      firstFrame.src = imageArray[0];
      firstFrame.onload = () => {
        if (!cancelled && canvasRef.current)
          ctx.drawImage(firstFrame, 0, 0, canvas.width, canvas.height);
      };

      preloadImages(imageArray).then((loaded) => {
        if (cancelled) return;
        images = loaded;
        if (images[0]) ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
        cleanupMouseMove = initMouseAnimation();
      });
    });

    return () => {
      cancelled = true;
      if (gsapInstance) gsapInstance.killTweensOf(canvas);
      if (cleanupMouseMove) cleanupMouseMove();
    };
  }, [isSmallDevice]);

  if (isSmallDevice === true) {
    return (
      <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1" }}>
        <img
          src="/assets/images/landing/hero-sequence-poster.webp"
          alt="Integra Magna brand spectrum"
          width="500"
          height="500"
          fetchPriority="high"
          className={styles.spectrumCanvas}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
        {mountVideo && <HeroVideo />}
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      width="500"
      height="500"
      className={styles.spectrumCanvas}
    />
  );
};

export default SpectrumCanvas;
