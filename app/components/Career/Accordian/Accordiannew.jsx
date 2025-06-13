// import { Accordion, AccordionItem } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import accordianStyles from "./Accordian.module.css";
import Image from "next/legacy/image";
// import crossIcon from "./crossIcon"
import crossIcon from "./cross-icon.svg"; // Ensure this path is correct

const Accordiannew = ({ openFormModule }) => {
  const accordionData = [
    {
      title: "Sales and Marketing",
      type: "Internship",
      mode: "In-office",
      key: "sami", // Add the key for each job to map to form
      content: (
        <>
          <p>
            We are looking for a qualified sales intern to assist in various
            stages of the sales funnel, including creating awareness of new
            offerings, generating leads, and retaining customers. You&apos;ll
            gain hands-on experience working on challenging, meaningful
            projects.
          </p>
          <br />
          <h4>- Responsibilities and Duties:</h4>
          <br />
          <ul>
            <li>Research and generate lists of potential customers.</li>
            <li>
              Provide input on customer briefs, presentations, and sales
              literature.
            </li>
            <li>
              Help develop client relationships and retain existing accounts.
            </li>
            <li>Assist in evaluating new sponsorship opportunities.</li>
            <li>Learn and apply sales techniques.</li>
            <li>Maintain sales records.</li>
          </ul>
          <br />
          <h4>- Only those candidates can apply who:</h4>
          <br />
          <ul>
            <li>Are available for a full-time (In-office) internship.</li>
            <li>Can start the internship immediately or within 15 days.</li>
            <li>Are available for a duration of 3 months (minimum).</li>
          </ul>
          <br />
          <h4>- Required Experience and Qualifications:</h4>
          <br />
          <ul>
            <li>
              Basic understanding of international customers, markets &
              businesses.
            </li>
            <li>
              Some Ideas about the creative industry (animation, video, etc.)
              would be an added advantage.
            </li>
          </ul>

          <button
            className={accordianStyles.apply_button}
            onClick={() => openFormModule("sami")}
          >
            <strong>APPLY NOW</strong>
          </button>
        </>
      ),
    },
    {
      title: "Sales and Marketing",
      type: "Full-Time",
      mode: "In-office",
      key: "sam", // Add the key for each job to map to form
      content: (
        <>
          <p>
            We are seeking an energetic, enthusiastic and responsible Sales
            Specialist to join our growing team. We are a creative design studio
            based in Indore looking for someone who can join us in our journey
            to the next level. We are looking for a go-getter who actually
            brings good conversions and not just promises, who is a real
            business developer!
          </p>
          <br />
          <h4>- Responsibilities and Duties:</h4>
          <br />
          <ul>
            <li>Excellent negotiation and relationship-building skills.</li>
            <li>Writing proposals and negotiating contracts.</li>
            <li>Achieve category wise monthly Sales targets.</li>
            <li>
              Excellent command of written and spoken (business) English – other
              languages is an advantage.
            </li>
            <li>
              Sound commercial awareness, excellent organizational skills.
            </li>
            <li>Strong sense of urgency and results orientation.</li>
            <li>
              Should be a team player, working alongside people from all walks
              of life.
            </li>
            <li>
              Leadership and Influencing skills: Identity, builds, and use a
              wide network of contacts with people at all levels, internally and
              externally. Achieves a good result through a well-planned
              approach.
            </li>
          </ul>
          <br />
          <h4>- Only those candidates can apply who:</h4>
          <br />
          <ul>
            <li>Are available for a full-time (In-office) job.</li>
            <li>Can start the job immediately or within 15 days.</li>
          </ul>
          <br />
          <h4>- Required Experience and Qualifications:</h4>
          <br />
          <ul>
            <li>Strong communication & presentation skills.</li>
            <li>
              Proven experience in B2B sales or creative agency/client
              servicing.
            </li>
            <li>Ability to identify, qualify and convert leads.</li>
            <li>
              Confidence in pitching design, branding, and marketing solutions.
            </li>
            <li>Comfortable with follow-ups, meetings & closing deals.</li>
            <li>CRM knowledge.</li>
            <li>Prior agency experience is an added advantage.</li>
            <li>
              Good command over English and Hindi (bonus if other languages too).
            </li>
          </ul>

          <button
            className={accordianStyles.apply_button}
            onClick={() => openFormModule("sam")}
          >
            <strong>APPLY NOW</strong>
          </button>
        </>
      ),
    },
    {
      title: "UX/UI Designer",
      type: "Internship",
      mode: "In-office",
      key: "uui", // Add the key for each job to map to form
      content: (
        <>
          <p>
            We are looking for a UX UI Intern at Integra Magna located in
            Indore. As a UX UI Intern, you will be involved in the day-to-day
            tasks of designing and implementing user interfaces for our clients.
            This is an on-site role that requires you to be based in Indore.
          </p>
          <br />
          <h4>- Responsibilities and Duties:</h4>
          <br />
          <ul>
            <li>Assist in user research and usability testing.</li>
            <li>Create wireframes and interactive prototypes.</li>
            <li>Design visual elements and maintain consistency.</li>
            <li>Collaborate with cross-functional teams.</li>
            <li>Conduct competitive analysis.</li>
            <li>Support ongoing projects and make revisions.</li>
            <li>Communicate design ideas and respond to feedback.</li>
            <li>Organize and manage design files.</li>
            <li>Participate in brainstorming sessions.</li>
            <li>Conduct user testing and iterate designs.</li>
          </ul>
          <br />
          <h4>- Only those candidates can apply who:</h4>
          <br />
          <ul>
            <li>Are available for full time (in-office) internship.</li>
            <li>Can start the internship immediately or within 15 days.</li>
            <li>Are available for a duration of 6 months (minimum).</li>
          </ul>
          <br />
          <h4>- Required Experience and Qualifications:</h4>
          <br />
          <ul>
            <li>
              Proficiency in design software tools such as Adobe Creative Suite,
              Figma.
            </li>
            <li>Experience with wireframing and prototyping tools.</li>
            <li>Knowledge of responsive design and mobile-first approach.</li>
          </ul>

          <button
            className={accordianStyles.apply_button}
            onClick={() => openFormModule("uui")}
          >
            <strong>APPLY NOW</strong>
          </button>
        </>
      ),
    },
    {
      title: "Graphic Designer",
      type: "Internship",
      mode: "In-office",
      key: "gdi", // Add the key for each job to map to form
      content: (
        <>
          <p>
            This is an internship role for a Graphic Design Internship at
            Integra Magna, located in Indore. As an intern, you will be
            responsible for assisting in the creation of visually compelling
            graphic designs for various projects. You will collaborate with the
            design team to brainstorm ideas, create mockups, and bring designs
            to life. This is an on-site role that offers hands-on experience in
            a fast-paced design environment.
          </p>
          <br />
          <h4>- Responsibilities and Duties:</h4>
          <br />
          <ul>
            <li>
              Good knowledge of design principles, typography, and color theory.
            </li>
            <li>
              Proficiency in graphic design software such as Adobe Photoshop,
              Illustrator, and After Effects.
            </li>
            <li>Intermediate with motion graphics and video editing.</li>
            <li>Creativity and a keen eye for detail.</li>
            <li>Strong communication and teamwork skills.</li>
            <li>Portfolio showcasing your graphic design work so far.</li>
            <li>
              Pursuing or recently completed a degree in graphic design or a
              related field.
            </li>
            <li>Participate in brainstorming sessions.</li>
          </ul>
          <br />
          <h4>- Only those candidates can apply who:</h4>
          <br />
          <ul>
            <li>Are available for full time (in-office) internship.</li>
            <li>Can start the internship immediately or within 15 days.</li>
            <li>Are available for a duration of 6 months (minimum).</li>
          </ul>
          <br />
          <h4>- Required Experience and Qualifications:</h4>
          <br />
          <ul>
            <li>
              Good knowledge of design principles, typography, and color theory.
            </li>
            <li>
              Proficiency in graphic design software such as Adobe Photoshop,
              Illustrator, and After Effects.
            </li>
          </ul>

          <button
            className={accordianStyles.apply_button}
            onClick={() => openFormModule("gdi")}
          >
            <strong>APPLY NOW</strong>
          </button>
        </>
      ),
    },
    {
      title: "Graphic Designer",
      type: "Full-Time",
      mode: "In-office",
      key: "gi", // Add the key for each job to map to form
      content: (
        <>
          <p>
            This is a full-time on-site role for a Jr. Graphic Designer. The
            ideal candidate will have strong creative skills and a portfolio of
            work which demonstrates their passion for illustrative design and
            motion graphics. This candidate will have experience in working with
            numerous different design platforms such as digital and print forms.{" "}
          </p>
          <br />
          <h4>- Responsibilities and Duties:</h4>
          <br />
          <ul>
            <li>
              Collaborate with the team to ensure consistency of designs across
              various media outlets
            </li>
            <li>Good work experience as a versatile graphic designer.</li>
            <li>
              A portfolio of branding, packaging and marketing collaterals.
            </li>
            <li>
              Website designing, brochure design and other print portfolio
            </li>
            <li>
              Create engaging and on-brand graphics for a variety of media
            </li>
            <li>
              Experiment with layouts to conceptualize visuals and great
              storytelling.
            </li>
            <li>
              Be comfortable working with clients directly and presenting
              designs.
            </li>
            <li>
              Maintain awareness of current industry and technology standards,
              social media, competitive landscape and market trends.
            </li>
          </ul>
          <br />
          <h4>- Only those candidates can apply who:</h4>
          <br />
          <ul>
            <li>Are available for full time (in-office).</li>
            <li>Can start the job immediately or within 15 days.</li>
            <li>Are available for a duration of 6 months (minimum).</li>
          </ul>
          <br />
          <h4>- Required Experience and Qualifications:</h4>
          <br />
          <ul>
            <li>Bachelor&apos;s degree in Graphic Design or related field.</li>
            <li>1-3 years of experience in Graphic Design</li>
            <li>Proficient in Adobe Creative Suite</li>
            <li>
              Strong communication, conceptual thinking, typography skills and
              design skills
            </li>
            <li>Experience in working with clients in various industries</li>
          </ul>

          <button
            className={accordianStyles.apply_button}
            onClick={() => openFormModule("gi")}
          >
            <strong>APPLY NOW</strong>
          </button>
        </>
      ),
    },
    {
      title: "Motion Graphic Design",
      type: "Internship",
      mode: "In-office",
      key: "mgdi",
      content: (
        <>
          <p>
            We are seeking a talented and enthusiastic Motion Graphic Design
            Intern who will assist in the development of assigned print and
            digital projects, including video and animated content. The role
            requires a creative individual with a keen eye for design,
            animation, and storytelling. This is a fantastic opportunity for
            someone looking to gain hands-on experience in motion graphics and
            to work closely with a team of experienced designers on a variety of
            projects.
          </p>
          <br />
          <h4>- Responsibilities and Duties:</h4>
          <br />
          <ul>
            <li>
              Stay updated with current motion design trends, tools, materials,
              and practices.
            </li>
            <li>
              Work on the company&apos;s social media projects, including
              creating engaging video content.
            </li>
            <li>
              Produce quality designs that accurately reflect a visual design
              language or brand guidelines.
            </li>
            <li>
              Contribute innovative ideas and design solutions in brainstorming
              sessions.
            </li>
          </ul>
          <br />
          <h4>- Only those candidates can apply who:</h4>
          <br />
          <ul>
            <li>Are available for a full-time (in-office) internship.</li>
            <li>Can start the internship immediately or within 15 days.</li>
            <li>Are available for a duration of 6 months.</li>
          </ul>
          <br />
          <h4>- Required Experience and Qualifications:</h4>
          <br />
          <ul>
            <li>
              Proficient in Adobe Photoshop, Adobe Illustrator, and especially
              Adobe After Effects.
            </li>
            <li>
              Familiarity with Adobe Premiere Pro and Lightroom is a plus.
            </li>
            <li>
              Foundational knowledge of typography, color, grid, and
              composition.
            </li>
          </ul>
          <button
            className={accordianStyles.apply_button}
            onClick={() => openFormModule("mgdi")}
          >
            <strong>APPLY NOW</strong>
          </button>
        </>
      ),
    },
    {
      title: "Social Media Manager",
      type: "Internship",
      mode: "In-office",
      key: "smmi",
      content: (
        <>
          <p>
            As a social media manager intern, you will play a crucial role in
            supporting our social media strategy across various platforms. This
            internship is designed for individuals passionate about digital
            marketing and social media, offering the opportunity to gain
            practical experience in content creation, campaign management, and
            analytics.
          </p>
          <br />
          <h4>- Responsibilities and Duties:</h4>
          <br />
          <ul>
            <li>
              Stay updated with current Social Media trends, tools, materials,
              and practices.
            </li>
            <li>
              Work on the company&apos;s social media projects, including
              creating engaging video content.
            </li>
            <li>
              Produce quality designs that accurately reflect a visual design
              language or brand guidelines.
            </li>
            <li>
              Contribute innovative ideas and design solutions in brainstorming
              sessions.
            </li>
          </ul>
          <br />
          <h4>- Only those candidates can apply who:</h4>
          <br />
          <ul>
            <li>Are available for a full-time (in-office) internship.</li>
            <li>Can start the internship immediately or within 15 days.</li>
            <li>Are available for a duration of 3 months (minimum).</li>
          </ul>
          <br />
          <h4>- Required Experience and Qualifications:</h4>
          <br />
          <ul>
            <li>
              Proficiency in social media platforms (Facebook, Twitter,
              Instagram, and LinkedIn).
            </li>
            <li>
              Basic understanding of content creation tools (e.g., Canva, Adobe
              Creative Suite).
            </li>
            <li>
              Eagerness to learn and stay updated with social media trends.
            </li>
          </ul>

          <button
            className={accordianStyles.apply_button}
            onClick={() => openFormModule("smmi")}
          >
            <strong>APPLY NOW</strong>
          </button>
        </>
      ),
    },
    // {
    //   title: "Web Developer",
    //   type: "Internship",
    //   mode: "In-office",
    //   key: "wdi",
    //   content: (
    //     <>
    //       <p>
    //         As a Web Developer Intern, you will play a crucial role in
    //         supporting our web development projects and building stunning
    //         digital experiences. This internship is designed for individuals
    //         passionate about web development, offering the opportunity to gain
    //         practical experience in front-end and back-end development,
    //         debugging, and creating responsive websites.
    //       </p>
    //       <br />
    //       <h4>- Responsibilities and Duties:</h4>
    //       <br />
    //       <ul>
    //         <li>
    //           Develop and maintain responsive, user-friendly websites and web
    //           applications.
    //         </li>
    //         <li>
    //           Collaborate with the team to design, code, and debug modern web
    //           solutions.
    //         </li>
    //         <li>Work on both front-end and back-end development tasks.</li>
    //         <li>
    //           Contribute innovative ideas and solutions to enhance user
    //           experience and functionality.
    //         </li>
    //         <li>
    //           Develop and maintain responsive, user-friendly websites and web
    //           applications.
    //         </li>
    //         <li>
    //           Collaborate with the team to design, code, and debug modern web
    //           solutions.
    //         </li>
    //         <li>Work on both front-end and back-end development tasks.</li>
    //         <li>
    //           Contribute innovative ideas and solutions to enhance user
    //           experience and functionality.
    //         </li>
    //       </ul>
    //       <br />
    //       <h4>- Only those candidates can apply who:</h4>
    //       <br />
    //       <ul>
    //         <li>Are available for a full-time (in-office) internship.</li>
    //         <li>Can start the internship immediately or within 15 days.</li>
    //         <li>Are available for a duration of 6 months (minimum).</li>
    //       </ul>
    //       <br />
    //       <h4>- Required Experience and Qualifications:</h4>
    //       <br />
    //       <ul>
    //         <li>
    //           Proficiency in HTML, CSS, and JavaScript (core front-end skills).
    //         </li>
    //         <li>
    //           Familiarity with React or Next.js for modern web applications.
    //         </li>
    //         <li>Basic understanding of Node.js for back-end development.</li>
    //         <li>
    //           Proficiency in building responsive websites that adapt seamlessly
    //           across devices and screen sizes.
    //         </li>
    //         <li>
    //           Strong debugging skills to identify and resolve code issues
    //           efficiently.
    //         </li>
    //       </ul>

    //       <button
    //         className={accordianStyles.apply_button}
    //         onClick={() => openFormModule("wdi")}
    //       >
    //         <strong>APPLY NOW</strong>
    //       </button>
    //     </>
    //   ),
    // },
  ];

  return (
    //     < Accordion >
    //     <AccordionItem key="1" aria-label="Accordion 1" title={
    //         <div style={{ display: "flex", width: "100%" }}>
    //             <h3 className={accordianStyles.setname}>{item.title}</h3>
    //             <h3 className={accordianStyles.settype}>{item.type}</h3>
    //             <h3 className={accordianStyles.setmode}>{item.mode}</h3>
    //             <Image
    //       src={crossIcon}
    //       alt="Cross Icon"
    //       className={
    //         activeIndex === index
    //           ? accordianStyles.cross_icon_active
    //           : accordianStyles.cross_icon
    //       }
    //       width={30}
    //       height={30}
    //     />
    //         </div>
    //     }>
    //         {defaultContent}
    //     </AccordionItem>
    //     <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
    //         {defaultContent}
    //     </AccordionItem>
    //     <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
    //         {defaultContent}
    //     </AccordionItem>
    // </Accordion >
    <Accordion className={accordianStyles.accordion_container} variant="light">
      {accordionData.map((item, index) => (
        <AccordionItem
          className={accordianStyles.accordion_item}
          key={index}
          aria-label={`Accordion ${index}`}
          title={
            <div className={accordianStyles.header}>
              <h3 className={accordianStyles.setname}>{item.title}</h3>
              <h3 className={accordianStyles.settype}>{item.type}</h3>
              <h3 className={accordianStyles.setmode}>{item.mode}</h3>
              {/* <Image
                                src={crossIcon}
                                alt="Cross Icon"

                                width={30}
                                height={30}
                            /> */}
            </div>
          }
          indicator={
            <Image
              src={crossIcon}
              alt="Cross Icon"
              className={accordianStyles.cross_icon}
              width={30}
              height={30}
            />
          }
        >
          <div className={accordianStyles.set_content}>{item.content}</div>
        </AccordionItem>
      ))}
    </Accordion>

    // (<Accordion className={accordianStyles.accordion_container}>
    //     {accordionData.map((item, index) => (
    //         <AccordionItem
    //             className={accordianStyles.accordion_item}
    //             key={index}

    //             aria-label={`Accordion ${index}`}
    //             title={
    //                 <div className={accordianStyles.header}>
    //                     <h3 className={accordianStyles.setname}>{item.title}</h3>
    //                     <h3 className={accordianStyles.settype}>{item.type}</h3>
    //                     <h3 className={accordianStyles.setmode}>{item.mode}</h3>
    //                     {/* <Image
    //                         src={crossIcon}
    //                         alt="Cross Icon"

    //                         width={30}
    //                         height={30}
    //                     /> */}
    //                 </div>
    //             }
    //             indicator={
    //                 <Image
    //                     src={crossIcon}
    //                     alt="Cross Icon"
    //                     className={accordianStyles.cross_icon}
    //                     width={30}
    //                     height={30}
    //                 />}
    //         >
    //             <div className={accordianStyles.set_content}>{item.content}</div>
    //         </AccordionItem>
    //     ))}
    // </Accordion>)
  );
};

export default Accordiannew;
