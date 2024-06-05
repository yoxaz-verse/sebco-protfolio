import { HomePageWorkProps } from '@/data/interface-data'
import Responsive from '@/utils/responsive'
import Image from 'next/image'
import React from 'react'

const HomepageOurWork = ({ data }: HomePageWorkProps) => {
  return (
    <div className='flex flex-col items-center justify-center md:flex-row md:justify-between py-10'>
      <div className='md:hidden text-4xl text-[#FFBD12] font-medium pb-3'>{data.title}</div>

      <div className='w-9/12 md:w-5/12 lg:w-5/12 shadow-yellow'><Image src={data.image} alt="Architectural Plan" width={100} height={100} className='w-full h-full' /></div>
      <div className=' w-9/12 mt-5 md:mt-0 md:w-5/12 '>
        <div className='hidden md:block  text-4xl text-[#FFBD12] font-medium pb-1'>{data.title}</div>
        <div className='flex flex-col pt-3 w-full'>
          {data.methods.map((item, index) => (
            <div key={index} className='flex flex-col gap-2 '>
              <div className='text-[#E1E1E1] text-lg md:text-xl lg:text-2xl font-bold pt-2'>{item.title}</div>
              <div className='text-[#E1E1E1] text-md md:text-lg lg:text-xl w-11/12'>{item.description}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default HomepageOurWork