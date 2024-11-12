"use client";
import React from "react";
import HomepageAbout from "@/components/Home/homepage-about";
import HomePageHero from "@/components/Home/homepage-hero";
import HomepageOurWork from "@/components/Home/homepage-ourwork";
import LatestComponent from "@/components/Home/latest-component";
import MapComponent from "@/components/Home/map-component";
import OurApproachComponentHome from "@/components/Home/our-approach-component";
import OurCompletedProjects from "@/components/Home/our-completed-projects";
import OurServicesComponent from "@/components/Home/our-services-component";
import OurTechnicalStaffComponent from "@/components/Home/our-technical-staff";
import SebcoCareers from "@/components/Home/sebco-careers";
import VisitOurYoutube from "@/components/Home/visit-our-youtube";
import ClientSaysComponent from "@/components/Home/what-our-clientsay-component";
import { aboutUsHomepage, whatWeDo } from "@/data/content-data";
import dynamic from "next/dynamic";
import Image from "next/image";

const Map = dynamic(() => import("@/components/Home/map-component"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      <HomePageHero />
      <div className="flex items-center justify-center w-full pt-4 flex-col">
        <div className="w-10/12 flex flex-col py-4">
          <HomepageAbout data={aboutUsHomepage} />
          <HomepageOurWork data={whatWeDo} />
          <OurCompletedProjects />
          <OurServicesComponent />
          <Image
            src={"/home/showcase.jpg"}
            alt={"Sebco Projects"}
            width={1500}
            height={1500}
            className="w-full h-full"
          />
          <ClientSaysComponent />
          <Map />
          <SebcoCareers />
        </div>
        <div className="w-full">
          {" "}
          <OurApproachComponentHome />
        </div>
        <div className="w-10/12 flex flex-col py-4">
          <OurTechnicalStaffComponent />
          <LatestComponent />
          <VisitOurYoutube />
        </div>
      </div>
    </>
  );
}
