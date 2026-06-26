'use client'
import { useEffect, useRef, useState, useCallback, memo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import styles from './NewServices.module.css'
import ContactPopup from '../Contact/ContactPopup'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  {
    key: 'branding',
    title: 'Branding',
    image: null,
    gradient: `radial-gradient(circle at 0% 100%, rgba(253,114,152,0.22) 0%, rgba(253,114,152,0.1) 18%, transparent 38%), radial-gradient(circle at 100% 100%, rgba(253,114,152,0.42) 0%, rgba(253,114,152,0.18) 24%, rgba(6,1,2,0.92) 48%, #000000 72%), radial-gradient(circle at 0% 0%, rgba(253,114,152,0.08) 0%, transparent 28%), #000000`,
    items: [
      { num: '1.', title: 'Brand Identity', desc: 'Brand mark, style guide, fonts' },
      { num: '2.', title: 'Logo Design', desc: 'For brand recognition' },
      { num: '3.', title: 'Packaging Design', desc: 'Labels, boxes, packets' },
      { num: '4.', title: 'Pitch Deck', desc: 'Investor slide, company profile' },
      { num: '5.', title: 'Rebranding', desc: 'Total brand overhaul' },
    ],
    description: 'Build a strong, recognizable identity that sets your business apart in a competitive market. We craft cohesive brand systems that communicate trust, clarity, and long-term value.',
  },
  {
    key: 'design',
    title: 'Design',
    image: null,
    gradient: `radial-gradient(circle at 0% 100%, rgba(0,121,52,0.22) 0%, rgba(0,121,52,0.1) 18%, transparent 38%), radial-gradient(circle at 100% 100%, rgba(0,121,52,0.42) 0%, rgba(0,121,52,0.18) 24%, rgba(6,1,2,0.92) 48%, #000000 72%), radial-gradient(circle at 0% 0%, rgba(0,121,52,0.08) 0%, transparent 28%), #000000`,
    items: [
      { num: '1.', title: 'UI / UX Design', desc: 'Mobile & Web interfaces' },
      { num: '2.', title: 'Website Design', desc: 'Responsive, layouts, interactions' },
      { num: '3.', title: 'Website Redesign', desc: 'Fresh digital presence' },
      { num: '4.', title: 'Graphic Design', desc: 'Illustrations, print, marketing assets' },
      { num: '5.', title: 'Motion Design', desc: 'Reels, explainers & animation' },
    ],
    description: 'Design that thinks and feels. We create interfaces, visuals, and experiences that speak your brand language — from pixel-perfect screens to motion-driven storytelling.',
  },
  {
    key: 'development',
    title: 'Development',
    image: null,
    gradient: `radial-gradient(circle at 0% 100%, rgba(252,182,0,0.22) 0%, rgba(252,182,0,0.1) 18%, transparent 38%), radial-gradient(circle at 100% 100%, rgba(252,182,0,0.42) 0%, rgba(252,182,0,0.18) 24%, rgba(6,1,2,0.92) 48%, #000000 72%), radial-gradient(circle at 0% 0%, rgba(252,182,0,0.08) 0%, transparent 28%), #000000`,
    items: [
      { num: '1.', title: 'Web Development', desc: 'Frontend & backend' },
      { num: '2.', title: 'Landing Pages', desc: 'High-conversion layouts' },
      { num: '3.', title: 'E-commerce Websites', desc: 'Seamless shopping experience' },
      { num: '4.', title: 'Corporate Website', desc: 'Multi-page information hubs' },
    ],
    description: 'Speed, performance, and precision. We build websites and digital products that are fast, scalable, and engineered to convert — from landing pages to full-stack web applications.',
  },
  {
    key: 'ai',
    title: 'Ai',
    image: null,
    gradient: `radial-gradient(circle at 0% 100%, rgba(90,72,255,0.22) 0%, rgba(90,72,255,0.1) 18%, transparent 38%), radial-gradient(circle at 100% 100%, rgba(90,72,255,0.42) 0%, rgba(90,72,255,0.18) 24%, rgba(6,1,2,0.92) 48%, #000000 72%), radial-gradient(circle at 0% 0%, rgba(90,72,255,0.08) 0%, transparent 28%), #000000`,
    items: [
      { num: '1.', title: 'AI Strategy', desc: 'Integration & automation roadmap' },
      { num: '2.', title: 'AI Design Tools', desc: 'Enhanced creative workflows' },
      { num: '3.', title: 'AI Development', desc: 'Smart applications & bots' },
      { num: '4.', title: 'AI Automation', desc: 'Workflow & process automation' },
    ],
    description: 'Intelligence built into your brand and product. We integrate AI into your design workflow, customer experience, and operations — giving you the edge of automation without losing the human touch.',
  },
]

const TRANS = 0.3
const STAGGER = 0.02

const ServiceSection = memo(function ServiceSection({ sectionRef, bgRefs, titleRefs, listRefs, descRefs, imageRefs, onStartProject }) {
  return (
    <div ref={sectionRef} className={styles.main}>
      {SERVICES.map((service, i) => (
        <div
          key={service.key}
          ref={(el) => { bgRefs.current[i] = el }}
          className={styles.bgOverlay}
          style={{ background: service.gradient, opacity: i === 0 ? 1 : 0 }}
        />
      ))}

      <div className={styles.MainContainer}>
        <div className={styles.left}>
          <div className={styles.lefttop}>
            <div className={styles.servicestitles}>
              {SERVICES.map((service, i) => (
                <h4
                  key={service.key}
                  ref={(el) => { titleRefs.current[i] = el }}
                  className={styles.servicetitle}
                  style={{
                    fontSize: i === 0 ? 'clamp(32px, 4.5vw, 64px)' : 'clamp(16px, 2.2vw, 30px)',
                    color: i === 0 ? '#FFFFFF' : '#4E4E4E',
                  }}
                >
                  {service.title}
                </h4>
              ))}
            </div>

            <div className={styles.listsContainer}>
              {SERVICES.map((service, i) => (
                <div
                  key={service.key}
                  ref={(el) => { listRefs.current[i] = el }}
                  className={styles.servicedetaillist}
                  style={{ opacity: i === 0 ? 1 : 0 }}
                >
                  {service.items.map((item, j) => (
                    <div key={j} className={styles.list}>
                      <h4>{item.num}</h4>
                      <h2>
                        {item.title}&nbsp;
                        <span className={styles.smalltext}>{item.desc}</span>
                      </h2>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.leftbottom}>
            <button className={styles.startproject} onClick={onStartProject}>
              <h6>Start a Project</h6>
              <div className={styles.arrow}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.29695 1.20618C1.31168 1.37909 1.3604 1.55332 1.44033 1.71889C1.52026 1.88446 1.62983 2.0381 1.76274 2.17101C1.89565 2.30392 2.04929 2.41348 2.21486 2.49342C2.38043 2.57335 2.55466 2.62207 2.72757 2.6368L10.7008 3.32973L0.308425 13.7221C0.0834253 13.9471 -0.025963 14.2693 0.00432274 14.6178C0.0346071 14.9663 0.202085 15.3125 0.469914 15.5804C0.737743 15.8482 1.08398 16.0157 1.43247 16.0459C1.78095 16.0762 2.10313 15.9668 2.32813 15.7418L12.7205 5.34943L13.4152 13.3244C13.4455 13.6735 13.6133 14.0203 13.8816 14.2886C14.1498 14.5569 14.4967 14.7247 14.8458 14.755C15.1949 14.7853 15.5176 14.6758 15.743 14.4504C15.9684 14.225 16.078 13.9022 16.0476 13.5532L15.0787 2.40389C15.064 2.23099 15.0152 2.05675 14.9353 1.89119C14.8554 1.72562 14.7458 1.57197 14.6129 1.43906C14.48 1.30615 14.3263 1.19659 14.1608 1.11666C13.9952 1.03673 13.821 0.988002 13.6481 0.973273L2.49879 0.00433618C2.32583 -0.0109928 2.15748 0.00796115 2.00339 0.0601123C1.8493 0.112262 1.71251 0.196582 1.60085 0.308239C1.48919 0.419895 1.40487 0.55669 1.35272 0.71078C1.30057 0.864868 1.28162 1.03322 1.29695 1.20618Z" fill="white" />
                </svg>
              </div>
            </button>

            <div className={styles.descContainer}>
              {SERVICES.map((service, i) => (
                <p
                  key={service.key}
                  ref={(el) => { descRefs.current[i] = el }}
                  className={styles.description}
                  style={{ opacity: i === 0 ? 1 : 0 }}
                >
                  {service.description}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.right}>
          {SERVICES.map((service, i) => (
            <div
              key={service.key}
              ref={(el) => { imageRefs.current[i] = el }}
              className={styles.serviceImage}
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              {service.image && (
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

const NewServices = () => {
  const sectionRef = useRef(null)
  const bgRefs = useRef([])
  const titleRefs = useRef([])
  const listRefs = useRef([])
  const descRefs = useRef([])
  const imageRefs = useRef([])
  const [popupOpen, setPopupOpen] = useState(false)
  const openPopup = useCallback(() => setPopupOpen(true), [])

  useEffect(() => {
    const isMobile = window.innerWidth < 960
    const activeFS = isMobile ? '32px' : '64px'
    const inactiveFS = isMobile ? '16px' : '30px'

    const ctx = gsap.context(() => {
      gsap.set(titleRefs.current[0], { fontSize: activeFS, color: '#FFFFFF' })
      titleRefs.current.slice(1).forEach((ref) => {
        if (ref) gsap.set(ref, { fontSize: inactiveFS, color: '#4E4E4E' })
      })
      gsap.set(bgRefs.current.slice(1), { opacity: 0 })
      gsap.set(listRefs.current.slice(1), { opacity: 0, y: 20 })
      gsap.set(descRefs.current.slice(1), { opacity: 0 })
      imageRefs.current.slice(1).forEach((ref) => {
        if (ref) gsap.set(ref, { opacity: 0 })
      })

      const totalScroll = (SERVICES.length - 1 + 0.3) * window.innerHeight * (isMobile ? 0.65 : 1)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${totalScroll}`,
          pin: true,
          scrub: isMobile ? 0.5 : 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      for (let i = 0; i < SERVICES.length - 1; i++) {
        const from = i
        const to = i + 1

        const seg = gsap.timeline()

        seg.to(bgRefs.current[from], { opacity: 0, duration: TRANS, ease: 'none' }, 0)
           .to(bgRefs.current[to], { opacity: 1, duration: TRANS, ease: 'none' }, 0)

        if (imageRefs.current[from]) seg.to(imageRefs.current[from], { opacity: 0, duration: TRANS, ease: 'none' }, 0)
        if (imageRefs.current[to]) seg.to(imageRefs.current[to], { opacity: 1, duration: TRANS, ease: 'none' }, 0)

        seg.to(titleRefs.current[from], { fontSize: inactiveFS, color: '#4E4E4E', duration: TRANS, ease: 'none' }, STAGGER)
           .to(titleRefs.current[to], { fontSize: activeFS, color: '#FFFFFF', duration: TRANS, ease: 'none' }, STAGGER)

        seg.to(listRefs.current[from], { opacity: 0, y: -20, duration: TRANS, ease: 'none' }, STAGGER * 2)
           .to(listRefs.current[to], { opacity: 1, y: 0, duration: TRANS, ease: 'none' }, STAGGER * 2)

        seg.to(descRefs.current[from], { opacity: 0, duration: TRANS, ease: 'none' }, STAGGER * 3)
           .to(descRefs.current[to], { opacity: 1, duration: TRANS, ease: 'none' }, STAGGER * 3)

        seg.to({}, { duration: 1 - STAGGER * 3 - TRANS })

        tl.add(seg)
      }

      tl.to({}, { duration: 0.3 })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div>
      <ServiceSection
        sectionRef={sectionRef}
        bgRefs={bgRefs}
        titleRefs={titleRefs}
        listRefs={listRefs}
        descRefs={descRefs}
        imageRefs={imageRefs}
        onStartProject={openPopup}
      />
      <ContactPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  )
}

export default NewServices
