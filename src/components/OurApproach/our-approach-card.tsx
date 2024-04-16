import { ApproachCardProps} from "@/data/interface-data";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import OurApproachCardError from "./our-approach-error";

const OurApproachCard = ({ approach }: ApproachCardProps) => {
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
        <Card key={approach.index} className="w-11/12" isPressable>
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
            <div className="w-5/12 text-start text-base font-medium">{approach.title}</div>
            <div className="w-3/12 flex items-end justify-end pr-3 text-3xl opacity-65 text-[#FFBD12]">
                {approach.index}
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default OurApproachCard;
