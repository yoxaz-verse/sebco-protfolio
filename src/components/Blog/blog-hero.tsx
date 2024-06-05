import Image from 'next/image'
import React from 'react'

const BlogPageHero = () => {
  return (
    <>
      <Image src={'/blog/bloghero.png'} width={1000} height={1000} className='w-full' alt='Blog Hero Image' />
    </>
  )
}

export default BlogPageHero
