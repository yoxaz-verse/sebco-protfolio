import { JobOpeningCardProps } from '@/data/interface-data'
import Image from 'next/image'
import React from 'react'

const JobOpeningCard = ({job}:JobOpeningCardProps) => {
  return (
    <div className='flex bg-[#252525] text-white border-solid border-[#363636] border-1'>
     <div className='w-3/12'><Image src={job.image} width={200} height={200} className="w-full" alt={job.alt}/></div>
     <div className='w-8/12 px-8 py-5'>
        <div className='w-9/12 px-8'>
            <div className='py-2'>{job.title}</div>
            <div><span className='text-white font-medium'>Location:</span> {job.location}</div>
            <div className='text-sm py-3'>{job.description}</div>
            <button className='bg-[#FFBD12] rounded py-2 px-4 text-black' type='submit'>Apply Here</button>
        </div>
        
     </div>
    </div>
  )
}

export default JobOpeningCard