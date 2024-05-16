"use client"

import JobOpeningComponent from "@/components/Careers/job-opening-component";
import WhyUsCardsComponents from "@/components/Careers/why-us-cards-component";
import WhyUsHero from "@/components/Careers/why-us-hero";

export default function CarrersPage() {
  
    return (
        <div className="flex justify-center items-center">
        <div className="flex flex-col w-[80%] pt-10">
        <WhyUsHero/>
        <div className="relative justify-center items-center flex" style={{top:'-100px'}}><WhyUsCardsComponents/></div>
        <JobOpeningComponent/>
        </div>
        </div>
    );
}
