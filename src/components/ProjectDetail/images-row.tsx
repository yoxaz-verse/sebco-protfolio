import Image from "next/image";
import React from "react";

const ImagesRow = ({ data }: any) => {
  return (
    <>
      <div className='flex flex-row  overflow-x-scroll gap-2 p-2 justify-between'>
        {data.map((image: any, index: any) => (
          <div key={index} className='w-full'>
            <Image src={image} width={1000} height={400} alt={index} className='h-[220px]' />
          </div>
        ))}
      </div>
    </>
  )
}

export default ImagesRow
