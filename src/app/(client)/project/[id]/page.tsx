"use client";
import ImagesRow from "@/components/ProjectDetail/images-row";
import Animate from "@/components/ReUseComponents/Animate";
import { ourCompletedProjects, projectDetails1 } from "@/data/content-data";
import { Card, CardBody, CardHeader, Chip, Spacer } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Page = () => (
  <div className="">
    <Carousel
      showStatus={true}
      infiniteLoop={true}
      autoPlay={true}
      emulateTouch={true}
      centerMode={true}
      showIndicators={true}
      // centerSlidePercentage={95}
      showThumbs={true}
    >
      {projectDetails1.images_carousel.map((item: any) => (
        <Animate key={item.alt} className="relative p-2">
          <Image src={item.src} height={300} width={300} alt={item.alt} />
        </Animate>
      ))}
    </Carousel>
    <ImagesRow data={projectDetails1.images_carousel} />
    <Spacer y={4} />
    <Card className="m-5 bg-[#4E4E4E] text-white ">
      <CardHeader className="max-w-[600px]">
        <h2 className="font-medium text-2xl sm:text-3xl max-w-100px">
          SEBCO property of housing residency 3BHK with garden
        </h2>
      </CardHeader>

      <CardBody>
        <Animate>
          <h5>Project Details</h5>
          <Spacer y={2} />
          <Animate delay={1} className="flex gap-2 flex-wrap ">
            <Chip color="warning">Default</Chip>
            <Chip color="warning">Primary</Chip>
            <Chip color="warning">Secondary</Chip>
            <Chip color="warning">Suess</Chip>
            <Chip color="warning">Warning</Chip>
            <Chip color="warning">Danger</Chip>
          </Animate>
          <Spacer y={10} />
          <h5>Address:</h5>
          <Spacer y={2} />
          <p className="font-light text-small max-w-[250px]">
            Qorem ipsum dolor sit amet, consectetur adipiscing elit.Qorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <Spacer y={5} />
          <div>
            <Animate delay={1.8} className="font-light text-small ">
              🗺️ Postal code: 110005
            </Animate>
            <Animate delay={2} className="font-light text-small ">
              📅 Posted On: 27-Jan-2024
            </Animate>
          </div>
        </Animate>
      </CardBody>
    </Card>
  </div>
);

export default Page;
