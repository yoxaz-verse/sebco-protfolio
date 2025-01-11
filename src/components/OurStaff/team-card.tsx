"use client";
import { Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import OurTeamCardError from "./team-card-error";
import { OurTeamCardProps } from "@/data/interface-data";

const OurTeamCard = ({ data, type }: OurTeamCardProps) => {
  const [error, setError] = useState(false);
  const handleReload = () => {
    setError(false);
  };
  const handleImageError = () => {
    setError(true);
  };
  return (
    <>
      {error ? (
        <OurTeamCardError onReload={handleReload} />
      ) : (
        <Card
          className={`rounded-none max-w-[220px] ${
            type == "home" && "text-white border-none shadow-none"
          }`}
          style={{ backgroundColor: type == "home" ? "transparent" : "white" }}
        >
          <CardBody className="flex justify-center items-center p-0">
            <Image
              src={data.image}
              width={800}
              height={800}
              className="w-[200px] h-max rounded-sm "
              alt="Our Team Member"
              onError={handleImageError}
            />
            <div
              className={`flex flex-col items-center  py-0 my-0 ${
                type === "home" && "text-start w-10/12 py-2"
              }`}
            >
              <span className="font-bold">{data.name}</span>
              <span className="text-xs">{data.role}</span>
            </div>
            <div
              className={`my-0 py-0 ${
                type === "home" && "text-start text-sm pb-5 w-10/12 py-3"
              }`}
            >
              {type == "home" ? data.description : data.designation}
            </div>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default OurTeamCard;
