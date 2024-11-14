"use client";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ImagesRow from "@/components/ProjectDetail/images-row";
import ProjectDetail from "@/components/ProjectDetail/project-detail";
import { Titles } from "@/data/admintitle";
import { getData } from "@/backend/Services/firestore";
import { Inter } from "next/font/google";
import { useFetchData } from "@/hooks/useFetchData";
import Animate from "@/components/ReUseComponents/Animate";
import OurServicesComponent from "@/components/Home/our-services-component";
import OurCompletedProjects from "@/components/Home/our-completed-projects";
const inter = Inter({ subsets: ["latin"] });

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
          <OurCompletedProjects />
          </div>
  );
}
