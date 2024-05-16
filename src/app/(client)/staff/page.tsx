"use client"

import OurStaffComponent from "@/components/OurStaff/our-staff-component";
import OurStaffPageHero from "@/components/OurStaff/our-staff-hero";

export default function StaffPage() {
    return (
        <>
        <OurStaffPageHero/>
        <div className="w-full flex justify-center items-center relative z-10" style={{top:'-100px'}}><OurStaffComponent/></div>
      </>
    );
}
