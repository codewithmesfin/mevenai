/* eslint-disable @next/next/no-img-element */

import HomeHighlight from "@/components/home/highlight";
import HomeIntro from "@/components/home/intro";
import HomeMainService from "@/components/home/mainService";
import OnboardingSection from "@/components/onboardSection";



export default function Home() {
  return (
    <div>
      <HomeIntro />


      <HomeHighlight />

      <HomeMainService />

      <section>
        <div className="h-1 w-[70px] bg-gray-700 mx-auto rounded-xl" />
        <OnboardingSection />
      </section>


    </div>
  );
}
