"use client"

import OurApproachComponent from "@/components/OurApproach/our-approach-component";
import OurApproachHero from "@/components/ProjectHero/our-approach-hero";
import QuoteComponent from "@/components/QuoteComponent.tsx/quote-component";
import Animate from "@/components/ReUseComponents/Animate";

export default function ApproachPage() {

  return (
    <div className="flex justify-center items-center">
      <Animate className="w-[80%] flex-col items-center justify-center flex">
        <OurApproachComponent />
        <div className="w-[80%] my-20"><QuoteComponent text={'Our commitment to clear communication, collaboration, and meticulous execution ensures a smooth and successful project from start to finish.  We believe this structured approach fosters trust and builds lasting relationships with our clients.'} /></div>
      </Animate>
    </div>
  );
}
