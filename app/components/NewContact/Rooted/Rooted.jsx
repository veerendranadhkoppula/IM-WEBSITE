'use client'
import React, { useState } from 'react'
import styles from './Rooted.module.css'
import ContactPopup from '../Contact/ContactPopup'

const Rooted = () => {
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <div className={styles.left}>
            <h4>
              Rooted in two regions,
              <br />
              <span className={styles.brkte}>working without boundaries.</span>
            </h4>
            <p>
              Our core team operates from India and the UAE, partnering with
              product teams across time zones to build meaningful digital
              experiences.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.india}>
              <div className={styles.indialeft}>
                <h3>India</h3>
                <p>Design & Engineering Core</p>
              </div>
              <button className={styles.ctaforpoup} onClick={() => setPopupOpen(true)}>
                <p>Get in touch</p>
                <div className={styles.arrowsicon}>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.29695 1.20618C1.31168 1.37909 1.3604 1.55332 1.44033 1.71889C1.52026 1.88446 1.62983 2.0381 1.76274 2.17101C1.89565 2.30392 2.04929 2.41348 2.21486 2.49342C2.38043 2.57335 2.55466 2.62207 2.72757 2.6368L10.7008 3.32973L0.308425 13.7221C0.0834253 13.9471 -0.025963 14.2693 0.00432274 14.6178C0.0346071 14.9663 0.202085 15.3125 0.469914 15.5804C0.737743 15.8482 1.08398 16.0157 1.43247 16.0459C1.78095 16.0762 2.10313 15.9668 2.32813 15.7418L12.7205 5.34943L13.4152 13.3244C13.4455 13.6735 13.6133 14.0203 13.8816 14.2886C14.1498 14.5569 14.4967 14.7247 14.8458 14.755C15.1949 14.7853 15.5176 14.6758 15.743 14.4504C15.9684 14.225 16.078 13.9022 16.0476 13.5532L15.0787 2.40389C15.064 2.23099 15.0152 2.05675 14.9353 1.89119C14.8554 1.72562 14.7458 1.57197 14.6129 1.43906C14.48 1.30615 14.3263 1.19659 14.1608 1.11666C13.9952 1.03673 13.821 0.988002 13.6481 0.973273L2.49879 0.00433618C2.32583 -0.0109928 2.15748 0.00796115 2.00339 0.0601123C1.8493 0.112262 1.71251 0.196582 1.60085 0.308239C1.48919 0.419895 1.40487 0.55669 1.35272 0.71078C1.30057 0.864868 1.28162 1.03322 1.29695 1.20618Z" fill="white"/>
                  </svg>
                </div>
              </button>
            </div>
            <div className={styles.line}></div>
            <div className={styles.uae}>
              <div className={styles.uaeleft}>
                <h3>UAE</h3>
                <p>Strategy & Client Partnerships</p>
              </div>
              <button className={styles.ctaforpoup} onClick={() => setPopupOpen(true)}>
                <p>Get in touch</p>
                <div className={styles.arrowsicon}>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.29695 1.20618C1.31168 1.37909 1.3604 1.55332 1.44033 1.71889C1.52026 1.88446 1.62983 2.0381 1.76274 2.17101C1.89565 2.30392 2.04929 2.41348 2.21486 2.49342C2.38043 2.57335 2.55466 2.62207 2.72757 2.6368L10.7008 3.32973L0.308425 13.7221C0.0834253 13.9471 -0.025963 14.2693 0.00432274 14.6178C0.0346071 14.9663 0.202085 15.3125 0.469914 15.5804C0.737743 15.8482 1.08398 16.0157 1.43247 16.0459C1.78095 16.0762 2.10313 15.9668 2.32813 15.7418L12.7205 5.34943L13.4152 13.3244C13.4455 13.6735 13.6133 14.0203 13.8816 14.2886C14.1498 14.5569 14.4967 14.7247 14.8458 14.755C15.1949 14.7853 15.5176 14.6758 15.743 14.4504C15.9684 14.225 16.078 13.9022 16.0476 13.5532L15.0787 2.40389C15.064 2.23099 15.0152 2.05675 14.9353 1.89119C14.8554 1.72562 14.7458 1.57197 14.6129 1.43906C14.48 1.30615 14.3263 1.19659 14.1608 1.11666C13.9952 1.03673 13.821 0.988002 13.6481 0.973273L2.49879 0.00433618C2.32583 -0.0109928 2.15748 0.00796115 2.00339 0.0601123C1.8493 0.112262 1.71251 0.196582 1.60085 0.308239C1.48919 0.419895 1.40487 0.55669 1.35272 0.71078C1.30057 0.864868 1.28162 1.03322 1.29695 1.20618Z" fill="white"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContactPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  )
}

export default Rooted
