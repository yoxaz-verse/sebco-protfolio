import React from 'react'

const MapComponent = () => {
  return (
    <div className='w-full flex flex-col'>
    <div className='text-[#FFBD12] font-medium text-xl lg:text-3xl pb-8'>Browse Property through Map</div>
    <div className='w-full h-[400px] lg:h-[600px]'>
        <iframe src="https://www.google.com/maps/embed/v1/place?q=Door+No:730+E+Abg+Tower+Mundakayam+P.O,+near+South+Indian+Bank,+Kerala+686513&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" className='w-full h-full'></iframe>
    </div>
    </div>
  )
}

export default MapComponent