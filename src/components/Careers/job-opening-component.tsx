import { jobOpeningCards } from '@/data/content-data'
import React from 'react'
import JobOpeningCard from './job-opening-card-component'

const JobOpeningComponent = () => {
  return (
    <div className='flex flex-col gap-10'>
    <div className='text-xl font-medium text-white'>Current Job Openings</div>
    {jobOpeningCards.map((job) => (
        <JobOpeningCard key={job.title} job={job}/>
    ))}
    </div>
  )
}

export default JobOpeningComponent