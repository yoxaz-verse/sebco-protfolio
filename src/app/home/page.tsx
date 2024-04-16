"use client"

import HomepageAbout from "@/components/Home/homepage-about";
import HomePageHero from "@/components/Home/homepage-hero";
import HomepageOurWork from "@/components/Home/homepage-ourwork";
import OurCompletedProjects from "@/components/Home/our-completed-projects";
import OurServicesComponent from "@/components/Home/our-services-component";
import ClientSaysComponent from "@/components/Home/what-our-clientsay-component";
import { aboutUsHomepage, whatWeDo } from "@/data/content-data";

export default function HomePage() {
  
    return (
        <>
       <HomePageHero/>
       <div className="flex items-center justify-center w-full pt-4">
       <div className='w-10/12 flex flex-col py-4'>
       <HomepageAbout data={aboutUsHomepage}/>
            <HomepageOurWork data={whatWeDo}/>
            <OurCompletedProjects/>
            <OurServicesComponent/>
            <ClientSaysComponent/>
        </div>
        </div>
      </>
    );
}
