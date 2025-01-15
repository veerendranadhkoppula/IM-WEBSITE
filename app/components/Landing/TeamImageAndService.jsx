import React, { useEffect, useRef,useState } from "react";
import landingStyles from "./../../styles/LandingPage.module.css";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import servicesData from '../Services/serviceList.json';
import teamImage from './teamImages.json';
import TeamImageNew from "@/app/components/Landing/TeamImage/ScrollSequence"
import Services from "@/app/components/Landing/TeamImage/ScrollSequence/Service";
gsap.registerPlugin(ScrollTrigger);

const TeamImageAndService = ({ children }) => {


  return (
    <>

      <TeamImageNew />

      {children}

      <Services />

    

    </>
  );
};

export default TeamImageAndService;
