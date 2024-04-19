import { sebcoCareers } from "@/data/content-data";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CareersCardHome from "./careers-card";

const SebcoCareers = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between w-full items-center">
          <div className="text-[#FFBD12] text-xl md:text-5xl text-center font-bold pb-4 md:pb-10 z-3 w-full">
            Welcome to SEBCO Careers
          </div>
        <div className="flex justify-center items-center md:justify-end md:items-end z-10 pb-3 md:pb-8">
          <div className="bg-[#2C2B2B] h-6 w-6 md:h-10 md:w-10 rounded-full flex justify-center items-center cursor-pointer">
            <FaArrowRight className="text-white text-sm md:text-lg" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-9 flex-col md:flex-row">
        {sebcoCareers.map((career, index) => (
            <CareersCardHome career={career} key={index}/>
                  
          ))}
      </div>
    </div>
  );
};

export default SebcoCareers;
