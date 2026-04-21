"use client";

import { useState } from "react";
import styles from "@/app/components/Newsletter/Newsletter.module.css";

const NewsletterSubscribe = ({ onSuccessMessage = "Thank you for subscribing!" }) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");
  const [honeypot, setHoneypot] = useState("");
const [formStartTime] = useState(Date.now());

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear any previous error when typing
  };

const handleSubscribe = async (e) => {
  e.preventDefault();
  if (honeypot) {
    return;
  }
  if (Date.now() - formStartTime < 3000) {
    setError("Please wait a moment before submitting.");
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    setError("Please enter a valid email address.");
    return;
  }
  const blockedDomains = [
    "mailinator.com",
    "10minutemail.com",
    "tempmail.com",
    "guerrillamail.com"
  ];

  const domain = email.split("@")[1];
  if (blockedDomains.includes(domain)) {
    setError("Temporary emails are not allowed.");
    return;
  }

  const lastSubmit = localStorage.getItem("lastSubmit");
  if (lastSubmit && Date.now() - lastSubmit < 5000) {
    setError("Please wait before trying again.");
    return;
  }

  localStorage.setItem("lastSubmit", Date.now());

  try {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setIsSubscribed(true);
      setEmail("");
    } else {
      throw new Error("Subscription failed. Please try again later.");
    }
  } catch (err) {
    setError(err.message || "Something went wrong.");
  }
};

  return (
    <div className={styles.newsletterContainer}>
      {!isSubscribed ? (
        <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
          
          <h2 className={styles.heading}>Subscribe to Our Newsletter</h2>
          <p className={styles.description}>Stay updated with our latest news and offers.</p>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleInputChange}
              className={styles.emailInput}
              required
            />
            <input
              type="text"
              name="company"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: "none" }}
              autoComplete="off"
             />
            <button type="submit" className={styles.subscribeButton}>
              Subscribe
            </button>
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
        </form>
      ) : (
        <p className={styles.successMessage}>{onSuccessMessage}</p>
      )}
    </div>
  );
};

export default NewsletterSubscribe;
