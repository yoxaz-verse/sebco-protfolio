import { ImageRowProps } from "@/data/interface-data";
import Image from "next/image";
import React from "react";

const ImagesRow = ({ data }: ImageRowProps) => {
  return (
    <>
      <div
        className="flex  gap-5 pb-10"
        style={{
          overflowX: "auto",
        }}
      >
        {data.map((image, index) => (
          <div key={index} className="min-w-[48%] sm:min-w-[23%] ">
            <Image src={image.src} width={1000} height={400} alt={image.alt} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImagesRow;
