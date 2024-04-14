"use client"
import Navbar from "@/components/Navbar/navbar";
import OurApproachCarousel from "@/components/Carousel/common-carousel";
import OurApproachDetailCard from "@/components/OurApproachDetailCard/our-approach-detailcard";
import OurApproachHero from "@/components/Ourapproachhero/our-approach-hero";
import { useSearchParams } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import CommonCarousel from "@/components/Carousel/common-carousel";
import { ourApproachCarouselData } from "@/data/content-data";
export default function ProjectPage() {
  const searchParams = useSearchParams()
  const search = searchParams.get('role')
    return (
        <>
        <OurApproachHero/>
        <CommonCarousel CarouselData={ourApproachCarouselData}/>
        <OurApproachDetailCard/>
      </>
    );
}
