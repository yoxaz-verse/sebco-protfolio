"use client"

import BlogDetailComponent from "@/components/Blog/blog-detail-component";
import BlogPageHero from "@/components/Blog/blog-hero";
import RecentPostCard from "@/components/Blog/recent-post-card";
import RecentPostCardLoading from "@/components/Blog/recent-post-card-loading";
import RecentPostComponent from "@/components/Blog/recent-post-component";
import OurServicesModal from "@/components/OurServicesModal/our-services-modal";
import OurStaffComponent from "@/components/OurStaff/our-staff-component";
import OurStaffPageHero from "@/components/OurStaff/our-staff-hero";
import OurTeamCard from "@/components/OurStaff/team-card";
import OurTeamCardError from "@/components/OurStaff/team-card-error";
import OurTeamCardLoading from "@/components/OurStaff/team-card-loading";
import ServiceCardLoading from "@/components/Services/service-card-loading";
import ServiceComponent from "@/components/Services/service-component";
import ServiceCard from "@/components/Services/services-card";
import { useState } from "react";

export default function WebsitePage() {
    const data = {
        image: "/services/services1.png",
        title: "Architectural Plan",
        description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    };
    const teamcarddata= {
        image:'/ourstaff/team4.png',
        name:'Kusama Shetty',
        designation:'Team Lead'
      }
      const servicecarddata = {
          alt:'service1',
          src:'/services/services1.png',
          title:'Architectural Plan'
      }
      const postdata={
        image:'/blog/post1.png',
        title:'Various government initiatives, such as Make in India, Housing for All, and Atmanirbhar Bharat',
        read:'5 mins read',
      }
    return (
        <div className="flex justify-center items-center flex-col py-3">
            <ServiceCard service={servicecarddata}/>
            <ServiceComponent/>
            <ServiceCardLoading/>
          <OurServicesModal data={data}/>
          <OurStaffPageHero/>
          <div className="flex justify-evenly w-full">
          <OurTeamCard data={teamcarddata}/>
          <OurTeamCardError onReload={() => console.log('reloading')}/>
          <OurTeamCardLoading/>
          </div>
          <OurStaffComponent/>
          <BlogPageHero/>
          <BlogDetailComponent/>
          <div className="flex gap-4">
          <RecentPostCardLoading/>
          <RecentPostCard data={postdata}/>
          </div>
          <RecentPostComponent/>
      </div>
    );
}
