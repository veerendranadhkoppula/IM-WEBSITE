"use client";
import Image from "next/legacy/image";
import crossIcon from "@/app/assets/career/cross-icon.svg";
import careerStyles from "@/app/styles/Career.module.css";
import { useEffect, useRef } from "react";

const MultiStepForm = ({ formName, closeFormModule, formVisible }) => {
  const modalRef = useRef(null);
  // Scroll lock
  useEffect(() => {
    if (formVisible) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [formVisible]);

    useEffect(() => {
    if (!formVisible || !modalRef.current) return;

    const focusableSelectors = [
      'a[href]',
      'button',
      'textarea',
      'input',
      'select',
      'iframe',
      '[tabindex]:not([tabindex="-1"])'
    ];

    const focusableEls = modalRef.current.querySelectorAll(focusableSelectors.join(','));
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    if (firstEl) firstEl.focus();

    function handleKeyDown(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [formVisible]);

  return (
    <section className={careerStyles.popupform_s_c} onClick={closeFormModule}>
      <div
        className={careerStyles.form_container}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={careerStyles.form_close_button_c}>
          <button
            type="button"
            className={careerStyles.form_close_button}
            onClick={closeFormModule}
          >
            <Image src={crossIcon} alt="Close" />
          </button>
        </div>
        <div className={careerStyles.form_holder}>
          <iframe
            src={`${formName}?theme=light`}
            width="100%"
            style={{
              background: '#ffffff', /* Force light background */
              colorScheme: 'light' /* Force browser light UI for form controls */
            }}
            height="800px"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default MultiStepForm;