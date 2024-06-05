import { homePageContent } from '@/data/content-data'
import React from 'react'

const HomePageHero = () => {
  return (
    <div style={{ backgroundImage: `url('/home/home.png')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }} className='w-full rounded h-screen md:h-[50vh] lg:h-screen'>
      <div style={{ backgroundColor: '#232323', opacity: 0.3, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1 }}></div>
      <div className='flex h-full w-full items-center justify-center flex-col text-white z-10 opacity-100 relative'>
        <div className='text-2xl md:text-4xl lg:text-5xl font-medium py-2'>Transforming <span className='text-[#FFBD12]'>Spaces</span></div>
        <div className='text-2xl md:text-4xl lg:text-5xl  font-medium'><span className='text-[#FFBD12]'>Building</span> Tommorows</div>
        <div className='text-sm  md:text-baselg:text-lg  w-7/12 text-center py-5'>
          {homePageContent.description}
        </div>
        <button className='bg-[#828080] border-1 border-white py-2 px-10 mt-20 rounded-sm'>Know More</button>
      </div>
    </div>

  )
}

export default HomePageHero
