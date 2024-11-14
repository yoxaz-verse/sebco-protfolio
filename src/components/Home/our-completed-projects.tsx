import { useScreenWidth } from "@/utils/useScreenWidth";
import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Animate from "../ReUseComponents/Animate";
import { useFetchData } from "@/hooks/useFetchData";
import { Titles } from "@/data/admintitle";
import { Card, CardFooter, Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Link } from "react-alice-carousel";

const OurCompletedProjects = () => {
  const { data, loading } = useFetchData(Titles.Project);
  const router = useRouter();
  if (loading) {
    return (
      <div className="flex flex-col h-screen justify-center items-center text-yellow-400">
        <Spinner color="warning" />
        <p>Loading Completed Projects...</p>
      </div>
    );
  } else {
    const recentProjects: any = Object.values(data) || [];
    return (
      <div className="mt-20">
        <div className="text-[#FFBD12] font-medium text-3xl pb-8 text-center">
          Our Projects!
        </div>

        {!loading && (
          <div className="flex justify-center items-center">
            <div className="grid  w-full rounded-sm  grid-cols-2 md:grid-cols-3 gap-2 grid-rows-3">
              {recentProjects.slice(0, 3).map((item: any, index: number) => (
                <Animate
                  key={item.alt ?? `image${index}`}
                  className="relative p-2"
                >
                  <Link href={item.image} target="_blank">
                    <Card className="w-full h-[220px] md:h-[200px] bg-[#2C2B2B] flex justify-center items-center ">
                      {/* <Image
                        src={"/logo.png"}
                        alt={"sebco"}
                        className="w-full h-[220px] md:h-[200px] opacity-15 absolute "
                        width={500}
                        height={300}
                      /> */}
                      <div className="p-1 text-center text-white  font-bold absolute m-auto">
                        <h4 className="text-3xl">{item.client}</h4>
                        <br />
                        <h5 className="font-light">Project Book</h5>
                      </div>{" "}
                    </Card>
                  </Link>
                </Animate>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default OurCompletedProjects;
