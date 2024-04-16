"use client"
import { Checkbox, Image, Input, Textarea } from '@nextui-org/react'
import React from 'react'

const Contact = () => {
  const handleSubmit = (e:any) => {
    e.preventDefault()
    alert('Form submitted')
  } 
  return (
    <div className='flex justify-center items-center flex-col pt-10'>
        <Image src='/contact.png' alt='contact' width={1000} height={540}/>
        <div className='w-full flex justify-end items-end'>
            <div className='w-[70%]'>
            <form className='flex flex-col w-[45%] mx-auto py-10 bg-white rounded-xl p-4 z-10 relative' onSubmit={handleSubmit} style={{top:'-250px'}}>
                <Input type='text' placeholder='Name' className='py-2 px-4 my-2 rounded' variant='bordered'/>
                <Input type='email' placeholder='Email' className='py-2 px-4 my-2 rounded' variant='bordered'/>
                <Input type='text' placeholder='Phone' className='py-2 px-4 my-2 rounded' variant='bordered'/>
                <Textarea placeholder='Message' className='py-2 px-4 my-2 rounded' variant='bordered'/>
                <div className='flex'>
                <Checkbox className='m-2' color='warning'>
                click here <span className='text-[#FFBD12]'>terms & conditions</span>
                </Checkbox>
                </div>
                <br/>
                <button className='bg-[#FFBD12] py-2 rounded w-3/12 mx-4 font-medium text-sm' type='submit'>Send</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Contact