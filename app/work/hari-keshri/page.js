"use client";
import { useEffect } from 'react';
import Head from 'next/head';
import useGsapScroll from '@/app/components/hooks/useGsapScroll';
import ProjectOverview from '@/app/components/Case-Studies/ProjectOverview';
import casestudyStyles from "@/app/styles/Case-Study.module.css";
import NextBoat from '@/app/components/Case-Studies/Next-Case-Study/NextBoat';
import Footer from '@/app/components/Footer/FinalFooter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Ensure this is installed
import SlideUpText from '@/app/components/SlideUpText';
import AnimateImage from '@/app/components/AnimateImage';

// Import your image assets from the public folder
const imagePaths = {
    hariKeshriHero: '/assets/images/case-studies/hari-keshri/hari-keshri-case-study-hero.png',
    landingCircle: '/assets/images/case-studies/landing-circle.svg',
    hariKeshriOne: '/assets/images/case-studies/hari-keshri/1.webp',
    hariKeshriTwo: '/assets/images/case-studies/hari-keshri/2.webp',
    hariKeshriThree: '/assets/images/case-studies/hari-keshri/3.webp',
    hariKeshriFour: '/assets/images/case-studies/hari-keshri/4.webp',
    hariKeshriFive: '/assets/images/case-studies/hari-keshri/5.webp',
    hariKeshriSix: '/assets/images/case-studies/hari-keshri/6.webp',
    hariKeshriSeven: '/assets/images/case-studies/hari-keshri/7.webp',
    hariKeshriEight: '/assets/images/case-studies/hari-keshri/8.webp',
    hariKeshriNine: '/assets/images/case-studies/hari-keshri/9.webp',
    hariKeshriTen: '/assets/images/case-studies/hari-keshri/10.webp',
    hariKeshriEleven: '/assets/images/case-studies/hari-keshri/11.webp',
    hariKeshriTwelve: '/assets/images/case-studies/hari-keshri/12.webp',
    hariKeshriThirteen: '/assets/images/case-studies/hari-keshri/13.webp',
    hariKeshriFourteen: '/assets/images/case-studies/hari-keshri/14.webp',
    hariKeshriFifteen: '/assets/images/case-studies/hari-keshri/15.webp',
    hariKeshriSixteen: '/assets/images/case-studies/hari-keshri/16.webp',
    hariKeshriSeventeen: '/assets/images/case-studies/hari-keshri/17.webp',
    hariKeshriEighteen: '/assets/images/case-studies/hari-keshri/18.webp',
};

gsap.registerPlugin(ScrollTrigger);

const BOAT = () => {
    useGsapScroll("#case_study_circular_text");
    useEffect(() => {
        document.title = 'Hari Keshri | Strategy | Integra Magna'; // Set the document title
    }, []);


    return (
        <>
            <Head>
                <title>Hari Keshri | Strategy | Integra Magna</title>
            </Head>

            <div
                className={`${casestudyStyles.case_Study_hero_container} ${casestudyStyles.case_Study_hero_image_boAt}`}
                style={{ backgroundImage: `url(${imagePaths.hariKeshriHero})` }}
            >
                <div className={casestudyStyles.Case_Stydy_hero_text}>
                    <h2>
                        <SlideUpText text="Hari Keshri is a trusted name in the edible oil industry, known for its premium rice bran oil. With a strong emphasis on quality and innovation, the brand is dedicated to delivering health-conscious products that blend tradition with modern nutritional standards. It reflects a commitment to sustainable practices and customer well-being." delay={0.9} />
                    </h2>
                    <h1>
                        <SlideUpText text="Hari Keshri" delay={1.4} />
                    </h1>
                </div>
                <div className={casestudyStyles.challange_move}>
                    <img src={imagePaths.landingCircle} alt="" id="case_study_circular_text" />
                </div>
            </div>

            <ProjectOverview
                title="Nurturing Health and Purity with Every Drop at Hari Keshri."
                description="For brand Identity, we crafted a design transformation that seamlessly fused heritage with modernity, positioning the brand as a leader in the edible oil industry. This holistic approach revitalized its packaging and visual identity, creating a compelling narrative of health and purity that resonated with contemporary, health-conscious consumers. By balancing tradition and innovation, we elevated Hari Keshri into a brand that not only honors its legacy but also commands attention in today’s competitive market."
                category="Food"
                service="Branding, Packaging Design"
            />

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.hariKeshriOne}
                            alt="boAt watch feature wall mural board marketing design"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p className="selectedTrans">
                    Tasked with embodying Hari Keshri&apos;s commitment to health, authenticity, and a farm-to-table philosophy, we faced the complex challenge of standing out in a wellness-focused market. The goal was to create a brand identity that felt as genuine and wholesome as the products themselves.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.hariKeshriTwo}
                            alt="boAt watch feature wall mural board marketing design"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.hariKeshriEighteen}
                            alt="A man wearing boAt watch near a water marketing design"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.hariKeshriThree}
                            alt="3D visuals of Lunar Eclipse boat brand for marketing"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} animTxt`}
                        />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.hariKeshriFour}
                            alt="boAt watch feature wall mural board marketing design"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p className="selectedTrans">
                    Through strategic use of modern typography, color palettes, and design elements, we ensured their packaging stood out in a cluttered retail environment. This visual refresh directly enhanced customer attraction and boosted first-time purchases.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.hariKeshriFive}
                            alt="boAt watch feature wall mural board marketing design"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.hariKeshriSix}
                            alt="A man wearing boAt watch near a water marketing design"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.hariKeshriSeven}
                            alt="3D visuals of Lunar Eclipse boat brand for marketing"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.hariKeshriEight}
                            alt="A man wearing boAt watch near a water marketing design"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.hariKeshriNine}
                            alt="3D visuals of Lunar Eclipse boat brand for marketing"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} animTxt`}
                        />
                    </AnimateImage>
                </div>

                <div className={casestudyStyles.image_container_grid_one_third}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image_right} textAnim`}>
                        <img
                            src={imagePaths.hariKeshriTen}
                            alt="weather, stopwatch, alarm, and countdown feature of the watch for meta ads"


                            layout="responsive"
                            className={`${casestudyStyles.image_content} animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p className="selectedTrans">
                    From educational posts highlighting the health benefits of rice bran oil to captivating product promotions, we created a consistent and impactful digital narrative. Also by aligning social media designs with the new brand identity, we ensured a seamless transition of Hari Keshri&apos;s values into the digital space.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.hariKeshriEleven}
                            alt="Experience the world boAt campaign on a billboard"


                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.hariKeshriTwelve}
                            alt="boAt watch features a bus stand kiosk"


                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.hariKeshriThirteen}
                            alt="boAt watch features a metro board"


                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                </div>
            </section>

            <section className={casestudyStyles.text_Heading_Only}>
                <p className="selectedTrans">
                    Practical updates, such as easy-to-read labels, ergonomic design elements, and user-focused packaging formats, addressed consumer convenience, resulting in increased satisfaction and repeat purchases.
                </p>
            </section>

            <section className={casestudyStyles.image_conten_section}>
                <div className={casestudyStyles.image_container_grid}>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.hariKeshriFourteen}
                            alt="boAt watch features a bus stand kiosk"


                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.double_image} textAnim`}>
                        <img
                            src={imagePaths.hariKeshriFifteen}
                            alt="boAt watch features a metro board"


                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>

                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.hariKeshriSixteen}
                            alt="boAt watch feature wall mural board marketing design"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                    <AnimateImage className={`${casestudyStyles.contaitner_fex} ${casestudyStyles.single_image} textAnim`}>
                        <img
                            src={imagePaths.hariKeshriSeventeen}
                            alt="boAt watch feature wall mural board marketing design"
                            layout="responsive"
                            className={`${casestudyStyles.image_content} lazy animTxt`}
                        />
                    </AnimateImage>
                </div>


            </section>
            <NextBoat />



            {/* <Form /> */}
            <Footer />
        </>
    );
};

export default BOAT;
