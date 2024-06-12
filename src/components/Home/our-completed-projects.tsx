"use client";
import { useScreenWidth } from "@/utils/useScreenWidth";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Animate from "../ReUseComponents/Animate";
import { useFetchData } from "@/hooks/useFetchData";
import { Titles } from "@/data/admintitle";
import { Spinner } from "@nextui-org/react";

const OurCompletedProjects = () => {
  const width = useScreenWidth() || 0;
  const { data, loading } = useFetchData(Titles.CompletedProjects);
  if (loading) {
    return (
      <div className="flex  flex-col h-[100vh] justify-center items-center text-yellow-400">
        <Spinner color="warning" />
        Loading Completed Projects...
      </div>
    );
  }
  return (
    <div className="my-20">
      <div className="text-[#FFBD12] font-medium text-3xl pb-8 text-center">
        Our Completed Project!
      </div>
      {
        !loading && <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoFocus={true}
          autoPlay={true}
          emulateTouch={true}
          centerMode={true}
          showIndicators={false}
          centerSlidePercentage={width <= 640 ? 95 : 35}
        >
          {data.map((item: any, index: number) => (

            <Animate key={item.alt ?? `image${index}`} className="relative p-2">
              <Image src={item.images[0].data} height={300} width={300} alt={item.alt ?? `image${index}`} />
            </Animate>
          ))}
        </Carousel>
      }

    </div>
  );
};

export default OurCompletedProjects;
