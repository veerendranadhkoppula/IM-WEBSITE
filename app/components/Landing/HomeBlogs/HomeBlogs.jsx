'use client'
import { useEffect, useState, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import styles from './HomeBlogs.module.css'
import Image from 'next/image'
import one from './1.png'
import two from './2.png'
import three from './3.png'

const blogs = [
  {
    img: one,
    tag: 'STRATEGIST',
    readTime: '5 Minutes Read',
    title: 'What Does a Brand Strategist Actually Do? (And Why Business Owners Need One)',
    slug: 'what-does-a-brand-strategist-actually-do',
  },
  {
    img: two,
    tag: 'STRATEGIST',
    readTime: '5 Minutes Read',
    title: 'What Does a Brand Strategist Actually Do? (And Why Business Owners Need One)',
    slug: 'what-does-a-brand-strategist-actually-do-2',
  },
  {
    img: three,
    tag: 'STRATEGIST',
    readTime: '5 Minutes Read',
    title: 'What Does a Brand Strategist Actually Do? (And Why Business Owners Need One)',
    slug: 'what-does-a-brand-strategist-actually-do-3',
  },
]

const ArrowSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.53426 1.87804C3.53383 2.12481 3.58212 2.36925 3.67636 2.59732C3.7706 2.82539 3.90893 3.03262 4.08343 3.20712C4.25793 3.38162 4.46515 3.51995 4.69322 3.61419C4.9213 3.70843 5.16573 3.75672 5.41251 3.75629L16.7903 3.75629L0.54894 19.9976C0.197308 20.3493 -0.000235174 20.8262 -0.000233825 21.3235C-0.000234499 21.8208 0.197307 22.2977 0.548938 22.6493C0.900569 23.0009 1.37748 23.1985 1.87477 23.1985C2.37205 23.1985 2.84896 23.0009 3.20059 22.6493L19.442 6.40794L19.4442 17.7879C19.4442 18.2861 19.642 18.7638 19.9943 19.1161C20.3465 19.4683 20.8243 19.6662 21.3224 19.6662C21.8206 19.6662 22.2983 19.4683 22.6505 19.1161C23.0028 18.7638 23.2007 18.2861 23.2007 17.7879L23.2007 1.87804C23.2011 1.63126 23.1528 1.38683 23.0586 1.15875C22.9643 0.93068 22.826 0.723453 22.6515 0.548955C22.477 0.374458 22.2698 0.236123 22.0417 0.141883C21.8136 0.0476445 21.5692 -0.000646075 21.3224 -0.000217168L5.41251 -0.000214681C5.16573 -0.000642219 4.9213 0.0476473 4.69323 0.141886C4.46515 0.236125 4.25792 0.374458 4.08343 0.548955C3.90893 0.723453 3.7706 0.93068 3.67636 1.15876C3.58212 1.38683 3.53383 1.63126 3.53426 1.87804Z" fill="white"/>
  </svg>
)

const HomeBlogs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start', active: false })
  const cursorRef = useRef(null)
  const wrapperRef = useRef(null)
  const mousePosRef = useRef({ x: -1, y: -1 })

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 960
      emblaApi?.reInit({ loop: false, align: 'start', active: mobile })
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current) return
      const rect = wrapperRef.current.getBoundingClientRect()
      const { x, y } = mousePosRef.current
      const inside = x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
      setCursorVisible(inside)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMouseMove = (e) => {
    mousePosRef.current = { x: e.clientX, y: e.clientY }
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`
      cursorRef.current.style.top = `${e.clientY}px`
    }
  }

  return (
    <div className={styles.main}>
      <div
        ref={cursorRef}
        className={styles.customCursor}
        style={{ opacity: cursorVisible ? 1 : 0 }}
      >
        <ArrowSVG />
      </div>

      <div className={styles.MainContainer}>
        <div className={styles.top}>
          <h3>Ideas Worth <span className={styles.reading}>Reading</span></h3>
          <p>Perspectives on design, branding, and the craft of building great digital products.</p>
        </div>

        <div
          className={styles.emblaWrapper}
          ref={wrapperRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setCursorVisible(true)}
          onMouseLeave={() => setCursorVisible(false)}
        >
          <div className={styles.emblaViewport} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {blogs.map((blog, i) => (
                <Link
                  key={i}
                  href={`/blog/${blog.slug}`}
                  className={`${styles.emblaSlide} ${styles.card}`}
                >
                  <div className={styles.cardImageWrapper}>
                    <Image src={blog.img} alt={blog.title} />
                  </div>
                  <p className={styles.desktopReadTime}>{blog.readTime}</p>
                  <div className={styles.cardMeta}>
                    <span className={styles.tag}>{blog.tag}</span>
                    <span className={styles.mobileReadTime}>{blog.readTime}</span>
                  </div>
                  <h4>{blog.title}</h4>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.pills}>
            {blogs.map((_, i) => (
              <button
                key={i}
                className={i === selectedIndex ? styles.pillActive : styles.pillInactive}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to blog ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBlogs
