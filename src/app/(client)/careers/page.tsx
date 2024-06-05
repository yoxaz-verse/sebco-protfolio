"use client"

import JobOpeningComponent from "@/components/Careers/job-opening-component";
import WhyUsCardsComponents from "@/components/Careers/why-us-cards-component";
import WhyUsHero from "@/components/Careers/why-us-hero";
<<<<<<< HEAD
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function CarrersPage() {

  return (
    <div className={`flex ${inter.className} justify-center items-center`}>
      <div className="flex flex-col w-full p-10">
        <WhyUsHero />
        <div className="relative justify-center items-center flex" style={{ top: '-100px' }}>
          <WhyUsCardsComponents />
          <div className="w-80 absolute -bottom-10 h-80 bg-[#FFBE13]/20  blur-2xl"></div>
        </div>
        <JobOpeningComponent />
      </div>
    </div>
  );
=======

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
>>>>>>> acee15449e4cda3b1f3d634855af49860bcb804e
}
