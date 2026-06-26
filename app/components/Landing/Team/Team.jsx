import React from "react";
import Link from "next/link";
import styles from "./Team.module.css";
import Image from "next/image";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import five from "./5.png";
import six from "./6.png";
import seven from "./7.png";
import eight from "./8.png";

const col1 = [one, two, three, four];
const col2 = [five, six, seven, eight];
const col3 = [two, four, six, eight];

const Team = () => {
  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>
        <div className={styles.left}>
          <div className={styles.leftone}>
            <div className={styles.leftonetop}>
              <h4>10+ years</h4>
              <h5>
                of building expertise and <br />
                growing with our clients
              </h5>
            </div>
            <div className={styles.leftonebottom}>
              <div className={styles.stats}>
                <h3>250+</h3>
                <p>Projects successfully completed in various niches</p>
              </div>
              <div className={styles.stats}>
                <h3>5.0</h3>
                <p>Average client rating on Clutch</p>
              </div>
            </div>
          </div>
          <div className={styles.lefttwo}>
            <p>
              Integra Magna is a Design and Tech First Studio that partners
              with global brands. With over 10 years of hands-on experience &
              a passionate team, we craft tailor-made solutions by combining
              design, data, & technology to build business that drives growth
              & win markets. In a world addicted to aesthetics, we chose
              depth. Every colour, typeface, layout, and interaction we craft
              is grounded in user psychology, accessibility standards,
              industry context, and competitive analysis. We don&apos;t design to
              win awards. We design to solve business problems.
            </p>
          </div>
          <Link href="/about" className={styles.leftthree}>
            <p>About Us</p>
            <div className={styles.svgmain}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.29695 1.20813C1.31168 1.38104 1.3604 1.55527 1.44033 1.72084C1.52026 1.88641 1.62983 2.04006 1.76274 2.17297C1.89565 2.30588 2.04929 2.41544 2.21486 2.49537C2.38043 2.5753 2.55466 2.62403 2.72757 2.63876L10.7008 3.33168L0.308425 13.7241C0.0834253 13.9491 -0.025963 14.2713 0.00432274 14.6198C0.0346071 14.9682 0.202085 15.3145 0.469914 15.5823C0.737743 15.8501 1.08398 16.0176 1.43247 16.0479C1.78095 16.0782 2.10313 15.9688 2.32813 15.7438L12.7205 5.35138L13.4152 13.3263C13.4455 13.6754 13.6133 14.0223 13.8816 14.2906C14.1498 14.5589 14.4967 14.7266 14.8458 14.757C15.1949 14.7873 15.5176 14.6777 15.743 14.4523C15.9684 14.2269 16.078 13.9042 16.0476 13.5551L15.0787 2.40585C15.064 2.23294 15.0152 2.05871 14.9353 1.89314C14.8554 1.72757 14.7458 1.57393 14.6129 1.44102C14.48 1.30811 14.3263 1.19854 14.1608 1.11861C13.9952 1.03868 13.821 0.989955 13.6481 0.975226L2.49879 0.0062893C2.32583 -0.00903967 2.15748 0.00991427 2.00339 0.0620654C1.8493 0.114215 1.71251 0.198536 1.60085 0.310192C1.48919 0.421848 1.40487 0.558643 1.35272 0.712733C1.30057 0.866821 1.28162 1.03517 1.29695 1.20813Z"
                  fill="#101820"
                />
              </svg>
            </div>
          </Link>
        </div>

        <div className={styles.right}>
          <div className={styles.imagecolone}>
            <div className={`${styles.track} ${styles.trackUp} ${styles.speed1}`}>
              {[...col1, ...col1].map((img, i) => (
                <div key={i} className={styles.imgBox}>
                  <Image src={img} alt="team" />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.imagecoltwo}>
            <div className={`${styles.track} ${styles.trackDown} ${styles.speed2}`}>
              {[...col2, ...col2].map((img, i) => (
                <div key={i} className={styles.imgBox}>
                  <Image src={img} alt="team" />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.imagecolthree}>
            <div className={`${styles.track} ${styles.trackUp} ${styles.speed3}`}>
              {[...col3, ...col3].map((img, i) => (
                <div key={i} className={styles.imgBox}>
                  <Image src={img} alt="team" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
