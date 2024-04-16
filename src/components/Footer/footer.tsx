import { Divider } from '@nextui-org/react'
import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { ImTwitter } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <div className='bg-[#292929] flex justify-center items-center'>
        <div className='w-10/12 text-white pt-8'>
            <div className='flex'>
            <div className='w-5/12'>
              <div className='text-xl'>Logo</div>
              <div className='flex w-full pt-10'>
               <RiInstagramFill className='text-white mr-4 text-lg'/>
               <ImTwitter className='text-white mx-4 text-lg'/>
               <BsFacebook className='text-white mx-4 text-lg'/>
              </div>

            </div>
            <div className='w-7/12 flex'>
             <div className='w-1/3 flex flex-col'>
              <div className='py-3 px-2'>Work With us</div>
              <div className='py-3 px-2'>Advertise With us</div>
              <div className='py-3 px-2'>Support Us</div>
              <div className='py-3 px-2'>Business Advices</div>
             </div>
             <div className='w-1/3 flex flex-col'>
              <div className='py-3 px-2'>Private Coaching</div>
              <div className='py-3 px-2'>Our Work</div>
              <div className='py-3 px-2'>Our Commitment</div>
              <div className='py-3 px-2'>Our Team</div>
             </div>
             <div className='w-1/3 flex flex-col'>
              <div className='py-3 px-2'>About Us</div>
              <div className='py-3 px-2'>FAQs</div>
              <div className='py-3 px-2'>Report a Bug</div>
             </div>
            </div>
            </div>
            <Divider orientation='horizontal' className='text-white divider'/>
            <div className='flex py-6'>
            <div className='w-5/12'>
              <div>© 2022 Embrace, Inc All rights reserved</div>
            </div>
            <div className='w-7/12 flex'>
            <div className='w-1/3 px-2'>Terms of Use</div>
            <div className='w-1/3 px-2'>Privacy Policy</div>
</div>
</div>
        </div>
    </div>
  )
}

export default Footer