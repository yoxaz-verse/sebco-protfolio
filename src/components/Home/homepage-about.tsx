import { HomePageAboutProps } from '@/data/interface-data'
import Responsive from '@/utils/responsive'
import Image from 'next/image'
import React from 'react'

const HomepageAbout = ({ data }: HomePageAboutProps) => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center md:justify-between py-10'>
            <div className='w-10/12 md:w-7/12 lg:w-8/12'>
                <div >
                    <div className='text-3xl lg:text-5xl font-medium text-[#FFBD12]'>{data.title}</div>
                    <div className='text-[#E1E1E1] md:text-base lg:text-md py-5 md:9/12 lg:w-7/12'>{data.description}</div>
                </div>
                <div className='md:hidden w-10/12 md:w-4/12 lg:w-3/12'>
                    <Image src={data.image} alt={data.title} width={500} height={500} className='w-full h-full' />
                </div>
                <div className='bg-[#2C2B2B] border-1 border-[#494949] flex flex-wrap p-1 lg:p-3 mt-8 mb-10 md:mb-0 justify-between'>
                    {data.achievements.map((item, index) => (
                        <div key={index} className='w-5/12 md:w-3/12 opacity-80 p-3 lg:p-5'>
                            <div className='text-[#FFBD12] md:text-xl lg:text-3xl font-medium'>{item.heading}</div>
                            <div className='text-[#FFFFFF] md:text-xs lg:text-sm py-1 lg:py-2'>{item.description}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='hidden lg:block w-10/12 md:w-4/12 lg:w-3/12'>
                <Image src={data.image} alt={data.title} width={500} height={500} className='w-full h-full' />
            </div>

        </div>
    )
}

export default HomepageAbout