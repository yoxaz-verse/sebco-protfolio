import { Input, Textarea } from '@nextui-org/react'
import React from 'react'

const QuoteComponent = ({text}:{text:string}) => {
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    
  }
  return (
    <div className='bg-transparent p-14 border-dashed border-2 border-[#FFBD12] text-white w-full flex items-center justify-center'>
   <div className='w-8/12 flex items-center justify-center text-lg text-center'>{text}</div>
    </div>
  )
}

export default QuoteComponent