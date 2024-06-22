"use client";
import { Card, CardBody, CardFooter, Modal, ModalContent, ModalBody, useDisclosure, CardHeader, Button } from "@nextui-org/react";
import Image from "next/image";
import React, { CSSProperties, useState } from "react";
import ServiceCardError from "./service-card-error";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] });

const ServiceCard = ({ service, type, move }: any) => {
  console.log(service);
  const [error, setError] = useState(false);
  const handleReload = () => {
    setError(false);
  };
  const handleImageError = () => {
    setError(true);
  };
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();

  return (
    <>
      {error ? (
        <ServiceCardError onReload={handleReload} />
      ) : (
        <>
          <Card onPress={onOpen} key={service.alt} className={`w-full md:w-[30%] ${type !== 'home' ? 'rounded-none' : 'rounded-sm my-3 md:my-0'}`} style={move === 'up' ? { transform: 'translateY(-80px)' } as CSSProperties : undefined} isPressable >
            <CardBody className="overflow-visible p-0">
              <Image
                src={service.image}
                width={400}
                height={200}
                alt={service.title}
                className="w-full"
              />
            </CardBody>
            <CardFooter className="text-sm justify-center font-bold">
              <h1>{service.title ?? service.name}</h1>
            </CardFooter>
          </Card>
          <Modal isOpen={isOpen} placement="top-center" className="bg-[#232323] rounded-xl" onOpenChange={onOpenChange}>
            <ModalContent className={inter.className}>
              <ModalBody>
                <Card onPress={onOpen} key={service.alt} className="w-full flex flex-col gap-2 p-5 bg-inherit text-white rounded-none" isPressable >
                  <CardHeader className="text-3xl font-bold text-start">{service.title ?? service.name}</CardHeader>
                  <CardBody className="overflow-visible p-0">
                    <h1 className="text-lg">{service?.description} </h1>
                    <Image
                      src={service.image}
                      width={400}
                      height={400}
                      alt={service.title}
                      className="w-full p-[1vh] rounded-none"
                    />
                    {type === "testimonal" && (
                      <iframe
                        src={service.link}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        className="px-3 w-full h-72"
                      ></iframe>
                    )}
                  </CardBody>
                  <CardFooter className="text-3xl justify-center font-bold">
                    {type !== "testimonal" && (
                      <Button onPress={onClose} color="warning" className="px-2 py-4 rounded-none">Get A Free Quote</Button>
                    )}

                  </CardFooter>
                </Card>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};

export default ServiceCard;
