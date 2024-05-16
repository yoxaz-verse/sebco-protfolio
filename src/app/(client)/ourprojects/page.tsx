"use client"
import ImagesRow from "@/components/ProjectDetail/images-row";
import ProjectDetail from "@/components/ProjectDetail/project-detail";
import {  projects } from "@/data/content-data";
import "react-toastify/dist/ReactToastify.css";

export default function ProjectsPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
        {projects.map((project, index) => (
          <div key={index} className="py-10 flex flex-col justify-center items-center">
          <div >
            <ProjectDetail data={project}/>
          </div>
           <div className=" w-10/12">
           <ImagesRow data={project.images_carousel}/>
           </div>
           </div>
        ))}
      </div>
    );
}
