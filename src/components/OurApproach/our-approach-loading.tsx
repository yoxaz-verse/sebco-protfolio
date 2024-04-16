"use client";
import { Card, CardBody, CardFooter, Skeleton } from "@nextui-org/react";
import React, { useState } from "react";

const OurApproachCardLoading = () => {
  return (
    <>
        <Card className="w-11/12">
          <CardBody className="flex p-0">
            <Skeleton className="w-full h-[280px]"></Skeleton>
          </CardBody>
          <CardFooter className="w-full">
            <div className="flex justify-between w-full my-5">
          <Skeleton className="w-6/12 h-10"></Skeleton>
          <Skeleton className="w-2/12 h-10 flex items-end justify-end pr-3"></Skeleton>
          </div>
          </CardFooter>
        </Card>
    </>
  );
};

export default OurApproachCardLoading;
