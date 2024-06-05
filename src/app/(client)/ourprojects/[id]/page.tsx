"use client"
import { Spinner } from "@nextui-org/react";
import OurApproachDetailCard from "@/components/Project/our-approach-detailcard";
import OurApproachHero from "@/components/ProjectHero/our-approach-hero";
import "react-toastify/dist/ReactToastify.css";
import CommonCarousel from "@/components/Carousel/common-carousel";
import { ourApproachCarouselData } from "@/data/content-data";
import { Inter } from 'next/font/google'
import { useEffect, useState } from "react";
import { getDatById } from "@/backend/Services/firestore";
import { Titles } from "@/data/admintitle";
import { useParams } from "next/navigation";
import { useFetchDataById } from "@/hooks/useFetchData";
const inter = Inter({ subsets: ['latin'] });

export default function ProjectPage() {
  const { id }: any = useParams();
  const { data: productInfo, loading } = useFetchDataById(Titles.Project, id)
  if (loading) {
    return (
      <div className="flex  flex-col h-[100vh] justify-center items-center text-yellow-400">
        <Spinner color="warning" />
        Loading Projects Detail...
      </div>
    );
  }
  return (
    <div className={inter.className}>
      <OurApproachHero mainImg={productInfo.image} />
      <CommonCarousel CarouselData={productInfo.images} />
      <OurApproachDetailCard data={productInfo} />
    </div >
  );
}
