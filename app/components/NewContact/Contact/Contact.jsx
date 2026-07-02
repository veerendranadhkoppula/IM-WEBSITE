'use client'
import React, { useState } from 'react'
import styles from './Contact.module.css'
import Image from 'next/image'
import Misbah from './founder.png'
import Logo1 from './1.png'
import Logo2 from './2.png'
import Logo3 from './3.png'
import Logo4 from './4.png'

const logos = [
  { src: Logo1, alt: 'Brand Logo 1' },
  { src: Logo2, alt: 'Brand Logo 2' },
  { src: Logo3, alt: 'Brand Logo 3' },
  { src: Logo4, alt: 'Brand Logo 4' },
]

const CheckSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_c" maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
      <path d="M12 22C13.3135 22.0016 14.6143 21.7437 15.8278 21.2411C17.0412 20.7384 18.1434 20.0009 19.071 19.071C20.0009 18.1434 20.7384 17.0412 21.2411 15.8278C21.7437 14.6143 22.0016 13.3135 22 12C22.0016 10.6866 21.7437 9.38572 21.2411 8.17225C20.7384 6.95878 20.0009 5.85659 19.071 4.92901C18.1434 3.99909 17.0412 3.26162 15.8278 2.75897C14.6143 2.25631 13.3135 1.99839 12 2.00001C10.6866 1.99839 9.38572 2.25631 8.17225 2.75897C6.95878 3.26162 5.85659 3.99909 4.92901 4.92901C3.99909 5.85659 3.26162 6.95878 2.75897 8.17225C2.25631 9.38572 1.99839 10.6866 2.00001 12C1.99839 13.3135 2.25631 14.6143 2.75897 15.8278C3.26162 17.0412 3.99909 18.1434 4.92901 19.071C5.85659 20.0009 6.95878 20.7384 8.17225 21.2411C9.38572 21.7437 10.6866 22.0016 12 22Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M8 12L11 15L17 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </mask>
    <g mask="url(#mask0_c)"><path d="M0 0H24V24H0V0Z" fill="#101820"/></g>
  </svg>
)

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const validateField = (name, value) => {
    if (name === 'fullName') {
      if (!value.trim()) return 'Full name is required.'
      if (value.trim().length > 50) return 'Name must be 50 characters or fewer.'
    }
    if (name === 'email') {
      if (!value.trim()) return 'Email address is required.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address.'
    }
    if (name === 'message') {
      if (value.trim().length > 500) return 'Message must be 500 characters or fewer.'
    }
    return undefined
  }

  const validate = () => {
    const fields = ['fullName', 'email', 'message']
    const newErrors = {}
    fields.forEach((field) => {
      const error = validateField(field, formData[field])
      if (error) newErrors[field] = error
    })
    return newErrors
  }

  const getOrCreateSessionId = () => {
    let id = localStorage.getItem('partial_session')
    if (!id) {
      id = crypto.randomUUID()
      localStorage.setItem('partial_session', id)
    }
    return id
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
    if (value.trim()) {
      fetch('/api/contact-partial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: getOrCreateSessionId(),
          field: name,
          value,
          allFields: { ...formData, [name]: value },
        }),
      }).catch(() => {})
    }
  }

  const isCtaEnabled =
    formData.fullName.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'fullName') {
      if (/[0-9]/.test(value)) return
      if (value.length > 50) return
    }
    if (name === 'message') {
      if (value.length > 500) return
    }
    setFormData({ ...formData, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitting(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      const sessionId = localStorage.getItem('partial_session')
      if (sessionId) {
        fetch(`/api/contact-partial?sessionId=${encodeURIComponent(sessionId)}`, { method: 'DELETE' }).catch(() => {})
      }
      localStorage.removeItem('partial_session')
      setSubmitting(false)
      setSubmitted(true)
      setFormData({ fullName: '', email: '', projectType: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    } catch {
      setSubmitError('Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <div className={styles.left}>
            <div className={styles.leftOne}>
              <div className={styles.leftOneTop}>
                <h3>
                  Let&apos;s build something<br />
                  that <span className={styles.actually}>actually</span> matters
                </h3>
              </div>
              <div className={styles.list}>
                <div className={styles.item}>
                  <CheckSVG />
                  <p>We&apos;ll get back to you within 24 hours</p>
                </div>
                <div className={styles.item}>
                  <CheckSVG />
                  <p>NDA available for sensitive projects</p>
                </div>
                <div className={styles.item}>
                  <CheckSVG />
                  <p>Work directly with designers and product experts</p>
                </div>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.lefttwo}>
              <div className={styles.lefttwoTop}>
                <div className={styles.lefttwoTopleft}>
                  <Image src={Misbah} alt="founder" width={80} height={80} style={{ borderRadius: '50%', objectFit: 'cover' }} />
                </div>
                <div className={styles.lefttwoTopright}>
                  <div className={styles.lefttwoToprighttop}>
                    <h2>Misbah Qureshi</h2>
                  </div>
                  <div className={styles.founderslinks}>
                    <h4>Founder & CEO</h4>
                    <div className={styles.founderline}></div>
                    <a href="https://www.linkedin.com/in/misbahqr/" target="_blank" rel="noopener noreferrer" className={styles.linkedin}>
                      <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3053 10.7242V17.4918H14.3817V11.1772C14.3817 9.59058 13.814 8.50835 12.3943 8.50835C11.3102 8.50835 10.6646 9.23839 10.3812 9.94368C10.2775 10.1959 10.2509 10.5472 10.2509 10.9003V17.4918H6.32554C6.32554 17.4918 6.37874 6.79787 6.32554 5.68904H10.2509V7.36192L10.2252 7.40044H10.2509V7.36192C10.7719 6.55942 11.7028 5.41207 13.7874 5.41207C16.3692 5.41207 18.3053 7.09961 18.3053 10.7242ZM2.22041 0C0.878624 0 0 0.880458 0 2.03881C0 3.17148 0.852944 4.07854 2.16905 4.07854H2.19473C3.56402 4.07854 4.41421 3.17148 4.41421 2.03881C4.39037 0.880458 3.56402 0 2.22041 0ZM0.232955 17.4918H4.1565V5.68904H0.232955V17.4918Z" fill="black"/>
                      </svg>
                      <h4>Connect on LinkedIn</h4>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.lefttwoBottom}>
                <p>Trusted by forward-thinking brands</p>
                <div className={styles.logos}>
                  {logos.map((logo, i) => (
                    <Image key={i} src={logo.src} alt={logo.alt} className={styles.logoImage} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightWrapper}>
            <div className={styles.formHeadingMobile}>
              <h2 className={styles.formTitle}>
                Tell us what you&apos;re building
              </h2>
              <span className={styles.formSubtitle}>we&apos;ll take it further</span>
            </div>

            <div className={styles.rightContainer}>
              <div className={styles.formHeadingDesktop}>
                <h2 className={styles.formTitle}>
                  Tell us what you&apos;re building
                </h2>
                <span className={styles.formSubtitle}>we&apos;ll take it further</span>
              </div>
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.fieldWrap}>
                    <input
                      className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                      type="text"
                      name="fullName"
                      placeholder="Full Name*"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.fullName && <span className={styles.errorMsg}>{errors.fullName}</span>}
                  </div>
                  <div className={styles.fieldWrap}>
                    <input
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      type="email"
                      name="email"
                      placeholder="Email Address*"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                  </div>
                </div>
                <div className={`${styles.fieldWrap} ${styles.fullRow}`}>
                  <input
                    className={styles.input}
                    type="text"
                    name="projectType"
                    placeholder="Project type"
                    value={formData.projectType}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.fieldWrap}>
                  <textarea
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    name="message"
                    placeholder="About the Project*"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className={styles.charCount}>{formData.message.length}/500</div>
                  {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                </div>
                {submitError && <span className={styles.errorMsg}>{submitError}</span>}
                <div className={styles.ctaRow}>
                  <button type="submit" className={`${styles.cta} ${!isCtaEnabled ? styles.ctaMuted : ''}`} disabled={submitting || submitted || !isCtaEnabled}>
                    <span className={styles.ctaText}>{submitting ? 'Sending…' : 'Start a conversation'}</span>
                    <span className={styles.ctaArrow}>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.20984 1.2511L13.7433 1.2511L13.7433 12.7845M12.9424 2.05203L1.24872 13.7457" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                </div>
                {submitted && (
                  <p className={styles.successMsg}>Message sent! We&apos;ll get back to you within 24 hours.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
