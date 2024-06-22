import { getData } from "@/backend/Services/firestore";
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
import { aboutUsHomepage, whatWeDo } from "@/data/content-data";
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default async function HomePage() {
  const completedProjectdata = await getData(`/Completed Project`)
  console.log(completedProjectdata);
  return (
    <>
      <HomePageHero />
      <div className="flex items-center justify-center w-full pt-4 flex-col">
        <div className="w-10/12 flex flex-col py-4">
          <HomepageAbout data={aboutUsHomepage} />
          <HomepageOurWork data={whatWeDo} />
          <OurCompletedProjects />
          <OurServicesComponent />
          <ClientSaysComponent />
          <MapComponent />
          <SebcoCareers />
        </div>
        <div className="w-full">
          <OurApproachComponentHome />
        </div>
        <div className="w-10/12 flex flex-col py-4">
          <OurTechnicalStaffComponent />
          <LatestComponent />
          <VisitOurYoutube />
        </div>
      </div>
    </>
  );
}
