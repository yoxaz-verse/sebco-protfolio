import { Button } from '@nextui-org/react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#2C2B2B] flex justify-between items-center px-3 py-3'>
        <div className='w-1/5 text-white text-center'>LOGO</div>
        <div className='w-4/5 flex justify-evenly items-center'>
            <div className='text-white'>Home</div>
            <div className='text-white'>About</div>
            <div className='text-white'>Services</div>
            <div className='text-white'>Projects</div>
            <div className='text-white'>Your Requirements</div>
            <div className='text-white'>Contact Us</div>
            <button color='warning' className='bg-#FFBD12 py-2 px-3 bg-[#FFBD12] rounded'>Get a Free Quote</button>
        </div>

    </div>
  )
}

export default Navbar