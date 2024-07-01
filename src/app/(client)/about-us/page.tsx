"use client"
import { Inter } from 'next/font/google'
import HomepageOurWork from "@/components/Home/homepage-ourwork";
import HomepageAbout from "@/components/Home/homepage-about";
import { aboutUsHomepage } from "@/data/content-data";
import { whatWeDo } from "@/data/content-data";


export default function AboutUsPage() {
  return (
    <div className='p-[2rem]'>
      <HomepageAbout data={aboutUsHomepage} />
      <HomepageOurWork data={whatWeDo} />
    </div>
  )
}
