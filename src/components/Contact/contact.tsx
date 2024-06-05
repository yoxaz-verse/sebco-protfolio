"use client"
import { Checkbox, Image, Input, Textarea } from '@nextui-org/react'
import React from 'react'
import { isMobile } from 'react-device-detect';
const Contact = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    alert('Form submitted')
  }
  return (
    <div className='flex justify-center relative items-center flex-col p-[2vw] md:mb-[40%] lg:mb-[25%]'>
      <img src='/contact.png' className='p-5 md:p-0 w-full md:w-3/4 h-[150px] md:h-full 
      ' alt='contact' />
      <div className='
        md:absolute top-[75%] left-[45%]  md:top-[65%] md:left-[45%] lg:top-[40%]  w-[90%] md:w-[50%] h-full bg-black bg-opacity-70 flex justify-center items-center
      '>
        <form className='
           bg-white p-5 rounded-md z-50 w-full
        ' >
          <div className='flex flex-col gap-5 items-center justify-center'>
            <Input
              label='Name'
              width={isMobile ? '100%' : '50%'}
              required
              placeholder='Enter your name'
            />
            <Input
              label='Email'
              width={isMobile ? '100%' : '50%'}
              required
              placeholder='Enter your email'
            />
            <Input
              label='Phone'
              width={isMobile ? '100%' : '50%'}
              required
              placeholder='Enter your phone number'
            />
            <Textarea
              label='Message'
              width={isMobile ? '100%' : '50%'}
              required
              placeholder='Enter your message'
            />
            <div className='flex gap-3'>

              <p className='text-[#FFBD12] text-sm'><span className='text-balck'>I agree to the </span> <span className='cursor:pointer'>terms and conditions</span></p>
              <Checkbox
                required
              />
            </div>
            <button className='bg-[#FFBD12] text-black py-2 px-5 rounded-md mt-5' onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
