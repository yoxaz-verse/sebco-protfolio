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
      <div className="flex flex-col h-screen justify-center items-center text-yellow-400">
        <Spinner color="warning" />
        <p>Loading Completed Projects...</p>
      </div>
    );
  } else {
    const recentProjects: any = Object.values(data) || [];
    console.log(recentProjects[0].images);
    return (
      <div className="my-20">
        <div className="text-[#FFBD12] font-medium text-3xl pb-8 text-center">
          Our Completed Projects!
        </div>

        {!loading && (
          <div className="flex justify-center items-center">
            {recentProjects.slice(0, 3).map((item: any, index: number) => (
              <Animate key={item.alt ?? `image${index}`} className="relative p-2">
                <div className="grid border w-full border-yellow-600 rounded-sm  grid-cols-2 md:grid-cols-3 gap-2 grid-rows-3">
                  {/* Corrected mapping of images */}
                  {item.images.map((i: any, key: any) => (
                    <Image
                      key={key}
                      src={i}
                      height={300}
                      width={300}
                      alt={item.alt ?? `image${key}`}
                    />
                  ))}
                </div>
              </Animate>
            ))}
          </div>
        )}
      </div>
    );
  }
};

export default OurCompletedProjects;
