import { ourApproachHome } from "@/data/content-data";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Animate from "../ReUseComponents/Animate";

const OurApproachComponentHome = () => {
  return (
<<<<<<< HEAD
    <div className='bg-gradient-to-b from-[#414141] to-[#000000] flex items-center justify-center flex-col border-none'>
=======
    <Animate className="bg-gradient-to-b from-[#414141] to-[#000000] flex items-center justify-center flex-col border-none">
>>>>>>> acee15449e4cda3b1f3d634855af49860bcb804e
      <div className="flex justify-between items-center w-9/12 pt-6">
        <div className="text-[#FFBD12] text-2xl md:text-3xl text-center font-medium pb-6 md:pb-20 z-3 w-full">
          Our Approach!
        </div>
        <div className="flex justify-center items-center md:justify-end md:items-end z-10 pb-4 md:pb-20">
          <div className="bg-[#2C2B2B] h-6 w-6 md:h-10 md:w-10 rounded-full flex justify-center items-center cursor-pointer">
            <FaArrowRight className="text-white text-sm md:text-lg" />
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className='w-10/12 lg:w-8/12 flex items-center justify-center pb-16'>
        <div className='flex flex-wrap w-full justify-between flex-col md:flex-row md:gap-5 lg:gap-10'>
          {ourApproachHome.map((approach, index) => (
            <Card key={index} className='w-full md:w-[46%] rounded-sm bg-transparent my-10 lg:my-0'>
              <Image src={approach.image} alt={approach.title} className='w-full' width={500} height={300} />
              <CardFooter className='bg-[#373737] text-white rounded-none flex flex-col h-[50%]'>
                <div className='pt-1 text-start w-full font-bold'>{approach.title}</div>
                <div>{approach.description}</div>
              </CardFooter>
            </Card>
=======
      <div className="w-10/12 lg:w-8/12 flex items-center justify-center pb-16">
        <div className="flex flex-wrap w-full justify-between flex-col md:flex-row md:gap-5 lg:gap-10">
          {ourApproachHome.map((approach, index) => (
            <Animate
              key={index}
              className="w-full md:w-[46%] rounded-sm bg-transparent"
            >
              <Card className="w-full h-full my-10 lg:my-0">
                <Image
                  src={approach.image}
                  alt={approach.title}
                  className="w-full h-[280px] md:h-[250px]"
                  width={500}
                  height={300}
                />
                <CardFooter className="bg-[#373737] text-white rounded-none flex flex-col h-[50%]">
                  <div className="pt-1 text-start w-full font-bold">
                    {approach.title}
                  </div>
                  <div>{approach.description}</div>
                </CardFooter>
              </Card>
            </Animate>
>>>>>>> acee15449e4cda3b1f3d634855af49860bcb804e
          ))}
        </div>
      </div>
    </Animate>
  );
};

<<<<<<< HEAD
export default OurApproachComponentHome
=======
export default OurApproachComponentHome;
>>>>>>> acee15449e4cda3b1f3d634855af49860bcb804e
