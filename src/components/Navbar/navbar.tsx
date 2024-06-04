"use client";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  
  const routePage = (url:string) => {
    router.push(url);
    setIsOpen(false)
  };
  
  const pathname = usePathname();
  const path = pathname.split("/").pop();
  const isActive = (page:string) => {
    return path === page ? 'underline decoration-[#FFBD12] text-white underline-offset-4 decoration-4' : 'text-white';
  };

  return (
    <div className='bg-[#2C2B2B] flex justify-between items-center px-3 py-3'>
      <div className='w-1/5 text-white text-center'>LOGO</div>
      <div className='w-4/5 flex justify-end items-center lg:hidden'>
        <Dropdown className='bg-[#494949]'>
          <DropdownTrigger>
            <Button variant="light">
              <IoMenu className='text-2xl text-white'/>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Navigation Menu">
            <DropdownItem onClick={() => routePage('/home')} className={isActive('home')}>
              Home
            </DropdownItem>
            <DropdownItem onClick={() => routePage('/approach')} className={isActive('approach')}>
              Our Approach
            </DropdownItem>
            <DropdownItem onClick={() => routePage('/services')} className={isActive('services')}>
              Services
            </DropdownItem>
            <DropdownItem onClick={() => routePage('/ourprojects')} className={isActive('ourprojects')}>
              Projects
            </DropdownItem>
            <DropdownItem onClick={() => routePage('/requirements')} className={isActive('requirements')}>
              Your Requirements
            </DropdownItem>
            <DropdownItem onClick={() => routePage('/contact')} className={isActive('contact')}>
              Contact Us
            </DropdownItem>
            <DropdownItem>
              <button
                className='bg-[#FFBD12] py-2 px-3 rounded text-black'
                onClick={() => routePage('/contact')}
              >
                Get a Free Quote
              </button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      
      {/* Full Navbar for Large Screens */}
      <div className='w-4/5 justify-evenly items-center hidden lg:flex'>
        <div className={`cursor-pointer ${isActive('home')}`} onClick={() => routePage('/home')}>
          Home
        </div>
        <div className={`cursor-pointer ${isActive('approach')}`} onClick={() => routePage('/approach')}>
          Approach
        </div>
        <div className={`cursor-pointer ${isActive('services')}`} onClick={() => routePage('/services')}>
          Services
        </div>
        <div className={`cursor-pointer ${isActive('ourprojects')}`} onClick={() => routePage('/ourprojects')}>
          Projects
        </div>
        <div className={`cursor-pointer ${isActive('requirements')}`} onClick={() => routePage('/requirements')}>
          Your Requirements
        </div>
        <div className={`cursor-pointer ${isActive('contact')}`} onClick={() => routePage('/contact')}>
          Contact Us
        </div>
        <button
          className='bg-[#FFBD12] py-2 px-3 rounded text-black'
          onClick={() => routePage('/contact')}
        >
          Get a Free Quote
        </button>
      </div>
      
    </div>
  );
};

export default Navbar;
