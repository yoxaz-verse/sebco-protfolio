import { ourCompletedProjects } from '@/data/content-data'
import { useScreenWidth } from '@/utils/useScreenWidth';
import Image from 'next/image'
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const OurCompletedProjects = () => {
  const width = useScreenWidth()||0;
  return (
    <div className='my-20'>
        <div className='text-[#FFBD12] font-medium text-3xl pb-8 text-center'>Our Completed Project!</div>
        <Carousel
               showThumbs={false}
               showStatus={false}
               infiniteLoop={true}
               swipeable={true}
               autoFocus={true}
               emulateTouch={true}
               centerMode={true}
               showIndicators={false}
               centerSlidePercentage={width<=640?95:35}

        >
            {ourCompletedProjects.map((item:any) => (
                <div key={item.alt} className="relative p-2">
                <Image
                    src={item.image}
                    height={300}
                    width={300}
                    alt={item.alt}
                    className='h-[340px] w-[220px] rounded-lg'
                />
                </div>))}
            </Carousel>
    </div>
  )
}

export default OurCompletedProjects