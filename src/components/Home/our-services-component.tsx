import React from 'react'
import ServiceCard from '../Services/services-card'
import { services } from '@/data/content-data'
import { FaArrowRight } from "react-icons/fa";
import { useScreenWidth } from '@/utils/useScreenWidth';
const OurServicesComponent = () => {
const width = useScreenWidth()||0;
  return (
    <div className='bg-[#414141] flex flex-col items-center justify-center p-2 my-20'>
        <div className='flex justify-between w-full items-center'>
        <div className='w-full md:w-[60%] lg:w-7/12'><div className='text-[#FFBD12] text-3xl text-center md:text-end pt-3 font-medium'>Our Services!</div></div>
        <div className='md:3/12 lg:w-4/12 flex justify-end items-center cursor-pointer'><div className='bg-[#242424] h-10 w-10 rounded-full flex justify-center items-center'><FaArrowRight className='text-white text-lg'/></div></div>
        </div>
        <div className='w-10/12 md:w-[30%] text-center text-white pt-2 text-sm'>Over so decades of practice alongside thecreativity and drive of some of the worlds mosttalented designers and craftsman - its truly thebest of every world.</div>
        <div className='flex w-full justify-center items-center md:justify-evenly py-3 md:py-10 mt-4 md:mt-20 flex-col md:flex-row'>
        <ServiceCard service={services[0]} type='home'/>
        <ServiceCard service={services[1]} type='home' move={width>=768?'up':''}/>
        <ServiceCard service={services[7]} type='home'/>
        </div>
    </div>
  )
}

export default OurServicesComponent