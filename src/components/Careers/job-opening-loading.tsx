"use client";
import { Card, CardBody, CardFooter, Skeleton } from "@nextui-org/react";
import React, { useState } from "react";

const JobOpeningCardLoading = () => {
  return (
    <>
        <div className=" rounded-none w-full h-[280px] bg-white">
          <div className="flex p-0 flex-row justify-between">
            <Skeleton className="w-3/12 h-[280px]"></Skeleton>
            <div className="w-9/12 p-8">
             <Skeleton className="w-2/12 h-8 my-3 mx-8"/>
             <Skeleton className="w-4/12 h-8 my-3 mx-8"/>
             <Skeleton className="w-8/12 h-8 my-3 mx-8"/>
             <Skeleton className="w-[14%] h-10 my-4 mx-8 py-2 px-4 rounded"/>
            </div>
          </div>
        </div>
    </>
  );
};

export default JobOpeningCardLoading;
