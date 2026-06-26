'use client'
import React, { useState } from 'react'
import styles from './NewLanding.module.css'
import SpectrumCanvas from './SpectrumCanvas'
import ContactPopup from '../Contact/ContactPopup'

const logos = [
  { src: '/assets/images/landinglogos/1.png', alt: 'Brand Logo 1' },
  { src: '/assets/images/landinglogos/2.png', alt: 'Brand Logo 2' },
  { src: '/assets/images/landinglogos/3.png', alt: 'Brand Logo 3' },
  { src: '/assets/images/landinglogos/4.png', alt: 'Brand Logo 4' },
]

const NewLanding = () => {
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <>
      <div className={styles.main} id="hero-main">
        <div className={styles.MainContainer} id="hero-container">
          <div className={styles.left} id="hero-left">
            <div className={styles.leftTop}>
              <p>DESIGN</p>
              <span className={styles.dot}></span>
              <p>TECHNOLOGY</p>
              <span className={styles.dot}></span>
              <p>IMPACT</p>
            </div>
            <div className={styles.leftBottom}>
              <h1 id="hero-h1">
                Your Design & <br />
                Brand Partner
              </h1>
            </div>
          </div>
          <div className={styles.middle}>
            <SpectrumCanvas />
          </div>
          <div className={styles.right} id="hero-right">
            <div className={styles.rightTop}>
              <h2 id="hero-h2">That Wins Market</h2>
            </div>
            <div className={styles.rightBottom}>
              <div className={styles.ctanew} onClick={() => setPopupOpen(true)} style={{ cursor: 'pointer' }}>
                <p>Get a Free Brand Audit</p>
                <div className={styles.svgicon}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.20984 1.2511L13.7433 1.2511L13.7433 12.7845M12.9424 2.05203L1.24872 13.7457" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className={styles.subtext}>No commitment. 30 minutes. Real insights</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.logosSection}>
        <div className={styles.logosContainer}>
          <div className={styles.logosLeft}>
            <div className={styles.logosTop}>
              <h4>Trusted by 250+ brands</h4>
            </div>
            <div className={styles.logosBottom}>
              <div className={styles.logos}>
                {logos.map((logo, index) => (
                  <React.Fragment key={index}>
                    <img src={logo.src} alt={logo.alt} className={styles.logoImg} width="88" height="77" />
                    {index < logos.length - 1 && <div className={styles.smallline} />}
                  </React.Fragment>
                ))}
              </div>

              <div className={styles.marqueeWrapper}>
                <div className={styles.marqueeTrack}>
                  {[...logos, ...logos].map((logo, index) => (
                    <img key={index} src={logo.src} alt={logo.alt} className={styles.marqueeLogoImg} width="88" height="77" />
                  ))}
                </div>
              </div>

              <p>From Series A startups to TATA-backed enterprises</p>
            </div>
          </div>
          <div className={styles.logosRight}>
            <p>
              We build brand identities for ambitious startups and growing businesses.
              Strategy-first, built to last, delivered in weeks.
            </p>
          </div>
        </div>
      </div>

      <ContactPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  )
}

export default NewLanding
