import Image from "next/image";
import React from "react";
import Animate from "../ReUseComponents/Animate";

const OurStaffPageHero = () => {
  return (
    <Animate>
      <Image
        src={"/ourapproaches/ourapproach4.png"}
        width={1920}
        height={800}
        alt="Our Staff Hero Image"
      />
    </Animate>
  );
};

export default OurStaffPageHero;
