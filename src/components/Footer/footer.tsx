"use client"
import { Divider } from '@nextui-org/react'
import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { ImTwitter } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { useRouter } from 'next/navigation';
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const Footer = () => {
  const router = useRouter()
  return (
    <>
      <div className={`bg-[#292929] ${inter.className} p-10 w-full flex flex-col md:flex-row my-3`}>
        <div className='flex flex-row  w-full justify-around'>
          <div className='flex flex-col gap-2 text-white'>
            <div className='text-xl'>Logo</div>
            <div className='flex w-full pt-10 gap-4'>
              <RiInstagramFill size={30} className='text-white  text-lg' />
              <ImTwitter size={30} className='text-white  text-lg' />
              <BsFacebook size={30} className='text-white  text-lg' />
            </div>
          </div>
          <div className='flex flex-row gap-[2vw] text-white w-1/2'>
            <div className='flex flex-col'>
              <div className='py-3 px-2 cursor-pointer'>Work With us</div>
              <div className='py-3 px-2 cursor-pointer'>Advertise With us</div>
              <div className='py-3 px-2 cursor-pointer'>Support Us</div>
              <div className='py-3 px-2 cursor-pointer'>Business Advices</div>
            </div>
            <div className='flex flex-col'>
              <div className='py-3 px-2 cursor-pointer'>Private Coaching</div>
              <div className='py-3 px-2 cursor-pointer'>Our Work</div>
              <div className='py-3 px-2 cursor-pointer'>Our Commitment</div>
              <div className='py-3 px-2 cursor-pointer'>Our Team</div>
            </div>
            <div className='flex flex-col'>
              <div className='py-3 px-2 cursor-pointer'>About Us</div>
              <div className='py-3 px-2 cursor-pointer'>FAQs</div>
              <div className='py-3 px-2 cursor-pointer'>Report a Bug</div>
            </div>
          </div>
        </div>
      </div>
      <Divider orientation='horizontal' className='text-white divider' />
      <div className='grid grid-cols-3 gap-[2vh] p-[3vw] w-full text-white'>
        <p>© 2024 Embrace, Inc All rights reserved</p>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
      </div>
    </>
  )
}

export default Footer
