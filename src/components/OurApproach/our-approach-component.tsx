import React from "react";
import OurApproachCard from "./our-approach-card";
import { ourApproach } from "@/data/content-data";
import Animate from "../ReUseComponents/Animate";
import { useDisclosure } from "@nextui-org/react";

const OurApproachComponent = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-[#FFBD12] text-4xl font-medium flex items-center justify-center w-full py-10">
        Our Approach To your Project
      </div>
      <div className="flex flex-wrap items-center justify-center w-10/12">
        {ourApproach.map((approach) => (
          <Animate key={approach.index} className="w-[100%] md:w-[49%] my-5">
            <OurApproachCard onOpen={onOpen} isOpen={isOpen} onOpenChange={onOpenChange} approach={approach} key={approach.index} />
          </Animate>
        ))}
      </div>
    </div>
  );
};

export default OurApproachComponent;
