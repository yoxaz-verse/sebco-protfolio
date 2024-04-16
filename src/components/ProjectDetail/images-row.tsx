import { ImageRowProps } from '@/data/interface-data'
import Image from 'next/image'
import React from 'react'

const ImagesRow = ({data}:ImageRowProps) => {
  return(
  <>
  <div className='flex flex-wrap justify-between'>
    {data.map((image, index) => (
      <div key={index} className='w-[23%]'>
        <Image src={image.src} width={1000} height={400} alt={image.alt} className='h-[220px]'/>
      </div>
    ))}
  </div>
  </>
  )
}

export default ImagesRow