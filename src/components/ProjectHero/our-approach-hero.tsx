import { ourapproachHero } from '@/data/content-data'
import Image from 'next/image'
import React from 'react'

const OurApproachHero = () => {
  return (
    <div>
    <Image src={ourapproachHero} width={1920} height={800} alt='Our Approach Hero Image'/>
    </div>
  )
}

export default OurApproachHero