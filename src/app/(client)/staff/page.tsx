"use client"

import OurStaffComponent from "@/components/OurStaff/our-staff-component";
import OurStaffPageHero from "@/components/OurStaff/our-staff-hero";
import Animate from "@/components/ReUseComponents/Animate";

export default function StaffPage() {
  return (
    <>
      <OurStaffPageHero />
      <Animate className="w-full flex justify-center items-center relative z-10" style={{ top: '-100px' }}><OurStaffComponent /></Animate>
    </>
  );
}
