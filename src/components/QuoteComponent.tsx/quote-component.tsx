import { Input, Textarea } from '@nextui-org/react'
import React from 'react'

const QuoteComponent = ({ text }: { text: string }) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

  }
  return (
    <div className='bg-transparent relative z-20 p-14 border-dashed border-2 border-[#FFBD12] text-white w-full flex items-center justify-center'>
      <div className='bg-[#FFBD12]/[12%] blur-2xl  -z-10 absolute rounded-full h-80 w-80'></div>
      <h1 className='w-full flex items-center justify-center text-xl text-center'>{text}</h1>
    </div>
  )
}

export default QuoteComponent
