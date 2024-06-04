import { ourApproachDetailCard } from "@/data/content-data";
import { Chip } from "@nextui-org/react";
import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
const OurApproachDetailCard = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="w-10/12 rounded-lg p-8 glass-effect">
        <div className="w-[55%] text-4xl py-3 text-white font-medium">
          {ourApproachDetailCard.title}
        </div>
        <div className="text-xl py-3 text-white ">
          {ourApproachDetailCard.details}
        </div>
        <div className="flex flex-wrap  gap-2 md:w-3/5">
          {ourApproachDetailCard.features.map((feature, index) => (
            <Chip key={index} className="bg-[#FFBD12]">
              {feature}
            </Chip>
          ))}
        </div>
        <div className="flex flex-col py-8 text-white max-w-[320px]">
          <div className="text-xl">{ourApproachDetailCard.address.label}</div>
          <div className="py-2 font-light">
            {ourApproachDetailCard.address.content}
          </div>
        </div>
        <div className="flex text-white items-center py-3">
          <FaMapMarkedAlt className="text-white mr-2" />
          Postal code: {ourApproachDetailCard.postal_code}
        </div>
        <div className="flex text-white items-center py-3">
          <FaRegCalendarAlt className="text-white mr-2" />
          Posted on: {ourApproachDetailCard.posted_on}
        </div>
      </div>
    </div>
  );
};

export default OurApproachDetailCard;
