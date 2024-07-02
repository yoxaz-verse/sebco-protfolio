"use client";
import { Divider } from "@nextui-org/react";
import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { ImTwitter } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { useRouter } from "next/navigation";
const Footer = () => {
  const router = useRouter();
  return (
    <div className="bg-[#292929] flex justify-center items-center flex-col md:flex-row">
      <div className="w-10/12 text-white pt-8">
        <div className="flex flex-col md:flex-row sm:pb-8">
          <div className="w-5/12">
            <img src="./logo.png" className="w-1/2" />
            <div className="flex w-full pt-10">
              <RiInstagramFill className="text-white cursor-pointer mr-4 text-lg" />
              <ImTwitter className="text-white mx-4 cursor-pointer text-lg" />
              <BsFacebook className="text-white mx-4 cursor-pointer text-lg" />
            </div>
          </div>
          <div className="w-full justify-between lg:1/2  flex">
            <div className="flex flex-col">
              <div
                className="py-3 px-2 cursor-pointer"
                onClick={() => router.push("/careers")}
              >
                Work With us
              </div>
            </div>
            <div className="">
              <div onClick={() => router.push("/services")} className="py-3 px-2 cursor-pointer">Our Services</div>
              <div onClick={() => router.push("/project")} className="py-3 px-2 cursor-pointer">Our Work</div>
              <div onClick={() => router.push("/staff")} className="py-3 px-2 cursor-pointer">Our Team</div>
            </div>
            <div className=" ">
              <div onClick={() => router.push("/about-us")} className="py-3 px-2 cursor-pointer">About Us</div>
              <div className="py-3 px-2 cursor-pointer">FAQs</div>
            </div>
          </div>
        </div>
        <Divider orientation="horizontal" className="text-white divider" />
        <div className="flex py-6">
          <div className="w-5/12">
            <div>© 2024 Embrace, Inc All rights reserved</div>
          </div>
          <div className="w-7/12 flex">
            <div className="w-1/3 px-2 cursor-pointer">Terms of Use</div>
            <div className="w-1/3 px-2 cursor-pointer">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
