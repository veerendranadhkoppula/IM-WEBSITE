'use client'
import React, { useState, useEffect, useRef } from 'react'
import styles from './ContactPopup.module.css'
const getOrCreateSessionId = () => {
  let id = localStorage.getItem('partial_session')
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem('partial_session', id)
  }
  return id
}
const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const popupRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      setFormData({ fullName: '', company: '', email: '', phone: '', message: '' })
      setErrors({})
      setSubmitError('')
      setSubmitting(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const validateField = (name, value) => {
    if (name === 'fullName') {
      if (!value.trim()) return 'Full name is required.'
      if (value.trim().length > 50) return 'Name must be 50 characters or fewer.'
    }
    if (name === 'company') {
      if (value.trim().length > 60) return 'Company name must be 60 characters or fewer.'
    }
    if (name === 'email') {
      if (!value.trim()) return 'Work email is required.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address.'
    }
    if (name === 'phone') {
      if (value.trim()) {
        const digits = value.replace(/\D/g, '')
        if (digits.length < 7 || digits.length > 15)
          return 'Please enter a valid phone number (7–15 digits).'
      }
    }
    if (name === 'message') {
      if (value.trim().length > 500) return 'Message must be 500 characters or fewer.'
    }
    return undefined
  }

  const validate = () => {
    const fields = ['fullName', 'company', 'email', 'phone', 'message']
    const newErrors = {}
    fields.forEach((field) => {
      const error = validateField(field, formData[field])
      if (error) newErrors[field] = error
    })
    return newErrors
  }

const handleBlur = (e) => {
  const { name, value } = e.target

  // existing validation — untouched
  const error = validateField(name, value)
  setErrors((prev) => ({ ...prev, [name]: error }))

  // partial capture
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
  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'fullName') {
      if (/[0-9]/.test(value)) return
      if (value.length > 50) return
    }
    if (name === 'company') {
      if (value.length > 60) return
    }
    if (name === 'phone') {
      if (!/^[+\d\s]*$/.test(value)) return
      if (value.length > 20) return
    }
    if (name === 'message') {
      if (value.length > 500) return
    }
    setFormData({ ...formData, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  const isCtaEnabled =
    formData.fullName.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())

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
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
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
      setFormData({ fullName: '', company: '', email: '', phone: '', message: '' })
      setTimeout(() => {
        setSubmitted(false)
        onClose()
      }, 3000)
    } catch {
      setSubmitError('Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  const handleOverlayClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      onClose()
    }
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick} aria-modal="true" role="dialog">
      <div className={styles.popup} ref={popupRef}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L15 15M15 1L1 15" stroke="#101820" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className={styles.formHeading}>
          <h2 className={styles.formTitle}>
            Tell us about your brand. We'll tell
            you exactly<span className={styles.formSubtitle}> what's holding it back.</span>
          </h2>
          <p>No pitch. No agency jargon. Just honest brand advice.</p>
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
                className={`${styles.input} ${errors.company ? styles.inputError : ''}`}
                type="text"
                name="company"
                placeholder="Company/ Organization"
                value={formData.company}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.company && <span className={styles.errorMsg}>{errors.company}</span>}
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.fieldWrap}>
              <input
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                type="email"
                name="email"
                placeholder="Work Email*"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
            </div>
            <div className={styles.fieldWrap}>
              <input
                className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                type="tel"
                name="phone"
                placeholder="Contact no."
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
            </div>
          </div>
          <div className={styles.fieldWrap}>
            <textarea
              className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
              name="message"
              placeholder="Tell us about the project"
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
              <span className={styles.ctaText}>
                {submitting ? 'Sending…' : 'Claim My Free Brand Audit'}
              </span>
              <span className={styles.ctaArrow}>
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
              </span>
            </button>
          </div>
          {submitted && (
            <p style={{ marginTop: '12px', fontSize: '14px', fontWeight: 500, color: '#101820', fontFamily: 'var(--font-pretendard)', textAlign: 'center' }}>
              Message sent! We&apos;ll get back to you shortly.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default ContactPopup
