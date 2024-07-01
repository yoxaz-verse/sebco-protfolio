import Image from "next/image";
import React from "react";

const ImagesRow = ({ data }: any) => {
  return (
    <>
      <div className='flex flex-row  gap-4 p-2 justify-between'>
        {data.map((image: any, index: any) => (
          <div key={index} className='w-full'>
            <Image src={image} width={400} height={400} alt={image.status} className='h-[220px]' />
          </div>
        ))}
      </div>
    </>
  )
}

export default ImagesRow
