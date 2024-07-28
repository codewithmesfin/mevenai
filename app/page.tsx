/* eslint-disable @next/next/no-img-element */

import HomeHelps from "@/components/home/Helps";
import HomeHighlight from "@/components/home/highlight";
import HomeIntro from "@/components/home/intro";
import HomeMainService from "@/components/home/mainService";
import HomeProcess from "@/components/home/Process";
import HomeWitness from "@/components/home/Witness";
import OnboardingSection from "@/components/onboardSection";



export default function Home() {
  return (
    <div>
      <HomeIntro />

      <HomeHighlight />

      <HomeHelps />

      <HomeMainService />

      <HomeWitness />

      <HomeProcess />

      <section className="py-24">
        {/* <div className="h-1 w-[70px] bg-gray-700 mx-auto rounded-xl" /> */}
        <OnboardingSection />
      </section>


    </div>
  );
}
