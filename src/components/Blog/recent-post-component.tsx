import { PostsData } from '@/data/content-data'
import React from 'react'
import RecentPostCard from './recent-post-card'

const RecentPostComponent = () => {
  return (
    <>
    <div className='text-white text-2xl flex justify-start items-start w-[81%] py-4'>Recent Posts</div>
    <div className='flex gap-4'>
     {PostsData.map((post) => (
        <RecentPostCard data={post} key={post.read}/>
     ))}
    </div>
    </>
  )
}

export default RecentPostComponent