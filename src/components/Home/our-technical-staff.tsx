"use client";
import { ourTechnicalStaff } from "@/data/content-data";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import OurTeamCard from "../OurStaff/team-card";
import Animate from "../ReUseComponents/Animate";
import { useFetchData } from "@/hooks/useFetchData";
import { Titles } from "@/data/admintitle";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const OurTechnicalStaffComponent = () => {
  const { data, loading } = useFetchData(Titles.Our_Staff);
  const navigation = useRouter();
  if (loading) {
    return (
      <Spinner color="warning" content="Loading.." />
    )
  }
  if (!loading) {
    const staff = Object.values(data) || [];
    return (
      <div className="w-full bg-[#373737] rounded-md flex flex-col p-4 items-center my-20">
        <div className="flex justify-between items-center w-full md:w-[95%] pt-6 relative">
          <div className="text-[#FFBD12] text-2xl md:text-3xl text-start font-medium pb-6 md:pb-5 z-50 absolute w-full">
            Our Technical Staff
          </div>
          <div className="flex justify-end items-end z-10 pb-4 md:pb-5 w-full">
            <div onClick={() => navigation.push("/staff")} className="cursor-pointer bg-[#2C2B2B] h-6 w-6 md:h-10 md:w-10 rounded-full flex justify-center items-center cursor-pointer">
              <FaArrowRight className="text-white text-sm md:text-lg" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 lg:gap-10 pb-5 flex-col md:flex-row">
          {staff.splice(0, 3).map((staffdetails: any, index: any) => (
            <Animate key={index} className="w-full md:w-[30%]">
              <OurTeamCard data={staffdetails} key={index} type="home" />
            </Animate>
          ))}
        </div>
      </div>
    );
  }
};

export default OurTechnicalStaffComponent;
