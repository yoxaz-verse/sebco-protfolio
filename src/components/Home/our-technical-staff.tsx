import { ourTechnicalStaff } from '@/data/content-data'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import OurTeamCard from '../OurStaff/team-card'

const OurTechnicalStaffComponent = () => {
  return (
    <div className='w-full bg-[#373737] rounded-md flex flex-col p-4 items-center my-20'>
       <div className="flex justify-between items-center w-full md:w-[95%] pt-6 relative">
          <div className="text-[#FFBD12] text-2xl md:text-3xl text-start font-medium pb-6 md:pb-5 z-50 absolute w-full">
            Our Technical Staff
          </div>
        <div className="flex justify-end items-end z-10 pb-4 md:pb-5 w-full">
          <div className="bg-[#2C2B2B] h-6 w-6 md:h-10 md:w-10 rounded-full flex justify-center items-center cursor-pointer">
            <FaArrowRight className="text-white text-sm md:text-lg" />
          </div>
        </div>
        </div>
        <div className='flex flex-wrap gap-4 lg:gap-10 pb-5 flex-col md:flex-row'>
        {ourTechnicalStaff.map((staffdetails, index) => (
            <div key={index} className='w-full md:w-[30%]'>
            <OurTeamCard data={staffdetails} key={index} type="home"/>
            </div>
        ))}
        </div>
    </div>
  )
}

export default OurTechnicalStaffComponent