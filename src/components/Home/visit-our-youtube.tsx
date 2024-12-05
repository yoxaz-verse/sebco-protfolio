import { clientSays } from "@/data/content-data";
import React from "react";
import Animate from "../ReUseComponents/Animate";
import Link from "next/link";

const VisitOurYoutube = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row my-20">
      <div className="w-full md:w-[47%] flex justify-center flex-col py-5 md:py-0">
        <Link href={"https://www.youtube.com/@SebcoInfrastructures"}>
          <Animate className="text-[#FFBD12] text-3xl font-medium">
            Visit Our Youtube Channel
          </Animate>
        </Link>
        <Animate className="text-white mt-5 w-full sm:w-[80%]">
          From commercial spaces to residential complexes, we showcase the
          highlights of each property, highlighting unique features, amenities,
          and architectural designs. Whether youre seeking a new office space,
          retail location, or a place to call home, our videos offer an
          immersive glimpse into the possibilities that our properties offer.
        </Animate>
        <button className="bg-[#FFBD12] min-h-10 w-max rounded-sm mt-12 font-medium px-4">
          Visit Our Youtube Channel
        </button>
      </div>
      <Animate className="w-full md:w-[47%] my-5 md:mt-0">
        <iframe
          src={clientSays[0].link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="px-3 w-full h-72"
        ></iframe>
      </Animate>
    </div>
  );
};

export default VisitOurYoutube;
