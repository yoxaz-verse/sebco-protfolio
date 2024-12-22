"use client";
import React from "react";
import { Titles } from "@/data/admintitle";
import StatsCard from "@/components/Admin/StatsCard";
import { ADMIN_ROUTES } from "@/core/routes";
import HomeBanner from "@/components/Admin/HomeBanner";

function Dashboard() {
  const handleLink = (name: string) => {
    switch (name) {
      case Titles.Testimonial:
      case Titles.Blogs:
      case Titles.LatestNew:
        return ADMIN_ROUTES.CONTENT;
      case Titles.Service:
      case Titles.Location:
      case Titles.Project:
        return ADMIN_ROUTES.INFORMATION;
      case Titles.Requiremnt:
      case Titles.Contact:
        return ADMIN_ROUTES.ENQUIRY;
      case Titles.Jobs:
      case "Apply_for_job":
        return ADMIN_ROUTES.RECRUITMENT;
      case "Our_Staff":
      case "CompletedProjects":
        return ADMIN_ROUTES.OUR_STAFF;
      default:
        return "";
    }
  };

  return (
    <section>
      <HomeBanner />
      <div className="flex flex-wrap justify-evenly gap-4 mt-10">
        {Object.entries(Titles).map(([key, value], index) => (
          <StatsCard key={index} title={key} link={handleLink(key)} />
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
