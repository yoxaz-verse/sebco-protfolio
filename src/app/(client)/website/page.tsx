"use client"

import ApplyJobModal from "@/components/ApplyJobModal/apply-job-modal";
import BlogDetailComponent from "@/components/Blog/blog-detail-component";
import BlogPageHero from "@/components/Blog/blog-hero";
import CommentComponent from "@/components/Blog/comment-component";
import RecentPostCard from "@/components/Blog/recent-post-card";
import RecentPostCardLoading from "@/components/Blog/recent-post-card-loading";
import RecentPostComponent from "@/components/Blog/recent-post-component";
import JobOpeningCard from "@/components/Careers/job-opening-card-component";
import JobOpeningComponent from "@/components/Careers/job-opening-component";
import JobOpeningCardError from "@/components/Careers/job-opening-error";
import JobOpeningCardLoading from "@/components/Careers/job-opening-loading";
import WhyUsCardsComponents from "@/components/Careers/why-us-cards-component";
import WhyUsHero from "@/components/Careers/why-us-hero";
import CommonCarousel from "@/components/Carousel/common-carousel";
import ConnectWithMeModal from "@/components/ConnectWithMeModal/connect-with-me";
import CareersCardHome from "@/components/Home/careers-card";
import ClientSaysCard from "@/components/Home/client-say-card";
import ClientSayCardError from "@/components/Home/client-say-card-error";
import ClientSayCardLoading from "@/components/Home/client-say-card-loading";
import HomepageAbout from "@/components/Home/homepage-about";
import HomePageHero from "@/components/Home/homepage-hero";
import HomepageOurWork from "@/components/Home/homepage-ourwork";
import LatestComponent from "@/components/Home/latest-component";
import MapComponent from "@/components/Home/map-component";
import OurApproachComponentHome from "@/components/Home/our-approach-component";
import OurCompletedProjects from "@/components/Home/our-completed-projects";
import OurServicesComponent from "@/components/Home/our-services-component";
import OurTechnicalStaffComponent from "@/components/Home/our-technical-staff";
import SebcoCareers from "@/components/Home/sebco-careers";
import VisitOurYoutube from "@/components/Home/visit-our-youtube";
import ClientSaysComponent from "@/components/Home/what-our-clientsay-component";
import OurApproachCard from "@/components/OurApproach/our-approach-card";
import OurApproachComponent from "@/components/OurApproach/our-approach-component";
import OurApproachCardError from "@/components/OurApproach/our-approach-error";
import OurApproachCardLoading from "@/components/OurApproach/our-approach-loading";
import OurServicesModal from "@/components/OurServicesModal/our-services-modal";
import OurStaffComponent from "@/components/OurStaff/our-staff-component";
import OurStaffPageHero from "@/components/OurStaff/our-staff-hero";
import OurTeamCard from "@/components/OurStaff/team-card";
import OurTeamCardError from "@/components/OurStaff/team-card-error";
import OurTeamCardLoading from "@/components/OurStaff/team-card-loading";
import OurApproachDetailCard from "@/components/Project/our-approach-detailcard";
import ProjectDetail from "@/components/ProjectDetail/project-detail";
import OurApproachHero from "@/components/ProjectHero/our-approach-hero";
import QuoteComponent from "@/components/QuoteComponent.tsx/quote-component";
import QuoteComponentError from "@/components/QuoteComponent.tsx/quote-component-error";
import QuoteCardLoading from "@/components/QuoteComponent.tsx/quote-component-loading";
import ServiceCardLoading from "@/components/Services/service-card-loading";
import ServiceComponent from "@/components/Services/service-component";
import ServiceCard from "@/components/Services/services-card";
import RequirementsForm from "@/components/YourRequirements/your-requirements-form";
import { aboutUsHomepage, clientSays, ourApproachCarouselData, projects, sebcoCareers, whatWeDo } from "@/data/content-data";
import { useState } from "react";

export default function WebsitePage() {
  const data = {
    image: "/services/services1.png",
    title: "Architectural Plan",
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
  };
  const teamcarddata = {
    image: '/ourstaff/team4.png',
    name: 'Kusama Shetty',
    designation: 'Team Lead'
  }
  const servicecarddata = {
    alt: 'service1',
    src: '/services/services1.png',
    title: 'Architectural Plan',
    content: ""
  }
  const postdata = {
    image: '/blog/post1.png',
    title: 'Various government initiatives, such as Make in India, Housing for All, and Atmanirbhar Bharat',
    read: '5 mins read',
  }
  const approach = {
    img: '/ourapproaches/ourapproach1.png',
    title: 'Pre-Construction - Building the Foundation',
    index: '01'
  }
  const job = {
    id: "1234",
    image: '/careers/job2.png',
    alt: 'Job Opening 2',
    title: 'Position - Roofer',
    location: 'Bengaluru,Onsite, 3+ yr',
    position:"Frontend",
    description: 'Install, repair, and replace roofing systems on residential and commercial buildings.Inspect roofs ',
  }
  const connect = {
    name: 'Satish Kumar',
    designation: 'Manager',
    instagram: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    facebook: 'https://www.facebook.com/',
    email: 'test@user.com',
    phone: '+91 9876543210',
    img: '/ourstaff/team1.png'
  }
  return (
    <div className="flex justify-center items-center flex-col py-3">
      <OurApproachHero />
      <CommonCarousel CarouselData={ourApproachCarouselData} />
      <OurApproachDetailCard />
      <ProjectDetail data={projects[0]} />
      <ServiceCard service={servicecarddata} />
      <ServiceComponent />
      <ServiceCardLoading />

      <div className='py-3'>
        <OurServicesModal data={data} />
      </div>
      <OurStaffPageHero />
      <div className="flex justify-evenly w-full py-10">
        <OurTeamCard data={teamcarddata} />
        <OurTeamCardError onReload={() => console.log('reloading')} />
        <OurTeamCardLoading />
      </div>
      <OurStaffComponent />
      <div className="py-5"><BlogPageHero /></div>
      <BlogDetailComponent />
      <div className="flex gap-4">
        <RecentPostCardLoading />
        <RecentPostCard data={{ ...postdata, description: "This is dummy" }} />
      </div>
      <RecentPostComponent />
      <div className="py-3 w-full flex items-center justify-center"><CommentComponent /></div>
      <RequirementsForm />
      <div className="flex justify-between items-center flex-col gap-10 w-8/12 pt-10">
        <QuoteComponent text={'Want to get started? Contact us today for a free consultation!'} />
        <QuoteComponentError onReload={() => console.log('reloading')} />
        <QuoteCardLoading />
        <QuoteComponent text={'Our commitment to clear communication, collaboration, and meticulous execution ensures a smooth and successful project from start to finish.  We believe this structured approach fosters trust and builds lasting relationships with our clients.'} />
      </div>
      <div className="flex items-center justify-center py-10 flex-col">
        <OurApproachComponent />
        <div className="flex flex-wrap gap-10 py-5 mt-40 flex-col">
          <div className="w-49%"><OurApproachCard approach={approach} /></div>
          <div className="w-49%"><OurApproachCardLoading /></div>
          <div className="w-49%"><OurApproachCardError onReload={() => console.log('reloading')} /></div>
        </div>
        <div className="w-10/12"><WhyUsHero /></div>
        <div className="w-10/12 py-10"><WhyUsCardsComponents /></div>
        <div className="w-10/12 py-10"><JobOpeningComponent /></div>
        <div className="w-10/12 py-10"><JobOpeningCard job={job} /></div>
        <div className="w-10/12 py-10"><JobOpeningCardLoading /></div>
        <div className="w-10/12 py-10"><JobOpeningCardError onReload={() => console.log('reloading')} /></div>
        <div className="flex wrap gap-3 flex-row w-1/2 items-center justify-center py-3"><ApplyJobModal />
          <ConnectWithMeModal data={connect} />
        </div>
        <HomePageHero />
        <div className="w-10/12 py-10"><HomepageAbout data={aboutUsHomepage} /></div>
        <div className="w-10/12 py-10"><HomepageOurWork data={whatWeDo} /></div>
        <div className="w-10/12 py-10"><OurCompletedProjects /></div>
        <div className="w-10/12 py-10"><OurServicesComponent /></div>
        <div className="w-10/12 py-10"><ClientSaysComponent /></div>
        <div className="flex w-9/12 gap-10 flex-col lg:flex-row mb-20">
          <ClientSayCardError onReload={() => console.log('reload')} />
          <ClientSaysCard client={clientSays[0]} />
          <ClientSayCardLoading />
        </div>
        <div className="w-10/12 py-10"><MapComponent /></div>
        <div className="w-10/12 py-10"><SebcoCareers /></div>
        <div className="w-10/12 py-10"><CareersCardHome career={sebcoCareers[0]} /></div>
        <div className="w-10/12 py-10"><OurApproachComponentHome /></div>
        <div className="w-10/12 py-10"><OurTechnicalStaffComponent /></div>
        <div className="w-10/12 py-10"><LatestComponent /></div>
        <div className="w-10/12 py-10"><VisitOurYoutube /></div>
      </div>
    </div>
  );
}
