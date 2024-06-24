"use client";
import React from 'react'
import { Spinner } from '@nextui-org/react';
import ServiceCard from '../Services/services-card'
import { FaArrowRight } from "react-icons/fa";
import { useScreenWidth } from '@/utils/useScreenWidth';
import { useFetchData } from '@/hooks/useFetchData';
import { Titles } from '@/data/admintitle';
import { useRouter } from 'next/navigation';

const OurServicesComponent = () => {
  const width = useScreenWidth() || 0;

  const { data, loading } = useFetchData(Titles.Service);
  if (loading) {
    return (
      <div className="flex  flex-col h-[100vh] justify-center items-center text-yellow-400">
        <Spinner color="warning" />
        Loading Services...
      </div>
    );
  }
  const navigate = useRouter();
  return (
    <div className='bg-[#414141] flex flex-col items-center justify-center p-2 my-20'>
      <div className='flex justify-between w-full items-center'>
        <div className='w-full md:w-[60%] lg:w-7/12'>
          <div className='text-[#FFBD12] text-3xl text-center md:text-end pt-3 font-medium'>Our Services!</div></div>
        <div className='md:3/12 lg:w-4/12 flex justify-end items-center cursor-pointer'>
          <div onClick={() => navigate.push("/services")} className='bg-[#242424] cursor-pointer h-10 w-10 rounded-full flex justify-center items-center'>
            <FaArrowRight className='text-white text-lg' />
          </div>
        </div>
      </div>
      <div className='w-10/12 md:w-[30%] text-center text-white pt-2 text-sm'>Over so decades of practice alongside thecreativity and drive of some of the worlds mosttalented designers and craftsman - its truly thebest of every world.</div>
      <div className='flex w-full justify-center items-center md:justify-evenly py-3 md:py-10 mt-4 md:mt-20 flex-col md:flex-row'>
        {Object.values(data).splice(0, 3).map((service: any) => (
          <ServiceCard type={"home"} service={service} key={service.id} />
        ))}
      </div>
    </div>
  )
}

export default OurServicesComponent
