/* eslint-disable @next/next/no-img-element */

import HomeHighlight from "@/components/home/highlight";
import HomeIntro from "@/components/home/intro";
import HomeMainService from "@/components/home/mainService";
import OnboardingSection from "@/components/onboardSection";
import TypewriterEffect from "@/components/typeWriterEffect";
import { cards, services } from "@/data/services";
import { AdjustmentsHorizontalIcon, ArrowTopRightOnSquareIcon, ChevronRightIcon, Cog8ToothIcon, FolderOpenIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";



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
