import { ServiceCardProps } from "@/data/interface-data";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import React, { CSSProperties, useState } from "react";
import ServiceCardError from "./service-card-error";

const ServiceCard = ({ service,type,move }: ServiceCardProps) => {
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
        <ServiceCardError onReload={handleReload} />
      ) : (
        <Card key={service.alt} className={`w-[90%] md:w-[30%] ${type!='home'?'rounded-none':'rounded-sm my-3 md:my-0'}`} style={move === 'up' ? { transform: 'translateY(-80px)' } as CSSProperties : undefined} isPressable >
          <CardBody className="overflow-visible p-0">
            <Image
              src={service.src}
              width={400}
              height={200}
              alt={service.alt}
              className="w-full"
            />
          </CardBody>
          <CardFooter className="text-small justify-center font-bold">
            <h1>{service.title}</h1>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default ServiceCard;
