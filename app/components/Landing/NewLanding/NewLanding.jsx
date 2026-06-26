'use client'
import React, { useState } from 'react'
import styles from './NewLanding.module.css'
import SpectrumCanvas from './SpectrumCanvas'
import ContactPopup from '../Contact/ContactPopup'

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
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.20984 1.2511L13.7433 1.2511L13.7433 12.7845M12.9424 2.05203L1.24872 13.7457"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p className={styles.subtext}>No commitment. 30 minutes. Real insights</p>
            </div>
          </div>
        </div>
      </div>

      <ContactPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  )
}

export default NewLanding
