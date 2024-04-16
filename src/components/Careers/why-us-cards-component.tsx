import { careersData } from '@/data/content-data'
import React from 'react'

const WhyUsCardsComponents = () => {
  return (
    <div className='flex flex-wrap gap-10'>
    {careersData.map((data) => (
     <div className='bg-white tex-black w-[22%] p-4' key={data.title}>
      <div className='text-lg font-bold py-2 w-10/12'>{data.title}</div>
      <div className='text-sm font-medium pb-14'>{data.description}</div>
     </div>))}
    </div> 
  )
}

export default WhyUsCardsComponents