import { homePageContent } from "@/data/content-data";
import React from "react";
import Animate from "../ReUseComponents/Animate";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const HomePageHero = () => {
  return (
    <Animate
      style={{
        backgroundImage: `url('/home/homeBanner.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
      className="w-full  flex  items-center justify-center rounded min-h-[700px] "
    >
      <div
        style={{
          backgroundColor: "#232323",
          opacity: 0.8,
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      ></div>

      <Animate
        delay={1}
        className="flex  sm:items-center justify-center flex-col text-white z-10  opacity-100 relative"
      >
        <div className="text-5xl font-medium w-[400px] md:text-center  md:w-[550px] px-5">
          WE BUILT YOUR <span className="text-[#FFBD12]">DREAM </span>
          <span className="text-[#FFBD12]">SPACES </span>INTO REALITY
        </div>
        <div className="text-[2.75rem] font-medium"></div>
        <Animate delay={2} className="text-lg sm:w-7/12 sm:text-center p-5">
          {homePageContent.description}
        </Animate>
        <Link href={"/about-us"}>
          <button className="bg-[#0000002a] hover:bg-[#0000007a] duration-300 border-1 border-white py-2 px-10 mt-20 rounded-sm">
            Know More
          </button>
        </Link>
      </Animate>
    </Animate>
  );
};

export default HomePageHero;
