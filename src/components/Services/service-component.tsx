import React from 'react'
import ServiceCard from './services-card'
import { services } from '@/data/content-data'
import { Inter } from 'next/font/google'
import { useFetchData } from '@/hooks/useFetchData'
import { Titles } from '@/data/admintitle'
import { Spinner } from '@nextui-org/react'
import Animate from '../ReUseComponents/Animate'

const inter = Inter({ subsets: ['latin'] })
const ServiceComponent = () => {
  const { data, loading } = useFetchData(Titles.Service);


  if (loading) {
    return (
      <div className="flex  flex-col h-[100vh] justify-center items-center text-yellow-400">
        <Spinner color="warning" />
        Loading Services...
      </div>
    );
  }
  return (
    <Animate className={`${inter.className} flex justify-center items-center flex-col py-3`}>
      <div className="text-[#FFBD12] text-2xl py-8 font-medium">Our Services</div>
      <div className="w-full px-[1vh] relative flex flex-wrap gap-10">
        {data.map((service: any) => (
          <ServiceCard type={"home"} service={service} key={service.id} />
        ))}
      </div>
      <div className='bg-[#FFBD12]/[30%] blur-2xl -bottom-[4rem]  -z-20 absolute rounded-full h-80 w-80'></div>
    </Animate>
  )
}

export default ServiceComponent
