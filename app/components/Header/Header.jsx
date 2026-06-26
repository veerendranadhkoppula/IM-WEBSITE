'use client'
import React, { useEffect, useState, useRef } from 'react'
import TransitionLink from '@/app/components/TransitionLink'
import Image from 'next/image'
import BlendingLogo from '@/public/assets/images/header/blending-logo.svg'
import LogoNameBlend from '@/public/assets/images/header/logonameblend.svg'
import IntegraLogo from '@/public/assets/images/header/integra-magna-logo.svg'

const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/thinking', label: 'Thinking' },
  { href: '/career', label: 'Career' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const headerLink = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset
      setIsScrollingDown(currentPosition > scrollPosition)
      setScrollPosition(currentPosition)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollPosition])

  useEffect(() => {
    let gsapInstance = null
    let cancelled = false

    const applyHoverEffects = () => {
      if (window.innerWidth > 960 && gsapInstance) {
        const gsap = gsapInstance
        headerLink.current.forEach((element) => {
          const link = element.querySelector('span')
          if (!link) return
          if (!element.querySelector('.link-container')) {
            const clone = link.cloneNode(true)
            const container = document.createElement('div')
            container.classList.add('link-container')
            container.appendChild(link)
            container.appendChild(clone)
            element.appendChild(container)

            container.addEventListener('mouseover', () => {
              gsap.to(container.querySelectorAll('span'), { y: '-100%', duration: 0.3, ease: 'power1.out' })
            })
            container.addEventListener('mouseout', () => {
              gsap.to(container.querySelectorAll('span'), { y: '0', duration: 0.3, ease: 'power1.out' })
            })
          }
        })
      }
    }

    import('gsap').then((mod) => {
      if (cancelled) return
      gsapInstance = mod.default || mod.gsap || mod
      applyHoverEffects()
    })

    window.addEventListener('resize', applyHoverEffects)
    return () => {
      cancelled = true
      window.removeEventListener('resize', applyHoverEffects)
    }
  }, [])

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="main-header">

      {/* Top bar: logo + mobile menu toggle */}
      <div
        className={`scroll-header ${isScrollingDown ? 'hide-scroll-header' : 'show-scroll-header'}`}
        data-header="scroll"
        data-view="0"
      >
        <div className="logo-contact-container">
          <div data-links="Integra Magna">
            <TransitionLink href="/" label="home">
              <Image src={BlendingLogo} className="imglogo desktop-logo" alt="Integra Magna Logo" />
              <Image src={IntegraLogo} className="imglogo mobile-logo" alt="Integra Magna Logo" />
            </TransitionLink>
          </div>

          {/* Mobile only: Menu/Close toggle */}
          <div className="openButton" id="menu">
            <button
              onClick={toggleSidebar}
              className="menu_button_container"
              id="menu_btn"
              data-change={isSidebarOpen ? 'Close' : 'Menu'}
              aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
            >
              {isSidebarOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop left: full logo name */}
      <div
        className={`logo-icon-container ${isScrollingDown ? 'hide-scroll-header' : 'show-scroll-header'}`}
        data-header="scroll"
        data-view="0"
      >
        <div data-links="Integra Magna">
          <TransitionLink href="/">
            <Image src={LogoNameBlend} className="imglogo" alt="Integra Magna Logo" />
          </TransitionLink>
        </div>
      </div>

      {/* Desktop right: WhatsApp CTA */}
      <div className={`sales-cta-wrapper ${isScrollingDown ? 'hide-scroll-header' : 'show-scroll-header'}`}>
        <a
          href="https://wa.me/918085808651"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-cta"
        >
          <span className="whatsapp-icon-wrap">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.58 11.9856C14.3294 11.8588 13.1088 11.2631 12.8806 11.1781C12.6525 11.0969 12.4869 11.0544 12.3206 11.305C12.1581 11.5494 11.6794 12.1088 11.5331 12.2719C11.3869 12.435 11.2431 12.4475 10.9962 12.3369C10.7456 12.21 9.945 11.9494 8.99437 11.0969C8.25187 10.4362 7.7575 9.6225 7.61063 9.37188C7.46438 9.12438 7.59438 8.98438 7.71813 8.86063C7.83188 8.74688 7.96875 8.57438 8.09562 8.42438C8.21625 8.27437 8.255 8.17375 8.34313 8.01125C8.42438 7.83563 8.3825 7.69875 8.32062 7.575C8.25875 7.45125 7.76062 6.22437 7.5525 5.73562C7.35375 5.25062 7.14563 5.3125 6.9925 5.3125C6.84938 5.29938 6.68313 5.29938 6.5175 5.29938C6.35187 5.29938 6.08125 5.36125 5.85313 5.59875C5.625 5.84938 4.98062 6.44812 4.98062 7.65937C4.98062 8.87375 5.8725 10.0487 5.99625 10.2244C6.12313 10.3869 7.75063 12.8869 10.2475 13.9613C10.8431 14.2119 11.3056 14.3619 11.6669 14.4856C12.2625 14.6744 12.8063 14.6481 13.2356 14.5863C13.7106 14.5081 14.7069 13.9838 14.9156 13.3981C15.1275 12.8088 15.1275 12.3206 15.0656 12.21C15.0037 12.0963 14.8413 12.0344 14.5906 11.9237L14.58 11.9856ZM10.0519 18.125H10.0388C8.56063 18.125 7.09938 17.7244 5.82313 16.9756L5.52375 16.7969L2.39875 17.6106L3.23875 14.57L3.03688 14.2575C2.21166 12.9452 1.77382 11.4265 1.77375 9.87625C1.77375 5.33875 5.48813 1.6375 10.0581 1.6375C12.2719 1.6375 14.3488 2.5 15.9113 4.0625C16.682 4.82416 17.2934 5.73166 17.7097 6.73208C18.1261 7.73249 18.339 8.80579 18.3362 9.88937C18.33 14.4237 14.6187 18.125 10.055 18.125H10.0519ZM17.0994 2.87438C15.1981 1.03813 12.6981 0 10.0388 0C4.55375 0 0.0875 4.44688 0.084375 9.91188C0.084375 11.6569 0.54 13.3594 1.4125 14.8663L0 20L5.28 18.6231C6.74241 19.4125 8.37755 19.8273 10.0394 19.8306H10.0425C15.5306 19.8306 19.9969 15.3837 20 9.915C20 7.26875 18.9681 4.77812 17.0869 2.90625L17.0994 2.87438Z" fill="white"/>
            </svg>
          </span>
          <span className="whatsapp-cta-text">Let&apos;s Talk</span>
          <span className="whatsapp-cta-arrow">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.54476 0.302813C9.48005 0.238154 9.40281 0.18721 9.31826 0.152277C9.27605 0.134844 9.23233 0.121739 9.18775 0.112916L9.05172 0.0997963H2.29967C2.20821 0.0996467 2.11767 0.117376 2.03313 0.152277C1.94861 0.1872 1.87133 0.23818 1.80663 0.302813C1.74189 0.367555 1.69037 0.445378 1.65541 0.529999C1.638 0.572211 1.62484 0.615928 1.61605 0.66051L1.60293 0.796545C1.60277 0.888105 1.62113 0.979162 1.6561 1.06378C1.69106 1.14827 1.74198 1.22562 1.80663 1.29028C1.87133 1.35492 1.9486 1.40589 2.03313 1.44081C2.11767 1.47572 2.20821 1.49344 2.29967 1.49329H7.36957L0.306794 8.55608C0.176331 8.68654 0.103086 8.86392 0.103086 9.04843C0.103112 9.23289 0.176355 9.41034 0.306794 9.54078C0.43718 9.67101 0.614163 9.74374 0.798454 9.74379C0.982956 9.74379 1.16034 9.67055 1.2908 9.54009L8.35359 2.4773V2.71899L8.35428 7.5479C8.35428 7.73276 8.42795 7.91022 8.55867 8.04094C8.68938 8.17158 8.8669 8.24533 9.05172 8.24533C9.23646 8.24524 9.41412 8.17158 9.54476 8.04094C9.6752 7.91037 9.74831 7.73314 9.74846 7.54859V0.796545C9.74862 0.704986 9.73026 0.613929 9.69529 0.529308C9.66033 0.444812 9.60942 0.367476 9.54476 0.302813Z" fill="#101820" stroke="white" strokeWidth="0.2"/>
            </svg>
          </span>
        </a>
      </div>

      {/* Desktop center: pill nav */}
      <div className="nav-holder" data-header="noscroll" data-view="0">
        <ul className="navlinks">
          {navLinks.map((link, index) => (
            <li key={link.href} className="nav-item" data-links={link.label}>
              <TransitionLink href={link.href} scroll={true}>
                <span ref={(el) => (headerLink.current[index] = el)}>
                  <span>{link.label}</span>
                </span>
              </TransitionLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile full-screen sidebar (unchanged) */}
      <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-container">
          <ul className="sidebar-navlinks">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item" data-links={link.label} onClick={() => setTimeout(() => setIsSidebarOpen(false), 1000)}>
                <TransitionLink href={link.href} scroll={true}>
                  <span>{link.label}</span>
                </TransitionLink>
              </li>
            ))}
          </ul>
          <ul className="social-media-links">
            <li className="social-media"><a href="https://www.instagram.com/integra.magna/" target="_blank" rel="noopener noreferrer">Ig</a></li>
            <li className="social-media"><a href="https://www.linkedin.com/company/integramagna/" target="_blank" rel="noopener noreferrer">In</a></li>
            <li className="social-media"><a href="https://twitter.com/Integra_Magna/" target="_blank" rel="noopener noreferrer">X</a></li>
            <li className="social-media"><a href="https://www.behance.net/integra_magna/" target="_blank" rel="noopener noreferrer">Be</a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Header
