"use client";
import Image from 'next/image'
import React from 'react'

const ProjectDetail = ({ data }: any) => {
  return (
    <div className='flex justify-center shadow-xl rounded-xl items-center py-10 text-white'>
      <div className='flex flex-col md:flex-row flex-wrap w-10/12 justify-between'>
        <div className='w-full md:w-1/2'>
          <Image src={data.image} width={1000} height={400} alt='project' className='h-[380px]' />
        </div>
        <div className='bg-[#2c2c2c] w-full md:w-1/2 p-4'>
          <div className='text-xl font-bold'>{data.project}</div>
          <div className='py-3'>{data.description}</div>
          <div className='py-3'><span className='font-bold text-base'>Location - </span>{data.location}</div>
          <div className='py-3'><span className='font-bold text-base'>Services Provided - </span>{data.services_provided}</div>
          <div className='py-3'><span className='font-bold text-base'>Client - </span>{data.client}</div>
          <div className='py-3'><span className='font-bold text-base'>Completion Date - </span>{data.completion_date}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
