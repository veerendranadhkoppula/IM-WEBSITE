"use client";
import { useEffect } from 'react';
import Head from 'next/head';
import useGsapScroll from '@/app/components/hooks/useGsapScroll';
import ProjectOverview from '@/app/components/Case-Studies/ProjectOverview';
import casestudyStyles from "@/app/styles/Case-Study.module.css";
import NextMotivata from '@/app/components/Case-Studies/Next-Case-Study/NextMotivata';
import Footer from '@/app/components/Footer/FinalFooter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Ensure this is installed
import SlideUpText from '@/app/components/SlideUpText';
import AnimateImage from '@/app/components/AnimateImage';

// Import your image assets from the public folder
const imagePaths = {
    landingCircle: '/assets/images/case-studies/landing-circle.svg',
    marriottHero: '/assets/images/case-studies/marriott/marriott-case-study-hero.avif',
    marriottOne: '/assets/images/case-studies/marriott/1.avif',
    marriottTwo: '/assets/images/case-studies/marriott/2.avif',
    marriottThree: '/assets/images/case-studies/marriott/3.avif',
    marriottFour: '/assets/images/case-studies/marriott/4.avif',
    marriottFive: '/assets/images/case-studies/marriott/5.avif',
    marriottFiveAnimated: '/assets/images/case-studies/marriott/5.11.avifs',
    marriottSix: '/assets/images/case-studies/marriott/6.avif',
    marriottSeven: '/assets/images/case-studies/marriott/7.avif',
    marriottEight: '/assets/images/case-studies/marriott/8.avif',
    marriottNine: '/assets/images/case-studies/marriott/9.avif',
    marriottTen: '/assets/images/case-studies/marriott/10.avif',
    marriottEleven: '/assets/images/case-studies/marriott/11.avif',
    marriottTwelve: '/assets/images/case-studies/marriott/12.avif',
    marriottThirteen: '/assets/images/case-studies/marriott/13.avifs',
    marriottFourteen: '/assets/images/case-studies/marriott/14.avif',
    marriottFifteen: '/assets/images/case-studies/marriott/15.avif',
    marriottSixteen: '/assets/images/case-studies/marriott/16.avif',
    marriottSeventeen: '/assets/images/case-studies/marriott/17.avif',
    marriottEighteen: '/assets/images/case-studies/marriott/18.avif',
    marriottNineteen: '/assets/images/case-studies/marriott/19.avif',
    marriottTwenty: '/assets/images/case-studies/marriott/20.avif',
    marriottTwentyOne: '/assets/images/case-studies/marriott/21.avif',

};

gsap.registerPlugin(ScrollTrigger);

const Marriott = () => {
    useGsapScroll("#case_study_circular_text");
    useEffect(() => {
        document.title = 'Marriott | Packaging Design | Integra Magna'; // Set the document title
    }, []);


    return (
        <>
            <Head>
                <title>Marriott | Packaging Design | Integra Magna</title>
            </Head>

            <div
                className={`${casestudyStyles.case_Study_hero_container} ${casestudyStyles.case_Study_hero_image_boAt}`}
                style={{ backgroundImage: `url(${imagePaths.marriottHero})` }}
            >
                <div className={casestudyStyles.Case_Stydy_hero_text}>
                    <h2>
                        <SlideUpText text="Marriot&apos;s F&B offers a blend of culinary excellence and warm hospitality. From signature dining to bespoke catering, every dish is crafted with fresh, local ingredients. Whether fine dining or a casual bite, Marriott delivers unforgettable flavors, impeccable service, and an elevated experience." delay={0.9} />
                    </h2>
                    <h1>
                        <SlideUpText text="Marriott" delay={1.4} />
                    </h1>
                </div>
                <div className={casestudyStyles.challange_move}>
                    <img src={imagePaths.landingCircle} alt="" id="case_study_circular_text" />
                </div>
            </div>

            <ProjectOverview
                title="Blending Indore&apos;s Heritage with Marriott&apos;s Signature Luxury in F&B Design."
                description="For Marriott Indore, we crafted packaging, menus, and collaterals infused with the city&apos;s heritage. Inspired by Indore&apos;s iconic architecture, the designs celebrate local culture while maintaining Marriott&apos;s premium aesthetic. Every detail, from takeaway boxes to coasters, reflects a blend of elegance and tradition, elevating the brand&apos;s F&B experience."
                category="Food"
                service="Packaging Design"
            />

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.marriottOne}
                            alt="Marriott packaging box design with architectural illustrations by Integra Magna."
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p className="selectedTrans">
                Inspired by Indore&apos;s architectural marvels, the designs seamlessly integrate history with luxury. Each element, from packaging to menu design, reflects the city&apos;s rich cultural essence.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.marriottTwo}
                            alt="Elegant event invitation for Marriott Indore featuring a gourmet dining experience, celebrating heritage"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.marriottThree}
                            alt="Refined menu design for Marriott Indore featuring a curated sharing meal selection, blending gourmet flavors with a touch of local culinary inspiration."
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.marriottFour}
                            alt="Smiling waitress taking an order from a cheerful couple in a cozy, warmly lit café, creating a welcoming dining experience."
                            layout="responsive"
                            className={`${casestudyStyles.image_content} animTxt`}
                        />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.marriottFive}
                            alt="Modern living space with sleek furniture, floor-to-ceiling glass doors, and an industrial-style outdoor patio blending urban and natural elements."
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.marriottFiveAnimated}
                            alt=" A world tour of fine spirits-smoky Highland whisky, fresh New Zealand Riesling, and deep, crafted Tokyo beer."
                            layout="responsive"
                            className={`${casestudyStyles.image_content} animTxt`}
                        />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.marriottSix}
                            alt="Refined dining setup with a Marriott Indore-branded napkin, a textured note, and gold cutlery, blending luxury with cultural heritage."
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.marriottSeven}
                            alt="Marriott Indore-branded gift bag with a striking heritage-inspired design, celebrating Indore’s rich architectural legacy."
                            layout="responsive"
                            className={`${casestudyStyles.image_content} animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p className="selectedTrans">
                The intricate illustrations on the collaterals celebrate landmarks like Rajwada and Lal Bagh Palace. This thoughtful detailing enhances the Marriott Indore experience with a deep local connection.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.marriottEight}
                            alt="Marriott Indore’s artisanal donut packaging, blending rich flavors with heritage-inspired design for a unique gourmet experience"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.marriottNine}
                            alt="Heritage-themed croissant packaging from Marriott Indore, blending gourmet delights with artistic tributes to the city's iconic architecture made by Integra Magna."
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.marriottTen}
                            alt="Skilled pastry chef meticulously brushing dough in a bakery, crafting perfect golden-brown delights."
                            layout="responsive"
                            className={`${casestudyStyles.image_content} animTxt`}
                        />
                    </AnimateImage>

    
                </div>

                <div className={casestudyStyles.image_container_grid_one_third}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image_right} textAnim`}>
                        <img
                            src={imagePaths.marriottEleven}
                            alt="Marriott Indore-branded takeaway bag being handed over, blending convenience with a touch of luxury hospitality."


                            layout="responsive"
                            className={`${casestudyStyles.image_content} animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p className="selectedTrans">
                Premium materials, rich textures, and elegant typography ensure that every touchpoint feels sophisticated. The packaging and menus elevate the guest experience, making even takeaways memorable.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
              
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.marriottTwelve}
                            alt="Heritage-themed coasters showcasing Indore’s architectural landmarks, adding a touch of history to the dining experience."


                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.marriottThirteen}
                            alt="Marriott Indore’s heritage-inspired gift box packaging, featuring artistic illustrations of historic architecture, blending elegance with cultural storytelling."


                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.marriottFourteen}
                            alt="Decadent chocolate hazelnut cake slice with rich layers, topped with a glossy ganache and a single hazelnut, served on an elegant rustic plate."


                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.marriottFifteen}
                            alt="Marriott Indore’s elegantly crafted cake box, combining heritage-inspired design with a premium takeaway experience"


                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.marriottSixteen}
                            alt="Premium gift box with a heritage-inspired design, blending tradition with elegance, Marriott Indore."
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p className="selectedTrans">
                Beyond aesthetics, the designs enhance functionality. Thoughtfully structured takeout boxes and well-curated menus not only look beautiful but also improve usability, reinforcing Marriott&apos;s commitment to excellence.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.marriottSeventeen}
                            alt="Hands expertly kneading dough with precision, capturing the artistry and craftsmanship of traditional baking"


                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.marriottEighteen}
                            alt="Marriott Indore’s luxury gift packaging, featuring a sophisticated bag and canister with heritage-inspired aesthetics."


                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

            
                </div>
                <div className={casestudyStyles.image_container_grid_one_third}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image_right} textAnim`}>
                        <img
                            src={imagePaths.marriottNineteen}
                            alt="A Billboard showcasing a skilled chef in action, capturing the artistry and passion of gourmet cooking by Marriott Indore."


                            layout="responsive"
                            className={`${casestudyStyles.image_content} animTxt`}
                        />
                    </AnimateImage>
                </div>


            </section>
            <NextMotivata />



            {/* <Form /> */}
            <Footer />
        </>
    );
};

export default Marriott;
