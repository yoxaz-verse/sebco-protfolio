import { HomePageWorkProps } from '@/data/interface-data'
import Image from 'next/image'
import React from 'react'

const HomepageOurWork = ({data}:HomePageWorkProps) => {
  return (
    <div className='flex flex-col items-center justify-center md:flex-row md:justify-between my-20'>
        <div className='w-9/12 md:w-5/12 lg:w-5/12 shadow-yellow'><Image src={data.image} alt="Architectural Plan" width={100} height={100} className='w-full h-full'/></div>
        <div className=' w-9/12 mt-5 md:mt-0 md:w-5/12 '>
          <div className='text-4xl text-[#FFBD12] font-medium pb-1'>{data.title}</div>
          <div className='flex flex-col pt-3 md:w-10/12 lg:w-7/12'>
            {data.methods.map((item,index)=>(
                <div key={index} className='flex flex-col gap-2'>
                    <div className='text-[#E1E1E1] md:text-sm lg::text-base font-bold pt-2'>{item.title}</div>
                    <div className='text-[#E1E1E1] md:text-xs lg:text-sm w-11/12'>{item.description}</div>
                </div>
                ))}
          </div>
        </div>

    </div>
  )
}

export default HomepageOurWork