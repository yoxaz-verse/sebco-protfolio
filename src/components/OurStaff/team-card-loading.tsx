"use client";
import { Button, Card, CardBody, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import OurTeamCardError from "./team-card-error";

const OurTeamCardLoading = () => {
  return (
    <>
        <Card className=" rounded-none w-[300px] h-[500px]">
          <CardBody className="flex p-0">
            <Skeleton className="w-full h-[380px]"></Skeleton>
            <div className="flex justify-center items-center flex-col py-4">
            <Skeleton className="w-[120px] py-2"></Skeleton>
            <div className="py-2">
            <Skeleton className="w-[150px] py-2"></Skeleton>
            </div>
            <div className="my-3">
            <Skeleton className="w-[110px] h-[50px]"></Skeleton>
            </div>
            </div>
          </CardBody>
        </Card>
    </>
  );
};

export default OurTeamCardLoading;
