"use client";

import React, { useState } from 'react'
import TransitionLink from '@/app/components/TransitionLink'
import ContactPopup from '../Landing/Contact/ContactPopup'
import styles from './FooterContent.module.css'

const CtaArrowSVG = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.21081 1.2511L13.7443 1.2511L13.7443 12.7845M12.9433 2.05203L1.24969 13.7457" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LinkedInSVG = () => (
  <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.564453 6.77539H3.41992V24.8047H0.564453V6.77539ZM1.99219 3.78711C1.63802 3.78711 1.30599 3.7041 0.996094 3.53809C0.686198 3.37207 0.442708 3.13965 0.265625 2.84082C0.0885417 2.54199 0 2.22656 0 1.89453C0 1.54036 0.0885417 1.2194 0.265625 0.931641C0.442708 0.64388 0.686198 0.416992 0.996094 0.250977C1.30599 0.0849609 1.63802 0.00195312 1.99219 0.00195312C2.36849 0.00195312 2.71159 0.0849609 3.02148 0.250977C3.33138 0.416992 3.57487 0.64388 3.75195 0.931641C3.92904 1.2194 4.01758 1.54036 4.01758 1.89453C4.01758 2.22656 3.92904 2.54199 3.75195 2.84082C3.57487 3.13965 3.33138 3.37207 3.02148 3.53809C2.71159 3.7041 2.36849 3.78711 1.99219 3.78711ZM10.8242 24.8047H7.96875V6.77539H10.7246V9.59766H10.957C11.4219 8.6237 12.0859 7.87109 12.9492 7.33984C13.8125 6.80859 14.9082 6.54297 16.2363 6.54297C17.4759 6.54297 18.5495 6.79199 19.457 7.29004C20.3646 7.78809 21.0674 8.54622 21.5654 9.56445C22.0635 10.5827 22.3125 11.8444 22.3125 13.3496V24.8047H19.457V13.5488C19.457 12.6191 19.2965 11.8223 18.9756 11.1582C18.6546 10.4941 18.1898 9.98503 17.5811 9.63086C16.9723 9.27669 16.2363 9.09961 15.373 9.09961C14.4876 9.09961 13.7018 9.28776 13.0156 9.66406C12.3294 10.0404 11.7926 10.5993 11.4053 11.3408C11.0179 12.0824 10.8242 12.9622 10.8242 13.9805V24.8047Z" fill="white"/>
  </svg>
)

const InstagramSVG = () => (
  <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.564453 6.77539H3.41992V24.8047H0.564453V6.77539ZM1.99219 3.78711C1.63802 3.78711 1.30599 3.7041 0.996094 3.53809C0.686198 3.37207 0.442708 3.13965 0.265625 2.84082C0.0885417 2.54199 0 2.22656 0 1.89453C0 1.54036 0.0885417 1.2194 0.265625 0.931641C0.442708 0.64388 0.686198 0.416992 0.996094 0.250977C1.30599 0.0849609 1.63802 0.00195312 1.99219 0.00195312C2.36849 0.00195312 2.71159 0.0849609 3.02148 0.250977C3.33138 0.416992 3.57487 0.64388 3.75195 0.931641C3.92904 1.2194 4.01758 1.54036 4.01758 1.89453C4.01758 2.22656 3.92904 2.54199 3.75195 2.84082C3.57487 3.13965 3.33138 3.37207 3.02148 3.53809C2.71159 3.7041 2.36849 3.78711 1.99219 3.78711ZM15.2734 31.9434C13.8346 31.9434 12.5563 31.7386 11.4385 31.3291C10.3206 30.9196 9.43522 30.3219 8.78223 29.5361C8.12923 28.7503 7.7474 27.804 7.63672 26.6973H10.625C10.8242 27.6048 11.3278 28.291 12.1357 28.7559C12.9437 29.2207 13.9896 29.4531 15.2734 29.4531C16.8672 29.4531 18.0957 29.099 18.959 28.3906C19.8223 27.6823 20.2539 26.5977 20.2539 25.1367V21.4844H20.0215C19.7116 22.0156 19.3796 22.486 19.0254 22.8955C18.6712 23.305 18.14 23.6813 17.4316 24.0244C16.7233 24.3675 15.8379 24.5391 14.7754 24.5391C13.3145 24.5391 12.0029 24.1794 10.8408 23.46C9.67871 22.7406 8.76562 21.7002 8.10156 20.3389C7.4375 18.9775 7.10547 17.3783 7.10547 15.541C7.10547 13.7259 7.43197 12.1377 8.08496 10.7764C8.73796 9.41504 9.64551 8.36914 10.8076 7.63867C11.9697 6.9082 13.3034 6.54297 14.8086 6.54297C15.8711 6.54297 16.751 6.71452 17.4482 7.05762C18.1455 7.40072 18.6491 7.74935 18.959 8.10352C19.2689 8.45768 19.6452 8.9668 20.0879 9.63086H20.3203V6.77539H23.1094V25.3027C23.1094 26.7858 22.7718 28.0254 22.0967 29.0215C21.4215 30.0176 20.4974 30.7536 19.3242 31.2295C18.151 31.7054 16.8008 31.9434 15.2734 31.9434ZM15.1738 21.9824C16.2585 21.9824 17.1882 21.7279 17.9629 21.2188C18.7376 20.7096 19.3242 19.9847 19.7227 19.0439C20.1211 18.1032 20.3203 16.9688 20.3203 15.6406C20.3203 14.3346 20.1211 13.1891 19.7227 12.2041C19.3242 11.2191 18.7432 10.4554 17.9795 9.91309C17.2158 9.37077 16.2806 9.09961 15.1738 9.09961C14.0671 9.09961 13.1263 9.38737 12.3516 9.96289C11.5768 10.5384 10.9902 11.3187 10.5918 12.3037C10.1934 13.2887 9.99414 14.401 9.99414 15.6406C9.99414 16.9023 10.1934 18.0091 10.5918 18.9609C10.9902 19.9128 11.5768 20.6543 12.3516 21.1855C13.1263 21.7168 14.0671 21.9824 15.1738 21.9824Z" fill="white"/>
  </svg>
)

const BehanceSVG = () => (
  <svg width="36" height="25" viewBox="0 0 36 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H8.43359C10.0716 0 11.444 0.276693 12.5508 0.830078C13.6576 1.38346 14.4821 2.1416 15.0244 3.10449C15.5667 4.06738 15.8379 5.15755 15.8379 6.375C15.8379 7.34896 15.6663 8.17904 15.3232 8.86523C14.9801 9.55143 14.5153 10.0993 13.9287 10.5088C13.3421 10.9183 12.6725 11.2227 11.9199 11.4219V11.6543C12.6947 11.6986 13.4583 11.9642 14.2109 12.4512C14.9635 12.9382 15.5833 13.6243 16.0703 14.5098C16.5573 15.3952 16.8008 16.4466 16.8008 17.6641C16.8008 18.9036 16.5186 19.9993 15.9541 20.9512C15.3896 21.903 14.5042 22.6556 13.2979 23.209C12.0915 23.7624 10.5697 24.0391 8.73242 24.0391H0V0ZM8.69922 21.3828C9.91667 21.3828 10.9128 21.2168 11.6875 20.8848C12.4622 20.5527 13.0267 20.11 13.3809 19.5566C13.735 19.0033 13.9121 18.3613 13.9121 17.6309C13.9121 16.8118 13.7074 16.0537 13.2979 15.3564C12.8883 14.6592 12.2962 14.1113 11.5215 13.7129C10.7467 13.3145 9.86133 13.1152 8.86523 13.1152H2.98828V21.3828H8.69922ZM8.33398 10.5254C9.19727 10.5254 9.98307 10.3538 10.6914 10.0107C11.3997 9.66764 11.9587 9.1862 12.3682 8.56641C12.7777 7.94661 12.9824 7.22721 12.9824 6.4082C12.9824 5.67773 12.8219 5.03027 12.501 4.46582C12.18 3.90137 11.6764 3.45866 10.9902 3.1377C10.304 2.81673 9.45182 2.65625 8.43359 2.65625H2.98828V10.5254H8.33398ZM28.2559 24.4043C26.5514 24.4043 25.0628 24.0225 23.79 23.2588C22.5173 22.4951 21.5378 21.416 20.8516 20.0215C20.1654 18.627 19.8223 17.0111 19.8223 15.1738C19.8223 13.3366 20.1654 11.7041 20.8516 10.2764C21.5378 8.84863 22.4951 7.74186 23.7236 6.95605C24.9521 6.17025 26.3743 5.77734 27.9902 5.77734C29.3626 5.77734 30.6354 6.07617 31.8086 6.67383C32.9818 7.27148 33.9336 8.24544 34.6641 9.5957C35.3945 10.946 35.7598 12.6725 35.7598 14.7754V15.9707H21.8145V13.5469H32.8711C32.8711 12.5286 32.6719 11.6266 32.2734 10.8408C31.875 10.055 31.305 9.43522 30.5635 8.98145C29.8219 8.52767 28.9642 8.30078 27.9902 8.30078C26.9277 8.30078 25.998 8.56087 25.2012 9.08105C24.4043 9.60124 23.7845 10.2985 23.3418 11.1729C22.8991 12.0472 22.6777 12.9824 22.6777 13.9785V15.6055C22.6777 16.9336 22.9102 18.068 23.375 19.0088C23.8398 19.9495 24.4928 20.6634 25.334 21.1504C26.1751 21.6374 27.1491 21.8809 28.2559 21.8809C28.9421 21.8809 29.5618 21.7868 30.1152 21.5986C30.6686 21.4105 31.139 21.167 31.5264 20.8682C31.9137 20.5693 32.2181 20.2207 32.4395 19.8223H35.4941C35.2064 20.7298 34.7305 21.5267 34.0664 22.2129C33.4023 22.8991 32.5723 23.4359 31.5762 23.8232C30.5801 24.2106 29.4733 24.4043 28.2559 24.4043Z" fill="white"/>
  </svg>
)

export default function Content() {
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <>
      <section className="footer-text-section" id="header-hide">
        <div className="footer_container">

          <div className="integra_magna_img">
            <img
              src="/assets/images/footer/footer-bg-text-desktop.svg"
              alt="Integra Magna Typography"
              className="footer_image_text_laptop"
            />
            <img
              src="/assets/images/footer/footer-bg-text-mobile.svg"
              alt="Integra Magna Typography"
              className="footer_image_text_mobile"
            />
          </div>

          <div className={styles.bgOverlay} />

          <div className={styles.overlay}>

            <div className={styles.top}>

              <div className={styles.topLeft}>
                <ul className={styles.navCol}>
                  <li><TransitionLink href="/work">Work</TransitionLink></li>
                  <li><TransitionLink href="/services">Services</TransitionLink></li>
                  <li><TransitionLink href="/about">About</TransitionLink></li>
                  <li><TransitionLink href="/contact">Contact</TransitionLink></li>
                </ul>
                <ul className={styles.navCol}>
                  <li><TransitionLink href="/thinking">Blogs</TransitionLink></li>
                  <li><TransitionLink href="/career">Career</TransitionLink></li>
                  <li><TransitionLink href="/thinking">Thinking</TransitionLink></li>
                </ul>
              </div>

              <div className={styles.topRight}>

                <div className={styles.questionSection}>
                  <div className={styles.questionText}>
                    <p className={styles.questionHeading}>Still have a question?</p>
                    <p className={styles.questionDesc}>We'll answer anything in 30 minutes —<br />no pitch, no pressure.</p>
                  </div>
                  <button className={styles.ctaBtn} onClick={() => setPopupOpen(true)}>
                    <span>Book a Free call</span>
                    <div className={styles.ctaArrow}>
                      <CtaArrowSVG />
                    </div>
                  </button>
                </div>

                <div className={styles.writeSection}>
                  <p className={styles.sectionLabel}>Write us on</p>
                  <a href="mailto:hi@integramagna.com" className={styles.emailLink}>
                    hi@integramagna.com
                  </a>
                </div>

                <div className={styles.connectSection}>
                  <p className={styles.sectionLabel}>Connect us on</p>
                  <div className={styles.socialLinks}>
                    <a href="https://linkedin.com/company/integramagna" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <LinkedInSVG />
                    </a>
                    <a href="https://instagram.com/integramagna" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <InstagramSVG />
                    </a>
                    <a href="https://behance.net/integramagna" target="_blank" rel="noopener noreferrer" aria-label="Behance">
                      <BehanceSVG />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div className={styles.bottom}>
              <TransitionLink href="/privacy-policy" className={styles.privacyLink}>
                Privacy Policy
              </TransitionLink>

              <div className={styles.tagline}>
                <span className={styles.taglineWord}>DESIGN</span>
                <span className={styles.dot} />
                <span className={styles.taglineWord}>TECHNOLOGY</span>
                <span className={styles.dot} />
                <span className={styles.taglineWord}>IMPACT</span>
              </div>

              <p className={styles.copyright}>Copyright © 2026 Integra Magna</p>
            </div>

          </div>
        </div>
      </section>

      <ContactPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  )
}
