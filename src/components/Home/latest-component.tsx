import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import RecentPostCard from '../Blog/recent-post-card'
import { postsData } from '@/data/content-data'

const LatestComponent = () => {
  return (
    <div className='flex flex-col my-20'>
         <div className="flex justify-between items-center w-full md:w-full pt-6 relative">
          <div className="text-white text-2xl md:text-3xl text-start font-medium pb-6 md:pb-5 z-50 absolute w-full">
            Latest
          </div>
        <div className="flex justify-end items-end z-10 pb-4 md:pb-5 w-full">
          <div className="bg-[#2C2B2B] h-6 w-6 md:h-10 md:w-10 rounded-full flex justify-center items-center cursor-pointer">
            <FaArrowRight className="text-white text-sm md:text-lg" />
          </div>
        </div>
        </div>
        <div className='flex gap-4 flex-col md:flex-row'>
     {postsData.map((post) => (
        <div key={post.read} className='w-full md:w-[47%] lg:w-[33%] flex justify-center items-center py-4 md:py-0'>
        <RecentPostCard data={post} key={post.read}/>
        </div>
     ))}
    </div>
    </div>
  )
}

export default LatestComponent