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
import { Link } from "react-alice-carousel";

const OurTechnicalStaffComponent = () => {
  const { data, loading } = useFetchData(Titles.Our_Staff);
  const navigation = useRouter();
  if (loading) {
    return <Spinner color="warning" content="Loading.." />;
  }
  if (!loading) {
    const staff = Object.values(data) || [];
    return (
      <div className="w-full bg-[#373737] rounded-md flex flex-col p-4 items-center my-20">
        <div className="flex justify-between items-center w-full md:w-[95%] pt-6 relative">
          <Link
            href={"/staff"}
            className="text-[#FFBD12] text-2xl md:text-3xl text-start font-medium pb-6 md:pb-5 z-50 absolute w-full "
          >
            Our Technical Staff
          </Link>
          <div className="flex justify-end items-end z-10 pb-4 md:pb-5 w-full"></div>
          <div className="flex justify-center items-center md:justify-end md:items-end z-10 pb-4 md:pb-20">
            <Link
              href={"/staff"}
              className="bg-[#2C2B2B] h-6 w-6 md:h-10 md:w-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <FaArrowRight className="text-white text-sm md:text-lg" />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly w-full  gap-4  pb-5 ">
          {staff.splice(0, 5).map((staffdetails: any, index: any) => (
            <Animate key={index} className=" flex flex-wrap w-max  ">
              <OurTeamCard data={staffdetails} key={index} type="home" />
            </Animate>
          ))}
        </div>
      </div>
    );
  }
};

export default OurTechnicalStaffComponent;
