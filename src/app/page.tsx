import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Quote } from "@/components/Quote";
import { RsvpMeritSection } from "@/components/RsvpMeritSection";
import { Schedule } from "@/components/Schedule";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden font-sans bg-thai-pattern ">
      <main className="layout-container flex flex-col items-center w-full grow">
        <Hero />

        <div className="flex flex-col w-full max-w-[700px] px-4 md:px-0 pb-16">
          <Quote />
          <Schedule />
          <Location />
          <RsvpMeritSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}
