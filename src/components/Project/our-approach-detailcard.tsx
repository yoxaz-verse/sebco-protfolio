"use client";
import { Chip, Spinner } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import { FaMapMarkedAlt, FaRegCalendarAlt } from "react-icons/fa";
import Animate from "@/components/ReUseComponents/Animate";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const OurApproachDetailCard = ({ data }: any) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [services, setServices] = useState<any>([]);
  const [createdAt, setCreatedAt] = useState<string>("");

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      setServices(data.projectDetails || []);
      const date = new Date(data.createdAt?.seconds * 1000 + (data.createdAt?.nanoseconds || 0) / 1e6);
      const formattedDate = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
      setCreatedAt(formattedDate);
      setLoading(false);
    }
  }, [data]);

  if (loading || !data || Object.keys(data).length === 0) {
    return (
      <>
        <Spinner color='warning' className='fill-yellow-300 text-white' />
        <h1 className='text-white'>Loading data....</h1>
      </>
    );
  }

  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex flex-col gap-[1vh] w-10/12 rounded-lg p-8 glass-effect">
        <div className="w-[55%] text-4xl py-3 text-white font-medium">{data.name}</div>
        <Animate>
          <div className="text-xl py-3 text-white">{data.details}</div>
          <div className="flex justify-between  w-3/5">
            <Animate delay={1} className="flex gap-2 flex-wrap ">
              {services.map((s: any, index: number) => (
                <Chip color='warning' className='text-white' key={index.toString()}>{s}</Chip>
              ))}
            </Animate>
          </div>
          <div className="flex flex-row text-white items-center gap-[1vw]">
            <div className="text-xl">Address</div>
            <div className="py-2">{data.address}</div>
          </div>
          <div className="flex flex-row text-white items-center gap-[1vw]">
            <div className="text-xl">Services</div>
            <div className="py-2">{data["services_provided"]}</div>
          </div>
          <div className="flex flex-row text-white items-center gap-[1vw]">
            <div className="text-xl">Client</div>
            <div className="py-2">{data.client}</div>
          </div>
          <Animate delay={1.8} className="flex text-white items-center gap-2 ">
            🗺️ <FaMapMarkedAlt className="text-white" />
            Postal code: {data["postal code"]}
          </Animate>
          <Animate delay={2} className="flex text-white items-center gap-2">
            <FaRegCalendarAlt className="text-white " />
            📅 Posted on: {createdAt}
          </Animate>
        </Animate>
      </div>
    </div>
  );
};

export default OurApproachDetailCard;
