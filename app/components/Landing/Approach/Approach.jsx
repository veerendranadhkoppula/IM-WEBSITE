'use client'
import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './Approach.module.css'
import Image from 'next/image'
import one from './1.png'
import two from './2.png'
import three from './3.png'
import four from './4.png'

const cards = [
  { img: one, heading: 'User Research First', desc: 'We define user flows, information architecture, and core interactions before visual design.' },
  { img: two, heading: 'User Research First', desc: 'We define user flows, information architecture, and core interactions before visual design.' },
  { img: three, heading: 'User Research First', desc: 'We define user flows, information architecture, and core interactions before visual design.' },
  { img: four, heading: 'User Research First', desc: 'We define user flows, information architecture, and core interactions before visual design.' },
]

const Approach = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start', active: false })

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

  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>
        <div className={styles.Top}>
          <h4>Our approach to building</h4>
          <h5>scalable fintech experiences</h5>
        </div>
        <div className={styles.emblaWrapper}>
          <div className={styles.emblaViewport} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {cards.map((card, i) => (
                <div key={i} className={`${styles.emblaSlide} ${styles.card}`}>
                  <div className={styles.cardtop}>
                    <Image src={card.img} alt={card.heading} />
                  </div>
                  <div className={styles.cardbottom}>
                    <h4>{card.heading}</h4>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.pills}>
            {cards.map((_, i) => (
              <button
                key={i}
                className={i === selectedIndex ? styles.pillActive : styles.pillInactive}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to card ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Approach
