import { JobOpeningCardProps } from '@/data/interface-data'
import Image from 'next/image'
import React from 'react'
import ApplyJobModal from '../ApplyJobModal/apply-job-modal'
import Animate from '../ReUseComponents/Animate'

const JobOpeningCard = ({ job }: JobOpeningCardProps) => {
  return (
    <Animate className='flex flex-col md:flex-row bg-[#252525] text-white border-solid border-[#363636] border-1'>
      <div className="w-full md:w-1/4">
        <Image src={job.image} width={200} height={200} layout="responsive" className="object-cover" alt={job.alt} />
      </div>
      <div className='w-full px-8 py-5'>
        <div className='w-9/12 px-8'>
          <div className='py-2'>{job.position}</div>
          <div><span className='text-white font-medium'>Location:</span> {job.location}</div>
          <div className='text-sm py-3'>{job.description}</div>
          <ApplyJobModal id={job.id} />
        </div>
      </div>
    </Animate>
  )
}

export default JobOpeningCard
