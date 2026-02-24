// import { Accordion, AccordionItem } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import accordianStyles from "./Accordian.module.css";
import Image from "next/legacy/image";
// import crossIcon from "./crossIcon"
import crossIcon from "./cross-icon.svg"; // Ensure this path is correct

const Accordiannew = ({ openFormModule }) => {
  const accordionData = [
   {
  title: "Business Development Executive",
  type: "Full-Time",
  mode: "In-office",
  key: "bde",
  content: (
    <>
      <p>
        We are looking for a Business Development Executive / Growth and Outreach Strategist
        at Integra Magna located in Indore. In this role, you will be responsible for initiating
        conversations, building meaningful connections, and identifying new business
        opportunities across global markets. This is a full-time, on-site role that requires
        you to be based in Indore, MP.
      </p>

      <br />

      <h4>- Responsibilities and Duties:</h4>

      <br />

      <ul>
        <li>
          Research, identify, and reach out to potential clients via LinkedIn,
          email campaigns, industry platforms, and professional networks.
        </li>
        <li>
          Drive outbound growth across global markets, from prospecting
          to first meaningful conversation.
        </li>
        <li>
          Execute structured and personalized outreach campaigns (no templated spam).
        </li>
        <li>
          Build, manage, and optimize a scalable lead pipeline using CRM and outreach tools.
        </li>
        <li>
          Personalize messaging based on industry, business stage, and brand context.
        </li>
        <li>
          Collaborate with strategy and design teams to prepare proposals and pitch decks.
        </li>
        <li>
          Track outreach performance, response rates, and conversions to continuously improve.
        </li>
        <li>
          Take ownership of defined lead generation and growth targets.
        </li>
        <li>
          Monitor industry trends, competitor activity, and market shifts
          to identify new opportunities.
        </li>
        <li>
          Coordinate communication across time zones for international markets.
        </li>
      </ul>

      <br />

      <h4>- Only those candidates can apply who:</h4>

      <br />

      <ul>
        <li>
          Have 2–4 years of hands-on experience in Business Development,
          Growth, Sales, or Outreach roles.
        </li>
        <li>
          Are available for full-time (in-office) role at Indore, MP.
        </li>
        <li>
          Possess strong written and verbal English communication skills.
        </li>
        <li>
          Have experience researching companies, decision-makers, and markets.
        </li>
        <li>
          Are confident in taking follow-ups and maintaining client conversations.
        </li>
        <li>
          Have experience using CRM tools and other sales software.
        </li>
      </ul>

      <br />

      <h4>- Required Experience and Qualifications:</h4>

      <br />

      <ul>
        <li>
          2–4 years of experience in business development or growth roles,
          preferably in service-based companies.
        </li>
        <li>
          Strong understanding of outbound sales, lead generation, and pipeline management.
        </li>
        <li>
          Proven ability to build structured outreach systems and improve conversion metrics.
        </li>
        <li>
          Genuine interest in brands, design, technology, and startup ecosystems.
        </li>
        <li>
          Experience working with international clients (USA, UAE, UK) is a plus.
        </li>
        <li>
          Prior experience in agencies, startups, or consulting businesses is an advantage.
        </li>
        <li>
          Ability to take ownership of growth targets and work independently.
        </li>
      </ul>

      <br />

      <button
        className={accordianStyles.apply_button}
        onClick={() => openFormModule("bde")}
      >
        <strong>APPLY NOW</strong>
      </button>
    </>
  ),
},
   {
  title: "Business Development Intern",
  type: "Internship",
  mode: "In-office",
  key: "bdei",
  content: (
    <>
      <p>
        We are looking for a Business Development Intern at Integra Magna
        located in Indore. In this role, you will assist in initiating
        conversations, building connections, and identifying new business
        opportunities for the studio. This is a Internship, on-site role that requires you to be based in Indore, MP.


      </p>

      <br />

      <h4>- Responsibilities and Duties:</h4>

      <br />

      <ul>
        <li>
          Research and shortlist potential clients and industries for outreach.
        </li>
        <li>
          Assist in LinkedIn outreach, cold emails, and lead discovery.
        </li>
        <li>
          Help maintain a clean and structured lead database.
        </li>
        <li>
          Support early conversations by drafting messages and sharing basic information.
        </li>
        <li>
          Assist the team in gathering insights for pitches, proposals, and outreach content.
        </li>
        <li>
          Track outreach progress using Google Sheets, Notion, or basic CRM tools.
        </li>
        <li>
          Stay updated on trends in design, branding, startups, and marketing.
        </li>
        <li>
          Coordinate basic communication when required across different time zones.
        </li>
      </ul>

      <br />

      <h4>- Only those candidates can apply who:</h4>

      <br />

      <ul>
        <li>
          Are available for a full-time (in-office) internship in Indore.
        </li>
        <li>
          Have 0–3 months of experience or are freshers/students seeking internship exposure.
        </li>
        <li>
          Possess strong English communication skills (written and verbal).
        </li>
        <li>
          Are comfortable researching, organizing data, and identifying opportunities.
        </li>
        <li>
          Are genuinely curious about brands, business, design, and agency growth.
        </li>
      </ul>

      <br />

      <h4>- Required Experience and Qualifications:</h4>

      <br />

      <ul>
        <li>
          Familiarity with LinkedIn, Google Workspace, or basic CRM tools.
        </li>
        <li>
          Strong organizational skills and attention to detail.
        </li>
        <li>
          Interest in lead generation, cold outreach, and B2B communication.
        </li>
        <li>
          Internships or academic projects in marketing, outreach, or business (preferred but not mandatory).
        </li>
        <li>
          Curiosity-driven mindset with willingness to learn and take initiative.
        </li>
        <li>
          Ability to work independently while collaborating with the team.
        </li>
      </ul>

      <br />

      <button
        className={accordianStyles.apply_button}
        onClick={() => openFormModule("bdei")}
      >
        <strong>APPLY NOW</strong>
      </button>
    </>
  ),
},
{
  title: "Backend Development Intern",
  type: "Internship",
  mode: "In-office",
  key: "bdi",
  content: (
    <>
      <p>
        We are looking for a Backend Development Intern at Integra Magna
        located in Indore. In this role, you will work on building scalable
        backend systems, APIs, and database architectures that power real-world
        digital products. This is a full-time internship, on-site role that
        requires you to be based in Indore, MP.
      </p>

      <br />

      <h4>- Responsibilities and Duties:</h4>

      <br />

      <ul>
        <li>
          Build and maintain RESTful APIs using Node.js and Express.
        </li>
        <li>
          Design, manage, and optimize databases using PostgreSQL or MongoDB.
        </li>
        <li>
          Develop a basic frontend (React or HTML/CSS) to display and consume data.
        </li>
        <li>
          Implement CRUD operations across multiple real-world use cases.
        </li>
        <li>
          Handle edge cases and error scenarios in API responses and data fetching.
        </li>
        <li>
          Create and manage efficient server-side routes for optimized data access.
        </li>
        <li>
          Deploy and maintain applications using platforms like Vercel, Railway, etc.
        </li>
        <li>
          Collaborate with the team to ensure code quality, scalability, and performance.
        </li>
      </ul>

      <br />

      <h4>- Only those candidates can apply who:</h4>

      <br />

      <ul>
        <li>
          Are available for a full-time (in-office) internship in Indore.
        </li>
        <li>
          Have 0–6 months of experience or equivalent hands-on backend projects.
        </li>
        <li>
          Have a strong understanding of JavaScript fundamentals.
        </li>
        <li>
          Are self-motivated and eager to learn modern backend technologies.
        </li>
      </ul>

      <br />

      <h4>- Required Experience and Qualifications:</h4>

      <br />

      <ul>
        <li>
          Strong understanding of Node.js and Express.js.
        </li>
        <li>
          Hands-on experience with PostgreSQL or MongoDB.
        </li>
        <li>
          Familiarity with React or frontend fundamentals (HTML/CSS).
        </li>
        <li>
          Clear understanding of RESTful APIs or GraphQL architecture.
        </li>
        <li>
          Basic understanding of deployment workflows and version control (Git).
        </li>
        <li>
          Bonus: Experience with WordPress, Shopify, or similar platforms.
        </li>
      </ul>

      <br />

      <button
        className={accordianStyles.apply_button}
        onClick={() => openFormModule("bdi")}
      >
        <strong>APPLY NOW</strong>
      </button>
    </>
  ),
},
{
  title: "SEO Intern",
  type: "Internship",
  mode: "In-office",
  key: "sei",
  content: (
    <>
      <p>
        We are looking for an SEO Intern at Integra Magna located in Indore.
        In this role, you will assist in improving website visibility, search
        rankings, and overall digital performance through structured SEO
        strategies. This is a full-time internship, on-site role that requires
        you to be based in Indore, MP.
      </p>

      <br />

      <h4>- Responsibilities and Duties:</h4>

      <br />

      <ul>
        <li>
          Assist in executing on-page and off-page SEO activities under guidance.
        </li>
        <li>
          Support keyword research, search intent analysis, and basic competitor audits.
        </li>
        <li>
          Help optimize website pages, blogs, and landing pages for rankings and readability.
        </li>
        <li>
          Use keyword research tools such as Google Keyword Planner, Ahrefs, or SEMrush.
        </li>
        <li>
          Assist in tracking keyword positions, indexing issues, and basic technical SEO tasks.
        </li>
        <li>
          Support internal linking, metadata optimization, and content structure improvements.
        </li>
        <li>
          Learn how to evaluate SEO performance using real performance metrics.
        </li>
        <li>
          Collaborate with content, design, and development teams to implement SEO best practices.
        </li>
        <li>
          Test, observe, and learn from SEO experiments and algorithm updates.
        </li>
      </ul>

      <br />

      <h4>- Only those candidates can apply who:</h4>

      <br />

      <ul>
        <li>
          Are available for a full-time (in-office) internship in Indore.
        </li>
        <li>
          Have 0–6 months of experience or are eager to build a career in SEO.
        </li>
        <li>
          Enjoy analyzing data, spotting patterns, and understanding search behavior.
        </li>
        <li>
          Have good knowledge of Excel or Google Sheets.
        </li>
        <li>
          Have an interest in SEO content writing and performance marketing.
        </li>
      </ul>

      <br />

      <h4>- Required Experience and Qualifications:</h4>

      <br />

      <ul>
        <li>
          Basic understanding of how search engines, users, and content connect.
        </li>
        <li>
          Familiarity with keyword research tools such as Google Keyword Planner, Ahrefs, or SEMrush.
        </li>
        <li>
          Strong attention to detail and analytical mindset.
        </li>
        <li>
          Personal blog, website, or SEO experiments (preferred but not mandatory).
        </li>
      <li>
  Students pursuing Bachelor&apos;s or Master&apos;s degree in Digital Marketing or related fields.
</li>
      </ul>

      <br />

      <button
        className={accordianStyles.apply_button}
        onClick={() => openFormModule("sei")}
      >
        <strong>APPLY NOW</strong>
      </button>
    </>
  ),
},
    // {
    //   title: "UX/UI Designer",
    //   type: "Internship",
    //   mode: "In-office",
    //   key: "uui", // Add the key for each job to map to form
    //   content: (
    //     <>
    //       <p>
    //         We are looking for a UX UI Intern at Integra Magna located in
    //         Indore. As a UX UI Intern, you will be involved in the day-to-day
    //         tasks of designing and implementing user interfaces for our clients.
    //         This is an on-site role that requires you to be based in Indore.
    //       </p>
    //       <br />
    //       <h4>- Responsibilities and Duties:</h4>
    //       <br />
    //       <ul>
    //         <li>Assist in user research and usability testing.</li>
    //         <li>Create wireframes and interactive prototypes.</li>
    //         <li>Design visual elements and maintain consistency.</li>
    //         <li>Collaborate with cross-functional teams.</li>
    //         <li>Conduct competitive analysis.</li>
    //         <li>Support ongoing projects and make revisions.</li>
    //         <li>Communicate design ideas and respond to feedback.</li>
    //         <li>Organize and manage design files.</li>
    //         <li>Participate in brainstorming sessions.</li>
    //         <li>Conduct user testing and iterate designs.</li>
    //       </ul>
    //       <br />
    //       <h4>- Only those candidates can apply who:</h4>
    //       <br />
    //       <ul>
    //         <li>Are available for full time (in-office) internship.</li>
    //         <li>Can start the internship immediately or within 15 days.</li>
    //         <li>Are available for a duration of 6 months (minimum).</li>
    //       </ul>
    //       <br />
    //       <h4>- Required Experience and Qualifications:</h4>
    //       <br />
    //       <ul>
    //         <li>
    //           Proficiency in design software tools such as Adobe Creative Suite,
    //           Figma.
    //         </li>
    //         <li>Experience with wireframing and prototyping tools.</li>
    //         <li>Knowledge of responsive design and mobile-first approach.</li>
    //       </ul>

    //       <button
    //         className={accordianStyles.apply_button}
    //         onClick={() => openFormModule("uui")}
    //       >
    //         <strong>APPLY NOW</strong>
    //       </button>
    //     </>
    //   ),
    // },
    // {
    //   title: "Graphic Designer",
    //   type: "Internship",
    //   mode: "In-office",
    //   key: "gdi", // Add the key for each job to map to form
    //   content: (
    //     <>
    //       <p>
    //         This is an internship role for a Graphic Design Internship at
    //         Integra Magna, located in Indore. As an intern, you will be
    //         responsible for assisting in the creation of visually compelling
    //         graphic designs for various projects. You will collaborate with the
    //         design team to brainstorm ideas, create mockups, and bring designs
    //         to life. This is an on-site role that offers hands-on experience in
    //         a fast-paced design environment.
    //       </p>
    //       <br />
    //       <h4>- Responsibilities and Duties:</h4>
    //       <br />
    //       <ul>
    //         <li>
    //           Good knowledge of design principles, typography, and color theory.
    //         </li>
    //         <li>
    //           Proficiency in graphic design software such as Adobe Photoshop,
    //           Illustrator, and After Effects.
    //         </li>
    //         <li>Intermediate with motion graphics and video editing.</li>
    //         <li>Creativity and a keen eye for detail.</li>
    //         <li>Strong communication and teamwork skills.</li>
    //         <li>Portfolio showcasing your graphic design work so far.</li>
    //         <li>
    //           Pursuing or recently completed a degree in graphic design or a
    //           related field.
    //         </li>
    //         <li>Participate in brainstorming sessions.</li>
    //       </ul>
    //       <br />
    //       <h4>- Only those candidates can apply who:</h4>
    //       <br />
    //       <ul>
    //         <li>Are available for full time (in-office) internship.</li>
    //         <li>Can start the internship immediately or within 15 days.</li>
    //         <li>Are available for a duration of 6 months (minimum).</li>
    //       </ul>
    //       <br />
    //       <h4>- Required Experience and Qualifications:</h4>
    //       <br />
    //       <ul>
    //         <li>
    //           Good knowledge of design principles, typography, and color theory.
    //         </li>
    //         <li>
    //           Proficiency in graphic design software such as Adobe Photoshop,
    //           Illustrator, and After Effects.
    //         </li>
    //       </ul>

    //       <button
    //         className={accordianStyles.apply_button}
    //         onClick={() => openFormModule("gdi")}
    //       >
    //         <strong>APPLY NOW</strong>
    //       </button>
    //     </>
    //   ),
    // },
    // {
    //   title: "Graphic Designer",
    //   type: "Full-Time",
    //   mode: "In-office",
    //   key: "gi", // Add the key for each job to map to form
    //   content: (
    //     <>
    //       <p>
    //         This is a full-time on-site role for a Jr. Graphic Designer. The
    //         ideal candidate will have strong creative skills and a portfolio of
    //         work which demonstrates their passion for illustrative design and
    //         motion graphics. This candidate will have experience in working with
    //         numerous different design platforms such as digital and print forms.{" "}
    //       </p>
    //       <br />
    //       <h4>- Responsibilities and Duties:</h4>
    //       <br />
    //       <ul>
    //         <li>
    //           Collaborate with the team to ensure consistency of designs across
    //           various media outlets
    //         </li>
    //         <li>Good work experience as a versatile graphic designer.</li>
    //         <li>
    //           A portfolio of branding, packaging and marketing collaterals.
    //         </li>
    //         <li>
    //           Website designing, brochure design and other print portfolio
    //         </li>
    //         <li>
    //           Create engaging and on-brand graphics for a variety of media
    //         </li>
    //         <li>
    //           Experiment with layouts to conceptualize visuals and great
    //           storytelling.
    //         </li>
    //         <li>
    //           Be comfortable working with clients directly and presenting
    //           designs.
    //         </li>
    //         <li>
    //           Maintain awareness of current industry and technology standards,
    //           social media, competitive landscape and market trends.
    //         </li>
    //       </ul>
    //       <br />
    //       <h4>- Only those candidates can apply who:</h4>
    //       <br />
    //       <ul>
    //         <li>Are available for full time (in-office).</li>
    //         <li>Can start the job immediately or within 15 days.</li>
    //         <li>Are available for a duration of 6 months (minimum).</li>
    //       </ul>
    //       <br />
    //       <h4>- Required Experience and Qualifications:</h4>
    //       <br />
    //       <ul>
    //         <li>Bachelor&apos;s degree in Graphic Design or related field.</li>
    //         <li>1-3 years of experience in Graphic Design</li>
    //         <li>Proficient in Adobe Creative Suite</li>
    //         <li>
    //           Strong communication, conceptual thinking, typography skills and
    //           design skills
    //         </li>
    //         <li>Experience in working with clients in various industries</li>
    //       </ul>

    //       <button
    //         className={accordianStyles.apply_button}
    //         onClick={() => openFormModule("gi")}
    //       >
    //         <strong>APPLY NOW</strong>
    //       </button>
    //     </>
    //   ),
    // },
    // {
    //   title: "Motion Graphic Design",
    //   type: "Internship",
    //   mode: "In-office",
    //   key: "mgdi",
    //   content: (
    //     <>
    //       <p>
    //         We are seeking a talented and enthusiastic Motion Graphic Design
    //         Intern who will assist in the development of assigned print and
    //         digital projects, including video and animated content. The role
    //         requires a creative individual with a keen eye for design,
    //         animation, and storytelling. This is a fantastic opportunity for
    //         someone looking to gain hands-on experience in motion graphics and
    //         to work closely with a team of experienced designers on a variety of
    //         projects.
    //       </p>
    //       <br />
    //       <h4>- Responsibilities and Duties:</h4>
    //       <br />
    //       <ul>
    //         <li>
    //           Stay updated with current motion design trends, tools, materials,
    //           and practices.
    //         </li>
    //         <li>
    //           Work on the company&apos;s social media projects, including
    //           creating engaging video content.
    //         </li>
    //         <li>
    //           Produce quality designs that accurately reflect a visual design
    //           language or brand guidelines.
    //         </li>
    //         <li>
    //           Contribute innovative ideas and design solutions in brainstorming
    //           sessions.
    //         </li>
    //       </ul>
    //       <br />
    //       <h4>- Only those candidates can apply who:</h4>
    //       <br />
    //       <ul>
    //         <li>Are available for a full-time (in-office) internship.</li>
    //         <li>Can start the internship immediately or within 15 days.</li>
    //         <li>Are available for a duration of 6 months.</li>
    //       </ul>
    //       <br />
    //       <h4>- Required Experience and Qualifications:</h4>
    //       <br />
    //       <ul>
    //         <li>
    //           Proficient in Adobe Photoshop, Adobe Illustrator, and especially
    //           Adobe After Effects.
    //         </li>
    //         <li>
    //           Familiarity with Adobe Premiere Pro and Lightroom is a plus.
    //         </li>
    //         <li>
    //           Foundational knowledge of typography, color, grid, and
    //           composition.
    //         </li>
    //       </ul>
    //       <button
    //         className={accordianStyles.apply_button}
    //         onClick={() => openFormModule("mgdi")}
    //       >
    //         <strong>APPLY NOW</strong>
    //       </button>
    //     </>
    //   ),
    // },
    // {
    //   title: "Social Media Manager",
    //   type: "Internship",
    //   mode: "In-office",
    //   key: "smmi",
    //   content: (
    //     <>
    //       <p>
    //         As a social media manager intern, you will play a crucial role in
    //         supporting our social media strategy across various platforms. This
    //         internship is designed for individuals passionate about digital
    //         marketing and social media, offering the opportunity to gain
    //         practical experience in content creation, campaign management, and
    //         analytics.
    //       </p>
    //       <br />
    //       <h4>- Responsibilities and Duties:</h4>
    //       <br />
    //       <ul>
    //         <li>
    //           Stay updated with current Social Media trends, tools, materials,
    //           and practices.
    //         </li>
    //         <li>
    //           Work on the company&apos;s social media projects, including
    //           creating engaging video content.
    //         </li>
    //         <li>
    //           Produce quality designs that accurately reflect a visual design
    //           language or brand guidelines.
    //         </li>
    //         <li>
    //           Contribute innovative ideas and design solutions in brainstorming
    //           sessions.
    //         </li>
    //       </ul>
    //       <br />
    //       <h4>- Only those candidates can apply who:</h4>
    //       <br />
    //       <ul>
    //         <li>Are available for a full-time (in-office) internship.</li>
    //         <li>Can start the internship immediately or within 15 days.</li>
    //         <li>Are available for a duration of 3 months (minimum).</li>
    //       </ul>
    //       <br />
    //       <h4>- Required Experience and Qualifications:</h4>
    //       <br />
    //       <ul>
    //         <li>
    //           Proficiency in social media platforms (Facebook, Twitter,
    //           Instagram, and LinkedIn).
    //         </li>
    //         <li>
    //           Basic understanding of content creation tools (e.g., Canva, Adobe
    //           Creative Suite).
    //         </li>
    //         <li>
    //           Eagerness to learn and stay updated with social media trends.
    //         </li>
    //       </ul>

    //       <button
    //         className={accordianStyles.apply_button}
    //         onClick={() => openFormModule("smmi")}
    //       >
    //         <strong>APPLY NOW</strong>
    //       </button>
    //     </>
    //   ),
    // },
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
