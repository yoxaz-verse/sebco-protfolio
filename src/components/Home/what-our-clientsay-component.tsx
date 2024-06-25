"use client";
import React from "react";
import { clientSays, services } from "@/data/content-data";
import ClientSaysCard from "./client-say-card";
import { useFetchData } from "@/hooks/useFetchData";
import { Titles } from "@/data/admintitle";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

const ClientSaysComponent = () => {
  const { data, loading } = useFetchData(Titles.Testimonial);
  if (loading) {
    return (
      <div className="flex  flex-col h-[100vh] justify-center items-center text-yellow-400">
        <Spinner color="warning" />
        Loading Testimonials...
      </div>
    );
  }

  else {
    const nData = Object.values(data) || [];

    const navigate = useRouter();
    return (
      <div className="flex justify-evenly items-center flex-col py-3 my-20">
        <div className="text-[#FFBD12] text-4xl pb-20 font-medium">
          What Our Client Says!
        </div>
        <div className='md:3/12 lg:w-4/12 flex justify-end items-center cursor-pointer'>
          <div onClick={() => navigate.push("/testimonals")} className='bg-[#242424] cursor-pointer h-10 w-10 rounded-full flex justify-center items-center'>
            <FaArrowRight className='text-white text-lg' />
          </div>
        </div>
        <div className="w-10/12 flex flex-wrap justify-evenly gap-10">
          {nData.splice(0, 3).map((client: any, index: number) => (
            <ClientSaysCard key={index} client={client} />
          ))}
        </div>
      </div>
    );
  }
};

export default ClientSaysComponent;
