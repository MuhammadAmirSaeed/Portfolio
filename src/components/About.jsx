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
          className="w-16 h-16 object-contain"
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

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Amir Saeed, a dedicated 8th-semester Computer Science student at
        Government College University Faisalabad (GCUF). With a strong passion
        for technology and programming, I have immersed myself in the world of
        web development, specializing in front-end development using the React
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
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
