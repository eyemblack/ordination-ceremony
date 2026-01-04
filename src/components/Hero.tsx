"use client";
import Image from "next/image";
import { EVENT_DETAILS } from "@/data/event";

export const Hero = () => {
  const scrollToSchedule = () => {
    const el = document.getElementById('schedule');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-[960px] p-0 md:p-8">
      <div className="relative flex flex-col items-center justify-center min-h-[500px] w-full overflow-hidden rounded-none md:rounded-xl shadow-lg group">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={EVENT_DETAILS.images.heroBackground}
            alt="Temple Background"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/40 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center p-6 gap-6 max-w-2xl">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-full mb-2 animate-fade-in-up">
            <span className="material-symbols-outlined text-white text-4xl">temple_buddhist</span>
          </div>

          <div className="flex flex-col gap-2 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <h2 className="text-[#ffdbaba8] font-medium tracking-widest uppercase text-sm font-thai">
              {EVENT_DETAILS.invitationText}
            </h2>
            <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-md font-thai">
              {EVENT_DETAILS.eventTitle}
            </h1>
          </div>

          <div
            className="w-24 h-[2px] bg-primary my-2 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          />

          <div className="flex flex-col gap-1 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
            <h2 className="text-white text-2xl md:text-3xl font-bold font-thai">
              {EVENT_DETAILS.hostName}
            </h2>
            <p className="text-white/90 text-lg font-medium mt-2 font-thai">
              {EVENT_DETAILS.date}
            </p>
          </div>

          <button
            onClick={scrollToSchedule}
            className="mt-4 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-[#211911] text-base font-bold px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 animate-fade-in-up cursor-pointer"
            style={{ animationDelay: '600ms' }}
          >
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="font-thai">อ่านกำหนดการ</span>
          </button>
        </div>
      </div>
    </div>
  );
};