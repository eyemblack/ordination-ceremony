"use client";

import SpaIcon from '@mui/icons-material/Spa';
import EditIcon from '@mui/icons-material/Edit';

export const Navbar = () => {

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background-light/90 dark:bg-background-dark/90 border-b border-gray-200/50 dark:border-gray-800/50 bg-white shadow-sm transition-all duration-300 min-w-dvw">
      <div className="max-w-4xl mx-auto px-4 h-12 md:h-16 flex items-center justify-between">
        <a href="#hero-section" className="flex items-center gap-2 md:gap-3 group" onClick={(e) => {
          e.preventDefault();

          const element = document.getElementById('hero-section');
          if (!element) return;

          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }}>
          <SpaIcon className="text-primary text-2xl group-hover:scale-110 transition-transform duration-300" />
          <span className="font-display font-semibold text-[16px] md:text-lg text-text-main-light dark:text-text-main-dark tracking-tight font-thai">
            งานอุปสมบท
          </span>
        </a>
        <a
          href="#rsvp-section"
          onClick={(e) => {
            e.preventDefault();

            const element = document.getElementById('rsvp-section');
            if (!element) return;

            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }}
          className="bg-primary hover:bg-primary-dark text-white px-2 md:px-5 py-2 rounded-full font-medium text-[12px] md:text-[16px] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
        >
          <EditIcon className="text-[12px]! md:text-[24px]!" />
          <span className="font-thai">ลงชื่อร่วมงาน</span>
        </a>
      </div>
    </nav>
  );
};