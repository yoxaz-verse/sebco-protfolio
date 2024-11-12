"use client";

import ImagesRow from "@/components/ProjectDetail/images-row";
import { Titles } from "@/data/admintitle";
import { useFetchDataById } from "@/hooks/useFetchData";
import { useParams } from "next/navigation";

const CompletedProjectById = () => {
  const { id } = useParams();
  const { data, loading } = useFetchDataById(Titles.CompletedProjects, id);
  console.log(data);
  if (!loading) {
    return (
      <>
        <div className="w-full flex text-yellow-400 flex-col p-6">
          <h1 className="text-4xl">OUR COMPLETED PROJECT</h1>
          <h1 className="text-3xl">{data.title}</h1>
          <ImagesRow data={data.images} />
        </div>
      </>
    );
  }
};
export default CompletedProjectById;
