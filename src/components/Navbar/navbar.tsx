"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const router = useRouter();
  function routePage(url:string){
    router.push(url);
  }
  return (
    <div className='bg-[#2C2B2B] flex justify-between items-center px-3 py-3'>
        <div className='w-1/5 text-white text-center'>LOGO</div>
        <div className='w-4/5 flex justify-evenly items-center'>
            <div className='text-white cursor-pointer' onClick={()=>routePage('/home')}>Home</div>
            <div className='text-white cursor-pointer' onClick={()=>routePage('/about')}>About</div>
            <div className='text-white  cursor-pointer' onClick={()=>routePage('/services')}>Services</div>
            <div className='text-white cursor-pointer' onClick={()=>routePage('/ourprojects')}>Projects</div>
            <div className='text-white cursor-pointer' onClick={()=>routePage('/requirements')} >Your Requirements</div>
            <div className='text-white cursor-pointer' onClick={()=>routePage('/contact')}>Contact Us</div>
            <button color='warning' className='bg-#FFBD12 py-2 px-3 bg-[#FFBD12] rounded'>Get a Free Quote</button>
        </div>

    </div>
  )
}

export default Navbar