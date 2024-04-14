"use client"
import { Card, CardBody } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState } from 'react'
import RecentPostCardError from './recent-post-card-error';
import { RecentPostCardProps } from '@/data/interface-data';

const RecentPostCard = ({data}:RecentPostCardProps) => {
    const [error, setError] = useState(false);
    const handleReload = () => {
      setError(false);
    };
    const handleImageError = () => {
      setError(true);
    };
    return (
      <>
        {error ? (
          <RecentPostCardError onReload={handleReload} />
        ) : (
    <div>
         <Card className=" rounded-none w-[400px] bg-transparent text-white">
          <CardBody className="flex justify-center items-center p-0">
            <Image
              src={data.image}
              width={300}
              height={300}
              alt="Our Team Member"
              className='w-full'
              onError={handleImageError}
            />
             <div className="my-0 py-3 flex justify-start items-start w-full px-2">{data.read}</div>
            <div className="text-base font-base py-0 my-0">{data.title}</div>
          </CardBody>
        </Card>
    </div>)}
    </>
  )
}

export default RecentPostCard