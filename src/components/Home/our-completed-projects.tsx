import { ourCompletedProjects } from "@/data/content-data";
import { useScreenWidth } from "@/utils/useScreenWidth";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Animate from "../ReUseComponents/Animate";

const OurCompletedProjects = () => {
  const width = useScreenWidth() || 0;
  return (
<<<<<<< HEAD
    <div className='my-20'>
      <div className='text-[#FFBD12] font-medium text-3xl pb-8 text-center'>Our Completed Project!</div>
=======
    <div className="my-20">
      <div className="text-[#FFBD12] font-medium text-3xl pb-8 text-center">
        Our Completed Project!
      </div>
>>>>>>> acee15449e4cda3b1f3d634855af49860bcb804e
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
<<<<<<< HEAD
        swipeable={true}
        autoFocus={true}
=======
        autoFocus={true}
        autoPlay={true}
>>>>>>> acee15449e4cda3b1f3d634855af49860bcb804e
        emulateTouch={true}
        centerMode={true}
        showIndicators={false}
        centerSlidePercentage={width <= 640 ? 95 : 35}
<<<<<<< HEAD

      >
        {ourCompletedProjects.map((item: any) => (
          <div key={item.alt} className="relative p-2">
            <Image
              src={item.image}
              height={300}
              width={300}
              alt={item.alt}
              className='h-[240px] md:h-[340px] w-[220px] rounded-lg'
            />
          </div>))}
=======
      >
        {ourCompletedProjects.map((item: any) => (
          <Animate  key={item.alt} className="relative p-2">
            <Image src={item.image} height={300} width={300} alt={item.alt} />
          </Animate>
        ))}
>>>>>>> acee15449e4cda3b1f3d634855af49860bcb804e
      </Carousel>
    </div>
  );
};

export default OurCompletedProjects;
