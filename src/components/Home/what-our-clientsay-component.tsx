"use client";
import React from "react";
import { useFetchData } from "@/hooks/useFetchData";
import { Titles } from "@/data/admintitle";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import ClientSaysCard from "./client-say-card";

const ClientSaysComponent = () => {
  const { data, loading } = useFetchData(Titles.Testimonial);
  const navigate = useRouter();

  if (loading) {
    return (
      <div className="flex flex-col h-[100vh] justify-center items-center text-yellow-400">
        <Spinner color="warning" />
        Loading Testimonials...
      </div>
    );
  }

  const nData = Object.values(data) || [];

  return (
    <div className="flex justify-evenly items-center flex-col py-3 my-20">
      <div className="text-[#FFBD12] flex flex-row items-center gap-2 pb-20 font-medium">
        <h1 className="text-4xl">What Our Client Says!</h1>
        <div
          onClick={() => navigate.push("/testimonials")}
          className="bg-[#242424] cursor-pointer h-10 w-10 rounded-full flex justify-center items-center"
        >
          <FaArrowRight className="text-white text-lg" />
        </div>
      </div>

      <div className="w-1/2 md:3/12 lg:w-4/12 flex justify-end items-center cursor-pointer">
      </div>
      <div className="w-10/12 flex flex-wrap justify-evenly gap-10">
        {nData.slice(0, 3).map((client: any, index: number) => (
          <ClientSaysCard key={index} client={client} />
        ))}
      </div>
    </div>
  );
};

export default ClientSaysComponent;
