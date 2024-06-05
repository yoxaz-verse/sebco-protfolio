import React from "react";
import OurApproachCard from "./our-approach-card";
import { ourApproach } from "@/data/content-data";
import Animate from "../ReUseComponents/Animate";

const OurApproachComponent = () => {
  return (
<<<<<<< HEAD
    <div className='flex items-center justify-center flex-col'>
      <h1 className='text-[#FFBD12] text-4xl font-medium flex items-center justify-center w-full py-10'>Our Approach To your Project</h1>
      <div className='grid grid-cols-0 grid-rows-2 md:grid-rows-0 md:grid-cols-2  items-center justify-center w-full'>
        {ourApproach.map((approach) => (
          <div key={approach.index} className='w-full py-5'>
            <OurApproachCard approach={approach} key={approach.index} />
          </div>
        ))}
      </div>
    </div >
  )
}

export default OurApproachComponent
=======
    <div className="flex items-center justify-center flex-col">
      <div className="text-[#FFBD12] text-4xl font-medium flex items-center justify-center w-full py-10">
        Our Approach To your Project
      </div>
      <div className="flex flex-wrap items-center justify-center w-10/12">
        {ourApproach.map((approach) => (
          <Animate key={approach.index} className="w-[100%] md:w-[49%] my-5">
            <OurApproachCard approach={approach} key={approach.index} />
          </Animate>
        ))}
      </div>
    </div>
  );
};

export default OurApproachComponent;
>>>>>>> acee15449e4cda3b1f3d634855af49860bcb804e
