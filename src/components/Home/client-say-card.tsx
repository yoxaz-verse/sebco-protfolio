import { ClientSaysCardProps, ServiceCardProps } from "@/data/interface-data";
import { Avatar, Card, CardBody, CardFooter, Divider } from "@nextui-org/react";
import Image from "next/image";
import React, { CSSProperties, useState } from "react";
import ClientSayCardError from "./client-say-card-error";
import Animate from "../ReUseComponents/Animate";
import { randomFill } from "crypto";

const ClientSaysCard = ({ client }: ClientSaysCardProps) => {
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
        <ClientSayCardError onReload={handleReload} />
      ) : (
        <Animate
          key={client.name}
          className={`w-full md:w-[45%] lg:w-[30%] bg-[#2C2B2B] rounded-sm`}
        >
          <div className="p-5 flex items-center z-10 relative flex-col">
            <Avatar
              src={client.image}
              alt={client.name}
              onError={handleImageError}
              className="z-100 h-16 w-16"
              style={{ transform: "translateY(-50px)" }}
            />
            <iframe
              src={client.link}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="px-3 w-60 h-40 lg:w-72"
            ></iframe>
            <Divider className="divider w-5/12 my-4" />
            <div className="text-white">{client.name}</div>
          </div>
        </Animate>
      )}
    </>
  );
};

export default ClientSaysCard;
