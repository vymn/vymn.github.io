"use client";

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { services } from "../../constants/constants/index";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/utils/motion";
import { backend, logo } from "../../constants/constants/assets";
import LogoCanvas from "./logoCanvas";

const ServicesCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full bg-gradient-to-br from-gray-400 p-[1px] rounded-[20px] shadow-card"
      >
        <div
          id="skills"
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-[#151030] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3
            className="text-white text-[20px] font-bold text-center
          "
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <div className="px-20">
        (https://skillicons.dev/icons?i=flutter,kotlin,java,python,vue,nodejs,git,tailwindcss,dart,js,bootstrap,firebase,linux,vscode,unreal,postman,github,gitlab,pytorch,androidstudio,eclipse,netbeans)](https://skillicons.dev)
        {/* <LogoCanvas /> */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>WHAT CAN I DO</p>
          <h2 className={styles.sectionHeadText}>Skills.</h2>
        </motion.div>
        <div className=" sm:flex-1 justify-center mt-20 flex flex-row  gap-10">
          {services.map((services, index) => (
            <ServicesCard
              key={services.title}
              index={index}
              title={services.title}
              icon={services.icon}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
