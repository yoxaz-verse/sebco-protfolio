"use client"
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { RecentNewsPostCard } from "../Blog/recent-post-card";
import { postsData } from "@/data/content-data";
import Animate from "../ReUseComponents/Animate";
import { useFetchData } from "@/hooks/useFetchData";
import { Titles } from "@/data/admintitle";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

const LatestComponent = () => {
  const { data, loading } = useFetchData(Titles.LatestNew);
  if (loading) {
    return (
      <div className="flex  flex-col h-[100vh] justify-center items-center text-yellow-400">
        <Spinner color="warning" />
        Loading Latest News...
      </div>
    );
  }

  const router = useRouter();
  const handleNavigate = () => {
    router.push("/latest-news");
  };
  return (
    <div className="flex flex-col my-20">
      <div className="flex justify-between items-center w-full md:w-full pt-6 relative">
        <div className="text-white text-2xl md:text-3xl text-start font-medium pb-6 md:pb-5 z-50 absolute w-full">
          Latest News
        </div>
        <div className="flex justify-end items-end z-10 pb-4 md:pb-5 w-full">
        </div>
        <div className="flex justify-center items-center md:justify-end md:items-end z-10 pb-4 md:pb-20">
          <div onClick={() => router.push("/approach")} className="bg-[#2C2B2B] h-6 w-6 md:h-10 md:w-10 rounded-full flex justify-center items-center cursor-pointer">
            <FaArrowRight className="text-white text-sm md:text-lg" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        {data.map((post: any, index: number) => (
          <Animate
            key={index}
            className="w-full md:w-[47%] lg:w-[33%] flex justify-center items-center py-4 md:py-0"
          >
            <RecentNewsPostCard data={post} key={index} />
          </Animate>
        ))}
      </div>
    </div>
  );
};

export default LatestComponent;
