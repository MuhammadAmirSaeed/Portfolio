import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { Styles } from "../Styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/Motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full ">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="object-contain w-16 h-16"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={Styles.sectionSubText}>Introduction</p>
        <h2 className={Styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Amir Saeed, recently Graduated from GCUF . With a strong passion
        for technology and programming, I have immersed myself in the world of
        web development, specializing in <b> Mern Stack</b> development using the <b>React Js</b> <b>Next Js</b>
        framework. Throughout my academic journey, I have maintained a
        commendable CGPA , showcasing my commitment to excellence and my ability
        to balance both theoretical knowledge and practical application. My
        coursework has provided me with a solid foundation in various computer
        science concepts, which I continuously strive to apply in real-world
        scenarios.
        <br /> As a skilled software developer, I specialize in JavaScript, with
        expertise in React, Node.js, and Express.js frameworks. I collaborate
        closely with clients to create efficient, scalable, and user-friendly
        solutions. Let's work together to bring your ideas to life!
      </motion.p> */}
      
      <motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className="mt-4 text-secondary text-[17px]  leading-[30px]"
>
  ✅ 4+ years experience FullStack Developer with a demonstrated history of working in the computer software industry. Skilled in MERN Stack, Next.js, Node.js, React.js, JavaScript, TypeScript, Tailwind CSS, Material UI, Bootstrap, HTML, and CSS.<br />
  
  I have been creating highly scalable and easily maintainable applications for my clients.<br /><br />

   <div className="text-purple-600 text-[22px]"> ✅ My approach to creating high-quality software is always based on the following standards:</div>
  ⚡ I always follow clean code (MVVM) principles.<br />
  ⚡ A responsive code ensures a good user experience.<br />
  ⚡ Using version control systems effectively is one of my strengths.<br />
  ⚡ Each step of the development process is committed separately.<br />
  ⚡ Creating CI and CD pipelines to improve the development experience.<br /><br />

   <div className="text-purple-600 text-[22px]"> ✅ 𝗠𝘆 𝘀𝗸𝗶𝗹𝗹𝘀 𝗮𝗻𝗱 𝗲𝘅𝗽𝗲𝗿𝘁𝗶𝘀𝗲 𝗿𝗲𝗹𝗲𝘃𝗮𝗻𝘁 𝘁𝗼 𝗳𝘂𝗹𝗹-𝘀𝘁𝗮𝗰𝗸 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁:</div>
  ✔ <strong className="text-blue-500" >Languages and Frameworks:</strong> ReactJS, NodeJS, ExpressJS, NextJS, Redux, TypeScript, JavaScript, MERN Stack.<br />
  ✔ <strong className="text-blue-500">Relational Databases:</strong> PostgreSQL, MySQL.<br />
  ✔ <strong className="text-blue-500">Non-Relational Databases:</strong> MongoDB.<br />
  ✔ <strong className="text-blue-500">E-commerce Platforms:</strong> Shopify.<br />
  ✔ <strong className="text-blue-500">Authentication:</strong> Auth0, JWT.<br />
  ✔ <strong className="text-blue-500">Testing Tools:</strong> Mocha, Chai, Jasmine, Jest, Karma.<br />
  ✔ <strong className="text-blue-500">Payment Gateways:</strong> Stripe, PayPal.<br />
  ✔ <strong className="text-blue-500">Social Integrations:</strong> Google Plus, Facebook, and Twitter Integration.<br />
  ✔ <strong className="text-blue-500">Locations:</strong> Google Maps.<br /><br />

    <div className="text-purple-600 text-[22px]"> ✅ 𝗙𝘂𝗹𝗹 𝘀𝘁𝗮𝗰𝗸 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗱𝗲𝗹𝗶𝘃𝗲𝗿𝗮𝗯𝗹𝗲𝘀:</div>
  • Web Application Development<br />
  • Web Design<br />
  • Website Redesign<br />
  • API Integration<br />
  • CRM<br />
  • Front-End Development<br />
  • Desktop Applications<br />
  • eCommerce Website<br />
  • Project Analysis<br />
  • Responsive Design<br />
  • Web Programming<br />
  • API Development<br />
</motion.p>



      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
