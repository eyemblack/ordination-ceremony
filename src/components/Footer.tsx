'use client'

import React, { useState } from 'react';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { EVENT_DETAILS } from "@/data/event";
import { generateGoogleCalendarUrl, downloadICSFile } from '@/utils/calendar';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Hardcoded date handling for 2026-01-17
  // Ceremony starts at 08:00
  const eventData = {
    title: EVENT_DETAILS.eventTitle,
    description: `${EVENT_DETAILS.invitationText} ${EVENT_DETAILS.hostName}`,
    location: EVENT_DETAILS.locationName,
    startDate: '20260117T080000', // YYYYMMDDTHHmmss
    endDate: '20260117T140000',   // YYYYMMDDTHHmmss
  };

  const handleGoogleCalendar = () => {
    const url = generateGoogleCalendarUrl(eventData);
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const handleICSCalendar = () => {
    downloadICSFile(eventData);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-4">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#d6d1cb] bg-white hover:bg-gray-50 text-[#181511] font-medium transition-colors w-full md:w-auto justify-center shadow-sm"
          >
            <EventAvailableIcon className="material-symbols-outlined text-gray-600" />
            <span className="font-thai">บันทึกลงปฏิทิน</span>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="font-thai text-center text-xl">เลือกปฏิทิน</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-3 py-4">
            <button
              onClick={handleGoogleCalendar}
              className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <GoogleIcon className="text-red-500" />
              <div className="flex flex-col">
                <span className="font-medium">Google Calendar</span>
                <span className="text-xs text-gray-500">เปิดในเว็บไซต์หรือแอป Google Calendar</span>
              </div>
            </button>
            <button
              onClick={handleICSCalendar}
              className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <AppleIcon className="text-black" />
              <div className="flex flex-col">
                <span className="font-medium">Calendar (iOS / Outlook)</span>
                <span className="text-xs text-gray-500">ดาวน์โหลดไฟล์ .ics สำหรับ Apple Calendar หรือ Outlook</span>
              </div>
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="text-center pt-8 border-t border-[#e5e1dc] w-full">
        <LocalFloristIcon className="material-symbols-outlined text-primary mb-2 text-3xl" />
        <p className="text-lg font-medium text-[#181511] font-thai">ขออนุโมทนาบุญกับทุกท่าน</p>
        <p className="text-sm text-gray-400 mt-2 font-thai">© 2569 งานอุปสมบท {EVENT_DETAILS.hostName}</p>
      </div>
    </div>
  );
};