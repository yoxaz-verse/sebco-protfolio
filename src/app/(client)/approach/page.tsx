"use client"

import OurApproachComponent from "@/components/OurApproach/our-approach-component";
import OurApproachHero from "@/components/ProjectHero/our-approach-hero";
import QuoteComponent from "@/components/QuoteComponent.tsx/quote-component";
<<<<<<< HEAD
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] });

export default function ApproachPage() {

  return (
    <div className={`${inter.className} flex justify-center items-center`}>
      <div className="w-full p-5 flex-col gap-[3vh] items-center justify-center flex">
        <OurApproachComponent />
        <div className="w-full">
          <QuoteComponent text={'Our commitment to clear communication, collaboration, and meticulous execution ensures a smooth and successful project from start to finish.  We believe this structured approach fosters trust and builds lasting relationships with our clients.'} /></div>
      </div>
    </div>
  );
=======

export default function ApproachPage() {
  
    return (
        <div className="flex justify-center items-center">
        <div className="w-[80%] flex-col items-center justify-center flex">
        <OurApproachComponent/>
        <div className="w-[80%] my-20"><QuoteComponent text={'Our commitment to clear communication, collaboration, and meticulous execution ensures a smooth and successful project from start to finish.  We believe this structured approach fosters trust and builds lasting relationships with our clients.'}/></div>
        </div>
      </div>
    );
>>>>>>> acee15449e4cda3b1f3d634855af49860bcb804e
}
