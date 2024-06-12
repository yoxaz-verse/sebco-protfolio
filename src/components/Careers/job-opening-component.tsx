import { jobOpeningCards } from '@/data/content-data'
import React from 'react'
import JobOpeningCard from './job-opening-card-component'
import { useFetchData } from '@/hooks/useFetchData'
import { Titles } from '@/data/admintitle'
import { Spinner } from '@nextui-org/react'

const JobOpeningComponent = () => {
  const { data, loading } = useFetchData(Titles.Jobs);
  if (loading) {
    return (
      <>
        <div className='flex flex-col h-[20vh] items-center'>
          <Spinner />
          <h1>Loading..</h1>
        </div>
      </>
    )
  }

  return (
    <div className='flex flex-col gap-10 py-20'>
      <div className='text-xl font-medium text-white'>Current Job Openings</div>
      {data.map((job: any) => (
        <JobOpeningCard key={job.id} job={job} />
      ))}
    </div>
  )
}

export default JobOpeningComponent
