import Image from 'next/image'
import React from 'react'

const BlogPageHero = () => {
  return (
    <>
      <Image src={'/blog/bloghero.png'} width={10000} height={1000} alt='Blog Hero Image' />
    </>
  )
}



export default BlogPageHero
