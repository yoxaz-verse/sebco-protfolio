import { BlogData } from '@/data/content-data'
import { Divider } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";
const BlogDetailComponent = () => {
  return (
    <div className='flex flex-col text-white w-9/12'>
        <div className='text-2xl py-3 pt-20'>{BlogData[0].heading}</div>
        <div className='pt-2 pb-6'>{BlogData[0].description}</div>
        <Image src={BlogData[0].img} width={1920} height={800} alt='Blog Detail Image' className='w-full'/>
        <div className='flex justify-between py-3'>
            <div className='w-[40%]'>{BlogData[0].description1}</div>
            <div className='w-[40%]'>{BlogData[0].description2}</div>
        </div>
        <Divider orientation='horizontal' className='w-full mt-16 border-t-2 border-red-500 divider'/>
        <div className='flex justify-end items-end w-full py-3'>
          <div className='bg-white p-1 rounded-full mx-3 w-8 h-8 flex justify-center items-center'><FaFacebook className='text-black'/></div>
          <div className='bg-white p-1 rounded-full mx-3 w-8 h-8 flex justify-center items-center'><FaTwitter className='text-black'/></div>
          <div className='bg-white p-1 rounded-full mx-3 w-8 h-8 flex justify-center items-center'><FaInstagram className='text-black'/></div>
        </div>
    </div>
  )
}

export default BlogDetailComponent