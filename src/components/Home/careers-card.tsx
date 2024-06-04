import { CareerCardProps } from "@/data/interface-data";
import React from "react";
import Animate from "../ReUseComponents/Animate";

const CareersCardHome = ({ career }: CareerCardProps) => {
  return (
    <Animate
      key={career.title}
      className="flex flex-col w-full lg:w-[31%] bg-[#2C2B2B] px-6"
    >
      <div className="text-[#E5C861] text-xl font-medium py-8">
        {career.title}
      </div>
      <div className="text-white text-base pb-8 w-10/12">
        {career.description}
      </div>
    </Animate>
  );
};

export default CareersCardHome;
