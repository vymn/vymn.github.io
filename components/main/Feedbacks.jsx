"use client";
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/utils/motion";
import { testimonials } from "../../constants/constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  // <motion.div
  //   // initial={active}
  //   variants={fadeIn("", "spring", index * 0.5, 0.75)}
  //   className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  // >
  <div className="bg-[#090325] p-10 rounded-3xl xs:w-[320px] w-full">
    <p className="text-white font-black text-[48px]">&quot;</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-[#aaa6c3] text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </div>
  // {/* </motion.div> */}
);

const Feedbacks = () => {
  return (
    <div className="  h-full w-full ">
      <div className={`mt-12 bg-[#100d25] rounded-[20px] `}>
        <div
          className={`bg-[#151030] rounded-2xl  ${styles.padding} min-h-[300px] `}
        >
          <motion.div variants={textVariant()}>
            <div className="relative flex flex-col h-full w-full py-12 pl-24">
              <div>
                <div className="sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider ">
                  what others say
                </div>
                <div className=" text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                  Testimonials.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div
          className={`-mt-20 pb-14 ${styles.paddingX} flex flex-row gap-7 px-28`}
        >
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
