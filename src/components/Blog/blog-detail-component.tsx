import { blogData } from '@/data/content-data'
import { RecentNewsCardProps, RecentPostCardProps } from '@/data/interface-data';
import { Divider } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const BlogDetailComponent = () => {
  return (
    <div className='flex flex-col text-white w-9/12'>
      <div className='text-2xl py-3 pt-20'>{blogData[0].heading}</div>
      <div className='pt-2 pb-6'>{blogData[0].description}</div>
      <Image src={blogData[0].img} width={1920} height={800} alt='Blog Detail Image' className='w-full' />
      <div className='flex justify-between py-3'>
        <div className='w-[40%]'>{blogData[0].description1}</div>
        <div className='w-[40%]'>{blogData[0].description2}</div>
      </div>
      <Divider orientation='horizontal' className='w-full mt-16 border-t-2 border-red-500 divider' />
      <div className='flex justify-end items-end w-full py-3'>
        <div className='bg-white p-1 rounded-full mx-3 w-8 h-8 flex justify-center items-center'><FaFacebook className='text-black' /></div>
        <div className='bg-white p-1 rounded-full mx-3 w-8 h-8 flex justify-center items-center'><FaTwitter className='text-black' /></div>
        <div className='bg-white p-1 rounded-full mx-3 w-8 h-8 flex justify-center items-center'><FaInstagram className='text-black' /></div>
      </div>
    </div>
  )
}
const BlogDetailComponentById = ({ data }: RecentPostCardProps) => {
  return (
    <div className='flex flex-col text-white w-9/12'>
      <div className='text-2xl font-bold py-3 pt-20'>{data.heading}</div>
      <Image src={data.image} width={1920}
        height={800}
        alt='Blog Detail Image' className='w-full' />
      <div className='w-full p-3'>{data.description}</div>
      <Divider orientation='horizontal' className='w-full mt-16 border-t-2 border-red-500 divider' />
    </div>
  )
}

const NewsDetailComponentById = ({ data }: RecentNewsCardProps) => {
  return (
    <div className='flex flex-col text-white w-9/12'>
      <div className='text-2xl font-bold py-3 pt-20'>{data.title}</div>
      <Image src={data.image} width={800}
        height={800}
        alt='Blog Detail Image' className='w-full' />
      <div className='w-full p-3'>{data.description}</div>
      <Divider orientation='horizontal' className='w-full mt-16 border-t-2 border-red-500 divider' />
    </div>
  )
}
export { BlogDetailComponent, BlogDetailComponentById, NewsDetailComponentById }
