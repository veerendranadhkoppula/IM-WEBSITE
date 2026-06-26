import React from 'react'
import styles from './LogosLanding.module.css'

const logos = [
  { src: '/assets/images/landinglogos/1.png', alt: 'Brand Logo 1' },
  { src: '/assets/images/landinglogos/2.png', alt: 'Brand Logo 2' },
  { src: '/assets/images/landinglogos/3.png', alt: 'Brand Logo 3' },
  { src: '/assets/images/landinglogos/4.png', alt: 'Brand Logo 4' },
  //   { src: '/assets/images/landinglogos/5.png', alt: 'Brand Logo 5' },
]

const LogosLanding = () => {
  return (
    <div className={styles.main}>
      <div className={styles.MainConatiner}>
        <div className={styles.left}>
          <div className={styles.top}>
            <h4>Trusted by 250+ brands</h4>
          </div>
          <div className={styles.bottom}>
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
        <div className={styles.right}>
          <p>
            We build brand identities for ambitious startups and growing businesses.
            Strategy-first, built to last, delivered in weeks.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LogosLanding
