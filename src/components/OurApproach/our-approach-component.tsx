import React from 'react'
import OurApproachCard from './our-approach-card'
import { ourApproach } from '@/data/content-data'

const OurApproachComponent = () => {
  return (
    <div className='w-10/12 flex items-center justify-center flex-col'>
     <div className='text-[#FFBD12] text-3xl font-medium flex items-center justify-center w-full py-10'>Our Approach To your Project</div>
      <div className='flex flex-wrap items-center justify-center w-10/12'>
      {ourApproach.map((approach) => (
        <div key={approach.index} className='w-[49%] my-5'>
        <OurApproachCard approach={approach} key={approach.index}/>
        </div>
      ))}
    </div>
    </div>
  )
}

export default OurApproachComponent