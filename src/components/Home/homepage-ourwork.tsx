import { HomePageWorkProps } from "@/data/interface-data";
import Image from "next/image";
import React from "react";
import Animate from "../ReUseComponents/Animate";

const HomepageOurWork = ({ data }: HomePageWorkProps) => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:justify-between my-20">
      <div className="w-9/12 md:w-5/12 lg:w-6/12 shadow-yellow">
        <Image
          src={data.image}
          alt="Architectural Plan"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
      <div className=" w-9/12 mt-5 md:mt-0 md:w-5/12 ">
        <Animate className="text-4xl text-[#FFBD12] font-medium pb-1">
          {data.title}
        </Animate>
        <div className="flex flex-col pt-3 md:w-10/12 lg:w-full">
          {data.methods.map((item, index) => (
            <Animate key={index} className="flex flex-col gap-2">
              <div className="text-[#E1E1E1] md:text-sm lg::text-base font-bold p-0 m-0 pt-8">
                {item.title}
              </div>
              <div className="text-[#E1E1E1] p-0 m-0 md:text-xs lg:text-sm w-full">
                {item.description}
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageOurWork;
