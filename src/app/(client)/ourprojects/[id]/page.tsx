"use client";
import { Spinner } from "@nextui-org/react";
import OurApproachHero from "@/components/ProjectHero/our-approach-hero";
import "react-toastify/dist/ReactToastify.css";
import CommonCarousel from "@/components/Carousel/common-carousel";
import OurApproachDetailCard from "@/components/Project/our-approach-detailcard";
import { Inter } from 'next/font/google'
import { Titles } from "@/data/admintitle";
import { useParams } from "next/navigation";
import { useFetchDataById } from "@/hooks/useFetchData";
import Animate from "@/components/ReUseComponents/Animate";
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
  console.log(productInfo);
  return (
    <div className={inter.className}>
      <OurApproachHero mainImg={productInfo.image} />
      <CommonCarousel CarouselData={productInfo.images} />
      <OurApproachDetailCard data={productInfo} />
    </div >

  );
}
