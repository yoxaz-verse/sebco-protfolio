"use client"
import { Card, CardBody } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState } from 'react'
import RecentPostCardError from './recent-post-card-error';
import { RecentPostCardProps, RecentNewsCardProps } from '@/data/interface-data';
import { useRouter } from 'next/navigation';

const RecentPostCard = ({ data }: RecentPostCardProps) => {
  const [error, setError] = useState(false);
  const handleReload = () => {
    setError(false);
  };
  const handleImageError = () => {
    setError(true);
  };
  const router = useRouter();
  return (
    <>
      {error ? (
        <RecentPostCardError onReload={handleReload} />
      ) : (
        <Card isPressable onClick={() => router.push(`/blog/${data.id}`)} className="rounded-sm w-full h-full bg-transparent text-white">
          <CardBody className="flex justify-center items-center p-0">
            <Image
              src={data.image}
              width={300}
              height={300}
              alt="Our Team Member"
              onError={handleImageError}
            />
            <div className="text-base font-base py-0 my-0">{data.heading}</div>
            <div className="my-0 py-3 flex justify-start items-start w-full px-2">{data.description.substring(0, 30)}</div>
          </CardBody>
        </Card>
      )}
    </>
  )
}

const RecentNewsPostCard = ({ data }: RecentPostCardProps) => {
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
        <Card className="rounded-sm w-full h-full bg-transparent text-white">
          <CardBody className="flex justify-center items-center p-0">
            <Image
              src={data.image}
              width={300}
              height={300}
              alt="Our Team Member"
              onError={handleImageError}
            />
            <div className="text-base font-base py-0 my-0">{data.heading}</div>
            <div className="my-0 py-3 flex justify-start items-start w-full px-2">{data.description.substring(0, 30)}</div>
          </CardBody>
        </Card>
      )}
    </>
  )
}

const LatestNewsPostCard = ({ data }: RecentNewsCardProps) => {
  const [error, setError] = useState(false);
  const handleReload = () => {
    setError(false);
  };
  const handleImageError = () => {
    setError(true);
  };
  const navigate = useRouter();
  return (
    <>
      {error ? (
        <RecentPostCardError onReload={handleReload} />
      ) : (
        <Card isPressable onPress={() => navigate.push(`/latest-news/${data.id}`)} className="rounded-sm w-full h-full bg-transparent text-white">
          <CardBody className="flex justify-center items-center p-0">
            <Image
              src={data.image}
              width={300}
              height={300}
              alt="Our Team Member"
              onError={handleImageError}
            />
            <div className="text-base font-base py-0 my-0">{data.title}</div>
            <div className="my-0 py-3 flex justify-start items-start w-full px-2">{data.description.substring(0, 30)}</div>
          </CardBody>
        </Card>
      )}
    </>
  )
}






export { RecentPostCard, RecentNewsPostCard, LatestNewsPostCard }
