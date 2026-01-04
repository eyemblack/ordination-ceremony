'use client'

import { EVENT_DETAILS } from "@/data/event";

export const Footer = () => {
  const addToCalendar = () => {
    alert("Event saved to calendar!");
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-4">
      <button
        onClick={addToCalendar}
        className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#d6d1cb] bg-white hover:bg-gray-50 text-[#181511] font-medium transition-colors w-full md:w-auto justify-center shadow-sm"
      >
        <span className="material-symbols-outlined text-gray-600">event_available</span>
        <span className="font-thai">บันทึกลงปฏิทิน</span>
      </button>

      <div className="text-center pt-8 border-t border-[#e5e1dc] w-full">
        <span className="material-symbols-outlined text-primary mb-2 text-3xl">local_florist</span>
        <p className="text-lg font-medium text-[#181511] font-thai">ขออนุโมทนาบุญกับทุกท่าน</p>
        <p className="text-sm text-gray-400 mt-2 font-thai">© 2569 งานอุปสมบท {EVENT_DETAILS.hostName}</p>
      </div>
    </div>
  );
};