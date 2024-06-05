import Image from 'next/image'
import React from 'react'

const OurApproachHero = ({ mainImg }: any) => {
  return (
    <>
      <Image src={mainImg} width={1920} height={800} alt='Our Approach Hero Image' />
    </>
  )
}

export default OurApproachHero
