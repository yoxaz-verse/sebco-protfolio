import { teamData } from "@/data/content-data";
import React from "react";
import OurTeamCard from "./team-card";
import { useFetchData } from "@/hooks/useFetchData";
import { Titles } from "@/data/admintitle";

const OurStaffComponent = () => {
  const { data, loading } = useFetchData(Titles.Our_Staff);
  if (!loading) {
    return (
      <div className="py-20 px-8 bg-white rounded-lg w-[80%]">
        <div className="text-3xl font-medium py-3">Meet Our Team</div>
        <div className="flex flex-wrap gap-2 justify-evenly">
          {data.map((data: any, index: any) => (
            <OurTeamCard data={data} key={index} />
          ))}
        </div>
      </div>
    );
  }
};

export default OurStaffComponent;
