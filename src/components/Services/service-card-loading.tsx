"use client";
import { Card, CardBody, CardFooter, Skeleton } from "@nextui-org/react";
import React, { useState } from "react";

const ServiceCardLoading = () => {
  return (
    <>
        <Card className=" rounded-none w-[380px] h-[300px]">
          <CardBody className="flex p-0">
            <Skeleton className="w-full h-[280px]"></Skeleton>
          </CardBody>
          <CardFooter>
            <div className="flex justify-center items-center w-full">
          <Skeleton className="w-[250px] py-2"></Skeleton>
          </div>
          </CardFooter>
        </Card>
    </>
  );
};

export default ServiceCardLoading;
