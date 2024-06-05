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
      <div className='
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8
        '>
        {postsData.map((post) => (
          <div key={post.read} className='w-full  flex justify-center items-center py-4 md:py-0'>
            <RecentPostCard data={post} key={post.read} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestComponent