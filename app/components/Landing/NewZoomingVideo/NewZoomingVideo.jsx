'use client'
import React, { useRef, useState, useEffect } from 'react'
import styles from './NewZoomingVideo.module.css'

const NewZoomingVideo = () => {
  const videoContainerRef = useRef(null)
  const videoWrapperRef = useRef(null)
  const ctxRef = useRef(null)
  const showreelRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const [popupVisible, setPopupVisible] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorVisible, setCursorVisible] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkIfDesktop = () => setIsDesktop(window.innerWidth > 960)
      checkIfDesktop()
      window.addEventListener('resize', checkIfDesktop)
      return () => window.removeEventListener('resize', checkIfDesktop)
    }
  }, [])

  useEffect(() => {
    if (popupVisible) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => document.body.classList.remove('no-scroll')
  }, [popupVisible])

  useEffect(() => {
    if (!videoWrapperRef.current || !videoContainerRef.current) return

    if (isDesktop) {
      Promise.all([import('gsap'), import('gsap/dist/ScrollTrigger')]).then(
        ([{ default: gsap }, { default: ScrollTrigger }]) => {
          gsap.registerPlugin(ScrollTrigger)
          const ctx = gsap.context(() => {
            gsap.fromTo(
              videoWrapperRef.current,
              { scale: 0.95, y: '-5%' },
              {
                scale: 1.45,
                y: '21%',
                ease: 'none',
                scrollTrigger: {
                  trigger: videoContainerRef.current,
                  start: 'top bottom',
                  end: 'center top',
                  scrub: true,
                },
              },
            )
          })
          ctxRef.current = ctx
        },
      )
    } else {
      if (videoWrapperRef.current) {
        videoWrapperRef.current.style.transform = ''
      }
    }

    return () => ctxRef.current?.revert()
  }, [isDesktop])

  const openPopup = () => setPopupVisible(true)
  const closePopup = () => setPopupVisible(false)
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    const handleScroll = () => setCursorVisible(false)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const video = showreelRef.current
    if (!video) return
    video.muted = true
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {})
            observer.disconnect()
          }
        })
      },
      { rootMargin: '300px' },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {popupVisible && (
        <section className={styles.popup}>
          <div className={styles.popupIframe} onClick={closePopup}>
            <div className={styles.iframeWindow}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/gjkVNzM5wYw?autoplay=1&controls=0&vq=hd1080&modestbranding=1&rel=0"
                title="INTEGRA MAGNA"
                frameBorder="0"
                allow="accelerometer; autoplay;"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                id="youtube-player"
              ></iframe>
            </div>
          </div>
          <div className={styles.closeButtonContainer}>
            <button
              type="button"
              className={styles.closeButton}
              aria-label="Close dialog window"
              onClick={closePopup}
            >
              <svg width="23px" height="23px" viewBox="0 0 23 23">
                <g stroke="none" strokeWidth="1.5" fill="white" fillRule="evenodd">
                  <rect
                    transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708)"
                    x="10.3137085"
                    y="-3.6862915"
                    width="2"
                    height="30"
                  />
                  <rect
                    transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708)"
                    x="10.3137085"
                    y="-3.6862915"
                    width="2"
                    height="30"
                  />
                </g>
              </svg>
            </button>
          </div>
        </section>
      )}

      <section className={styles.wrapper} ref={videoContainerRef}>
        <p className={styles.mobileBadge}>10 years of work. 3 minutes of proof.</p>
        <div className={styles.videoContainerAutoplay} ref={videoWrapperRef}>
          <div className={styles.videoBadge}>
            <span>10 years of work. 3 minutes of proof.</span>
          </div>
          <button
            type="button"
            onClick={openPopup}
            className={styles.videoContainer}
            onMouseEnter={() => setCursorVisible(true)}
            onMouseLeave={() => setCursorVisible(false)}
            onMouseMove={handleMouseMove}
            aria-label="Play Integra Magna showreel"
          >
            <div className={styles.mobilePlayButton}>
              <span>Play</span>
            </div>
            <video
              ref={showreelRef}
              preload="none"
              loop
              playsInline
              muted
              aria-hidden="true"
              poster="/assets/images/landing/im-thumbnail.webp"
              title="Integra Magna Work Portfolio Showreel"
            >
              <source src="/assets/videos/Integra-Magna-Landing-Showreelmobile.mp4" type="video/mp4" media="(max-width: 959px)" />
              <source src="/assets/videos/integra-magna-landing-showreel.mp4" type="video/mp4" />
            </video>
          </button>
        </div>

        {cursorVisible && (
          <div
            className={styles.customCursor}
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className={styles.playCursorCircle}>
              <span className={styles.playCursorText}>Play</span>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default NewZoomingVideo
