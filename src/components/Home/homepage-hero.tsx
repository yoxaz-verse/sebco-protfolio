import { homePageContent } from "@/data/content-data";
import React, { useEffect, useState } from "react";
import Animate from "../ReUseComponents/Animate";
import Link from "next/link";
import { getData } from "@/backend/Services/firestore";
import { Banner } from "../Admin/HomeBanner";
import Image from "next/image";

const HomePageHero = () => {
  const [banners, setBanners] = useState<Banner[]>([]);

  const fetchBanners = async () => {
    const response = await getData("home_banners");
    if (response.status) {
      const formattedBanners: Banner[] = response.data.map((item: any) => ({
        id: item.id,
        title: item.title ?? "", // Fallback for missing fields
        description: item.description ?? "",
        imageUrl: item.imageUrl ?? "/placeholder.png", // Correct field name
      }));
      setBanners(formattedBanners);
    } else {
      alert("Failed to fetch banners.");
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [banners.length]);

  return (
    <>
      <Animate
        style={{
          // backgroundImage: `url('/home/homeBanner.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
        className="w-full  flex  items-center justify-center rounded min-h-[700px] "
      >
        <div className=" w-full h-[700px] overflow-hidden absolute">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                key={banner.id}
                src={banner.imageUrl}
                alt={banner.title}
                width={4000}
                height={4000}
                objectFit="cover"
                className="w-[100vw] max-h-[700px] min-h-[700px]"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>{" "}
        <div
          style={{
            backgroundColor: "#232323",
            opacity: 0.8,
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        ></div>
        <Animate
          delay={1}
          className="flex  sm:items-center justify-center flex-col text-white z-10  opacity-100 relative"
        >
          <div className="text-5xl font-medium w-[400px] md:text-center  md:w-[550px] px-5">
            WE BUILT YOUR <span className="text-[#FFBD12]">DREAM </span>
            <span className="text-[#FFBD12]">SPACES </span>INTO REALITY
          </div>
          <div className="text-[2.75rem] font-medium"></div>
          <Animate delay={2} className="text-lg sm:w-7/12 sm:text-center p-5">
            {homePageContent.description}
          </Animate>
          <Link href={"/about-us"}>
            <button className="bg-[#0000002a] hover:bg-[#0000007a] duration-300 border-1 border-white py-2 px-10 mt-20 rounded-sm">
              Know More
            </button>
          </Link>
        </Animate>
      </Animate>
    </>
  );
};

export default HomePageHero;
