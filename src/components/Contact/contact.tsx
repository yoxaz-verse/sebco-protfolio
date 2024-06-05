"use client";
import { Checkbox, Input, Textarea } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { isMobile } from "react-device-detect";
import Animate from "../ReUseComponents/Animate";
const Contact = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Form submitted");
  };
  return (
    <div
      className="flex justify-center items-center flex-col pt-10 "
      style={{
        overflowX: "hidden",
      }}
    >
      <Image
        src="/contact.png"
        alt="contact"
        className="opacity-100 sm:opacity-0 md:opacity-100"
        width={1000}
        height={540}
        style={{
          width: "150vw",
          height: "max-content",
        }}
      />
      <div className="w-full flex justify-end items-end">
        <Animate className="w-full md:w-[70%]">
          <form
            className="flex flex-col w-[70%] md:w-[45%] mx-auto py-10 bg-white rounded-xl p-4 z-10 my-6 sm:my-0 sm:relative"
            onSubmit={handleSubmit}
            style={{ top: isMobile ? "0px" : "-250px" }}
          >
            <Input
              type="text"
              placeholder="Name"
              className="py-2 px-4 my-2 rounded"
              variant="bordered"
            />
            <Input
              type="email"
              placeholder="Email"
              className="py-2 px-4 my-2 rounded"
              variant="bordered"
            />
            <Input
              type="text"
              placeholder="Phone"
              className="py-2 px-4 my-2 rounded"
              variant="bordered"
            />
            <Textarea
              placeholder="Message"
              className="py-2 px-4 my-2 rounded"
              variant="bordered"
            />
            <div className="flex">
              <Checkbox className="m-2" color="warning">
                click here{" "}
                <span className="text-[#FFBD12]">terms & conditions</span>
              </Checkbox>
            </div>
            <br />
            <button
              className="bg-[#FFBD12] py-2 rounded w-3/12 mx-4 font-medium text-sm"
              type="submit"
            >
              Send
            </button>
          </form>
        </Animate>
      </div>
    </div>
  );
};


export default Contact


