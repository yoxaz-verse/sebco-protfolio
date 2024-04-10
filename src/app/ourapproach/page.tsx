"use client"
import Navbar from "@/components/Navbar/navbar";
import OurApproachCarousel from "@/components/OurApproachCarousel/our-approach-carousel";
import OurApproachDetailCard from "@/components/OurApproachDetailCard/our-approach-detailcard";
import OurApproachHero from "@/components/Ourapproachhero/our-approach-hero";
import { useSearchParams } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

export default function DashboardPage() {
  const searchParams = useSearchParams()
  const search = searchParams.get('role')
    return (
        <>
        <Navbar/>
        <OurApproachHero/>
        <OurApproachCarousel/>
        <OurApproachDetailCard/>
      </>
    );
}
