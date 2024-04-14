"use client";
import { Button, Card, CardBody, Skeleton } from "@nextui-org/react";
const RecentPostCardLoading = () => {
  return (
    <>
        <Card className=" rounded-none w-[380px] h-[350px]">
          <CardBody className="flex p-0">
            <Skeleton className="w-full h-[250px]"></Skeleton>
            <div className="flex justify-center items-start flex-col py-2 px-4">
            <Skeleton className="w-[120px] py-2 my-3"></Skeleton>
            <div className="py-2">
            <Skeleton className="w-[280px] py-4"></Skeleton>
            </div>
            </div>
          </CardBody>
        </Card>
    </>
  );
};

export default RecentPostCardLoading;
