import { Input, Textarea } from '@nextui-org/react'
import React from 'react'

const CommentComponent = () => {
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    
  }
  return (
    <div className='bg-[#292929] w-10/12 p-8 my-20'>
    <div className='text-white py-6 text-2xl'>Comments</div>
    <form onSubmit={handleSubmit}>
    <Textarea
      variant="bordered"
      placeholder="Write a comment"
      className='rounded-none'
      minRows={5}
      />
      <div className='flex justify-end items-end py-4'>
        <button className='bg-[#424242] rounded py-2 px-4 mx-5 text-white'>Cancel</button>
        <button className='bg-[#FFBD12] rounded py-2 px-4 text-white' type='submit'>Publish</button>
      </div>
      </form>
    </div>
  )
}

export default CommentComponent