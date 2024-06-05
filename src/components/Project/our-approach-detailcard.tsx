<<<<<<< HEAD
"use client";
import { Chip, Spinner } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import { FaMapMarkedAlt, FaRegCalendarAlt } from "react-icons/fa";

const OurApproachDetailCard = ({ data }: any) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [services, setService] = useState<any>([]);
  const [createdAt, setCreatedAt] = useState<string>("");

  useEffect(() => {
    if (data) {
      console.log(data.projectDetails);
      setService(data.projectDetails);
      console.log(data.createdAt);
      console.log(data.createdAt?.seconds);
      const date = new Date(data.createdAt?.seconds * 1000 + data.createdAt?.nanoseconds / 1e6);
      const formattedDate = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
      console.log(formattedDate);
      setCreatedAt(formattedDate);
      setLoading(false);
    }
  }, [data]);

  if (!data || data.length === 0) {
    return (
      <>
        <Spinner color='warning' className='fill-yellow-300 text-white' />
        <h1 className='text-white'>Loading data....</h1>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <Spinner color='warning' className='fill-yellow-300' />
        <h1 className='text-white'>Loading data....</h1>
      </>
    );
  }

  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex flex-col gap-[1vh] w-10/12 rounded-lg p-8 glass-effect">
        <div className="w-[55%] text-4xl py-3 text-white font-medium">{data.name}</div>
        <div className="text-xl py-3 text-white">{data.details}</div>
        <div className="flex justify-between  w-3/5">
          {services?.map((s: any, index: any) => (
            <Chip color='warning' className='text-white' key={index}>{s}</Chip>
          ))}
        </div>
        <div className="flex flex-row text-white items-center gap-[1vw]">
          <div className="text-xl">Address</div>
          <div className="py-2">{data.address}</div>
=======
import { ourApproachDetailCard } from "@/data/content-data";
import { Chip } from "@nextui-org/react";
import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
const OurApproachDetailCard = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="w-10/12 rounded-lg p-8 glass-effect">
        <div className="w-[55%] text-4xl py-3 text-white font-medium">
          {ourApproachDetailCard.title}
        </div>
        <div className="text-xl py-3 text-white ">
          {ourApproachDetailCard.details}
        </div>
        <div className="flex flex-wrap  gap-2 md:w-3/5">
          {ourApproachDetailCard.features.map((feature, index) => (
            <Chip key={index} className="bg-[#FFBD12]">
              {feature}
            </Chip>
          ))}
        </div>
        <div className="flex flex-col py-8 text-white max-w-[320px]">
          <div className="text-xl">{ourApproachDetailCard.address.label}</div>
          <div className="py-2 font-light">
            {ourApproachDetailCard.address.content}
          </div>
>>>>>>> acee15449e4cda3b1f3d634855af49860bcb804e
        </div>
        <div className="flex flex-row text-white items-center gap-[1vw]">
          <div className="text-xl">Services</div>
          <div className="py-2">{data["services_provided"]}</div>
        </div>
        <div className="flex flex-row text-white items-center gap-[1vw]">
          <div className="text-xl">Client</div>
          <div className="py-2">{data.client}</div>
        </div>
        <div className="flex text-white items-center gap-2 ">
          <FaMapMarkedAlt className="text-white" />
          Postal code: {data["postal code"]}
        </div>
        <div className="flex text-white items-center gap-2">
          <FaRegCalendarAlt className="text-white " />
          Posted on: {createdAt}
        </div>
      </div>
    </div>
  );
};

export default OurApproachDetailCard;
