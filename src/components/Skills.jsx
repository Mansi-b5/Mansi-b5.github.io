import React from "react";
import Marquee from "react-fast-marquee";
import {content} from "../Content";


const Skills = () => {
  const { skills } = content;
  return <section>
      <section className="min-h-fit bg-bg_light_primary px-5" id="skills">
        <ins className="adsbygoogle" data-ad-client="ca-pub-5330892218225177" data-ad-slot="4496439745" data-ad-format="auto" data-full-width-responsive="true"></ins>
        <div className="md:container px-5 py-8"> </div>
        <h2 className="title aos-init aos-animate ml-5" data-aos="fade-down">{skills.title}</h2>

        <div className="flex justify-center my-2 lg:py-3">
          <div className="flex  items-center">
            <span className=" mr-2 w-24 h-[2px] bg-[#1a1443]"></span>
            <h4 className="subtitle aos-init aos-animate" data-aos="fade-down"> Frontend Skills </h4>
            <span className="subtitle aos-init aos-animate" data-aos="fade-down">
            </span>
            <span className=" ml-2 w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <div className="w-full my-2">
          <Marquee
            gradient={false}
            speed={70}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
          {skills.skills_content_front.map((skill, id) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <img
                      src={skill.logo}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">
                    {skill.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </Marquee>
        </div>

        <div className="flex justify-center my-2 lg:py-3">
          <div className="flex  items-center">
            <span className=" mr-2 w-24 h-[2px] bg-[#1a1443]"></span>
            <h4 className="subtitle aos-init aos-animate" data-aos="fade-down"> Backend & Databases </h4>
            <span className="subtitle aos-init aos-animate" data-aos="fade-down">
            </span>
            <span className=" ml-2 w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <div className="w-full my-2">
          <Marquee
            gradient={false}
            speed={70}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="right"
          >
          {skills.skills_content_back.map((skill, id) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <img
                      src={skill.logo}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">
                    {skill.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </Marquee>
        </div>


        <div className="flex justify-center my-2 lg:py-3">
          <div className="flex  items-center">
            <span className=" mr-2 w-24 h-[2px] bg-[#1a1443]"></span>
            <h4 className="subtitle aos-init aos-animate" data-aos="fade-down"> Tools & Platforms </h4>
            <span className="subtitle aos-init aos-animate" data-aos="fade-down">
            </span>
            <span className=" ml-2 w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>


        <div className="w-full my-2">
          <Marquee
            gradient={false}
            speed={70}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
          {skills.skills_content_tools.map((skill, id) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <img
                      src={skill.logo}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">
                    {skill.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </Marquee>
        </div>
      </section>
    </section>
};

export default Skills;
