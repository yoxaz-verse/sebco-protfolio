import Image from 'next/image'
import React from 'react'

const BlogPageHero = () => {
  return (
    <div>
    <Image src={'/blog/bloghero.png'} width={1920} height={800} alt='Blog Hero Image'/>
    
    </div>
  )
}

export default BlogPageHero