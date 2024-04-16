"use client";
import { Skeleton } from "@nextui-org/react";
import React from "react";

const ClientSayCardLoading = () => {
  return (
    <>
        <div className=" rounded-none w-[280px] h-[360px] flex items-center justify-center bg-white flex-col">
        <Skeleton className="h-16 w-16 rounded-full"  style={{transform: 'translateY(-50px)'}}></Skeleton>
        <Skeleton className="w-[80%] h-[150px]"></Skeleton>
        <Skeleton className="w-[60%] h-10 mt-8"></Skeleton>
        </div>
    </>
  );
};

export default ClientSayCardLoading;
