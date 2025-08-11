import React from "react";
import { content } from "../Content";

const Projects = () => {
  const { Projects } = content;
  return <section  id="projects">
    <div className=" px-5 pt-14 flex flex-col justify-between py-10">
      
      <div>
        <h2 className="title aos-init aos-animate" data-aos="fade-down">{Projects.title}</h2>
        <br></br>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {Projects.project_content.map((content, i) => (
          
          <div key={i} className="min-w-[14rem] duration-300 cursor-pointer
          border-2 border-slate-200 rounded-xl text-center
          _bg-bg_light_primary p-6 md:grid-cols-2 sm:grid-cols-1">
            <img src={content.image} alt="..." className="mx-auto "/>
            <h5 className="font-bold font-Poppins my-3">{content.title}</h5>
            <a href={content.link} target="_blank" rel="noopener noreferrer" className="inline-block font-bold text-gray">
              READ MORE
            </a>

          </div>

        ))}
      </div>

    </div>
  
  </section>
};

export default Projects;
