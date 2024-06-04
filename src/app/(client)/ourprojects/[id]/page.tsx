"use client";
import OurApproachDetailCard from "@/components/Project/our-approach-detailcard";
import OurApproachHero from "@/components/ProjectHero/our-approach-hero";
import "react-toastify/dist/ReactToastify.css";
import CommonCarousel from "@/components/Carousel/common-carousel";
import { ourApproachCarouselData } from "@/data/content-data";
export default function ProjectPage() {
  return (
    <>
      <OurApproachHero />
      <CommonCarousel CarouselData={ourApproachCarouselData} />
      <OurApproachDetailCard />
    </>
  );
}
