import Image from 'next/image'
import React from 'react'

const HomePageHero = () => {
  return (
    <div>
    <Image src={'/home/home.png'} width={1920} height={800} alt='Our Approach Hero Image'/>
    
    </div>
  )
}

export default HomePageHero