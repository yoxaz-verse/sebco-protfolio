import { careersData } from '@/data/content-data'
import React from 'react'

const WhyUsCardsComponents = () => {
  return (
    <div className='flex flex-col z-20 md:flex-row gap-10 justify-between w-full'>
      {careersData.map((data) => (
        <div className='bg-white tex-black w-full p-4' key={data.title}>
          <h3 className='text-lg font-bold py-2 w-full'>{data.title}</h3>
          <h1 className='text-md font-medium pb-14'>{data.description}</h1>
        </div>
      ))}
    </div>
  )
}

export default WhyUsCardsComponents
