"use client";
import { Card, CardBody, CardFooter, Skeleton } from "@nextui-org/react";
import React, { useState } from "react";

const QuoteCardLoading = () => {
  return (
    <>
        <Card className=" rounded-none h-[80px] w-full flex items-center justify-center p-14">
            <div className="flex justify-center items-center w-full">
          <Skeleton className="w-7/12 py-4"></Skeleton>
          </div>
        </Card>
    </>
  );
};

export default QuoteCardLoading;
