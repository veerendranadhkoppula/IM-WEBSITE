'use client'
import { useState } from 'react'
import styles from './CTASection.module.css'
import ContactPopup from '../Contact/ContactPopup'

const CTASection = () => {
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <div className={styles.left}>
            <h4>
              Most brands look like their competitors.&nbsp;
              <span className={styles.ext}>Yours won't.</span>
            </h4>
            <p>We design brand identities that create instant category ownership, so your customers know you before you say a word.</p>
          </div>
          <div className={styles.right} onClick={() => setPopupOpen(true)}>
            <p>Want Results Like These? Let's Talk</p>
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
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ContactPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  )
}

export default CTASection
