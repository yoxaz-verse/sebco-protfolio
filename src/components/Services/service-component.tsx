import React from 'react'
import ServiceCard from './services-card'
import { services } from '@/data/content-data'

const ServiceComponent = () => {
  return (
    <div className="flex justify-center items-center flex-col py-3">
          <div className="text-[#FFBD12] text-xl py-8">Our Services</div>
          <div className="w-10/12 flex flex-wrap gap-10">
        {services.map((service) => (
          <ServiceCard service={service} key={service.alt} />
        ))}
        </div>
      </div>
  )
}

export default ServiceComponent