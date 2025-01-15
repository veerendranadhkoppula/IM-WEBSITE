"use client";
import React, { useEffect, useRef, useState } from "react";
import landingStyles from "@/app/styles/LandingPage.module.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import servicesData from "@/app/components/Services/serviceList.json";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
    const LandingServiceContainer = useRef(null);
    const serviceDetailContainer = useRef(null);
    const serviceTitle = useRef(null);
    const serviceCards = useRef([]);
    const masterTimeline = useRef(gsap.timeline());

    const { services } = servicesData;
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        // Handle window resize
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 960);
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Initialize animations
    const initAnimation = (isDesktop) => {
        const timeline = masterTimeline.current;
        // timeline.clear(); // Clear any previous animations
        // ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clear existing ScrollTriggers

        if (isDesktop) {
            timeline.to(serviceDetailContainer.current, {
                scrollTrigger: {
                    trigger: serviceDetailContainer.current,
                    start: "top 20%",
                    end: "bottom 20%",
                    pin: serviceTitle.current,
                    pinSpacing: true,
                    scrub: 0.5,
                },
            });

            gsap.utils.toArray(serviceCards.current).forEach((service) => {
                gsap.set(service, { clearProps: "all" });
            });
        } else {
            timeline.to(serviceDetailContainer.current, {
                scrollTrigger: {
                    trigger: serviceDetailContainer.current,
                    start: "top 20%",
                    endTrigger: serviceCards.current[serviceCards.current.length - 1],
                    end: "top 10%",
                    pin: serviceTitle.current,
                    pinSpacing: false,
                    scrub: 0.5,
                    id: "Service",
                },
            });

            gsap.utils.toArray(serviceCards.current).forEach((service, index) => {
                timeline.fromTo(
                    service,
                    { y: service.innerHeight },
                    {
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: service,
                            start: "top 20%",
                            endTrigger: serviceCards.current[serviceCards.current.length - 1],
                            end: "top 10%",
                            scrub: true,
                            pin: true,
                            pinSpacing: false,
                            id: `card-${index}`,
                        },
                    }
                );
            });
        }
    };

    useEffect(() => {
        // Initialize animations when `isDesktop` changes
        initAnimation(isDesktop);

        // Cleanup on unmount
        return () => {
            masterTimeline.current.kill();
            // ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [isDesktop]);

    return (
        <section
            className={`${landingStyles.s_holder} f-upper-section`}
            ref={LandingServiceContainer}
        >
            <div className={landingStyles.s_titles}>
                <div className={landingStyles.s_title_c_image}>
                    <div className={landingStyles.t_overflow_holder}>
                        <h3 className={landingStyles.s_t_heading} ref={serviceTitle}>
                            Services
                        </h3>
                    </div>
                </div>
            </div>
            <div
                className={landingStyles.s_desc_container}
                ref={serviceDetailContainer}
            >
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={landingStyles.s_desc}
                        ref={(el) => (serviceCards.current[index] = el)}
                    >
                        <img
                            src={service.icon}
                            alt={service.alt}
                            className={landingStyles.s_icon}
                        />
                        <div className={landingStyles.h_list_container}>
                            <h3 className={landingStyles.t_heading}>{service.title}</h3>
                            <ul className={landingStyles.s_sec_list}>
                                {service.items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        style={item == null ? { listStyleType: "unset" } : undefined}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Service;
