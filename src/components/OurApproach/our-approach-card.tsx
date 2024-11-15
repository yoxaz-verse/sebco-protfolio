import { ApproachCardProps } from "@/data/interface-data";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import OurApproachCardError from "./our-approach-error";

interface Approach {
  approach: any;
  isOpen: any;
  onOpen: () => any;
  onOpenChange: () => any;
}

const OurApproachCard = ({
  approach,
  isOpen,
  onOpenChange,
  onOpen,
}: Approach) => {
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
        <OurApproachCardError onReload={handleReload} />
      ) : (
        <Card
          key={approach.index}
          className="w-11/12"
          onClick={onOpen}
          isPressable
        >
          <CardBody className="overflow-visible p-0">
            <Image
              src={approach.img}
              width={400}
              height={200}
              alt={approach.index}
              className="w-full"
            />
          </CardBody>
          <CardFooter className="text-small flex justify-between w-full my-5">
            <div className="w-5/12 text-start text-base font-medium">
              {approach.title}
            </div>
            <div className="w-3/12 flex items-end justify-end pr-3 text-3xl opacity-65 text-[#FFBD12]">
              {approach.index}
            </div>
          </CardFooter>
        </Card>
      )}
      <Modal
        className="bg-[#2C2B2B] text-[#FFBD12]"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {approach.title}
              </ModalHeader>
              <ModalBody>
                <div>
                  {approach.description.map((d: any) => {
                    return (
                      <div key={d} className="flex flex-col w-full">
                        <h3 className="font-bold text-md text-white">
                          {d.heading}
                        </h3>
                        <p>{d.description}</p>
                      </div>
                    );
                  })}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default OurApproachCard;
