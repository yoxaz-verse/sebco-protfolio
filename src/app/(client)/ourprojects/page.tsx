"use client";
import { Spinner } from "@nextui-org/react"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ImagesRow from "@/components/ProjectDetail/images-row";
import ProjectDetail from "@/components/ProjectDetail/project-detail";
import { Titles } from "@/data/admintitle";
import { getData } from "@/backend/Services/firestore";
import { Inter } from 'next/font/google'
import { useFetchData } from "@/hooks/useFetchData";
import Animate from "@/components/ReUseComponents/Animate";
const inter = Inter({ subsets: ['latin'] });

export default function ProjectsPage() {
  const router = useRouter();
  const { data: projects, loading } = useFetchData(Titles.Project);
  if (loading) {
    return (
      <div className="flex  flex-col h-[100vh] justify-center items-center text-yellow-400">
        <Spinner color="warning" />
        Loading Projects...
      </div>
    );
  }

  return (
    <div className={inter.className}>
      <Animate className={`flex flex-col items-center justify-center w-full`}>
        {projects.map((project: any, index: any) => (
          <div
            key={index}
            onClick={() => router.push(`/ourprojects/${project.id}`)}
            className="py-10  cursor-pointer flex flex-col justify-center items-center relative"
          >
            <ProjectDetail data={project} />
            <div className="bg-[#FFBD12]/[20%] blur-2xl absolute rounded-full h-80 w-80 -z-10"></div>
            <div className="w-full">
              <ImagesRow data={project.images} />
            </div>
          </div>
        ))}
      </Animate>
    </div>
  );
}
