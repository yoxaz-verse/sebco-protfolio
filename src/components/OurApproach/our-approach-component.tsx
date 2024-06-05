import React from 'react'
import OurApproachCard from './our-approach-card'
import { ourApproach } from '@/data/content-data'

const OurApproachComponent = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <h1 className='text-[#FFBD12] text-4xl font-medium flex items-center justify-center w-full py-10'>Our Approach To your Project</h1>
      <div className='grid grid-cols-0 grid-rows-2 md:grid-rows-0 md:grid-cols-2  items-center justify-center w-full'>
        {ourApproach.map((approach) => (
          <div key={approach.index} className='w-full py-5'>
            <OurApproachCard approach={approach} key={approach.index} />
          </div>
        ))}
      </div>
    </div >
  )
}

export default OurApproachComponent
