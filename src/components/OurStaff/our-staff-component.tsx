import {teamData } from '@/data/content-data'
import React from 'react'
import OurTeamCard from './team-card'

const OurStaffComponent = () => {
  return (
    <div className='py-20 px-8 bg-white rounded-lg w-[80%]'>
        <div className='text-3xl font-medium py-3'>Meet Our Team</div>
        <div className='flex'>
        {teamData.map((data, index) => (
            <OurTeamCard data={data} key={index}/>
        ))}
        </div>
    </div>
  )
}

export default OurStaffComponent