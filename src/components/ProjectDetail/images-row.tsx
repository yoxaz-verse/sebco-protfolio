import { ImageRowProps } from '@/data/interface-data'
import Image from 'next/image'
import React from 'react'

const ImagesRow = ({ data }: ImageRowProps) => {
  return (
    <>
      <div className='flex flex-row  overflow-x-scroll gap-2 p-2 justify-between'>
        {data.map((image, index) => (
          <div key={index} className='w-full'>
            <Image src={image.data} width={1000} height={400} alt={image.status} className='h-[220px]' />
          </div>
        ))}
      </div>
    </>
  )
}

export default ImagesRow
