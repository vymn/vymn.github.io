import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Experience from "../main/Experience";

const Experiences = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-20">
        <div id="experience" className=""></div>
        <Experience />
      </div>
      <div
        className="flex flex-col items-center justify-center py-20"
        id="projects"
      >
        <div className="relative flex flex-col h-full w-full pb-28 pl-20">
          <div>
            <div className="sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider ">
              some of what i got done already
            </div>
            <div className=" text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              Projects.
            </div>
          </div>

          {/* <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Projects Highlights
        </h1> */}
          <div className="h-full w-full flex flex-col md:flex-row gap-10 pr-10 pt-20">
            <ProjectCard
              src="/emdad.png"
              title="Emdad Digital Platform"
              description="fully managed supply chain ERP system for large-scale organisations with high functionalities for managing users, products, suppliers, inventory, sales and marketing from management to delivery."
            />
            <ProjectCard
              src="/b2b_app.png"
              title="B2B Delivery App"
              description="Bussiness to Business (B2B) Delivery App is a cross-paltfrom mobile application that helps businesses to deliver their products to customers all over the Kingdom of saudi arabia."
            />
            <ProjectCard
              src="/netflix_clone.png"
              title="NetFlix Clone"
              description="Netflix is an American subscription video on-demand over-the-top streaming service. The service primarily distributes original and acquired films and television shows from various genres."
            />
            <ProjectCard
              src="/personal_portfolio.png"
              title="My Personal Portfolio"
              description="A portfolio of a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiences;
