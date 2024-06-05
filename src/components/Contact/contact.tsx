<<<<<<< HEAD
"use client"
import { Checkbox, Image, Input, Textarea } from '@nextui-org/react'
import React from 'react'
import { isMobile } from 'react-device-detect';
const Contact = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    alert('Form submitted')
  }
  return (
    <div className='flex justify-center relative items-center flex-col p-[2vw] md:mb-[40%] lg:mb-[25%]'>
      <img src='/contact.png' className='p-5 md:p-0 w-full md:w-3/4 h-[150px] md:h-full 
      ' alt='contact' />
      <div className='
        md:absolute top-[75%] left-[45%]  md:top-[65%] md:left-[45%] lg:top-[40%]  w-[90%] md:w-[50%] h-full bg-black bg-opacity-70 flex justify-center items-center
      '>
        <form className='
           bg-white p-5 rounded-md z-50 w-full
        ' >
          <div className='flex flex-col gap-5 items-center justify-center'>
            <Input
              label='Name'
              width={isMobile ? '100%' : '50%'}
              required
              placeholder='Enter your name'
            />
            <Input
              label='Email'
              width={isMobile ? '100%' : '50%'}
              required
              placeholder='Enter your email'
            />
            <Input
              label='Phone'
              width={isMobile ? '100%' : '50%'}
              required
              placeholder='Enter your phone number'
            />
            <Textarea
              label='Message'
              width={isMobile ? '100%' : '50%'}
              required
              placeholder='Enter your message'
            />
            <div className='flex gap-3'>

              <p className='text-[#FFBD12] text-sm'><span className='text-balck'>I agree to the </span> <span className='cursor:pointer'>terms and conditions</span></p>
              <Checkbox
                required
              />
            </div>
            <button className='bg-[#FFBD12] text-black py-2 px-5 rounded-md mt-5' onClick={handleSubmit}>Submit</button>
          </div>
        </form>
=======
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
>>>>>>> acee15449e4cda3b1f3d634855af49860bcb804e
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Contact
=======
export default Contact;
>>>>>>> acee15449e4cda3b1f3d634855af49860bcb804e
