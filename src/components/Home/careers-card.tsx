import { CareerCardProps } from '@/data/interface-data'
import React from 'react'

const CareersCardHome = ({career}:CareerCardProps) => {
  return (
    <div key={career.title} className="flex flex-col w-full lg:w-[31%] bg-[#2C2B2B] px-6">
          <div className="text-[#E5C861] text-xl font-medium py-8">
                    {career.title}
                    </div>
                    <div className="text-white text-base pb-8 w-10/12">{career.description}</div>
    </div>
  )
}

export default CareersCardHome