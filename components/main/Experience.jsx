"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { inView, motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import { experiences, services } from "../../constants/constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: "#ffffff18",
        borderWidth: 2,
        // borderWidth: "40px",
        // backdropFilter: blur("40px"),
        borderColor: "rgb(31 41 55 )",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "15px solid rgb(31 41 55 )" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center p-1 w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="size-[60%] object-contain rounded-full text-center"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => (
  <>
    {/* <motion.div variants={textVariant()} visible={true}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div> */}

    <div className="relative flex flex-col h-full w-full pb-28 pl-8">
      <div>
        <div className="sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider ">
          WHAT I HAVE DONE SO FAR
        </div>
        <div className=" text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Work Experience.
        </div>
      </div>
    </div>

    {/* <h2 className={styles.sectionHeadText}>what i did so far</h2> */}
    <VerticalTimeline className="">
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </VerticalTimeline>
  </>
);

export default SectionWrapper(Experience, "experience");
